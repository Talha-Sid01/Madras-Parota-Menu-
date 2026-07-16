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
  id: number;
  title: string;
  caption?: string; // right-aligned headers
  items: MenuItem[];
}

const page1Categories: Category[] = [
  {
    id: 1,
    title: "1. Madras Parota Rolls",
    items: [
      { name: "Chicken Parota Roll", type: "Non-Veg", price: 160 },
      { name: "Egg Parota Roll", type: "Non-Veg", price: 120 },
      { name: "Madras Special Non-Veg Parota Roll", type: "Non-Veg", price: 200 },
      { name: "Chicken Noodles Parota Roll", type: "Non-Veg", price: 180 },
      { name: "Vegetable Parota Roll", type: "Veg", price: 120 },
      { name: "Paneer Masala Parota Roll", type: "Veg", price: 160 },
      { name: "Veg Noodles Parota Roll", type: "Veg", price: 180 },
      { name: "Madras Special Veg Parota Roll", type: "Veg", price: 200 },
    ],
  },
  {
    id: 2,
    title: "2. Omelette Parota (with Chicken Gravy)",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Double Omelette Parota", type: "Non-Veg", prices: [100, 110, 130] },
      { name: "Egg Veechu Parota (Sandwich Parota)", type: "Non-Veg", prices: [120, 130, 150] },
      { name: "Chicken Veechu Parota (Sandwich Parota)", type: "Non-Veg", prices: [140, 150, 170] },
      { name: "Madras Special Veechu Parota (Sandwich Parota)", type: "Non-Veg", prices: [150, 160, 180] },
    ],
  },
  {
    id: 3,
    title: "3. Egg & Chicken Omelette",
    items: [
      { name: "Egg Kalakki", type: "Non-Veg", price: 50 },
      { name: "Madras Special Chicken Kalakki", type: "Non-Veg", price: 70 },
      { name: "Chicken Omelette (Single Egg)", type: "Non-Veg", price: 80 },
      { name: "Chicken Omelette (Double Egg)", type: "Non-Veg", price: 120 },
      { name: "Omelette Single", type: "Non-Veg", price: 30 },
      { name: "Omelette Double", type: "Non-Veg", price: 50 },
      { name: "Half Fry", type: "Non-Veg", price: 30 },
    ],
  },
  {
    id: 4,
    title: "4. Biryani",
    items: [
      {
        name: "South Indian Chicken Dum Biryani",
        type: "Non-Veg",
        price: 200,
        description: "(Chicken Gravy, Boiled Egg, 4 Chicken Pcs, Raita)",
      },
      {
        name: "South Indian Chicken Leg Piece Biryani",
        type: "Non-Veg",
        price: 250,
        description: "(Leg Piece, Chicken Gravy, Boiled Egg, 2 Chicken Pcs, Raita)",
      },
      {
        name: "Bucket Biryani — Serves 4–5",
        type: "Non-Veg",
        price: 900,
        description: "(2 Leg Piece Chickens, 5 Boiled Eggs, 10–15 Chicken Pcs, Chicken 65, Green Chutney, Chicken Gravy)",
      },
      {
        name: "South Indian Mutton Dum Biryani",
        type: "Non-Veg",
        price: 300,
        description: "(Mutton Gravy, Boiled Egg, Raita)",
      },
    ],
  },
  {
    id: 5,
    title: "5. Non-Veg Dosa Corner",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Sada Dosa", type: "Veg", prices: [60, 80, 90] },
      { name: "Egg Dosa", type: "Non-Veg", prices: [100, 110, 130] },
      { name: "Chicken Boneless Curry Dosa", type: "Non-Veg", prices: [160, 170, 190] },
      { name: "Chicken Kothu Dosa", type: "Non-Veg", prices: [160, 170, 190] },
      { name: "Egg Kothu Dosa", type: "Non-Veg", prices: [130, 140, 160] },
      { name: "Omelette Uttappam", type: "Non-Veg", prices: [110, 120, 140] },
      { name: "Chicken Noodles Dosa", type: "Non-Veg", prices: [160, 170, 190] },
      { name: "Chicken Schezwan Noodles Dosa", type: "Non-Veg", prices: [170, 180, 200] },
      { name: "Chicken Chilli Dosa", type: "Non-Veg", prices: [200, null, null] },
      { name: "Madras Special Omelette Dosa", type: "Non-Veg", prices: [120, 130, 150] },
    ],
  },
  {
    id: 6,
    title: "6. Starters & Gravy (Non-Veg)",
    items: [
      { name: "Chettinadu Chicken Sukka", type: "Non-Veg", price: 220 },
      { name: "Chicken 65", type: "Non-Veg", price: 180 },
      { name: "Madras Special Egg Masala Fry", type: "Non-Veg", price: 190 },
      { name: "Chicken Chilli Parota", type: "Non-Veg", price: 240 },
      { name: "Garlic Chicken", type: "Non-Veg", price: 250 },
      { name: "Ginger Chicken", type: "Non-Veg", price: 250 },
      { name: "Pepper Mutton", type: "Non-Veg", price: 350 },
      { name: "Chettinadu Mutton Sukka", type: "Non-Veg", price: 350 },
    ],
  },
];

