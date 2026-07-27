'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasSeen = sessionStorage.getItem('preloader_seen');
    if (!hasSeen) {
      setIsVisible(true);
      sessionStorage.setItem('preloader_seen', 'true');
      
      const duration = 1800; // Total duration in ms
      const intervalTime = 30; // Step size
      const steps = duration / intervalTime;
      let currentStep = 0;

      const progressInterval = setInterval(() => {
        currentStep++;
        const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
        setProgress(nextProgress);

        if (currentStep >= steps) {
          clearInterval(progressInterval);
          // Wait briefly at 100% then fade out
          setTimeout(() => {
            setIsVisible(false);
          }, 250);
        }
      }, intervalTime);

      return () => {
        clearInterval(progressInterval);
      };
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#08452F] via-[#052b1d] to-[#031d13] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          role="dialog"
          aria-modal="true"
          aria-busy={isVisible}
          aria-label="Loading Madras Parota Menu"
        >
          {/* Central Glowing Spotlight */}
          <div className="absolute inset-0 bg-radial-gradient from-brand-gold/10 via-transparent to-transparent pointer-events-none z-0" />

          {/* Intricate Concentric Kolam Mandala Watermark in background */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none z-0">
              <svg className="w-full max-w-[650px] h-auto text-brand-gold fill-none stroke-current animate-float-subtle" viewBox="0 0 100 100" strokeWidth="0.5">
                <circle cx="50" cy="50" r="46" strokeDasharray="1.5 2" />
                <circle cx="50" cy="50" r="36" />
                <circle cx="50" cy="50" r="26" strokeDasharray="1 3" />
                <path d="M 50 3 L 64 36 L 97 50 L 64 64 L 50 97 L 36 64 L 3 50 L 36 36 Z" />
                <path d="M 50 14 L 60 40 L 86 50 L 60 60 L 50 86 L 40 60 L 14 50 L 40 40 Z" strokeDasharray="1.5 1.5" />
                <circle cx="50" cy="50" r="6" />
              </svg>
            </div>
          )}

          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Logo Container with Rotators */}
            <div className="relative flex items-center justify-center w-72 h-72">
              {/* Concentric Glowing circular loading arcs */}
              {!prefersReducedMotion && (
                <svg 
                  className="absolute inset-0 w-full h-full text-brand-gold" 
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background Track Circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="43" 
                    stroke="#ffffff" 
                    strokeOpacity="0.06" 
                    strokeWidth="1.5" 
                    fill="transparent" 
                  />
                  
                  {/* Outer Fast Ring - Clockwise */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="43"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="50 180"
                    fill="transparent"
                    filter="url(#gold-glow)"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    style={{ originX: '50px', originY: '50px' }}
                  />
                </svg>
              )}

              {/* Pulsing Logo in the center */}
              <motion.div
                className="relative w-52 h-52 z-10 drop-shadow-[0_0_25px_rgba(201,162,39,0.35)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { 
                  opacity: 1, 
                  scale: [0, 1.25, 0.94, 1.03, 1],
                }}
                transition={prefersReducedMotion ? { duration: 0.6 } : {
                  opacity: { duration: 0.4 },
                  scale: {
                    duration: 1.2,
                    ease: 'easeOut',
                    times: [0, 0.4, 0.7, 0.9, 1]
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

            {/* Restaurant Branded Name */}
            <motion.h1
              className="font-display font-black text-white text-3xl tracking-widest uppercase mt-4 select-none drop-shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Madras Parota
            </motion.h1>
            
            {/* Tagline */}
            <motion.div 
              className="mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-accent text-brand-gold text-2xl tracking-wider select-none">
                Authentic South Indian Food
              </p>
            </motion.div>

            {/* Progress Bar (Liquid Fill Effect) */}
            <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden mt-6 relative z-10 border border-white/5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold shadow-[0_0_8px_rgba(201,162,39,0.75)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Glowing Percentage Counter */}
            <motion.div
              className="mt-2.5 text-brand-gold/75 font-body font-black text-[10px] tracking-widest uppercase select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LOADING {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
