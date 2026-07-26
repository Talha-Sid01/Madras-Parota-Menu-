"use client";

import React from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  type: "Veg" | "Non-Veg";
  price?: number;
  prices?: (number | null)[];
  description?: string;
}

interface Category {
  id: number | string;
  title: string;
  subtitle?: string;
  caption?: string; // right-aligned headers
  items: MenuItem[];
}

const page1Categories: Category[] = [
  {
    id: 1,
    title: "1. Madras Parota Rolls",
    items: [
      { name: "Chicken Parota Roll", type: "Non-Veg", price: 160, description: "(Boneless Chicken, Sauses, Mayo, Veggies)" },
      { name: "Egg Parota Roll", type: "Non-Veg", price: 120, description: "(Boiled & Fried Egg, Sauses, Mayo, Veggies)" },
      { name: "Madras Special Non-Veg Parota Roll", type: "Non-Veg", price: 200 },
      { name: "Chicken Noodles Parota Roll", type: "Non-Veg", price: 180 },
      { name: "Vegetable Parota Roll", type: "Veg", price: 120 },
      { name: "Paneer Masala Parota Roll", type: "Veg", price: 160 },
      { name: "Veg Noodles Parota Roll", type: "Veg", price: 180 },
      { name: "Madras Special Veg Parota Roll", type: "Veg", price: 200 },
    ],
  },
  {
    id: 7,
    title: "2. Parota with Gravy/Kurma (Non-Veg)",
    subtitle: "South Indian style special in-house chicken masala gravy with lacha parota.",
    caption: "Regular · Wheat · Bun · Nool",
    items: [
      { name: "Parota with Chicken Gravy (No Pieces)", type: "Non-Veg", prices: [70, 90, 90, 90] },
      { name: "Parota with Mutton Gravy (No Pieces)", type: "Non-Veg", prices: [90, 110, 110, 110] },
      { name: "Parota with Egg Gravy (No Pieces)", type: "Non-Veg", prices: [70, 90, 90, 90] },
      { name: "Parota with Chicken Gravy (2 Pcs Chicken)", type: "Non-Veg", prices: [120, 140, 140, 140] },
      { name: "Parota with Mutton Gravy (2 Pcs Mutton)", type: "Non-Veg", prices: [160, 180, 180, 180] },
      { name: "Parota with Egg Gravy (2 Pcs Egg)", type: "Non-Veg", prices: [110, 130, 130, 130] },
    ],
  },
  {
    id: 8,
    title: "3. Kothu Parota (Non-Veg)",
    caption: "Regular · Butter · Cheese",
    items: [
      {
        name: "Boneless Chicken Kothu Parota",
        type: "Non-Veg",
        prices: [180, 190, 210],
        description: "Pieces of parota shredded and tossed in veggies, chicken gravy, egg bhurji, boneless chicken etc.",
      },
      { name: "Madras Special Boneless Chicken Kothu Parota", type: "Non-Veg", prices: [200, 210, 230] },
      {
        name: "Egg Kothu Parota",
        type: "Non-Veg",
        prices: [150, 160, 180],
        description: "Pieces of parota shredded and tossed in veggies, egg gravy, eggs etc.",
      },
      {
        name: "Mutton Kothu Parota",
        type: "Non-Veg",
        prices: [240, 250, 280],
        description: "Pieces of parota shredded and tossed in veggies, mutton gravy, eggs, boneless mutton etc.",
      },
    ],
  },
  {
    id: 3,
    title: "4. Egg & Chicken Omelette",
    items: [
      { name: "Egg Kalakki", type: "Non-Veg", price: 50, description: "(Mixure of Egg Half fry , Chicken Gravy , Masala, Etc)" },
      { name: "Madras Special Chicken Kalakki", type: "Non-Veg", price: 70, description: "(Mixure of Egg Half fry , Chicken Gravy , Masala , Vegeis ,Etc)" },
      { name: "Chicken Omelette (Single Egg)", type: "Non-Veg", price: 80, description: "(Mixture of Single Egg, Chicken Gravy, Boneless Chicken, Other Masala, Etc)" },
      { name: "Chicken Omelette (Double Egg)", type: "Non-Veg", price: 120, description: "(Mixture of Double Egg, Chicken Gravy, Boneless Chicken, Other Masala, Etc)" },
      { name: "Omelette Single", type: "Non-Veg", price: 30, description: "(Single Egg Omelette)" },
      { name: "Omelette Double", type: "Non-Veg", price: 50, description: "(Double Egg Omelette)" },
      { name: "Half Fry", type: "Non-Veg", price: 30, description: "(Single Egg Half Fry)" },
    ],
  },
];

