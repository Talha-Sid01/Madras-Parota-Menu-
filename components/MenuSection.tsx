'use client';

import React, { useState, useEffect, useRef } from 'react';
import { menuData } from '@/lib/menu-data';
import { MenuItem, MenuCategory } from '@/lib/types';
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
  Grid,
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
  uttappam: <Grid className="w-4 h-4" />,
  beverages: <Coffee className="w-4 h-4" />
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
      const scrollPosition = window.scrollY + 180; // Offset for sticky headers

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
      const offset = 140; // Combined sticky headers height
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

  const renderPrice = (price: number | MenuItem['price']) => {
    if (typeof price === 'number') {
      return (
        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-[#E2B32B] to-[#F4C542] border border-white/35 text-brand-green font-display font-extrabold text-xs sm:text-sm px-2.5 py-1 rounded-[10px] shadow-[0_2px_6px_rgba(244,197,66,0.3)] hover:shadow-[0_4px_10px_rgba(244,197,66,0.45)] hover:scale-105 transition-all duration-200 select-none">
          ₹{price}
        </span>
      );
    }

    // If it's an object of price chips (variants)
    const variants = Object.entries(price) as [string, number][];
    return (
      <div className="flex flex-wrap gap-1.5 mt-1.5">
        {variants.map(([key, value]) => {
          if (value === undefined || isNaN(value)) return null;
          return (
            <span 
              key={key}
              className="inline-flex items-center bg-gradient-to-tr from-[#E2B32B] to-[#F4C542] border border-white/35 text-brand-green font-body font-bold text-[10px] md:text-[11px] px-2 py-0.5 rounded-[10px] shadow-[0_2px_4px_rgba(244,197,66,0.25)] hover:shadow-[0_4px_8px_rgba(244,197,66,0.45)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 capitalize select-none"
            >
              {key}: <span className="font-extrabold ml-0.5">₹{value}</span>
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-display font-extrabold text-brand-green text-3xl sm:text-4xl tracking-tight">
            Our Menu
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-brand-charcoal/70 text-sm sm:text-base mt-3 max-w-md">
            Explore our curated selection of genuine South Indian street food and traditional recipes.
          </p>
        </div>

        {/* Filters and Search Container */}
        <div className="sticky top-[68px] z-30 bg-white pt-4 pb-3 border-b border-brand-green/5 shadow-sm -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto">
            {/* Veg / Non-Veg Segmented Control */}
            <div className="flex bg-brand-cream/40 p-1 rounded-full border border-brand-green/5 self-center md:self-auto shrink-0 shadow-inner">
              <button
                onClick={() => setFilterType('all')}
                className={`px-5 py-2 rounded-full font-body text-xs font-bold transition-all duration-200 ${
                  filterType === 'all'
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-brand-green'
                }`}
              >
                All Dishes
              </button>
              <button
                onClick={() => setFilterType('veg')}
                className={`px-5 py-2 rounded-full font-body text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  filterType === 'veg'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-green-600'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 block border border-white" />
                Pure Veg
              </button>
              <button
                onClick={() => setFilterType('non-veg')}
                className={`px-5 py-2 rounded-full font-body text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  filterType === 'non-veg'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-brand-charcoal/75 hover:text-brand-red'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-red block border border-white" />
                Non-Veg
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:max-w-xs shadow-sm rounded-full overflow-hidden border border-brand-green/10 hover:border-brand-green/25 focus-within:border-brand-gold transition-colors duration-250 bg-brand-cream/10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search dish name or flavor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-2.5 bg-transparent font-body text-sm outline-none text-brand-charcoal placeholder-brand-charcoal/40"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Sticky Horizontally Scrolling Category Pills (Below Filters) */}
          <div
            ref={categoriesNavRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 mt-3 -mx-4 px-4 scroll-smooth"
          >
            {filteredMenu.map((category) => (
              <button
                key={category.id}
                id={`pill-${category.id}`}
                onClick={() => handleCategoryClick(category.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeCategory === category.id
                    ? 'active-pill shadow-sm'
                    : 'bg-white border-brand-green/10 text-brand-charcoal/80 hover:border-brand-green/30 hover:text-brand-green'
                }`}
              >
                {categoryIcons[category.id] || <Utensils className="w-3.5 h-3.5" />}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Listings */}
        <div className="mt-6 md:mt-8 space-y-10 md:space-y-16">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category) => (
              <div 
                key={category.id} 
                id={category.id} 
                className="scroll-mt-36 border-b border-brand-green/5 pb-8 md:pb-12 last:border-0 last:pb-0"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 md:gap-3 mb-2">
                  <div className="p-2 md:p-2.5 rounded-lg bg-brand-green/5 text-brand-gold shrink-0">
                    {categoryIcons[category.id] || <Utensils className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-brand-green text-lg md:text-2xl leading-none">
                      {category.name}
                    </h3>
                    <p className="font-body text-brand-charcoal/60 text-xs sm:text-sm mt-1.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4 md:mt-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative flex flex-col justify-between p-3 md:p-4.5 rounded-xl md:rounded-2xl border-2 border-green-500 hover:border-brand-gold shadow-[0_0_10px_rgba(34,197,94,0.45)] hover:shadow-[0_0_18px_rgba(218,165,32,0.65)] transition-all duration-250"
                      style={{
                        backgroundImage: "linear-gradient(rgba(12, 60, 38, 0.5), rgba(12, 60, 38, 0.65)), url('/images/banana-leaf.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Top Row: Name and Veg Indicator */}
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="font-display font-bold text-white text-base leading-snug group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </h4>
                        
                        {/* Veg/Non-Veg FSSAI Symbol */}
                        <span 
                          className={`flex-shrink-0 flex items-center justify-center w-4 h-4 border-2 p-0.5 rounded-sm bg-white mt-0.5 ${
                            item.type === 'veg' ? 'border-green-600' : 'border-brand-red'
                          }`}
                          title={item.type === 'veg' ? 'Pure Veg' : 'Non Veg'}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full block ${
                            item.type === 'veg' ? 'bg-green-600' : 'bg-brand-red'
                          }`} />
                        </span>
                      </div>

                      {/* Bottom Row: Price and Bestseller badge */}
                      <div className="mt-3 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between gap-1.5 flex-wrap">
                          {/* Prices (Single or Chips) */}
                          <div className="w-full">
                            {renderPrice(item.price)}
                          </div>
                          
                          {/* Bestseller Badge */}
                          {item.bestseller && (
                            <span className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-white font-body tracking-wider uppercase bg-white/10 px-2 py-0.5 rounded border border-white/20 mt-1">
                              ★ Bestseller
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
                Try searching for another flavor or resetting the veg/non-veg filter.
              </p>
              <button
                onClick={() => {
                  setFilterType('all');
                  setSearchQuery('');
                }}
                className="mt-5 px-5 py-2.5 rounded-full bg-brand-green text-white font-body font-bold text-xs hover:bg-brand-green/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
