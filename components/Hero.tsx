'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, BookOpen } from 'lucide-react';

export default function Hero() {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#menu');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-brand-cream/30"
    >
      {/* Background Subtle Watermark (Parota Spiral Motif) */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none text-brand-gold hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <path
            d="M 50,10 A 40,40 0 1,1 10,50 A 40,40 0 0,1 50,18 M 50,22 A 28,28 0 1,1 22,50 A 28,28 0 0,1 50,28 M 50,34 A 16,16 0 1,1 34,50 A 16,16 0 0,1 50,38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Veg / Non-Veg Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-white shadow-sm mb-6"
            >
              {/* Veg Indicator */}
              <span className="flex items-center justify-center w-4.5 h-4.5 border-2 border-green-600 p-0.5 rounded-sm bg-white">
                <span className="w-2 h-2 rounded-full bg-green-600 block" />
              </span>
              {/* Non-Veg Indicator */}
              <span className="flex items-center justify-center w-4.5 h-4.5 border-2 border-brand-red p-0.5 rounded-sm bg-white">
                <span className="w-2 h-2 rounded-full bg-brand-red block" />
              </span>
              <span className="font-body font-bold text-xs text-brand-green tracking-wide">
                VEG & NON-VEG
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-brand-green text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none"
            >
              MADRAS
              <br />
              <span className="text-brand-gold block mt-1">PAROTA</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-accent text-brand-red text-3xl sm:text-4xl mt-3 select-none"
            >
              Authentic South Indian Food
            </motion.p>

            {/* Hook Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-brand-charcoal/80 text-base sm:text-lg mt-6 max-w-md leading-relaxed"
            >
              Indulge in our legendary hand-layered flaky parotas, delicious parota rolls, and rich, slow-simmered Chettinad gravies cooked to perfection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <a
                href="#menu"
                onClick={handleScrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-green text-white font-body font-bold hover:bg-brand-green/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                View Full Menu
              </a>
              <a
                href="tel:+917045714545"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-brand-green font-body font-bold hover:bg-brand-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 shadow-md border border-brand-gold/30"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call +91 70457 14545
              </a>
            </motion.div>
          </div>

          {/* Hero Banner (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center z-10 w-full"
          >
            <div className="relative w-full max-w-2xl aspect-[1.78] rounded-2xl overflow-hidden shadow-xl border-4 border-brand-gold/25">
              <Image
                src="/images/hero-banner.png"
                alt="Madras Parota Banner depicting South Indian temple, Rajinikanth mascot holding flaky parotas, Chicken Rolls, Chicken 65, Masala Dosa, and Biryani"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