const page2Categories: Category[] = [
  {
    id: 5,
    title: "5. Starters & Gravy",
    items: [
      {
        name: "Chettinadu Chicken Sukka",
        type: "Non-Veg",
        price: 220,
        description: "5–6 pieces of chicken sautéed in tava with veggies, coriander, masala, pepper etc., mixed with chicken gravy & in-house masala until reduced to semi-gravy",
      },
      {
        name: "Boneless Chicken 65",
        type: "Non-Veg",
        price: 180,
        description: "8–10 pieces of boneless chicken marinated in South Indian special homemade masala, then fried in refined oil",
      },
      {
        name: "Chicken 65 with Bone",
        type: "Non-Veg",
        price: 170,
        description: "8–10 pieces of bone-in chicken marinated in South Indian special homemade masala, then fried in refined oil",
      },
      {
        name: "Egg Masala Fry",
        type: "Non-Veg",
        price: 190,
        description: "2 boiled eggs sautéed in tava with veggies, masala, pepper etc., cooked until reduced to semi-gravy",
      },
      {
        name: "Madras Special Egg Masala Fry",
        type: "Non-Veg",
        price: 220,
        description: "Same as above, cooked with an extra fried egg",
      },
      {
        name: "Chicken Chilli Parota",
        type: "Non-Veg",
        price: 240,
        description: "Pieces of parota & chicken marinated in Chinese sauces, veggies, vinegar etc.",
      },
      {
        name: "Garlic Chicken",
        type: "Non-Veg",
        price: 250,
        description: "8–10 boneless chicken pieces marinated with sauces & masala, sautéed with minced garlic, black pepper etc.",
      },
      {
        name: "Ginger Chicken",
        type: "Non-Veg",
        price: 250,
        description: "8–10 boneless chicken pieces marinated with sauces & masala, sautéed with minced ginger, garlic, onion etc.",
      },
      {
        name: "Pepper Mutton",
        type: "Non-Veg",
        price: 350,
        description: "4–5 pieces of mutton cooked in tava with sautéed veggies, masala, black pepper, special mutton masala",
      },
      {
        name: "Chettinadu Mutton Sukka",
        type: "Non-Veg",
        price: 350,
        description: "4–6 pieces of mutton sautéed with veggies, coriander, masala, pepper, mixed with mutton gravy & in-house masala until reduced to semi-gravy",
      },
      { name: "Chicken Leg Piece Masala Fry", type: "Non-Veg", price: 180 },
      { name: "Chicken Liver Oil Fry", type: "Non-Veg", price: 180 },
      { name: "Chicken Pota (Gizzard) Oil Fry", type: "Non-Veg", price: 180 },
      { name: "Chicken Liver Pota Oil Fry", type: "Non-Veg", price: 180 },
      { name: "Chicken Liver Pota Masala Fry", type: "Non-Veg", price: 240 },
    ],
  },
  {
    id: 2,
    title: "6. Omelette Parota (with Chicken Gravy)",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Double Omelette Parota", type: "Non-Veg", prices: [100, 110, 130] },
      {
        name: "Egg Veechu Parota (Sandwich Parota)",
        type: "Non-Veg",
        prices: [120, 130, 150],
        description: "(Veechu Parota featuring flaky,layered parottas tossed with spicy Egg Omelette and rich masala gravy then folded and layered to achieve a soft yet crispy texture)",
      },
      {
        name: "Chicken Veechu Parota (Sandwich Parota)",
        type: "Non-Veg",
        prices: [140, 150, 170],
        description: "(Veechu Parota featuring flaky, layered parotas tossed with spicy,juicy chicken pieces and rich masala gravy then folded and layered to achieve a soft yet crispy texture)",
      },
      { name: "Madras Special Veechu Parota (Sandwich Parota)", type: "Non-Veg", prices: [150, 160, 180] },
    ],
  },
  {
    id: 6,
    title: "7. Chef's Standalone Specials",
    items: [
      { name: "Kori Roti (3 Pcs) with Chicken Pieces & Gravy", type: "Non-Veg", price: 180 },
      { name: "Neer Dosa with Chicken Gravy & Coconut Chutney (3 Pcs)", type: "Non-Veg", price: 150 },
      {
        name: "Chicken Kizhi Parota (Banana Leaf Parota)",
        type: "Non-Veg",
        price: 299,
        description: "Three layers of parota soaked in a semi-thick chicken gravy, with boiled egg, omelette and boneless chicken layered in between, wrapped in a banana leaf and cooked.",
      },
    ],
  },
];

