export interface MenuItemPrice {
  regular: number;
  butter?: number;
  cheese?: number;
  wheat?: number;
  bun?: number;
  nool?: number;
}

export interface MenuItem {
  name: string;
  description: string;
  type: 'veg' | 'non-veg';
  price: number | MenuItemPrice;
  bestseller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  iconName: string; // matches a predefined lucide-react icon
  items: MenuItem[];
}
