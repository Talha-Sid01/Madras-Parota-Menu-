import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madras Parota | Authentic South Indian Restaurant in Malad West, Mumbai",
  description: "Experience the real taste of South Indian street food: hand-layered parotas, eggs rolls, kothu parota, biryani, dosas, and slow-cooked Chettinad gravies in Malad West, Mumbai. Pure Veg & Non-Veg options.",
  keywords: "Madras Parota, South Indian food Malad, Madras Parotta Mumbai, Chennai street food Malad West, Parotta rolls Malad, best South Indian restaurant Malad West, Veg and Non Veg South Indian, Dosa and Biryani Malad, Kothu Parotta Mumbai",
  metadataBase: new URL("https://madras-parota.vercel.app"), // Fallback base URL for Vercel
  openGraph: {
    title: "Madras Parota | Authentic South Indian Restaurant in Malad West, Mumbai",
    description: "Enjoy hand-layered flaky parotas, chicken rolls, and authentic slow-cooked Chettinad gravies. Dine-in and takeaway at Malad Link Road.",
    url: "https://madras-parota.vercel.app",
    siteName: "Madras Parota",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 675,
        alt: "Madras Parota Restaurant Banner showing South Indian Dishes and Mascot",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Local Business (Restaurant)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Madras Parota",
    "image": "https://madras-parota.vercel.app/images/hero-banner.png",
    "@id": "https://madras-parota.vercel.app/#restaurant",
    "url": "https://madras-parota.vercel.app",
    "telephone": "+917045714545",
    "priceRange": "₹",
    "menu": "https://madras-parota.vercel.app/#menu",
    "servesCuisine": "South Indian, Tamil, Chettinad",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Link Rd, opp Evershine Mall, Malad, Chincholi Bunder, Malad West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400064",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.180231, // Standard coordinate range for Chincholi Bunder Malad Link Rd
      "longitude": 72.836942
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://wa.me/917045714545"
    ]
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-brand-charcoal selection:bg-brand-gold/30">
        {children}
      </body>
    </html>
  );
}
