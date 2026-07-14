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
      
      // Keep visible for 1.8s + 0.5s fade out transition
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1900);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Check accessibility preference for reduced motion
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
            {/* Glowing circle loader around logo */}
            {!prefersReducedMotion ? (
              <svg 
                className="absolute inset-0 w-full h-full text-brand-gold" 
                viewBox="0 0 100 100"
              >
                <defs>
                  {/* Neon Glow Filter */}
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" /> {/* Extra layer for stronger glow */}
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Thin background guide track */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke="#ffffff" 
                  strokeOpacity="0.08" 
                  strokeWidth="2" 
                  fill="transparent" 
                />
                
                {/* Animated glowing arc circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="70 200" // A clean sweep arc
                  fill="transparent"
                  filter="url(#glow)"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                  style={{ originX: '50px', originY: '50px' }}
                />
              </svg>
            ) : (
              // Fallback simple glowing indicator for accessibility
              <div className="absolute inset-0 w-full h-full rounded-full border-4 border-brand-gold/25 animate-pulse shadow-[0_0_15px_rgba(218,165,32,0.4)]" />
            )}

            {/* Pulsing Logo in the center */}
            <motion.div
              className="relative w-52 h-52 z-10 drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { 
                opacity: 1, 
                scale: [0.95, 1.02, 0.95],
              }}
              transition={prefersReducedMotion ? { duration: 0.6 } : {
                opacity: { duration: 0.6 },
                scale: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: 'easeInOut'
                }
              }}
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
          
          {/* Tagline below indicator */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-accent text-brand-gold text-2xl tracking-wider select-none">
              Authentic South Indian Food
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