const page3Categories: Category[] = [
  {
    id: 4,
    title: "8. Biryani",
    items: [
      {
        name: "South Indian Chicken Dum Biryani",
        type: "Non-Veg",
        price: 200,
        description: "(Chicken Gravy, Boiled Egg, 4 Chicken Pcs, Raita) — Authentic taste of Tamil Nadu's signature biryani — a masterful blend of flavors, spicy broth, chicken pieces and veggies, layered with fluffy basmati rice and finished with fragrant spices & fresh herbs, topped with a boiled egg.",
      },
      {
        name: "South Indian Chicken Leg Piece Biryani",
        type: "Non-Veg",
        price: 250,
        description: "(Leg Piece, Chicken Gravy, Boiled Egg, 2 Chicken Pcs, Raita) — A masterful blend of flavours, spicy gravy, chicken and veggies, layered with fluffy basmati rice and finished with fragrant spices & fresh herbs, topped with a chicken leg piece and a boiled egg.",
      },
      {
        name: "Bucket Biryani — Serves 4–5",
        type: "Non-Veg",
        price: 900,
        description: "(2 Leg Piece Chickens, 5 Boiled Eggs, 10–15 Chicken Pcs, Chicken 65, Green Chutney, Chicken Gravy, ½ ltr Thums Up)",
      },
      {
        name: "South Indian Mutton Dum Biryani",
        type: "Non-Veg",
        price: 300,
        description: "(Mutton Gravy, Boiled Egg, Raita) — Authentic mutton biryani cooked with aromatic spices, fresh mint and other veggies, tender mutton and basmati rice, finished with a dum for rich flavour.",
      },
    ],
  },
  {
    id: 13,
    title: "9. Extras & Sides",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Parota", type: "Veg", prices: [25, 35, 45] },
      { name: "Wheat Parota", type: "Veg", prices: [35, 45, 55] },
      { name: "Bun Parota", type: "Veg", prices: [30, 40, 50] },
      { name: "Nool Parota (Noodles Parota)", type: "Veg", prices: [35, 45, 55] },
      { name: "Neer Dosa", type: "Veg", prices: [25, null, null] },
      { name: "Extra Butter", type: "Veg", prices: [20, null, null] },
      { name: "Extra Cheese", type: "Veg", prices: [30, null, null] },
      { name: "Extra Raitha", type: "Veg", prices: [30, null, null] },
    ],
  },
  {
    id: "11a",
    title: "10. Dosa — Non-Veg",
    subtitle: "Only Chicken Gravy & Coconut Chutney",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Sada Dosa", type: "Non-Veg", prices: [60, 80, 90] },
      {
        name: "Egg Dosa",
        type: "Non-Veg",
        prices: [100, 110, 130],
        description: "Crispy dosa wrapped around a rich, savoury egg packed with aromatic spices",
      },
      {
        name: "Chicken Boneless Curry Dosa",
        type: "Non-Veg",
        prices: [180, 190, 210],
        description: "Crispy golden-brown dosa wrapped with rich slow-cooked chicken masala, onion, garlic, ginger and warming spices",
      },
      {
        name: "Chicken Kothu Dosa",
        type: "Non-Veg",
        prices: [160, 170, 190],
        description: "Pieces of dosa shredded and tossed in veggies, chicken gravy, eggs, boneless chicken etc.",
      },
      { name: "Egg Kothu Dosa", type: "Non-Veg", prices: [130, 140, 160] },
      { name: "Chicken Noodles Dosa", type: "Non-Veg", prices: [160, 170, 190] },
      { name: "Chicken Schezwan Noodles Dosa", type: "Non-Veg", prices: [170, 180, 200] },
      { name: "Chicken Chilli Dosa", type: "Non-Veg", prices: [200, null, null] },
      {
        name: "Madras Special Omelette Dosa",
        type: "Non-Veg",
        prices: [120, 130, 150],
        description: "Crispy dosa wrapped around a rich, savoury omelette packed with aromatic spices",
      },
    ],
  },
  {
    id: 9,
    title: "11. Parota & Veg Gravy/Kurma",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Parotta with Veg Kurma (2 Pcs)", type: "Veg", prices: [70, null, null] },
      { name: "Vegetable Kothu Parota", type: "Veg", prices: [150, 160, 180] },
      { name: "Paneer Veg Kothu Parota", type: "Veg", prices: [180, 190, 210] },
      { name: "Veg Chilli Parota with Veg Kurma", type: "Veg", prices: [230, null, null] },
      { name: "Rice Roti with Veg Kurma (3 Pcs)", type: "Veg", prices: [150, null, null] },
      { name: "Neer Dosa with Veg Curry & Coconut Chutney (3 Pcs)", type: "Veg", prices: [100, null, null] },
    ],
  },
];

