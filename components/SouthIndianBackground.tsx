'use client';

import React, { useEffect, useState } from 'react';

// Interfaces for floating elements to trigger random positions on the client side
interface FloatingSpice {
  id: number;
  type: 'cardamom' | 'star-anise' | 'cinnamon' | 'clove' | 'pepper';
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  rotate: string;
}

interface FloatingLeaf {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  rotate: string;
}

interface GoldenParticle {
  id: number;
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
}

export default function SouthIndianBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<GoldenParticle[]>([]);
  const [spices, setSpices] = useState<FloatingSpice[]>([]);
  const [leaves, setLeaves] = useState<FloatingLeaf[]>([]);

  useEffect(() => {
    setMounted(true);

    // Generate random values on the client only to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 15 + 10}s`,
    }));

    const spiceTypes: FloatingSpice['type'][] = ['cardamom', 'star-anise', 'cinnamon', 'clove', 'pepper'];
    const generatedSpices = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      type: spiceTypes[i % spiceTypes.length],
      // Position spices mostly in the side margins to avoid blocking menu text
      left: i % 2 === 0 ? `${Math.random() * 12 + 2}%` : `${Math.random() * 12 + 86}%`,
      top: `${Math.random() * 85 + 5}%`,
      size: Math.random() * 20 + 20, // 20px to 40px
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 10 + 10}s`,
      rotate: `${Math.random() * 360}deg`,
    }));

    const generatedLeaves = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: i % 2 === 0 ? `${Math.random() * 15 + 2}%` : `${Math.random() * 15 + 83}%`,
      top: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 25 + 25, // 25px to 50px
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 12 + 8}s`,
      rotate: `${Math.random() * 360}deg`,
    }));

    setParticles(generatedParticles);
    setSpices(generatedSpices);
    setLeaves(generatedLeaves);
  }, []);

  if (!mounted) {
    // Return base dark green background during SSR to prevent flash of white
    return (
      <div 
        className="fixed inset-0 w-full h-full z-[-10]" 
        style={{ background: '#072a1a' }} 
      />
    );
  }

  // SVG elements for individual spices
  const renderSpiceSVG = (type: FloatingSpice['type']) => {
    switch (type) {
      case 'cardamom':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Cardamom pod shape */}
            <path
              d="M 50,15 C 20,40 20,70 50,85 C 80,70 80,40 50,15 Z"
              fill="url(#cardamom-grad)"
              stroke="#5d662c"
              strokeWidth="2"
            />
            {/* Outer ridges */}
            <path d="M 50,15 C 38,40 38,70 50,85" stroke="#5d662c" strokeWidth="1.5" strokeDasharray="2 1" />
            <path d="M 50,15 C 62,40 62,70 50,85" stroke="#5d662c" strokeWidth="1.5" strokeDasharray="2 1" />
            <path d="M 50,15 L 50,85" stroke="#5d662c" strokeWidth="1" opacity="0.6" />
            <defs>
              <linearGradient id="cardamom-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b3bd7d" />
                <stop offset="100%" stopColor="#8d9954" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'star-anise':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* 8-pointed star anise */}
            <g transform="translate(50,50)">
              {Array.from({ length: 8 }).map((_, idx) => (
                <g key={idx} transform={`rotate(${idx * 45})`}>
                  {/* Single carpel */}
                  <path
                    d="M 0,0 C -8,-25 -6,-40 0,-45 C 6,-40 8,-25 0,0 Z"
                    fill="url(#anise-grad)"
                    stroke="#421a08"
                    strokeWidth="1.5"
                  />
                  {/* Seed inside */}
                  <ellipse cx="0" cy="-28" rx="3" ry="5" fill="#d97736" stroke="#5c2409" strokeWidth="1" />
                  <path d="M 0,0 L 0,-20" stroke="#3d1504" strokeWidth="1" />
                </g>
              ))}
              <circle cx="0" cy="0" r="4" fill="#310f02" />
            </g>
            <defs>
              <linearGradient id="anise-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a3614" />
                <stop offset="100%" stopColor="#4f2008" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'cinnamon':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Cinnamon bark roll */}
            <rect
              x="30"
              y="10"
              width="40"
              height="80"
              rx="4"
              fill="url(#cinnamon-grad)"
              stroke="#40200f"
              strokeWidth="2"
            />
            {/* inner bark rolls */}
            <line x1="38" y1="10" x2="38" y2="90" stroke="#33180a" strokeWidth="2.5" />
            <line x1="46" y1="10" x2="46" y2="90" stroke="#522a15" strokeWidth="1.5" />
            <line x1="62" y1="10" x2="62" y2="90" stroke="#33180a" strokeWidth="2" />
            <path d="M 30,10 C 35,5 65,5 70,10" stroke="#40200f" strokeWidth="2" fill="none" />
            <defs>
              <linearGradient id="cinnamon-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5e2e16" />
                <stop offset="30%" stopColor="#874723" />
                <stop offset="70%" stopColor="#70391b" />
                <stop offset="100%" stopColor="#4d230d" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'clove':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Clove stem */}
            <path
              d="M 45,90 L 45,45 C 38,40 38,35 45,30 L 55,30 C 62,35 62,40 55,45 L 55,90 Z"
              fill="url(#clove-grad)"
              stroke="#26140d"
              strokeWidth="2"
            />
            {/* Clove head bud */}
            <circle cx="50" cy="22" r="14" fill="#1f0f0a" stroke="#26140d" strokeWidth="1.5" />
            {/* Small crowns at head base */}
            <path d="M 36,30 L 32,24 L 40,26" fill="#4d281a" stroke="#26140d" strokeWidth="1" />
            <path d="M 64,30 L 68,24 L 60,26" fill="#4d281a" stroke="#26140d" strokeWidth="1" />
            <defs>
              <linearGradient id="clove-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4a2518" />
                <stop offset="100%" stopColor="#2b140c" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'pepper':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Textured black peppercorn sphere */}
            <circle cx="50" cy="50" r="40" fill="url(#pepper-grad)" stroke="#141211" strokeWidth="2.5" />
            {/* Surface bumps */}
            <circle cx="35" cy="35" r="5" fill="#141211" opacity="0.4" />
            <circle cx="60" cy="40" r="4" fill="#141211" opacity="0.4" />
            <circle cx="45" cy="65" r="5" fill="#141211" opacity="0.4" />
            <circle cx="30" cy="55" r="3" fill="#141211" opacity="0.4" />
            <circle cx="65" cy="60" r="4" fill="#141211" opacity="0.4" />
            <defs>
              <radialGradient id="pepper-grad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#403c39" />
                <stop offset="60%" stopColor="#211f1e" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full z-[-10] overflow-hidden pointer-events-none select-none">
      
      {/* LAYER 1: Deep Dark Emerald to Forest Green Radial Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #0d462c 0%, #062b1a 50%, #02140c 100%)',
        }}
      />

      {/* LAYER 2: Large Banana Leaf Textures (Low Opacity Backdrop Overlay) */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/banana-leaf.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* LAYER 8: Soft Diagonally Entering Morning Sunlight Rays (Warm Dawn Sunrise Light) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-brand-gold/2 to-transparent mix-blend-screen opacity-70"
        style={{
          background: 'linear-gradient(135deg, rgba(218, 165, 32, 0.12) 0%, rgba(218, 165, 32, 0.02) 40%, rgba(0,0,0,0) 80%)'
        }}
      />

      {/* LAYER 3: Handcrafted Kolam (Rangoli) Artwork in corners and borders */}
      {/* Top-Left Corner Kolam */}
      <div className="absolute top-6 left-6 w-32 h-32 md:w-48 md:h-48 opacity-[0.14] text-brand-gold">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="50" cy="50" r="10" />
          <path d="M 50,10 C 60,35 60,65 50,90 C 40,65 40,35 50,10 Z" />
          <path d="M 10,50 C 35,60 65,60 90,50 C 65,40 35,40 10,50 Z" />
          <path d="M 22,22 C 45,35 65,55 78,78 C 55,65 35,45 22,22 Z" />
          <path d="M 78,22 C 55,35 35,55 22,78 C 45,65 65,45 78,22 Z" />
          {/* Outer Ring & Petals */}
          <circle cx="50" cy="50" r="35" strokeDasharray="3 3" />
          <path d="M 50,5 C 53,15 47,15 50,5 Z" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M 50,2 C 55,12 45,12 50,2"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </div>

      {/* Top-Right Corner Kolam */}
      <div className="absolute top-6 right-6 w-32 h-32 md:w-48 md:h-48 opacity-[0.14] text-brand-gold">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="50" cy="50" r="10" />
          <path d="M 50,10 C 60,35 60,65 50,90 C 40,65 40,35 50,10 Z" />
          <path d="M 10,50 C 35,60 65,60 90,50 C 65,40 35,40 10,50 Z" />
          <path d="M 22,22 C 45,35 65,55 78,78 C 55,65 35,45 22,22 Z" />
          <path d="M 78,22 C 55,35 35,55 22,78 C 45,65 65,45 78,22 Z" />
          <circle cx="50" cy="50" r="35" strokeDasharray="3 3" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M 50,2 C 55,12 45,12 50,2"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </div>

      {/* LAYER 4: South Indian Temple Pillars Framing the Sides (Desktop Only for Layout Safety) */}
      {/* Left Temple Pillar */}
      <div className="hidden xl:block fixed left-0 top-0 bottom-0 w-[120px] h-full opacity-[0.22] text-brand-gold">
        <svg viewBox="0 0 100 800" className="w-full h-full" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Pillar Bracket Capital (Bodhigai) */}
          <path d="M 10,20 L 90,20 L 90,40 L 75,40 L 75,60 L 65,60 L 65,90 L 35,90 L 35,60 L 25,60 L 25,40 L 10,40 Z" fill="#082b1a" />
          <path d="M 10,30 L 90,30 M 25,48 L 75,48 M 35,75 L 65,75" />
          {/* Carvings on Capital */}
          <path d="M 15,30 Q 20,40 25,30 M 85,30 Q 80,40 75,30" />
          
          {/* Upper Mouldings */}
          <rect x="35" y="90" width="30" height="20" fill="#082b1a" />
          <path d="M 30,110 L 70,110 L 65,130 L 35,130 Z" fill="#082b1a" />
          
          {/* Long Shaft */}
          <rect x="38" y="130" width="24" height="540" fill="#082b1a" />
          {/* Flutes and bands on shaft */}
          <line x1="43" y1="130" x2="43" y2="670" strokeOpacity="0.5" />
          <line x1="50" y1="130" x2="50" y2="670" strokeOpacity="0.7" />
          <line x1="57" y1="130" x2="57" y2="670" strokeOpacity="0.5" />
          
          {/* Ornamental rings on shaft */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <g key={idx} transform={`translate(0, ${180 + idx * 100})`}>
              <rect x="34" y="0" width="32" height="12" rx="2" fill="#0c3c26" />
              <path d="M 34,6 L 66,6" strokeWidth="1" />
              <circle cx="50" cy="6" r="3" fill="#DAA520" />
            </g>
          ))}
          
          {/* Pillar Base (Pedestal) */}
          <path d="M 35,670 L 65,670 L 70,690 L 30,690 Z" fill="#082b1a" />
          <rect x="25" y="690" width="50" height="40" fill="#082b1a" />
          <path d="M 15,730 L 85,730 L 90,770 L 10,770 Z" fill="#082b1a" />
          <rect x="10" y="770" width="80" height="30" fill="#082b1a" />
          <path d="M 10,770 L 90,770 M 15,750 L 85,750" />
        </svg>
      </div>

      {/* Right Temple Pillar */}
      <div className="hidden xl:block fixed right-0 top-0 bottom-0 w-[120px] h-full opacity-[0.22] text-brand-gold">
        <svg viewBox="0 0 100 800" className="w-full h-full" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Pillar Bracket Capital (Bodhigai) */}
          <path d="M 10,20 L 90,20 L 90,40 L 75,40 L 75,60 L 65,60 L 65,90 L 35,90 L 35,60 L 25,60 L 25,40 L 10,40 Z" fill="#082b1a" />
          <path d="M 10,30 L 90,30 M 25,48 L 75,48 M 35,75 L 65,75" />
          <path d="M 15,30 Q 20,40 25,30 M 85,30 Q 80,40 75,30" />
          
          {/* Upper Mouldings */}
          <rect x="35" y="90" width="30" height="20" fill="#082b1a" />
          <path d="M 30,110 L 70,110 L 65,130 L 35,130 Z" fill="#082b1a" />
          
          {/* Long Shaft */}
          <rect x="38" y="130" width="24" height="540" fill="#082b1a" />
          <line x1="43" y1="130" x2="43" y2="670" strokeOpacity="0.5" />
          <line x1="50" y1="130" x2="50" y2="670" strokeOpacity="0.7" />
          <line x1="57" y1="130" x2="57" y2="670" strokeOpacity="0.5" />
          
          {/* Ornamental rings */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <g key={idx} transform={`translate(0, ${180 + idx * 100})`}>
              <rect x="34" y="0" width="32" height="12" rx="2" fill="#0c3c26" />
              <path d="M 34,6 L 66,6" strokeWidth="1" />
              <circle cx="50" cy="6" r="3" fill="#DAA520" />
            </g>
          ))}
          
          {/* Base */}
          <path d="M 35,670 L 65,670 L 70,690 L 30,690 Z" fill="#082b1a" />
          <rect x="25" y="690" width="50" height="40" fill="#082b1a" />
          <path d="M 15,730 L 85,730 L 90,770 L 10,770 Z" fill="#082b1a" />
          <rect x="10" y="770" width="80" height="30" fill="#082b1a" />
          <path d="M 10,730 L 90,730 M 15,750 L 85,750" />
        </svg>
      </div>

      {/* Decorative Temple Arch Garland at Viewport Top Edge */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[30px] md:h-[60px] opacity-[0.18] text-brand-gold">
        <svg viewBox="0 0 1000 60" className="w-full h-full" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Repeating arch/toran motif */}
          <path d="M 0,0 C 25,30 75,30 100,0 C 125,30 175,30 200,0 C 225,30 275,30 300,0 C 325,30 375,30 400,0 C 425,30 475,30 500,0 C 525,30 575,30 600,0 C 625,30 675,30 700,0 C 725,30 775,30 800,0 C 825,30 875,30 900,0 C 925,30 975,30 1000,0" />
          {/* Hanging jasmine flowers under each arch peak */}
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 100 + 50}, 20)`}>
              <line x1="0" y1="0" x2="0" y2="15" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="0" cy="15" r="3" fill="#ffffff" stroke="#DAA520" strokeWidth="0.8" />
              <circle cx="0" cy="22" r="2" fill="#ffffff" stroke="#DAA520" strokeWidth="0.8" />
            </g>
          ))}
        </svg>
      </div>

      {/* LAYER 7: Floating/Rising Golden Dust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-brand-gold/30 animate-float-particle pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* LAYER 5: Soft Floating Curry Leaves */}
      {leaves.map((l) => (
        <div
          key={l.id}
          className="absolute opacity-[0.06] md:opacity-[0.12] animate-float-slow pointer-events-none"
          style={{
            left: l.left,
            top: l.top,
            width: l.size,
            height: l.size,
            animationDelay: l.delay,
            animationDuration: l.duration,
            transform: `rotate(${l.rotate})`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-green-400">
            {/* Highly detailed Curry Leaf path */}
            <path
              d="M 50,10 C 15,40 30,75 50,90 C 70,75 85,40 50,10 Z"
              fill="url(#curry-grad)"
              stroke="#1e5c3f"
              strokeWidth="2.5"
            />
            {/* Center vein */}
            <path d="M 50,10 L 50,90" stroke="#8ae5b4" strokeWidth="2" opacity="0.85" />
            {/* Side veins */}
            <path d="M 50,30 C 35,38 28,45 22,50" stroke="#8ae5b4" strokeWidth="1.2" opacity="0.7" />
            <path d="M 50,30 C 65,38 72,45 78,50" stroke="#8ae5b4" strokeWidth="1.2" opacity="0.7" />
            <path d="M 50,50 C 38,58 32,65 26,70" stroke="#8ae5b4" strokeWidth="1.2" opacity="0.7" />
            <path d="M 50,50 C 62,58 68,65 74,70" stroke="#8ae5b4" strokeWidth="1.2" opacity="0.7" />
            <path d="M 50,70 C 42,76 38,82 34,84" stroke="#8ae5b4" strokeWidth="1" opacity="0.5" />
            <path d="M 50,70 C 58,76 62,82 66,84" stroke="#8ae5b4" strokeWidth="1" opacity="0.5" />
            <defs>
              <linearGradient id="curry-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e5c3f" />
                <stop offset="50%" stopColor="#0c3c26" />
                <stop offset="100%" stopColor="#051f12" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* LAYER 6: Small Decorative Floating Spices in margins */}
      {spices.map((s) => (
        <div
          key={s.id}
          className="absolute opacity-[0.06] md:opacity-[0.11] animate-float-slow pointer-events-none"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            transform: `rotate(${s.rotate})`,
          }}
        >
          {renderSpiceSVG(s.type)}
        </div>
      ))}

      {/* LAYER 9: Light Steam Patterns (Rising from bottom viewport) */}
      <div className="absolute bottom-0 left-[15%] w-24 h-64 opacity-[0.03] text-white pointer-events-none animate-rise-steam">
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full blur-[2px]">
          <path d="M 50,200 Q 20,150 50,100 T 50,0" />
        </svg>
      </div>
      <div 
        className="absolute bottom-0 right-[25%] w-32 h-80 opacity-[0.03] text-white pointer-events-none animate-rise-steam"
        style={{ animationDelay: '3s', animationDuration: '9s' }}
      >
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full blur-[3px]">
          <path d="M 30,200 Q 60,140 30,80 T 70,0" />
        </svg>
      </div>
      <div 
        className="absolute bottom-0 left-[45%] w-28 h-72 opacity-[0.025] text-white pointer-events-none animate-rise-steam"
        style={{ animationDelay: '6s', animationDuration: '11s' }}
      >
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full blur-[2px]">
          <path d="M 50,200 Q 70,160 40,110 T 60,0" />
        </svg>
      </div>

      {/* LAYER 10: Traditional Brass Oil Lamps (Nilavilakku) standing in page corners */}
      {/* Bottom-Left Brass Lamp */}
      <div className="fixed bottom-6 left-3 md:bottom-12 md:left-14 z-[-4] opacity-[0.3] md:opacity-[0.4] hover:opacity-[0.8] transition-opacity duration-500 scale-75 md:scale-100 origin-bottom-left">
        <svg viewBox="0 0 100 300" className="w-20 h-60 md:w-32 md:h-96 text-brand-gold fill-none stroke-current" strokeWidth="1.5">
          {/* Base tiered steps */}
          <path d="M 15,290 L 85,290 L 80,275 L 20,275 Z" fill="#c59b27" stroke="#7d5d0d" />
          <path d="M 22,275 L 78,275 L 72,260 L 28,260 Z" fill="#b0871a" stroke="#7d5d0d" />
          <path d="M 32,260 L 68,260 L 64,248 L 36,248 Z" fill="#c59b27" stroke="#7d5d0d" />
          
          {/* Lower Stem Support */}
          <path d="M 44,248 L 44,220 C 44,215 56,215 56,220 L 56,248 Z" fill="#9c7512" stroke="#7d5d0d" />
          
          {/* Central Stem Column */}
          <path d="M 46,220 L 46,90 L 54,90 L 54,220 Z" fill="#c59b27" stroke="#7d5d0d" />
          {/* Decorative rings around stem */}
          <ellipse cx="50" cy="180" rx="9" ry="4" fill="#e0b53d" stroke="#7d5d0d" />
          <ellipse cx="50" cy="140" rx="7" ry="3.5" fill="#e0b53d" stroke="#7d5d0d" />
          <ellipse cx="50" cy="105" rx="9" ry="4" fill="#e0b53d" stroke="#7d5d0d" />
          
          {/* Top oil bowl */}
          <path d="M 20,90 Q 20,70 50,70 Q 80,70 80,90 C 80,105 20,105 20,90 Z" fill="#c59b27" stroke="#7d5d0d" />
          <ellipse cx="50" cy="80" rx="22" ry="6" fill="#7d5d0d" stroke="#4d3703" />

          {/* Central spindle tip */}
          <path d="M 47,70 L 47,45 C 47,42 53,42 53,45 L 53,70 Z" fill="#9c7512" stroke="#7d5d0d" />
          
          {/* Burning flame wicks around the lamp bowl */}
          {/* Main central flame */}
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 50,45 C 46,38 46,25 50,15 C 54,25 54,38 50,45 Z"
            strokeWidth="1"
          />
          {/* Left flame */}
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 22,86 C 18,82 18,75 22,68 C 26,75 26,82 22,86 Z"
            strokeWidth="1"
            style={{ animationDelay: '0.4s' }}
          />
          {/* Right flame */}
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 78,86 C 74,82 74,75 78,68 C 82,75 82,82 78,86 Z"
            strokeWidth="1"
            style={{ animationDelay: '0.8s' }}
          />
          
          {/* Warm gold ambient halo behind the flame */}
          <circle cx="50" cy="30" r="28" fill="#DAA520" opacity="0.08" className="blur-xl pointer-events-none" />
        </svg>
      </div>

      {/* Bottom-Right Brass Lamp */}
      <div className="fixed bottom-6 right-3 md:bottom-12 md:right-14 z-[-4] opacity-[0.3] md:opacity-[0.4] hover:opacity-[0.8] transition-opacity duration-500 scale-75 md:scale-100 origin-bottom-right">
        <svg viewBox="0 0 100 300" className="w-20 h-60 md:w-32 md:h-96 text-brand-gold fill-none stroke-current" strokeWidth="1.5">
          <path d="M 15,290 L 85,290 L 80,275 L 20,275 Z" fill="#c59b27" stroke="#7d5d0d" />
          <path d="M 22,275 L 78,275 L 72,260 L 28,260 Z" fill="#b0871a" stroke="#7d5d0d" />
          <path d="M 32,260 L 68,260 L 64,248 L 36,248 Z" fill="#c59b27" stroke="#7d5d0d" />
          <path d="M 44,248 L 44,220 C 44,215 56,215 56,220 L 56,248 Z" fill="#9c7512" stroke="#7d5d0d" />
          <path d="M 46,220 L 46,90 L 54,90 L 54,220 Z" fill="#c59b27" stroke="#7d5d0d" />
          <ellipse cx="50" cy="180" rx="9" ry="4" fill="#e0b53d" stroke="#7d5d0d" />
          <ellipse cx="50" cy="140" rx="7" ry="3.5" fill="#e0b53d" stroke="#7d5d0d" />
          <ellipse cx="50" cy="105" rx="9" ry="4" fill="#e0b53d" stroke="#7d5d0d" />
          <path d="M 20,90 Q 20,70 50,70 Q 80,70 80,90 C 80,105 20,105 20,90 Z" fill="#c59b27" stroke="#7d5d0d" />
          <ellipse cx="50" cy="80" rx="22" ry="6" fill="#7d5d0d" stroke="#4d3703" />
          <path d="M 47,70 L 47,45 C 47,42 53,42 53,45 L 53,70 Z" fill="#9c7512" stroke="#7d5d0d" />
          
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 50,45 C 46,38 46,25 50,15 C 54,25 54,38 50,45 Z"
            strokeWidth="1"
          />
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 22,86 C 18,82 18,75 22,68 C 26,75 26,82 22,86 Z"
            strokeWidth="1"
            style={{ animationDelay: '0.5s' }}
          />
          <path 
            className="animate-flicker-flame fill-amber-500 stroke-amber-300"
            d="M 78,86 C 74,82 74,75 78,68 C 82,75 82,82 78,86 Z"
            strokeWidth="1"
            style={{ animationDelay: '0.2s' }}
          />
          <circle cx="50" cy="30" r="28" fill="#DAA520" opacity="0.08" className="blur-xl pointer-events-none" />
        </svg>
      </div>

    </div>
  );
}
