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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-cream/30 flex items-center justify-center min-h-[70vh]"
    >
      {/* Background Subtle Watermark (Parota Spiral Motif) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none text-brand-gold select-none">
        <svg viewBox="0 0 100 100" className="w-[500px] h-[500px] animate-[spin_120s_linear_infinite]">
          <path
            d="M 50,10 A 40,40 0 1,1 10,50 A 40,40 0 0,1 50,18 M 50,22 A 28,28 0 1,1 22,50 A 28,28 0 0,1 50,28 M 50,34 A 16,16 0 1,1 34,50 A 16,16 0 0,1 50,38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Centered Logo with Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-[384px] h-[384px] sm:w-[460px] sm:h-[460px] lg:w-[512px] lg:h-[512px] mb-8 flex items-center justify-center"
        >
          {/* Warm spotlight glow behind logo */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-brand-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          
          <Image
            src="/images/logo.png"
            alt="Madras Parota Logo"
            fill
            priority
            sizes="(max-width: 640px) 384px, (max-width: 1024px) 460px, 512px"
            className="object-contain drop-shadow-[0_15px_30px_rgba(8,69,47,0.15)] select-none animate-float-subtle"
          />
        </motion.div>

        {/* Veg / Non-Veg Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-[#FFF9EF]/90 shadow-[0_4px_12px_rgba(201,162,39,0.06)] mb-2"
        >
          {/* Veg Indicator */}
          <span className="flex items-center justify-center w-4 h-4 border-2 border-green-600 p-0.5 rounded-sm bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 block" />
          </span>
          {/* Non-Veg Indicator */}
          <span className="flex items-center justify-center w-4 h-4 border-2 border-brand-red p-0.5 rounded-sm bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red block" />
          </span>
          <span className="font-body font-bold text-xs text-brand-green-dark tracking-wide">
            VEG & NON-VEG
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display font-extrabold text-brand-green-dark text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none"
        >
          MADRAS <span className="bg-gradient-to-r from-brand-gold to-brand-gold-hover bg-clip-text text-transparent drop-shadow-sm font-bold">PAROTA</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-accent text-brand-red text-3xl sm:text-4xl mt-3 select-none"
        >
          Authentic South Indian Food
        </motion.p>

        {/* Hook Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-body text-brand-charcoal/80 text-base sm:text-lg mt-6 max-w-xl leading-relaxed"
        >
          Indulge in our legendary hand-layered flaky parotas, delicious parota rolls, and rich, slow-simmered Chettinad gravies cooked to perfection.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center"
        >
          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-green to-[#08452F] text-white font-body font-bold shadow-[0_4px_20px_rgba(8,69,47,0.25)] hover:shadow-[0_4px_30px_rgba(8,69,47,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 border border-brand-green/20"
          >
            <BookOpen className="w-4 h-4" />
            View Full Menu
          </a>
          <a
            href="tel:+917045714545"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-hover hover:from-brand-gold-hover hover:to-brand-gold text-brand-green-dark font-body font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(201,162,39,0.2)] hover:shadow-[0_4px_30px_rgba(201,162,39,0.4)] border border-brand-gold/30"
          >
            <Phone className="w-4 h-4 fill-current" />
            Call +91 70457 14545
          </a>
        </motion.div>

      </div>
    </section>
  );
}