const page4Categories: Category[] = [
  {
    id: 10,
    title: "12. Idli & Vada",
    items: [
      { name: "Idli (3 Pcs)", type: "Veg", price: 50 },
      { name: "Vada (3 Pcs)", type: "Veg", price: 60 },
      { name: "Idli Vada (3 Pcs)", type: "Veg", price: 60 },
      { name: "Set Dosa (3 Pcs)", type: "Veg", price: 60 },
      { name: "Ghee Idli (2 Pcs)", type: "Veg", price: 90 },
      { name: "Butter Idli (2 Pcs)", type: "Veg", price: 90 },
      { name: "Fry Idli (8 Slices)", type: "Veg", price: 130 },
      { name: "Schezwan Idli (8 Slices)", type: "Veg", price: 130 },
    ],
  },
  {
    id: 12,
    title: "13. Uttappam",
    subtitle: "(Sambhar,Coconut Chutney,Green Chutney,sweet)",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Sada Uttappam", type: "Veg", prices: [80, 90, 110] },
      { name: "Onion Uttappam", type: "Veg", prices: [90, 100, 120] },
      { name: "Tomato Uttappam", type: "Veg", prices: [90, 100, 120] },
      { name: "Onion Tomato Uttappam", type: "Veg", prices: [100, 110, 130] },
      { name: "Cheese Uttappam", type: "Veg", prices: [120, 130, 150] },
      { name: "Masala Uttappam", type: "Veg", prices: [110, 120, 140] },
      { name: "Mysore Sada Uttappam", type: "Veg", prices: [110, 120, 140] },
      { name: "Mysore Masala Uttappam", type: "Veg", prices: [130, 140, 160] },
      { name: "Schezwan Sada Uttappam", type: "Veg", prices: [110, 120, 140] },
      { name: "Schezwan Masala Uttappam", type: "Veg", prices: [130, 140, 160] },
      { name: "Mayonnaise Uttappam", type: "Veg", prices: [110, 120, 140] },
      { name: "Mayonnaise Masala Uttappam", type: "Veg", prices: [130, 140, 160] },
      { name: "Madras Parota's Special Uttappam", type: "Veg", prices: [140, 150, 170] },
    ],
  },
  {
    id: "11b",
    title: "14. Dosa — Veg",
    subtitle: "with Sambhar, Coconut Chutney, Green Chutney, Sweet",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Sada Dosa", type: "Veg", prices: [60, 80, 90] },
      { name: "Onion Dosa", type: "Veg", prices: [80, 100, 110] },
      { name: "Masala Dosa", type: "Veg", prices: [80, 100, 110] },
      { name: "Mysore Sada Dosa", type: "Veg", prices: [90, 110, 120] },
      { name: "Mysore Masala Dosa", type: "Veg", prices: [110, 130, 140] },
      { name: "Schezwan Sada Dosa", type: "Veg", prices: [90, 110, 120] },
      { name: "Schezwan Masala Dosa", type: "Veg", prices: [120, 140, 150] },
      { name: "Podi Dosa", type: "Veg", prices: [70, 90, 100] },
      { name: "Podi Masala Dosa", type: "Veg", prices: [90, 110, 120] },
      { name: "Ghee Sada Dosa", type: "Veg", prices: [90, null, null] },
      { name: "Ghee Masala Dosa", type: "Veg", prices: [120, null, null] },
      { name: "Ghee Podi Dosa", type: "Veg", prices: [130, null, null] },
      { name: "Mayonnaise Sada Dosa", type: "Veg", prices: [110, null, null] },
      { name: "Jini Dosa", type: "Veg", prices: [170, null, null] },
      { name: "Chinese Dosa", type: "Veg", prices: [170, null, null] },
      { name: "Paneer Chilli Dosa", type: "Veg", prices: [190, null, null] },
      { name: "Madras Parota's Special Dosa", type: "Veg", prices: [180, null, null] },
    ],
  },
  {
    id: 14,
    title: "15. Beverages",
    caption: "All day",
    items: [
      { name: "Butter Milk", type: "Veg", price: 25 },
      {
        name: "Madras Special Filter Coffee",
        type: "Veg",
        price: 30,
        description: "A strong South Indian coffee made from a special rare ground coffee powder with chicory, mixed with sugar & milk, without water.",
      },
      { name: "Nes Coffee", type: "Veg", price: 30 },
      { name: "Narasus Coffee", type: "Veg", price: 30 },
      { name: "Black Coffee", type: "Veg", price: 20 },
    ],
  },
];

