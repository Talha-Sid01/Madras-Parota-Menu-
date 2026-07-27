'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  Grid as GridIcon,
  Search,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'parota-rolls': <UtensilsCrossed className="w-[18px] h-[18px]" />,
  'parota-gravy-nonveg': <Layers className="w-[18px] h-[18px]" />,
  'kothu-parota': <Layers className="w-[18px] h-[18px]" />,
  'egg-chicken-omelette': <Flame className="w-[18px] h-[18px]" />,
  'starters-gravy': <Flame className="w-[18px] h-[18px]" />,
  'omelette-parota': <Egg className="w-[18px] h-[18px]" />,
  'chefs-specials': <Sparkles className="w-[18px] h-[18px]" />,
  'biryani': <Sparkles className="w-[18px] h-[18px]" />,
  'extras-sides': <PlusCircle className="w-[18px] h-[18px]" />,
  'dosa-nonveg': <ChefHat className="w-[18px] h-[18px]" />,
  'parota-veg-gravy': <Leaf className="w-[18px] h-[18px]" />,
  'idli-vada': <Disc className="w-[18px] h-[18px]" />,
  'uttappam': <GridIcon className="w-[18px] h-[18px]" />,
  'dosa-veg': <Compass className="w-[18px] h-[18px]" />,
  'beverages': <Coffee className="w-[18px] h-[18px]" />
};