const page2Categories: Category[] = [
  {
    id: 7,
    title: "7. Parota with Gravy/Kurma (Non-Veg)",
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
    title: "8. Kothu Parota (Non-Veg)",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Boneless Chicken Kothu Parota", type: "Non-Veg", prices: [180, 190, 210] },
      { name: "Madras Special Boneless Chicken Kothu Parota", type: "Non-Veg", prices: [200, 210, 230] },
      { name: "Egg Kothu Parota", type: "Non-Veg", prices: [150, 160, 180] },
      { name: "Mutton Kothu Parota", type: "Non-Veg", prices: [240, 250, 280] },
    ],
  },
  {
    id: 9,
    title: "9. Parota & Veg Gravy/Kurma",
    caption: "Regular · Butter · Cheese",
    items: [
      { name: "Parotta with Veg Kurma (2 Pieces)", type: "Veg", prices: [70, null, null] },
      { name: "Vegetable Kothu Parota", type: "Veg", prices: [150, 160, 180] },
      { name: "Paneer Veg Kothu Parota", type: "Veg", prices: [180, 190, 210] },
      { name: "Veg Chilli Parota with Veg Kurma", type: "Veg", prices: [230, null, null] },
      { name: "Rice Roti with Veg Kurma (3 Pieces)", type: "Veg", prices: [150, null, null] },
      { name: "Neer Dosa with Veg Curry & Coconut Chutney (3 Pieces)", type: "Veg", prices: [100, null, null] },
    ],
  },
  {
    id: 10,
    title: "10. Idli & Vada",
    items: [
      { name: "Idli (3 Pieces)", type: "Veg", price: 50 },
      { name: "Vada (3 Pieces)", type: "Veg", price: 60 },
      { name: "Idli Vada (3 Pieces)", type: "Veg", price: 60 },
      { name: "Set Dosa (3 Pieces)", type: "Veg", price: 60 },
      { name: "Ghee Idli (2 Pieces)", type: "Veg", price: 90 },
      { name: "Butter Idli (2 Pieces)", type: "Veg", price: 90 },
      { name: "Fry Idly (8 Slices)", type: "Veg", price: 130 },
      { name: "Schezwan Idli (8 Slices)", type: "Veg", price: 130 },
    ],
  },
  {
    id: 11,
    title: "11. Veg Dosa",
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
];

const page3Categories: Category[] = [
  {
    id: 12,
    title: "12. Uttappam",
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
    id: 13,
    title: "13. Extras & Sides",
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
    id: 14,
    title: "14. Beverages",
    caption: "All day",
    items: [
      { name: "Butter Milk", type: "Veg", price: 25 },
      { name: "Madras Special Filter Coffee", type: "Veg", price: 30 },
      { name: "Nes Coffee", type: "Veg", price: 30 },
      { name: "Narasus Coffee", type: "Veg", price: 30 },
      { name: "Black Coffee", type: "Veg", price: 20 },
    ],
  },
];