const BananaLeafBackground = ({ pageNum }: { pageNum: number }) => (
  <div className="leaf-bg">
    <Image
      src={pageNum === 1 ? "/images/menu_page1_bg.png" : `/images/menu_p${pageNum}_story_bg.png`}
      alt={`Page ${pageNum} Background`}
      fill
      priority
      unoptimized
      style={{ objectFit: "fill" }}
    />
  </div>
);

const CornerFlourishes = () => (
  <>
    {/* Stylized gopuram corner flourishes inside the borders */}
    <svg className="corner-flourish top-left" viewBox="0 0 30 30">
      <path d="M 3 3 L 27 3 M 3 3 L 3 27 M 8 8 L 20 8 M 8 8 L 8 20 M 12 12 L 12 15 M 12 12 L 15 12" fill="none" stroke="#daa520" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="#daa520" />
      <circle cx="5" cy="5" r="2" fill="#daa520" />
    </svg>
    <svg className="corner-flourish top-right" viewBox="0 0 30 30">
      <path d="M 3 3 L 27 3 M 3 3 L 3 27 M 8 8 L 20 8 M 8 8 L 8 20 M 12 12 L 12 15 M 12 12 L 15 12" fill="none" stroke="#daa520" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="#daa520" />
      <circle cx="5" cy="5" r="2" fill="#daa520" />
    </svg>
    <svg className="corner-flourish bottom-left" viewBox="0 0 30 30">
      <path d="M 3 3 L 27 3 M 3 3 L 3 27 M 8 8 L 20 8 M 8 8 L 8 20 M 12 12 L 12 15 M 12 12 L 15 12" fill="none" stroke="#daa520" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="#daa520" />
      <circle cx="5" cy="5" r="2" fill="#daa520" />
    </svg>
    <svg className="corner-flourish bottom-right" viewBox="0 0 30 30">
      <path d="M 3 3 L 27 3 M 3 3 L 3 27 M 8 8 L 20 8 M 8 8 L 8 20 M 12 12 L 12 15 M 12 12 L 15 12" fill="none" stroke="#daa520" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="#daa520" />
      <circle cx="5" cy="5" r="2" fill="#daa520" />
    </svg>
  </>
);

