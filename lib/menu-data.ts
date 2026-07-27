import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    "id": "parota-rolls",
    "title": "Madras Parota Rolls",
    "items": [
      { "name": "Chicken Parota Roll", "desc": "Boneless Chicken, Sauses, Mayo, Veggies", "price": 160, "veg": false },
      { "name": "Egg Parota Roll", "desc": "Boiled & Fried Egg, Sauses, Mayo, Veggies", "price": 120, "veg": false },
      { "name": "Madras Special Non-Veg Parota Roll", "desc": null, "price": 200, "veg": false, "special": true },
      { "name": "Chicken Noodles Parota Roll", "desc": null, "price": 180, "veg": false },
      { "name": "Vegetable Parota Roll", "desc": null, "price": 120, "veg": true },
      { "name": "Paneer Masala Parota Roll", "desc": null, "price": 160, "veg": true },
      { "name": "Veg Noodles Parota Roll", "desc": null, "price": 180, "veg": true },
      { "name": "Madras Special Veg Parota Roll", "desc": null, "price": 200, "veg": true, "special": true }
    ]
  },
  {
    "id": "parota-gravy-nonveg",
    "title": "Parota with Gravy/Kurma (Non-Veg)",
    "note": "South Indian style special in-house chicken masala gravy with lacha parota.",
    "variants": ["Regular", "Wheat", "Bun", "Nool"],
    "items": [
      { "name": "Parota with Chicken Gravy (No Pieces)", "prices": [70, 90, 90, 90], "veg": false },
      { "name": "Parota with Mutton Gravy (No Pieces)", "prices": [90, 110, 110, 110], "veg": false },
      { "name": "Parota with Egg Gravy (No Pieces)", "prices": [70, 90, 90, 90], "veg": false },
      { "name": "Parota with Chicken Gravy (2 Pcs Chicken)", "prices": [120, 140, 140, 140], "veg": false },
      { "name": "Parota with Mutton Gravy (2 Pcs Mutton)", "prices": [160, 180, 180, 180], "veg": false },
      { "name": "Parota with Egg Gravy (2 Pcs Egg)", "prices": [110, 130, 130, 130], "veg": false }
    ]
  },
  {
    "id": "kothu-parota",
    "title": "Kothu Parota (Non-Veg)",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Boneless Chicken Kothu Parota", "desc": "Pieces of parota shredded and tossed in veggies, chicken gravy, egg bhurji, boneless chicken etc.", "prices": [180, 190, 210], "veg": false },
      { "name": "Madras Special Boneless Chicken Kothu Parota", "desc": null, "prices": [200, 210, 230], "veg": false, "special": true },
      { "name": "Egg Kothu Parota", "desc": "Pieces of parota shredded and tossed in veggies, egg gravy, eggs etc.", "prices": [150, 160, 180], "veg": false },
      { "name": "Mutton Kothu Parota", "desc": "Pieces of parota shredded and tossed in veggies, mutton gravy, eggs, boneless mutton etc.", "prices": [240, 250, 280], "veg": false }
    ]
  },
  {
    "id": "egg-chicken-omelette",
    "title": "Egg & Chicken Omelette",
    "items": [
      { "name": "Egg Kalakki", "desc": "Mixture of Egg Half fry, Chicken Gravy, Masala, Etc", "price": 50, "veg": false },
      { "name": "Madras Special Chicken Kalakki", "desc": "Mixture of Egg Half fry, Chicken Gravy, Masala, Veggies, Etc", "price": 70, "veg": false, "special": true },
      { "name": "Chicken Omelette (Single Egg)", "desc": "Mixture of Single Egg, Chicken Gravy, Boneless Chicken, Other Masala, Etc", "price": 80, "veg": false },
      { "name": "Chicken Omelette (Double Egg)", "desc": "Mixture of Double Egg, Chicken Gravy, Boneless Chicken, Other Masala, Etc", "price": 120, "veg": false },
      { "name": "Omelette Single", "desc": "Single Egg Omelette", "price": 30, "veg": false },
      { "name": "Omelette Double", "desc": "Double Egg Omelette", "price": 50, "veg": false },
      { "name": "Half Fry", "desc": "Single Egg Half Fry", "price": 30, "veg": false }
    ]
  },
  {
    "id": "starters-gravy",
    "title": "Starters & Gravy",
    "items": [
      { "name": "Chettinadu Chicken Sukka", "desc": "5–6 pieces of chicken sautéed in tava with veggies, coriander, masala, pepper etc., mixed with chicken gravy & in-house masala until reduced to semi-gravy", "price": 220, "veg": false },
      { "name": "Boneless Chicken 65", "desc": "8–10 pieces of boneless chicken marinated in South Indian special homemade masala, then fried in refined oil", "price": 180, "veg": false },
      { "name": "Chicken 65 with Bone", "desc": "8–10 pieces of bone-in chicken marinated in South Indian special homemade masala, then fried in refined oil", "price": 170, "veg": false },
      { "name": "Egg Masala Fry", "desc": "2 boiled eggs sautéed in tava with veggies, masala, pepper etc., cooked until reduced to semi-gravy", "price": 190, "veg": false },
      { "name": "Madras Special Egg Masala Fry", "desc": "Same as above, cooked with an extra fried egg", "price": 220, "veg": false, "special": true },
      { "name": "Chicken Chilli Parota", "desc": "Pieces of parota & chicken marinated in Chinese sauces, veggies, vinegar etc.", "price": 240, "veg": false },
      { "name": "Garlic Chicken", "desc": "8–10 boneless chicken pieces marinated with sauces & masala, sautéed with minced garlic, black pepper etc.", "price": 250, "veg": false },
      { "name": "Ginger Chicken", "desc": "8–10 boneless chicken pieces marinated with sauces & masala, sautéed with minced ginger, garlic, onion etc.", "price": 250, "veg": false },
      { "name": "Pepper Mutton", "desc": "4–5 pieces of mutton cooked in tava with sautéed veggies, masala, black pepper, special mutton masala", "price": 350, "veg": false },
      { "name": "Chettinadu Mutton Sukka", "desc": "4–6 pieces of mutton sautéed with veggies, coriander, masala, pepper, mixed with mutton gravy & in-house masala until reduced to semi-gravy", "price": 350, "veg": false },
      { "name": "Chicken Leg Piece Masala Fry", "desc": null, "price": 180, "veg": false },
      { "name": "Chicken Liver Oil Fry", "desc": null, "price": 180, "veg": false },
      { "name": "Chicken Pota (Gizzard) Oil Fry", "desc": null, "price": 180, "veg": false },
      { "name": "Chicken Liver Pota Oil Fry", "desc": null, "price": 180, "veg": false },
      { "name": "Chicken Liver Pota Masala Fry", "desc": null, "price": 240, "veg": false }
    ]
  },
  {
    "id": "omelette-parota",
    "title": "Omelette Parota (with Chicken Gravy)",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Double Omelette Parota", "desc": null, "prices": [100, 110, 130], "veg": false },
      { "name": "Egg Veechu Parota", "desc": "Sandwich Parota — Veechu Parota featuring flaky, layered parottas tossed with spicy Egg Omelette and rich masala gravy then folded and layered to achieve a soft yet crispy texture", "prices": [120, 130, 150], "veg": false },
      { "name": "Chicken Veechu Parota", "desc": "Sandwich Parota — Veechu Parota featuring flaky, layered parotas tossed with spicy, juicy chicken pieces and rich masala gravy then folded and layered to achieve a soft yet crispy texture", "prices": [140, 150, 170], "veg": false },
      { "name": "Madras Special Veechu Parota", "desc": "Sandwich Parota", "prices": [150, 160, 180], "veg": false, "special": true }
    ]
  },
  {
    "id": "chefs-specials",
    "title": "Chef's Standalone Specials",
    "items": [
      { "name": "Kori Roti (3 Pcs) with Chicken Pieces & Gravy", "desc": null, "price": 180, "veg": false },
      { "name": "Neer Dosa with Chicken Gravy & Coconut Chutney (3 Pcs)", "desc": null, "price": 150, "veg": false },
      { "name": "Chicken Kizhi Parota", "desc": "Banana Leaf Parota — Three layers of parota soaked in a semi-thick chicken gravy, with boiled egg, omelette and boneless chicken layered in between, wrapped in a banana leaf and cooked.", "price": 299, "veg": false, "special": true }
    ]
  },
  {
    "id": "biryani",
    "title": "Biryani",
    "items": [
      { "name": "South Indian Chicken Dum Biryani", "desc": "Chicken Gravy, Boiled Egg, 4 Chicken Pcs, Raita — Authentic taste of Tamil Nadu's signature biryani — a masterful blend of flavors, spicy broth, chicken pieces and veggies, layered with fluffy basmati rice and finished with fragrant spices & fresh herbs, topped with a boiled egg.", "price": 200, "veg": false, "special": true },
      { "name": "South Indian Chicken Leg Piece Biryani", "desc": "Leg Piece, Chicken Gravy, Boiled Egg, 2 Chicken Pcs, Raita — A masterful blend of flavours, spicy gravy, chicken and veggies, layered with fluffy basmati rice and finished with fragrant spices & fresh herbs, topped with a chicken leg piece and a boiled egg.", "price": 250, "veg": false },
      { "name": "Bucket Biryani — Serves 4–5", "desc": "2 Leg Piece Chickens, 5 Boiled Eggs, 10–15 Chicken Pcs, Chicken 65, Green Chutney, Chicken Gravy, ½ ltr Thums Up", "price": 900, "veg": false },
      { "name": "South Indian Mutton Dum Biryani", "desc": "Mutton Gravy, Boiled Egg, Raita — Authentic mutton biryani cooked with aromatic spices, fresh mint and other veggies, tender mutton and basmati rice, finished with a dum for rich flavour.", "price": 300, "veg": false, "special": true }
    ]
  },
  {
    "id": "extras-sides",
    "title": "Extras & Sides",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Parota", "prices": [25, 35, 45], "veg": true },
      { "name": "Wheat Parota", "prices": [35, 45, 55], "veg": true },
      { "name": "Bun Parota", "prices": [30, 40, 50], "veg": true },
      { "name": "Nool Parota", "desc": "Noodles Parota", "prices": [35, 45, 55], "veg": true },
      { "name": "Neer Dosa", "price": 25, "veg": true, "singlePrice": true },
      { "name": "Extra Butter", "price": 20, "veg": true, "singlePrice": true },
      { "name": "Extra Cheese", "price": 30, "veg": true, "singlePrice": true },
      { "name": "Extra Raitha", "price": 30, "veg": true, "singlePrice": true }
    ]
  },
  {
    "id": "dosa-nonveg",
    "title": "Dosa — Non-Veg",
    "note": "Only Chicken Gravy & Coconut Chutney",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Sada Dosa", "prices": [60, 80, 90], "veg": false },
      { "name": "Egg Dosa", "desc": "Crispy dosa wrapped around a rich, savoury egg packed with aromatic spices", "prices": [100, 110, 130], "veg": false },
      { "name": "Chicken Boneless Curry Dosa", "desc": "Crispy golden-brown dosa wrapped with rich slow-cooked chicken masala, onion, garlic, ginger and warming spices", "prices": [180, 190, 210], "veg": false },
      { "name": "Chicken Kothu Dosa", "desc": "Pieces of dosa shredded and tossed in veggies, chicken gravy, eggs, boneless chicken etc.", "prices": [160, 170, 190], "veg": false },
      { "name": "Egg Kothu Dosa", "desc": null, "prices": [130, 140, 160], "veg": false },
      { "name": "Chicken Noodles Dosa", "desc": null, "prices": [160, 170, 190], "veg": false },
      { "name": "Chicken Schezwan Noodles Dosa", "desc": null, "prices": [170, 180, 200], "veg": false },
      { "name": "Chicken Chilli Dosa", "desc": null, "price": 200, "veg": false, "singlePrice": true },
      { "name": "Madras Special Omelette Dosa", "desc": "Crispy dosa wrapped around a rich, savoury omelette packed with aromatic spices", "prices": [120, 130, 150], "veg": false, "special": true }
    ]
  },
  {
    "id": "parota-veg-gravy",
    "title": "Parota & Veg Gravy/Kurma",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Parotta with Veg Kurma (2 Pcs)", "desc": null, "price": 70, "veg": true, "singlePrice": true },
      { "name": "Vegetable Kothu Parota", "desc": null, "prices": [150, 160, 180], "veg": true },
      { "name": "Paneer Veg Kothu Parota", "desc": null, "prices": [180, 190, 210], "veg": true },
      { "name": "Veg Chilli Parota with Veg Kurma", "desc": null, "price": 230, "veg": true, "singlePrice": true },
      { "name": "Rice Roti with Veg Kurma (3 Pcs)", "desc": null, "price": 150, "veg": true, "singlePrice": true },
      { "name": "Neer Dosa with Veg Curry & Coconut Chutney (3 Pcs)", "desc": null, "price": 100, "veg": true, "singlePrice": true }
    ]
  },
  {
    "id": "idli-vada",
    "title": "Idli & Vada",
    "items": [
      { "name": "Idli (3 Pcs)", "price": 50, "veg": true },
      { "name": "Vada (3 Pcs)", "price": 60, "veg": true },
      { "name": "Idli Vada (3 Pcs)", "price": 60, "veg": true },
      { "name": "Set Dosa (3 Pcs)", "price": 60, "veg": true },
      { "name": "Ghee Idli (2 Pcs)", "price": 90, "veg": true },
      { "name": "Butter Idli (2 Pcs)", "price": 90, "veg": true },
      { "name": "Fry Idli (8 Slices)", "price": 130, "veg": true },
      { "name": "Schezwan Idli (8 Slices)", "price": 130, "veg": true }
    ]
  },
  {
    "id": "uttappam",
    "title": "Uttappam",
    "note": "Sambhar, Coconut Chutney, Green Chutney, Sweet",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Sada Uttappam", "prices": [80, 90, 110], "veg": true },
      { "name": "Onion Uttappam", "prices": [90, 100, 120], "veg": true },
      { "name": "Tomato Uttappam", "prices": [90, 100, 120], "veg": true },
      { "name": "Onion Tomato Uttappam", "prices": [100, 110, 130], "veg": true },
      { "name": "Cheese Uttappam", "prices": [120, 130, 150], "veg": true },
      { "name": "Masala Uttappam", "prices": [110, 120, 140], "veg": true },
      { "name": "Mysore Sada Uttappam", "prices": [110, 120, 140], "veg": true },
      { "name": "Mysore Masala Uttappam", "prices": [130, 140, 160], "veg": true },
      { "name": "Schezwan Sada Uttappam", "prices": [110, 120, 140], "veg": true },
      { "name": "Schezwan Masala Uttappam", "prices": [130, 140, 160], "veg": true },
      { "name": "Mayonnaise Uttappam", "prices": [110, 120, 140], "veg": true },
      { "name": "Mayonnaise Masala Uttappam", "prices": [130, 140, 160], "veg": true },
      { "name": "Madras Parota's Special Uttappam", "prices": [140, 150, 170], "veg": true, "special": true }
    ]
  },
  {
    "id": "dosa-veg",
    "title": "Dosa — Veg",
    "note": "with Sambhar, Coconut Chutney, Green Chutney, Sweet",
    "variants": ["Regular", "Butter", "Cheese"],
    "items": [
      { "name": "Sada Dosa", "prices": [60, 80, 90], "veg": true },
      { "name": "Onion Dosa", "prices": [80, 100, 110], "veg": true },
      { "name": "Masala Dosa", "prices": [80, 100, 110], "veg": true },
      { "name": "Mysore Sada Dosa", "prices": [90, 110, 120], "veg": true },
      { "name": "Mysore Masala Dosa", "prices": [110, 130, 140], "veg": true },
      { "name": "Schezwan Sada Dosa", "prices": [90, 110, 120], "veg": true },
      { "name": "Schezwan Masala Dosa", "prices": [120, 140, 150], "veg": true },
      { "name": "Podi Dosa", "prices": [70, 90, 100], "veg": true },
      { "name": "Podi Masala Dosa", "prices": [90, 110, 120], "veg": true },
      { "name": "Ghee Sada Dosa", "price": 90, "veg": true, "singlePrice": true },
      { "name": "Ghee Masala Dosa", "price": 120, "veg": true, "singlePrice": true },
      { "name": "Ghee Podi Dosa", "price": 130, "veg": true, "singlePrice": true },
      { "name": "Mayonnaise Sada Dosa", "price": 110, "veg": true, "singlePrice": true },
      { "name": "Jini Dosa", "price": 170, "veg": true, "singlePrice": true },
      { "name": "Chinese Dosa", "price": 170, "veg": true, "singlePrice": true },
      { "name": "Paneer Chilli Dosa", "price": 190, "veg": true, "singlePrice": true },
      { "name": "Madras Parota's Special Dosa", "price": 180, "veg": true, "singlePrice": true, "special": true }
    ]
  },
  {
    "id": "beverages",
    "title": "Beverages",
    "note": "All day",
    "items": [
      { "name": "Butter Milk", "desc": null, "price": 25, "veg": true },
      { "name": "Madras Special Filter Coffee", "desc": "A strong South Indian coffee made from a special rare ground coffee powder with chicory, mixed with sugar & milk, without water.", "price": 30, "veg": true, "special": true },
      { "name": "Nes Coffee", "desc": null, "price": 30, "veg": true },
      { "name": "Narasus Coffee", "desc": null, "price": 30, "veg": true },
      { "name": "Black Coffee", "desc": null, "price": 20, "veg": true }
    ]
  }
];