const BananaLeafBackground = ({ pageNum }: { pageNum: number }) => (
  <div className="leaf-bg">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 210 297" preserveAspectRatio="none">
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#03180c" />
          <stop offset="50%" stopColor="#072614" />
          <stop offset="100%" stopColor="#0d3a20" />
        </linearGradient>
        <linearGradient id="sheenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="31%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="210" height="297" fill="url(#leafGrad)" />
      
      {/* Midrib */}
      <line x1="105" y1="0" x2="105" y2="297" stroke="#0f4628" strokeWidth="1.2" opacity="0.4" />
      <line x1="105.5" y1="0" x2="105.5" y2="297" stroke="#daa520" strokeWidth="0.2" opacity="0.15" />
      
      {/* Veins (faint banana leaf lines) */}
      <path d="
        M 105 15 Q 55 8 0 3
        M 105 45 Q 55 38 0 33
        M 105 75 Q 55 68 0 63
        M 105 105 Q 55 98 0 93
        M 105 135 Q 55 128 0 123
        M 105 165 Q 55 158 0 153
        M 105 195 Q 55 188 0 183
        M 105 225 Q 55 218 0 213
        M 105 255 Q 55 248 0 243
        M 105 285 Q 55 278 0 273
      " stroke="#125134" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      <path d="
        M 105 15 Q 155 8 210 3
        M 105 45 Q 155 38 210 33
        M 105 75 Q 155 68 210 63
        M 105 105 Q 155 98 210 93
        M 105 135 Q 155 128 210 123
        M 105 165 Q 155 158 210 153
        M 105 195 Q 155 188 210 183
        M 105 225 Q 155 218 210 213
        M 105 255 Q 155 248 210 243
        M 105 285 Q 155 278 210 273
      " stroke="#125134" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Elegant Kolam geometric patterns in background margins */}
      <g stroke="#daa520" strokeWidth="0.3" fill="none" opacity="0.06" transform="translate(30, 45) scale(0.5)">
        <circle cx="0" cy="0" r="10" />
        <path d="M -20 0 C -10 -10, 10 -10, 20 0 C 10 10, -10 10, -20 0 Z" />
        <path d="M 0 -20 C -10 -10, -10 10, 0 20 C 10 10, 10 -10, 0 -20 Z" />
        <circle cx="0" cy="0" r="3" fill="#daa520" />
      </g>
      
      <g stroke="#daa520" strokeWidth="0.3" fill="none" opacity="0.06" transform="translate(180, 255) scale(0.5)">
        <circle cx="0" cy="0" r="10" />
        <path d="M -20 0 C -10 -10, 10 -10, 20 0 C 10 10, -10 10, -20 0 Z" />
        <path d="M 0 -20 C -10 -10, -10 10, 0 20 C 10 10, 10 -10, 0 -20 Z" />
        <circle cx="0" cy="0" r="3" fill="#daa520" />
      </g>
      
      {/* Temple Gopuram Silhouette rising elegantly from bottom */}
      <g fill="#02140a" opacity="0.15" transform="translate(105, 296) scale(0.65)">
        <path d="M -30 0 L -30 -6 L -25 -6 L -25 -16 L -20 -16 L -20 -26 L -15 -26 L -15 -36 L -8 -36 L -8 -44 L 0 -48 L 8 -44 L 8 -36 L 15 -36 L 15 -26 L 20 -26 L 20 -16 L 25 -16 L 25 -6 L 30 -6 L 30 0 Z" />
        <circle cx="0" cy="-51" r="1.5" fill="#daa520" opacity="0.3" />
      </g>
      
      {/* Curry Leaf branch in left margin */}
      <g stroke="#daa520" strokeWidth="0.3" fill="none" opacity="0.08" transform="translate(14, 120) rotate(-15) scale(0.75)">
        <path d="M 0 80 Q -10 40 0 0" />
        <path d="M 0 10 Q -12 5 -15 8 Q -10 12 0 10" />
        <path d="M 0 10 Q 12 5 15 8 Q 10 12 0 10" />
        <path d="M -2 25 Q -14 20 -18 24 Q -12 28 -2 25" />
        <path d="M 2 25 Q 14 20 18 24 Q 12 28 2 25" />
        <path d="M -3 40 Q -16 35 -20 40 Q -14 44 -3 40" />
        <path d="M 3 40 Q 16 35 20 40 Q 14 44 3 40" />
        <path d="M -3 55 Q -16 50 -20 56 Q -14 60 -3 55" />
        <path d="M 3 55 Q 16 50 20 56 Q 14 60 3 55" />
      </g>
      
      {/* Star Anise in right margin */}
      <g stroke="#daa520" strokeWidth="0.35" fill="none" opacity="0.08" transform="translate(196, 95) scale(0.55)">
        <path d="M 0 0 C -5 -15, 5 -15, 0 0" />
        <path d="M 0 0 C 15 -5, 15 5, 0 0" transform="rotate(45)" />
        <path d="M 0 0 C 15 -5, 15 5, 0 0" transform="rotate(90)" />
        <path d="M 0 0 C 15 -5, 15 5, 0 0" transform="rotate(135)" />
        <path d="M 0 0 C -5 15, 5 15, 0 0" transform="rotate(180)" />
        <path d="M 0 0 C -15 5, -15 -5, 0 0" transform="rotate(225)" />
        <path d="M 0 0 C -15 5, -15 -5, 0 0" transform="rotate(270)" />
        <path d="M 0 0 C -15 5, -15 -5, 0 0" transform="rotate(315)" />
        <circle cx="0" cy="0" r="2.5" fill="#daa520" />
      </g>

      {/* Floating parrots in top margins */}
      <g stroke="#daa520" strokeWidth="0.3" fill="none" opacity="0.05" transform="translate(160, 40) scale(0.6)">
        <path d="M 0 0 Q -10 -8 -20 -4 Q -10 4 0 0 Q 10 -8 20 -4 Q 10 4 0 0 Z" />
      </g>

      {/* Faint clouds at the top center */}
      <g stroke="#daa520" strokeWidth="0.3" fill="none" opacity="0.05" transform="translate(105, 30)">
        <path d="M -30 0 A 10 10 0 0 1 -10 0 A 12 12 0 0 1 10 0 A 10 10 0 0 1 30 0 Z" />
      </g>

      {/* Hanging temple bell at top-left corner */}
      <g stroke="#daa520" strokeWidth="0.35" fill="none" opacity="0.08" transform="translate(20, 20) scale(0.7)">
        <line x1="0" y1="-10" x2="0" y2="10" />
        <path d="M -6 10 L 6 10 L 4 16 L -4 16 Z" />
        <circle cx="0" cy="18" r="1" fill="#daa520" />
      </g>
      {/* Hanging temple bell at top-right corner */}
      <g stroke="#daa520" strokeWidth="0.35" fill="none" opacity="0.08" transform="translate(190, 20) scale(0.7)">
        <line x1="0" y1="-10" x2="0" y2="10" />
        <path d="M -6 10 L 6 10 L 4 16 L -4 16 Z" />
        <circle cx="0" cy="18" r="1" fill="#daa520" />
      </g>

      {/* Stepped Gopuram Border Accents (centered on each of the 4 border sides) */}
      <polygon points="101,8 109,8 107,11 103,11" fill="#daa520" opacity="0.8" />
      <polygon points="103,11 107,11 105,14" fill="#daa520" opacity="0.8" />
      
      <polygon points="101,289 109,289 107,286 103,286" fill="#daa520" opacity="0.8" />
      <polygon points="103,286 107,286 105,283" fill="#daa520" opacity="0.8" />
      
      <polygon points="8,144.5 8,152.5 11,150.5 11,146.5" fill="#daa520" opacity="0.8" />
      <polygon points="11,146.5 11,150.5 14,148.5" fill="#daa520" opacity="0.8" />
      
      <polygon points="202,144.5 202,152.5 199,150.5 199,146.5" fill="#daa520" opacity="0.8" />
      <polygon points="199,146.5 199,150.5 196,148.5" fill="#daa520" opacity="0.8" />

      <rect width="210" height="297" fill="url(#sheenGrad)" />
    </svg>
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
  const contactPhones = "+91 70457 14545 / +91 70457 94545";

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
    const isSignature = displayName.toLowerCase().includes("special") || displayName.toLowerCase().includes("dum");

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
          padding: 12.5mm 12.5mm; /* Enhanced padding inside border frame */
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
          height: 44mm;
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
          height: 16mm;
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
          margin-bottom: 3.5mm;
        }

        /* 2 Column Body */
        .menu-body {
          flex: 1;
          column-count: 2;
          column-gap: 8mm;
          column-rule: 1px solid rgba(218, 165, 32, 0.4); /* Gold column divider */
          column-fill: auto;
          overflow: hidden;
        }

        /* Category block - Premium Glassmorphic Cards */
        .category-block {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 14px; /* Increased category spacing */
          background: linear-gradient(135deg, rgba(6, 32, 18, 0.75) 0%, rgba(10, 48, 28, 0.65) 100%);
          border: 1px solid rgba(229, 192, 96, 0.25);
          border-radius: 8px;
          padding: 12px; /* Increased internal padding */
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
          font-size: 10pt;
          font-weight: 800;
          padding: 6px 10px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          border: 1.8px solid #5c3e16; /* Wood-colored brass frame outline */
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
        }
        
        /* Column Header alignment inside category bar */
        .category-caption {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        .caption-col-header {
          width: 42px;
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 7.5pt;
          font-weight: bold;
          color: #041a0e; /* Darkest green text inside the gold box */
          display: inline-block;
          text-transform: none;
        }

        .category-items {
          display: flex;
          flex-direction: column;
          gap: 4px; /* Improved item spacing */
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
          font-size: 9.5pt;
          text-shadow: 0 0 2px rgba(218, 165, 32, 0.5);
          flex-shrink: 0;
        }

        /* Increased font weight for white-on-green legibility & modern hierarchy */
        .menu-item-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9pt;
          font-weight: 700;
          color: #f5efd8; /* Warm ivory for item names */
          letter-spacing: 0.02em;
          margin-left: 5px;
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
          font-size: 7.5pt;
          font-weight: 400;
          color: rgba(245, 239, 216, 0.85); /* Slightly muted warm ivory for description */
          margin-left: 14px;
          line-height: 1.2;
          margin-top: 2px;
        }
        .menu-item-prices {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        /* Prices in gold for visual dominance */
        .price-val {
          width: 42px;
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9pt;
          font-weight: 800;
          color: #e5c060; /* Antique gold */
          display: inline-block;
          flex-shrink: 0;
        }

        /* Veg/Non-Veg indicators with white frame contrast fix */
        .veg-nonveg-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 9px;
          height: 9px;
          border: 1px solid #ffffff; /* White square outline for contrast */
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .veg-nonveg-mark.veg .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #2ecc71; /* Brighter neon-green dot */
        }
        .veg-nonveg-mark.nonveg .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #e74c3c; /* Bright red dot */
        }

        /* Footer elements on dark green background */
        .footer-container {
          height: 12mm;
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
          font-size: 8pt;
          color: #f5efd8; /* Warm ivory */
          font-weight: 600;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .footer-social-item {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .footer-disclaimer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 7.2pt;
          color: rgba(245, 239, 216, 0.7); /* Muted warm ivory */
          margin-top: 1px;
        }

        /* Page 3 Mascot Layout */
        .page-3-mascot-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 15mm;
          padding: 10px;
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

        {/* Mascot Chef floating in the top-left header margin where it cannot overlap text */}
        <div className="mascot-character" style={{ top: "12mm", left: "14mm", width: "32mm", height: "32mm" }}>
          <Image
            src="/images/mascot_chef.png"
            alt="Mascot Chef"
            width={128}
            height={128}
            priority
            unoptimized
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        
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
            {page1Categories.map((cat) => renderCategory(cat))}
          </div>

          {/* Page 1 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span>{address}</span>
              <div className="footer-socials">
                <span className="footer-social-item">
                  Ph: {contactPhones}
                </span>
                <span className="footer-social-item">
                  WA: +91 70457 14545
                </span>
                <span className="footer-social-item">
                  IG: @madrasparota
                </span>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 1 of 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2: NON-VEG SPECIALTIES, PART 2 + VEGETARIAN, PART 1 */}
      <div className="page-shadow" id="page-2">
        <BananaLeafBackground pageNum={2} />
        <div className="border-frame-outer"></div>
        <div className="border-frame-inner"></div>
        <CornerFlourishes />

        {/* Mascot Dosa floating in the top-right header margin where it cannot overlap text */}
        <div className="mascot-character" style={{ top: "11mm", right: "14mm", width: "28mm", height: "28mm" }}>
          <Image
            src="/images/mascot_dosa.png"
            alt="Mascot Dosa"
            width={112}
            height={112}
            priority
            unoptimized
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        
        <div className="page-content">
          {/* Page 2 Header */}
          <div className="header-px">
            <div className="header-px-row">
              <span className="header-px-title">MADRAS PAROTA</span>
              <span className="header-px-subtitle" style={{ marginRight: "32mm" }}>Menu · Page 2 of 3</span>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 2 Body */}
          <div className="menu-body">
            {page2Categories.map((cat) => renderCategory(cat))}
          </div>

          {/* Page 2 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span>{address}</span>
              <div className="footer-socials">
                <span className="footer-social-item">
                  Ph: {contactPhones}
                </span>
                <span className="footer-social-item">
                  WA: +91 70457 14545
                </span>
                <span className="footer-social-item">
                  IG: @madrasparota
                </span>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 2 of 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3: VEGETARIAN, PART 2 + BEVERAGES */}
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
              <span className="header-px-subtitle">Menu · Page 3 of 3</span>
            </div>
          </div>

          <hr className="gold-divider" />

          {/* Page 3 Body */}
          <div className="menu-body">
            {page3Categories.map((cat) => renderCategory(cat, cat.id === 14))}
            
            {/* Mascot Coffee and Idli characters positioned side-by-side inside Column 2 under Beverages list */}
            <div className="page-3-mascot-row">
              <div className="mascot-img-card">
                <Image
                  src="/images/mascot_coffee.png"
                  alt="Mascot Coffee"
                  width={96}
                  height={96}
                  priority
                  unoptimized
                  style={{ display: "block" }}
                />
              </div>
              <div className="mascot-img-card">
                <Image
                  src="/images/mascot_idli.png"
                  alt="Mascot Idli"
                  width={96}
                  height={96}
                  priority
                  unoptimized
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Page 3 Footer */}
          <div className="footer-container">
            <div className="footer-top-row">
              <span>{address}</span>
              <div className="footer-socials">
                <span className="footer-social-item">
                  Ph: {contactPhones}
                </span>
                <span className="footer-social-item">
                  WA: +91 70457 14545
                </span>
                <span className="footer-social-item">
                  IG: @madrasparota
                </span>
              </div>
            </div>
            <div className="footer-disclaimer-row">
              <span>Prices inclusive of applicable taxes. Subject to change without notice.</span>
              <span style={{ color: "#daa520", fontWeight: "bold" }}>Page 3 of 3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
