'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { menuData } from '@/lib/menu-data';
import { MenuItem, MenuCategory, MenuItemPrice } from '@/lib/types';
import { 
  Coffee, 
  Egg, 
  Flame, 
  ChefHat, 
  PlusCircle, 
  Layers, 
  Utensils, 
  Leaf, 
  Disc, 
  Compass, 
  Grid as GridIcon,
  Search,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

const categoryIcons: { [key: string]: React.ReactNode } = {
  rolls: <UtensilsCrossed className="w-4 h-4" />,
  'omelette-parota': <Egg className="w-4 h-4" />,
  omelette: <Flame className="w-4 h-4" />,
  biryani: <Sparkles className="w-4 h-4" />,
  'non-veg-dosa': <ChefHat className="w-4 h-4" />,
  extras: <PlusCircle className="w-4 h-4" />,
  starters: <Flame className="w-4 h-4" />,
  'parota-gravy': <Layers className="w-4 h-4" />,
  'kothu-parota': <Layers className="w-4 h-4" />,
  'veg-gravy': <Leaf className="w-4 h-4" />,
  'idli-vada': <Disc className="w-4 h-4" />,
  'veg-dosa': <Compass className="w-4 h-4" />,
  uttappam: <GridIcon className="w-4 h-4" />,
  beverages: <Coffee className="w-4 h-4" />
};

// Map dish or category name to high-contrast, professional stock food photos
const getDishImage = (name: string, categoryId: string): string => {
  const lowerName = name.toLowerCase();

  // Specific local image matches
  if (lowerName.includes('chettinad chicken curry') || lowerName.includes('chettinnad chicken curry')) {
    return '/images/Chettinnad Chicken Curry.jpeg';
  }
  if (lowerName.includes('chicken 65')) {
    return '/images/Chicken 65.jpeg';
  }
  if (lowerName.includes('kizhi parota') || lowerName.includes('kizhi parotta')) {
    return '/images/Chicken Kizhi Parota.jpeg';
  }
  if (lowerName.includes('parota roll') || lowerName.includes('parotta roll')) {
    return '/images/Chicken Parota Roll.jpeg';
  }
  if (lowerName.includes('kori roti')) {
    return '/images/Kori Roti.jpeg';
  }
  if (lowerName.includes('neer dosa')) {
    return '/images/Neer Dosa.jpeg';
  }
  if (lowerName.includes('nool parota') || lowerName.includes('nool parotta')) {
    return '/images/Nool parota.jpeg';
  }
  if (lowerName.includes('masala dosa')) {
    return '/images/Masala_Dosa (1).jpeg';
  }

  // Fallbacks based on keywords
  if (lowerName.includes('roll')) {
    return 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('dosa') || lowerName.includes('uttapam')) {
    return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('idli') || lowerName.includes('vada')) {
    return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('biryani')) {
    return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('curry') || lowerName.includes('gravy') || lowerName.includes('salna') || lowerName.includes('masala')) {
    return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('coffee') || lowerName.includes('tea') || lowerName.includes('milk') || lowerName.includes('beverage')) {
    return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80';
  }
  if (lowerName.includes('omelette') || lowerName.includes('egg') || lowerName.includes('kalakki') || lowerName.includes('podimas')) {
    return 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80';
  }

  // Fallbacks based on category id
  switch (categoryId) {
    case 'rolls':
      return 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80';
    case 'chicken-dry':
    case 'chicken-gravy':
    case 'roti-curry':
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80';
    case 'beverages':
      return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80';
    default:
      return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80';
  }
};

interface Badge {
  text: string;
  className: string;
}

// Generate elegant badges dynamically for items
const getDishBadges = (item: MenuItem): Badge[] => {
  const badges: Badge[] = [];
  const lowerName = item.name.toLowerCase();

  // Bestseller Badge
  if (item.bestseller) {
    badges.push({
      text: '★ Bestseller',
      className: 'bg-amber-500 text-white border-amber-500 shadow-sm'
    });
  }

  // Chef Special Badge
  if (lowerName.includes('special') || lowerName.includes('kizhi') || lowerName.includes('madras')) {
    badges.push({
      text: 'Chef Special',
      className: 'bg-purple-50 text-purple-700 border-purple-200'
    });
  }

  // Spicy Badge
  if (lowerName.includes('chilli') || lowerName.includes('schezwan') || lowerName.includes('pepper') || lowerName.includes('spicy') || lowerName.includes('kothu')) {
    badges.push({
      text: '🌶 Spicy',
      className: 'bg-orange-50 text-orange-700 border-orange-200'
    });
  }

  // Protein Rich Badge
  if (lowerName.includes('chicken') || lowerName.includes('egg') || lowerName.includes('paneer')) {
    badges.push({
      text: 'Protein Rich',
      className: 'bg-blue-50 text-blue-700 border-blue-200'
    });
  }

  // Popular Badge
  if (item.bestseller && badges.length < 3) {
    badges.push({
      text: 'Popular',
      className: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    });
  }

  return badges.slice(0, 2); // Limit to maximum 2 badges to keep layouts balanced
};

export default function MenuSection() {
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const scrollSpyRef = useRef<boolean>(true);
  const categoriesNavRef = useRef<HTMLDivElement>(null);

  // Filter menu items based on veg/non-veg filter and search query
  const filteredMenu = menuData.map(category => {
    const items = category.items.filter(item => {
      // Veg/Non-Veg Filter
      if (filterType === 'veg' && item.type !== 'veg') return false;
      if (filterType === 'non-veg' && item.type !== 'non-veg') return false;

      // Search Query Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }

      return true;
    });

    return { ...category, items };
  }).filter(category => category.items.length > 0);

  // Scrollspy logic to highlight active category pill on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSpyRef.current) return;

      const categoryElements = menuData.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200; // Offset for sticky headers

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const el = categoryElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          const id = el.id;
          setActiveCategory(id);
          
          // Center active pill in horizontally scrolling menu
          const pill = document.getElementById(`pill-${id}`);
          const navContainer = categoriesNavRef.current;
          if (pill && navContainer) {
            const containerWidth = navContainer.clientWidth;
            const pillLeft = pill.offsetLeft;
            const pillWidth = pill.clientWidth;
            navContainer.scrollTo({
              left: pillLeft - containerWidth / 2 + pillWidth / 2,
              behavior: 'smooth'
            });
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    scrollSpyRef.current = false;
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 150; // Combined sticky headers height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Reactivate scroll spy after scroll animation finishes
    setTimeout(() => {
      scrollSpyRef.current = true;
    }, 800);
  };

  // Launch WhatsApp order message for the selected dish
  const handleOrderClick = (item: MenuItem, variantName?: string) => {
    const phoneNumber = '917045714545';
    let message = `Hi Madras Parota, I would like to order the following dish from your digital menu:\n\n*${item.name}*`;
    
    if (variantName) {
      message += ` (${variantName} variant)`;
    }
    
    if (typeof item.price === 'number') {
      message += ` - ₹${item.price}`;
    } else if (variantName && item.price[variantName.toLowerCase() as keyof MenuItemPrice]) {
      message += ` - ₹${item.price[variantName.toLowerCase() as keyof MenuItemPrice]}`;
    } else {
      message += ` (Please customize)`;
    }

    message += `\n\nPlease let me know the preparation time. Thank you!`;
    
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="font-display font-extrabold text-brand-green text-3xl sm:text-4xl tracking-tight">
            Our Menu
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-brand-charcoal/70 text-sm sm:text-base mt-3 max-w-md">
            Explore our curated selection of genuine South Indian street food and traditional recipes.
          </p>
        </div>

        {/* Filters and Search Container (Height reduced, sticky, compact layouts) */}
        <div className="sticky top-[68px] z-30 bg-[#FAF8F5]/90 backdrop-blur-md pt-2.5 pb-2.5 border-b border-brand-green/5 shadow-sm -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 max-w-7xl mx-auto">
            
            {/* Veg / Non-Veg Segmented Control */}
            <div className="flex bg-white p-1 rounded-full border border-black/5 self-center md:self-auto shrink-0 shadow-sm">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200 ${
                  filterType === 'all'
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-brand-green'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('veg')}
                className={`px-4 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200 flex items-center gap-1 ${
                  filterType === 'veg'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-green-600'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 block border border-white" />
                Veg
              </button>
              <button
                onClick={() => setFilterType('non-veg')}
                className={`px-4 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200 flex items-center gap-1 ${
                  filterType === 'non-veg'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-brand-red'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red block border border-white" />
                Non-Veg
              </button>
            </div>

            {/* Search Box (Increased spacing, rounded-full) */}
            <div className="relative w-full md:max-w-xs shadow-sm rounded-full overflow-hidden border border-black/5 hover:border-brand-green/20 focus-within:border-brand-gold transition-colors duration-250 bg-white">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-2 bg-transparent font-body text-xs sm:text-sm outline-none text-brand-charcoal placeholder-brand-charcoal/40"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Sticky Horizontally Scrolling Category Pills (Below Filters) */}
          <div
            ref={categoriesNavRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mt-2 -mx-4 px-4 scroll-smooth"
          >
            {filteredMenu.map((category) => (
              <button
                key={category.id}
                id={`pill-${category.id}`}
                onClick={() => handleCategoryClick(category.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeCategory === category.id
                    ? 'active-pill shadow-sm border-brand-green bg-brand-green text-white'
                    : 'bg-white border-black/5 text-brand-charcoal/85 hover:border-brand-green/30 hover:text-brand-green'
                }`}
              >
                {categoryIcons[category.id] || <Utensils className="w-3 h-3" />}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Listings */}
        <div className="mt-12 space-y-16 md:space-y-24">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category) => (
              <div 
                key={category.id} 
                id={category.id} 
                className="scroll-mt-36 border-b border-black/5 pb-12 last:border-0 last:pb-0"
              >
                {/* Category Header */}
                <div className="flex flex-col items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-green/5 text-brand-gold shrink-0">
                      {categoryIcons[category.id] || <Utensils className="w-6 h-6" />}
                    </div>
                    <h3 className="font-display font-extrabold text-[#0A4225] text-2xl md:text-[32px] leading-none tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                  {/* Accent line under category */}
                  <div className="h-[3px] w-14 bg-gradient-to-r from-brand-gold via-green-600 to-transparent rounded-full mt-3 mb-2" />
                  <p className="font-body text-brand-charcoal/70 text-sm max-w-2xl leading-relaxed mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Items Grid (Desktop: 4, Laptop: 3, Tablet: 2, Mobile: 1) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {category.items.map((item, idx) => {
                    const badges = getDishBadges(item);
                    return (
                      <div
                        key={idx}
                        className="group relative flex flex-col justify-between rounded-[20px] bg-white border border-black/5 shadow-sm hover:shadow-[0_12px_24px_rgba(10,66,37,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                      >
                        {/* Top: Cover Food Image (16:9 aspect ratio) */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5 shrink-0">
                          <Image
                            src={getDishImage(item.name, category.id)}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                            loading="lazy"
                          />
                          
                          {/* Veg/Non-Veg FSSAI Badge Overlay */}
                          <div className="absolute top-3.5 right-3.5 z-10 p-1 rounded-md bg-white/95 shadow-sm border border-black/5 flex items-center justify-center">
                            <span 
                              className={`flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 border-2 p-0.5 rounded-sm bg-white ${
                                item.type === 'veg' ? 'border-green-600' : 'border-brand-red'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full block ${
                                item.type === 'veg' ? 'bg-green-600' : 'bg-brand-red'
                              }`} />
                            </span>
                          </div>
                        </div>

                        {/* Middle: Content Section */}
                        <div className="flex flex-col flex-grow p-5 justify-between">
                          <div>
                            {/* Dish Name */}
                            <h4 className="font-display font-extrabold text-[#0A4225] text-lg sm:text-[22px] leading-snug group-hover:text-brand-green transition-colors duration-200">
                              {item.name}
                            </h4>

                            {/* Dish Description */}
                            <p className="font-body text-brand-charcoal/70 text-xs sm:text-[15px] mt-2 leading-relaxed font-medium">
                              {item.description}
                            </p>
                          </div>

                          <div>
                            {/* Dynamic Badges Row */}
                            {badges.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {badges.map((badge, bIdx) => (
                                  <span
                                    key={bIdx}
                                    className={`inline-flex items-center text-[10px] sm:text-[12px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.className}`}
                                  >
                                    {badge.text}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Variant Prices List (If applicable) */}
                            {typeof item.price !== 'number' && (
                              <div className="flex flex-wrap gap-1.5 mt-3.5">
                                {Object.entries(item.price).map(([key, value]) => {
                                  if (value === undefined || isNaN(value)) return null;
                                  return (
                                    <button
                                      key={key}
                                      onClick={() => handleOrderClick(item, key)}
                                      className="inline-flex items-center bg-brand-gold/10 border border-brand-gold/20 text-[#0A4225] font-body font-bold text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full hover:scale-105 hover:bg-brand-gold hover:text-[#0A4225] transition-all duration-200 capitalize select-none"
                                    >
                                      {key}: <span className="font-extrabold ml-0.5 text-brand-green">₹{value}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom: Price & Add Button Row */}
                        <div className="flex items-center justify-between gap-3 p-5 pt-3 border-t border-black/5 bg-[#FCFBF9] shrink-0 mt-auto">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-brand-charcoal/50 font-bold uppercase tracking-wider">Price</span>
                            <span className="font-display font-extrabold text-[#0A4225] text-lg sm:text-[20px] leading-tight">
                              {typeof item.price === 'number' 
                                ? `₹${item.price}` 
                                : `₹${Math.min(...Object.values(item.price).filter((v): v is number => typeof v === 'number'))}+`
                              }
                            </span>
                          </div>
                          
                          <button
                            onClick={() => handleOrderClick(item)}
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#094A28] to-[#1F8B4C] hover:from-[#1F8B4C] hover:to-[#094A28] text-white rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_rgba(244,197,66,0.6)] shadow-sm select-none"
                          >
                            {typeof item.price === 'number' ? 'Add' : 'Customize'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            /* No Results State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="p-4 rounded-full bg-brand-cream/50 text-brand-green/45 mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <p className="font-display font-bold text-brand-green text-lg">No matching dishes found</p>
              <p className="font-body text-brand-charcoal/60 text-sm mt-2 max-w-xs">
                Try searching for another flavor or resetting the filters.
              </p>
              <button
                onClick={() => {
                  setFilterType('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 rounded-full border border-brand-green text-brand-green font-body font-bold text-xs hover:bg-brand-green hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
