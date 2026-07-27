export type MenuItem = {
  name: string;
  desc?: string | null;
  veg: boolean;
  special?: boolean;       // items marked with the ✦ "Madras Special" diamond icon
  price?: number;          // for single-price items
  prices?: number[];       // for variant items, aligned to category.variants order
  singlePrice?: boolean;   // true when a variant category row only has one price (no variant split)
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;           // e.g. "Only Chicken Gravy & Coconut Chutney"
  variants?: string[];     // e.g. ["Regular","Wheat","Bun","Nool"] or ["Regular","Butter","Cheese"]
  items: MenuItem[];
};
