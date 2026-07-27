'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Sourced direct JPG assets from the user's repository folder
const signatureDishes = [
  {
    name: 'Chettinad Chicken Curry',
    imageUrl: '/images/Chettinnad Chicken Curry.jpeg', // double 'n' matches public folder file
    alt: 'Authentic rich Chettinad Chicken Curry cooked in fresh ground spices'
  },
  {
    name: 'Chicken 65',
    imageUrl: '/images/Chicken 65.jpeg',
    alt: 'Crisp deep-fried spicy chicken bites garnished with curry leaves'
  },
  {
    name: 'Chicken Kizhi Parota',
    imageUrl: '/images/Chicken Kizhi Parota.jpeg',
    alt: 'Spiced chicken layered inside parota, wrapped and steamed in banana leaf'
  },
  {
    name: 'Chicken Parota Roll',
    imageUrl: '/images/Chicken Parota Roll.jpeg',
    alt: 'Golden flaky parota roll packed with tender chicken masala'
  },
  {
    name: 'Kori Roti',
    imageUrl: '/images/Kori Roti.jpeg',
    alt: 'Crispy thin rice wafers served alongside rich South Indian chicken gravy'
  },
  {
    name: 'Neer Dosa',
    imageUrl: '/images/Neer Dosa.jpeg',
    alt: 'Lacy, paper-thin melt-in-the-mouth soft neer dosas'
  },
  {
    name: 'Nool Parota',
    imageUrl: '/images/Nool parota.jpeg', // lowercase 'p' matches public folder file
    alt: 'Crispy layered stringy nool parota cooked on hot griddle'
  }
];

export default function SignatureDishes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Automatically cycle active item index to create sequential flashing highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % signatureDishes.length);
    }, 2500); // Shifts focus every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll container to center the active dish card
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    const container = containerRef.current;

    if (activeItem && container) {
      const containerWidth = container.clientWidth;
      const itemOffsetLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.clientWidth;

      // Scroll to position active card right in the center
      container.scrollTo({
        left: itemOffsetLeft - containerWidth / 2 + itemWidth / 2,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 animate-float-subtle">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-3 border border-brand-gold/20">
            <Sparkles className="w-4 h-4 fill-current animate-pulse" />
            <span>Customer Favourites</span>
          </div>
          <h2 className="font-display font-extrabold text-brand-green-dark text-3xl sm:text-4xl tracking-wide">
            Signature Dishes
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-brand-charcoal/75 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
            Take a look at our most popular items. Hand-cooked with fresh local ingredients and traditional recipes.
          </p>
        </div>

        {/* Horizontal Slider Viewport */}
        <div 
          ref={containerRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar py-8 px-4 md:px-12 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`flex flex-col flex-shrink-0 w-[270px] sm:w-[310px] h-[350px] rounded-2xl overflow-hidden border transition-all duration-500 select-none scroll-snap-align-center ${
                activeIndex === index
                  ? 'border-brand-gold bg-brand-cream shadow-[0_15px_35px_rgba(201,162,39,0.22)] scale-105 opacity-100 z-10'
                  : 'border-brand-gold/10 bg-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.01)] opacity-40 scale-95'
              }`}
              style={{
                scrollSnapAlign: 'center'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-[250px] overflow-hidden bg-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />
                <Image
                  src={dish.imageUrl}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 270px, 310px"
                  className={`object-cover ${activeIndex === index ? 'animate-float-subtle' : ''}`}
                  loading="lazy"
                />
              </div>

              {/* Text Content (No Pricing) */}
              <div className="flex flex-col justify-center items-center flex-grow p-4 text-center">
                <h3 className="font-display font-bold text-brand-green-dark text-base sm:text-lg leading-snug">
                  {dish.name}
                </h3>
                {activeIndex === index && (
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-brand-gold font-body tracking-wider uppercase mt-1.5"
                  >
                    ★ Signature Dish
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