export default function PrintMenuPage() {
  const address = "New Link Rd, opp Evershine Mall, Malad, Chincholi Bunder, Malad West, Mumbai - 400064";
  const contactPhones = "+91 70457 94545 / +91 70457 14545";

  const renderItem = (item: MenuItem) => {
    let displayName = item.name;
    let displayDescription = item.description;

    // Extract any trailing parenthetical from the item name to put it on a new line
    const parentheticalMatch = item.name.match(/^(.*?)\s*(\(.*?\))$/);
    if (parentheticalMatch) {
      displayName = parentheticalMatch[1].trim();
      const parentheticalText = parentheticalMatch[2];
      displayDescription = displayDescription
        ? `${parentheticalText} — ${displayDescription}`
        : parentheticalText;
    }

    // Determine if the dish is a signature to display a gold spark icon
    const isSignature = displayName.toLowerCase().includes("special") || displayName.toLowerCase().includes("dum") || displayName.toLowerCase().includes("kizhi");

    return (
      <div key={item.name} className="menu-item menu-item-row">
        <div className="menu-item-left-col">
          <div className="menu-item-title-row">
            <span className={`veg-nonveg-mark ${item.type === "Veg" ? "veg" : "nonveg"}`}>
              <span className="dot"></span>
            </span>
            {isSignature && (
              <span className="signature-sparkle">✦ </span>
            )}
            <span className="menu-item-name">{displayName}</span>
            <span className="menu-item-dots"></span>
          </div>
          {displayDescription && (
            <div className="menu-item-description">{displayDescription}</div>
          )}
        </div>
        <div className="menu-item-prices">
          {item.price !== undefined ? (
            <span className="price-val">₹{item.price}</span>
          ) : (
            item.prices &&
            item.prices.map((p, idx) => (
              <span key={idx} className="price-val">
                {p !== null ? `₹${p}` : ""}
              </span>
            ))
          )}
        </div>
      </div>
    );
  };

  const renderCategory = (cat: Category, forceNextColumn?: boolean) => {
    return (
      <div key={cat.id} className={`category-block ${forceNextColumn ? "force-next-column" : ""}`}>
        <div className="category-header">
          <span className="category-title">{cat.title}</span>
          {cat.caption && (
            <div className="category-caption">
              {cat.caption.split("·").map((label, idx) => (
                <span key={idx} className="caption-col-header">
                  {label.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
        {cat.subtitle && (
          <div className="category-subtitle">{cat.subtitle}</div>
        )}
        <div className="category-items">
          {cat.items.map((item) => renderItem(item))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Reset & Page setup */
        @page {
          size: A4;
          margin: 0;
        }
        body {
          background-color: #f3f4f6;
          margin: 0;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        @media print {
          body {
            background-color: #ffffff;
            padding: 0;
            margin: 0;
          }
          .page-shadow {
            box-shadow: none !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
        }

        /* Screen controls */
        .no-print {
          background-color: #0c3c26;
          color: #faf8f5;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .no-print:hover {
          background-color: #115335;
        }

        /* Page Container with Leaf Background */
        .page-shadow {
          width: 210mm;
          height: 297mm;
          padding: 11.5mm 11.5mm; /* Enhanced padding inside border frame */
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: #03180c; /* Premium Leaf Green fallback */
        }

        .leaf-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* Mascot character overlays in margins (meticulously positioned so they never overlap content) */
        .mascot-character {
          position: absolute;
          pointer-events: none;
          z-index: 15;
          border-radius: 6px;
        }

        /* Luxury Double Gold Border inspired by South Indian Temple architecture */
        .border-frame-outer {
          position: absolute;
          top: 8mm;
          left: 8mm;
          right: 8mm;
          bottom: 8mm;
          border: 2px solid #daa520;
          border-radius: 6px;
          pointer-events: none;
          z-index: 5;
        }
        .border-frame-inner {
          position: absolute;
          top: 9.5mm;
          left: 9.5mm;
          right: 9.5mm;
          bottom: 9.5mm;
          border: 1px solid rgba(218, 165, 32, 0.45); /* Elegant gold inner rule */
          border-radius: 4px;
          pointer-events: none;
          z-index: 5;
        }

        /* Ornate corner flourishes */
        .corner-flourish {
          position: absolute;
          width: 16px;
          height: 16px;
          pointer-events: none;
          z-index: 12;
        }
        .top-left { top: 10.5mm; left: 10.5mm; }
        .top-right { top: 10.5mm; right: 10.5mm; transform: scaleX(-1); }
        .bottom-left { bottom: 10.5mm; left: 10.5mm; transform: scaleY(-1); }
        .bottom-right { bottom: 10.5mm; right: 10.5mm; transform: scale(-1); }

        /* Unified content container to layer above background */
        .page-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* Header elements on dark green */
        .header-p1 {
          height: 40mm;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }
        .header-logo-container {
          position: relative;
          width: 95mm;
          height: 28mm;
        }
        .header-tagline {
          font-family: var(--font-caveat), cursive;
          font-size: 15pt;
          color: #daa520;
          margin-top: 2px;
          margin-bottom: 2px;
          line-height: 1;
        }
        .header-contact-line {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8.5pt;
          font-weight: 500;
          color: #f5efd8; /* Warm ivory */
          margin-bottom: 2px;
          text-align: center;
        }
        .header-legend-legend {
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8.5pt;
          color: #f5efd8; /* Warm ivory */
        }
        
        .header-px {
          height: 12mm;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 2mm;
          position: relative;
        }
        .header-px-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 100%;
        }
        .header-px-title {
          font-family: var(--font-bricolage), sans-serif;
          font-size: 20pt;
          font-weight: 800;
          color: #ffffff; /* Crisp white title */
          letter-spacing: 0.1em;
        }
        .header-px-subtitle {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9pt;
          font-weight: bold;
          color: #daa520; /* Gold subtitle */
          text-transform: uppercase;
        }

        .gold-divider {
          width: 100%;
          border: none;
          height: 1.5px;
          background-color: #daa520;
          margin-top: 2px;
          margin-bottom: 2mm;
        }

        /* 2 Column Body */
        .menu-body {
          flex: 1;
          column-count: 2;
          column-gap: 7mm;
          column-rule: 1px solid rgba(218, 165, 32, 0.4); /* Gold column divider */
          column-fill: auto;
          overflow: hidden;
        }

        /* Category block - Premium Glassmorphic Cards */
        .category-block {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 6px;
          background: linear-gradient(135deg, rgba(6, 32, 18, 0.78) 0%, rgba(10, 48, 28, 0.68) 100%);
          border: 1px solid rgba(229, 192, 96, 0.25);
          border-radius: 7px;
          padding: 7px 9px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
        }
        .force-next-column {
          break-before: column;
          -webkit-column-break-before: always;
        }
        
        /* Premium Golden wood-brass hybrid category header with curved edges */
        .category-header {
          background: linear-gradient(to bottom, #edd69a 0%, #d4af37 40%, #aa7c11 100%);
          color: #041a0e; /* Darkest green text */
          font-family: var(--font-bricolage), sans-serif;
          font-size: 12pt;
          font-weight: 900; /* Bolder category header text */
          padding: 4px 7px;
          margin-bottom: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 5px;
          border: 1.5px solid #5c3e16; /* Wood-colored brass frame outline */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
        }

        .category-subtitle {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8.2pt;
          font-style: italic;
          color: #daa520;
          margin-top: -2px;
          margin-bottom: 5px;
          padding: 0 4px;
          line-height: 1.2;
        }
        
        /* Column Header alignment inside category bar */
        .category-caption {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        .caption-col-header {
          width: 40px;
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8pt;
          font-weight: bold;
          color: #041a0e; /* Darkest green text inside the gold box */
          display: inline-block;
          text-transform: none;
        }

        .category-items {
          display: flex;
          flex-direction: column;
          gap: 1.5px; /* Improved item spacing */
        }

        /* Menu item rows */
        .menu-item-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 1px;
        }
        .menu-item-left-col {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }
        .menu-item-title-row {
          display: flex;
          align-items: baseline;
          width: 100%;
        }
        
        /* Gold signature sparkle icon styling */
        .signature-sparkle {
          color: #e5c060;
          font-weight: bold;
          margin-right: 3px;
          font-size: 9pt;
          text-shadow: 0 0 2px rgba(218, 165, 32, 0.5);
          flex-shrink: 0;
        }

        /* Increased font weight for white-on-green legibility & modern hierarchy */
        .menu-item-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.2pt;
          font-weight: 800; /* Bolder item names */
          color: #f5efd8; /* Warm ivory for item names */
          letter-spacing: 0.01em;
          margin-left: 4px;
          flex-shrink: 1;
          min-width: 0;
        }
        .menu-item-dots {
          flex-grow: 1;
          border-bottom: 1.2px dotted #daa520; /* Gold dots */
          margin: 0 4px;
          min-width: 8px;
        }
        .menu-item-description {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 7.8pt;
          font-style: italic;
          font-weight: 400;
          color: rgba(245, 239, 216, 0.85); /* Slightly muted warm ivory for description */
          margin-left: 13px;
          line-height: 1.2;
          margin-top: 1.5px;
        }
        .menu-item-prices {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        /* Prices in gold for visual dominance */
        .price-val {
          width: 40px;
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.2pt;
          font-weight: 900; /* Bolder pricing text */
          color: #e5c060; /* Antique gold */
          display: inline-block;
          flex-shrink: 0;
        }

        /* Veg/Non-Veg indicators with white frame contrast fix */
        .veg-nonveg-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 8.5px;
          height: 8.5px;
          border: 1px solid #ffffff; /* White square outline for contrast */
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .veg-nonveg-mark.veg .dot {
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          background-color: #2ecc71; /* Brighter neon-green dot */
        }
        .veg-nonveg-mark.nonveg .dot {
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          background-color: #e74c3c; /* Bright red dot */
        }

        /* Footer elements on dark green background */
        .footer-container {
          height: 9mm;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-top: 1px solid rgba(218, 165, 32, 0.3); /* Gold hairline border */
          padding-top: 1mm;
          width: 100%;
        }
        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 7.8pt;
          color: #f5efd8; /* Warm ivory */
          font-weight: 600;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          flex-shrink: 0;
        }
        .footer-social-item {
          display: flex;
          align-items: flex-start;
          gap: 3px;
          white-space: nowrap;
        }
        .footer-disclaimer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 7pt;
          color: rgba(245, 239, 216, 0.7); /* Muted warm ivory */
          margin-top: 1px;
        }

        /* Mascot Container in Column 2 */
        .page-2-mascot-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 6mm;
          padding: 8px;
          background: transparent;
        }
        .page-4-mascot-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 4mm;
          padding: 6px;
          background: transparent;
        }
        .mascot-img-card {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(229, 192, 96, 0.25);
          overflow: hidden;
        }
      ` }} />

      {/* Screen action button */}
      <button 
        className="no-print" 
        onClick={() => window.print()}
        style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 1h6v4H5z"/>
        </svg>
        Print / Download PDF
      </button>

      {/* PAGE 1: NON-VEG SPECIALTIES, PART 1 */}
      <div className="page-shadow" id="page-1">
        <BananaLeafBackground pageNum={1} />
        <div className="border-frame-outer"></div>
        <div className="border-frame-inner"></div>
        <CornerFlourishes />

        <div className="page-content">
          {/* Page 1 Header */}
          <div className="header-p1">
            <div className="header-logo-container">
              <Image
                src="/images/logo.png"
                alt="Madras Parota Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="header-tagline">Authentic South Indian Food</div>
            <div className="header-contact-line">
              {address} | Ph: {contactPhones}
            </div>
            <div className="header-legend-legend">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="veg-nonveg-mark veg"><span className="dot"></span></span>
                <span>Pure Veg</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="veg-nonveg-mark nonveg"><span className="dot"></span></span>
                <span>Non-Veg</span>
              </div>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 1 Body */}
          <div className="menu-body">
            {page1Categories.map((cat) => renderCategory(cat, cat.id === 8))}
          </div>

          {/* Page 1 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span style={{ flexShrink: 1, paddingRight: '10px' }}>{address}</span>
              <div className="footer-socials">
                <div className="footer-social-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', alignItems: 'flex-start' }}>
                  <div>Ph: +91 70457 94545</div>
                  <div style={{ marginLeft: '22px' }}>+91 70457 14545</div>
                </div>
                <div className="footer-social-item">
                  WA: +91 70457 94545
                </div>
                <div className="footer-social-item">
                  IG: @madrasparota
                </div>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 1 of 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2: STARTERS & GRAVY (LEFT) + CHEF'S STANDALONE SPECIALS (RIGHT) */}
      <div className="page-shadow" id="page-2">
        <BananaLeafBackground pageNum={2} />
        <div className="border-frame-outer"></div>
        <div className="border-frame-inner"></div>
        <CornerFlourishes />

        <div className="page-content">
          {/* Page 2 Header */}
          <div className="header-px">
            <div className="header-px-row">
              <span className="header-px-title">MADRAS PAROTA</span>
              <span className="header-px-subtitle" style={{ marginRight: "32mm" }}>Menu · Page 2 of 4</span>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 2 Body: Section 5 on Left, Section 2 & 6 forced to Right Column */}
          <div className="menu-body">
            {page2Categories.map((cat) => renderCategory(cat, cat.id === 2))}
          </div>

          {/* Page 2 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span style={{ flexShrink: 1, paddingRight: '10px' }}>{address}</span>
              <div className="footer-socials">
                <div className="footer-social-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', alignItems: 'flex-start' }}>
                  <div>Ph: +91 70457 94545</div>
                  <div style={{ marginLeft: '22px' }}>+91 70457 14545</div>
                </div>
                <div className="footer-social-item">
                  WA: +91 70457 94545
                </div>
                <div className="footer-social-item">
                  IG: @madrasparota
                </div>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 2 of 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3: PAROTA & GRAVY + KOTHU + IDLI & VADA */}
      <div className="page-shadow" id="page-3">
        <BananaLeafBackground pageNum={3} />
        <div className="border-frame-outer"></div>
        <div className="border-frame-inner"></div>
        <CornerFlourishes />
        
        <div className="page-content">
          {/* Page 3 Header */}
          <div className="header-px">
            <div className="header-px-row">
              <span className="header-px-title">MADRAS PAROTA</span>
              <span className="header-px-subtitle">Menu · Page 3 of 4</span>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 3 Body */}
          <div className="menu-body">
            {page3Categories.map((cat) => renderCategory(cat, cat.id === "11a"))}
          </div>

          {/* Page 3 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span style={{ flexShrink: 1, paddingRight: '10px' }}>{address}</span>
              <div className="footer-socials">
                <div className="footer-social-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', alignItems: 'flex-start' }}>
                  <div>Ph: +91 70457 94545</div>
                  <div style={{ marginLeft: '22px' }}>+91 70457 14545</div>
                </div>
                <div className="footer-social-item">
                  WA: +91 70457 94545
                </div>
                <div className="footer-social-item">
                  IG: @madrasparota
                </div>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 3 of 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 4: DOSA + UTTAPPAM + EXTRAS + BEVERAGES */}
      <div className="page-shadow" id="page-4">
        <BananaLeafBackground pageNum={4} />
        <div className="border-frame-outer"></div>
        <div className="border-frame-inner"></div>
        <CornerFlourishes />
        
        <div className="page-content">
          {/* Page 4 Header */}
          <div className="header-px">
            <div className="header-px-row">
              <span className="header-px-title">MADRAS PAROTA</span>
              <span className="header-px-subtitle">Menu · Page 4 of 4</span>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 4 Body */}
          <div className="menu-body">
            {page4Categories.map((cat) => renderCategory(cat, cat.id === "11b"))}
          </div>

          {/* Page 4 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span style={{ flexShrink: 1, paddingRight: '10px' }}>{address}</span>
              <div className="footer-socials">
                <div className="footer-social-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', alignItems: 'flex-start' }}>
                  <div>Ph: +91 70457 94545</div>
                  <div style={{ marginLeft: '22px' }}>+91 70457 14545</div>
                </div>
                <div className="footer-social-item">
                  WA: +91 70457 94545
                </div>
                <div className="footer-social-item">
                  IG: @madrasparota
                </div>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 4 of 4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
