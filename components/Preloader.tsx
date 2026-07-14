'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasSeen = sessionStorage.getItem('preloader_seen');
    if (!hasSeen) {
      setIsVisible(true);
      sessionStorage.setItem('preloader_seen', 'true');
      
      // Minimum visible time (1.5s) + fade animation duration (0.5s)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1600);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-green"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          role="dialog"
          aria-modal="true"
          aria-busy={isVisible}
          aria-label="Loading Madras Parota Menu"
        >
          <div className="relative flex items-center justify-center w-72 h-72">
            {/* Parota Spiral Rotating Indicator */}
            {!prefersReducedMotion ? (
              <motion.svg
                className="absolute inset-0 w-full h-full text-brand-gold opacity-80"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              >
                {/* outer spiral segment */}
                <path
                  d="M 50,10 A 40,40 0 1,1 10,50 A 40,40 0 0,1 50,18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* inner spiral segment */}
                <path
                  d="M 50,22 A 28,28 0 1,1 22,50 A 28,28 0 0,1 50,28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="80 30"
                />
                {/* core spiral segment */}
                <path
                  d="M 50,34 A 16,16 0 1,1 34,50 A 16,16 0 0,1 50,38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="40 15"
                />
              </motion.svg>
            ) : (
              <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-brand-gold animate-pulse" />
            )}

            {/* Logo Wrapper */}
            <motion.div
              className="relative w-56 h-56 z-10"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/images/logo.png"
                alt="Madras Parota Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="font-accent text-brand-gold text-2xl tracking-wide">Authentic South Indian Food</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
