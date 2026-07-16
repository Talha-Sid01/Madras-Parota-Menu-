import { spawn } from "child_process";
import puppeteer from "puppeteer";

const PORT = 3001;
const TARGET_URL = `http://localhost:${PORT}/print-menu`;
const OUTPUT_FILE = "madras-parota-menu.pdf";

async function main() {
  console.log("Starting Next.js dev server...");
  
  const server = spawn("npx", ["next", "dev", "-p", PORT.toString()], {
    cwd: process.cwd(),
    shell: true,
    stdio: "inherit",
  });

  // Track if we successfully generated the PDF to determine exit code
  let success = false;

  // Cleanup handler to terminate Next.js process tree
  const cleanUp = () => {
    console.log("Stopping Next.js server...");
    if (process.platform === "win32") {
      // On Windows, use taskkill /t /f to kill the process tree (including shell children)
      spawn("taskkill", ["/pid", server.pid.toString(), "/f", "/t"]);
    } else {
      server.kill("SIGTERM");
    }
  };

  // Ensure cleanup on sudden scripts exits/crashes
  process.on("exit", cleanUp);
  process.on("SIGINT", () => {
    cleanUp();
    process.exit(1);
  });

  try {
    // Wait for the local server to be ready by checking the endpoint
    console.log(`Waiting for server to become ready at ${TARGET_URL}...`);
    let ready = false;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(TARGET_URL);
        if (res.ok) {
          ready = true;
          break;
        }
      } catch (e) {
        // Dev server not ready yet
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (!ready) {
      throw new Error("Next.js dev server failed to start within 30 seconds.");
    }

    console.log("Next.js dev server is ready! Launching Puppeteer...");
    
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    
    console.log(`Navigating to ${TARGET_URL}...`);
    // Wait until network is idle so that images and styles compile and load completely
    await page.goto(TARGET_URL, { waitUntil: "networkidle0" });
    
    // Give Next.js an extra 2.5 seconds to do final page rendering/fonts compilation
    console.log("Waiting for final font rendering...");
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Perform DOM validations before exporting the PDF
    console.log("Running anti-drop safeguards (validating item and category counts)...");
    const counts = await page.evaluate(() => {
      const items = document.querySelectorAll(".menu-item").length;
      const categories = document.querySelectorAll(".category-block").length;
      return { items, categories };
    });

    console.log(`Validation result: Found ${counts.items}/108 items, ${counts.categories}/14 categories.`);

    if (counts.items !== 108) {
      throw new Error(`CRITICAL FAIL: Expected exactly 108 menu items, but found ${counts.items}! Aborting PDF export to prevent incomplete files.`);
    }
    if (counts.categories !== 14) {
      throw new Error(`CRITICAL FAIL: Expected exactly 14 category headers, but found ${counts.categories}! Aborting PDF export to prevent incomplete files.`);
    }

    console.log(`Generating PDF menu: ${OUTPUT_FILE}...`);
    await page.pdf({
      path: OUTPUT_FILE,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
    });

    console.log("PDF generated successfully!");
    await browser.close();
    success = true;
  } catch (error) {
    console.error("Error during PDF generation:", error);
  } finally {
    cleanUp();
    // Give process a split second to flush logs before exiting
    setTimeout(() => {
      process.exit(success ? 0 : 1);
    }, 500);
  }
}

main();