export default function MenuSection() {
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || '');
  const scrollSpyRef = useRef<boolean>(true);
  const categoriesNavRef = useRef<HTMLDivElement>(null);

  // Filter menu items based on veg/non-veg filter and search query
  const filteredMenu = menuData.map(category => {
    const items = category.items.filter(item => {
      // Veg/Non-Veg Filter
      if (filterType === 'veg' && !item.veg) return false;
      if (filterType === 'non-veg' && item.veg) return false;

      // Search Query Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.desc ? item.desc.toLowerCase().includes(query) : false;
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

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="font-display font-extrabold text-brand-gold text-3xl sm:text-4xl tracking-tight">
            Our Menu
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-white/80 text-sm sm:text-base mt-3 max-w-md">
            Explore our curated selection of genuine South Indian street food and traditional recipes.
          </p>
        </div>

        {/* Filters and Search Container */}
        <div className="sticky top-[68px] z-30 bg-brand-green-dark backdrop-blur-md pt-3 pb-2.5 border-b border-brand-gold/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 max-w-7xl mx-auto">
            
            {/* Veg / Non-Veg Segmented Control */}
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 self-center md:self-auto shrink-0 shadow-inner">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full font-body text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-brand-gold text-brand-green-dark shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('veg')}
                className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full font-body text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  filterType === 'veg'
                    ? 'bg-green-700 text-white shadow-sm'
                    : 'text-white/85 hover:text-green-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 block border border-white" />
                Veg
              </button>
              <button
                onClick={() => setFilterType('non-veg')}
                className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full font-body text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  filterType === 'non-veg'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-white/85 hover:text-brand-red'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-red block border border-white" />
                Non-Veg
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:max-w-sm shadow-inner rounded-full overflow-hidden border border-white/10 hover:border-brand-gold/30 focus-within:border-brand-gold/50 transition-all duration-300 bg-white/5">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-white/45" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-2.5 bg-transparent font-body text-xs sm:text-sm md:text-base outline-none text-white placeholder-white/45"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Sticky Horizontally Scrolling Category Pills */}
          <div
            ref={categoriesNavRef}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 mt-2 -mx-4 px-4 scroll-smooth"
          >
            {filteredMenu.map((category) => (
              <button
                key={category.id}
                id={`pill-${category.id}`}
                onClick={() => handleCategoryClick(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full border text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  activeCategory === category.id
                    ? 'border-brand-gold bg-gradient-to-r from-brand-gold to-brand-gold-hover text-brand-green-dark shadow-[0_2px_10px_rgba(201,162,39,0.25)]'
                    : 'bg-white/5 border-white/10 text-white/80 hover:border-brand-gold hover:text-brand-gold hover:bg-white/10'
                }`}
              >
                {categoryIcons[category.id] || <Utensils className="w-[18px] h-[18px]" />}
                {category.title}
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
                className="scroll-mt-36 border-b border-white/5 pb-12 last:border-0 last:pb-0"
              >
                {/* Category Header */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="border-b border-brand-gold/20 pb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-brand-gold/15 text-brand-gold shrink-0">
                      {categoryIcons[category.id] || <Utensils className="w-6 h-6" />}
                    </div>
                    <h3 className="font-display font-extrabold text-brand-gold text-2xl md:text-[32px] leading-none tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Luxury Gold Ornament Divider under category */}
                  <div className="flex items-center gap-2 mt-3.5 mb-2.5 w-full max-w-xs select-none">
                    <div className="h-[1.2px] bg-gradient-to-r from-brand-gold/10 via-brand-gold/50 to-brand-gold flex-grow" />
                    <span className="text-brand-gold text-[9px] tracking-widest font-bold">✦ ❖ ✦</span>
                    <div className="h-[1.2px] bg-gradient-to-l from-brand-gold/10 via-brand-gold/50 to-brand-gold flex-grow" />
                  </div>
                  
                  {category.note && (
                    <p className="font-body text-white/80 text-xs sm:text-sm italic mt-1.5 max-w-2xl leading-relaxed">
                      {category.note}
                    </p>
                  )}
                </motion.div>

                {/* Items list using leaf background cards */}
                <div className="grid grid-cols-1 gap-4">
                  {category.items.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 22, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25), ease: 'easeOut' }}
                      className="relative overflow-hidden rounded-2xl border-2 border-brand-gold/80 bg-white text-brand-green-dark p-3.5 sm:p-4 grid grid-cols-12 items-center gap-3 shadow-[0_0_18px_rgba(201,162,39,0.35)] hover:shadow-[0_0_30px_rgba(201,162,39,0.65)] hover:border-brand-gold transition-all duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.02]"
                    >
                      {/* Left: Item Details & Variants */}
                      <div className={`${
                        item.price !== undefined
                          ? "col-span-8 sm:col-span-9"
                          : "col-span-12"
                      } flex gap-2.5 items-start min-w-0`}>
                        {/* Veg/Non-veg Dot Indicator */}
                        <span className={`inline-flex items-center justify-center w-3.5 h-3.5 border border-brand-green-dark/20 bg-white shrink-0 mt-1.5`}>
                          <span className={`w-1.5 h-1.5 rounded-full block ${
                            item.veg ? 'bg-green-600' : 'bg-[#80220F]'
                          }`} />
                        </span>
                        
                        <div className="min-w-0 flex-grow">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="font-display font-black text-brand-green-dark text-xl sm:text-2xl leading-snug">
                              {item.name}
                            </h4>
                            {item.special && (
                              <span className="inline-flex items-center text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-brand-gold text-brand-green-dark font-display border border-brand-gold/30 shadow-sm shrink-0">
                                ✦ Madras Special
                              </span>
                            )}
                          </div>

                          {/* Variant Price Row just below the name */}
                          {item.prices !== undefined && (
                            <div className="flex flex-row flex-wrap items-center gap-1.5 mt-2 mb-0.5">
                              {category.variants?.map((variant, vIdx) => {
                                const price = item.prices ? item.prices[vIdx] : null;
                                if (price === null || price === undefined) return null;

                                return (
                                  <div
                                    key={variant}
                                    className="inline-flex items-center gap-1 bg-brand-green-dark/5 border border-brand-green-dark/15 rounded px-2 py-0.5 text-[10px] sm:text-[11px] text-brand-green-dark font-bold whitespace-nowrap"
                                  >
                                    <span className="font-body capitalize text-[9px] sm:text-[10px] mr-1 text-brand-green-dark font-extrabold">{variant}:</span>
                                    <span className="font-body text-brand-red font-black text-xs sm:text-sm">₹{price}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {item.desc && (
                            <p className="font-body text-brand-green-dark/95 text-[14px] sm:text-[15px] font-bold mt-2 leading-relaxed line-clamp-3">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right: Pricing Info (Only for single-price items) */}
                      {item.price !== undefined && (
                        <div className="col-span-4 sm:col-span-3 flex items-center justify-end text-right">
                          <span className="font-body font-extrabold text-brand-red text-xl sm:text-2xl">
                            ₹{item.price}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            /* No Results State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="p-4 rounded-full bg-white/5 text-brand-gold/60 mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <p className="font-display font-bold text-white text-lg">No matching dishes found</p>
              <p className="font-body text-white/70 text-sm mt-2 max-w-xs">
                Try searching for another flavor or resetting the filters.
              </p>
              <button
                onClick={() => {
                  setFilterType('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 rounded-full border border-brand-gold text-brand-gold font-body font-bold text-xs hover:bg-brand-gold hover:text-[#0C3C26] transition-colors cursor-pointer"
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
