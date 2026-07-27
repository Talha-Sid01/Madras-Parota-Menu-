import React from 'react';

interface TraditionalPatternProps {
  className?: string;
  opacity?: number;
}

export default function TraditionalPattern({ className = '', opacity = 0.12 }: TraditionalPatternProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 1. Top Kolam Interlaced Loop Border */}
      <div className="absolute top-0 left-0 right-0 h-8 w-full overflow-hidden">
        <svg className="w-full h-8 text-brand-gold fill-none stroke-current" viewBox="0 0 1200 32" preserveAspectRatio="none" strokeWidth="1.2">
          <defs>
            <pattern id="topKolamPattern" width="60" height="32" patternUnits="userSpaceOnUse">
              {/* Kolam Dots */}
              <circle cx="15" cy="16" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="45" cy="16" r="1.5" fill="currentColor" stroke="none" />
              {/* Interlacing S-curves */}
              <path d="M 0 16 Q 15 2, 30 16 T 60 16" fill="none" />
              <path d="M 0 16 Q 15 30, 30 16 T 60 16" fill="none" />
              <path d="M 15 0 Q 30 16, 15 32" fill="none" strokeDasharray="2 2" />
              <path d="M 45 0 Q 60 16, 45 32" fill="none" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="1200" height="32" fill="url(#topKolamPattern)" />
        </svg>
      </div>

      {/* 2. Bottom Kolam Interlaced Loop Border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 w-full overflow-hidden">
        <svg className="w-full h-8 text-brand-gold fill-none stroke-current" viewBox="0 0 1200 32" preserveAspectRatio="none" strokeWidth="1.2">
          <defs>
            <pattern id="bottomKolamPattern" width="60" height="32" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="16" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="45" cy="16" r="1.5" fill="currentColor" stroke="none" />
              <path d="M 0 16 Q 15 2, 30 16 T 60 16" fill="none" />
              <path d="M 0 16 Q 15 30, 30 16 T 60 16" fill="none" />
              <path d="M 15 0 Q 30 16, 15 32" fill="none" strokeDasharray="2 2" />
              <path d="M 45 0 Q 60 16, 45 32" fill="none" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="1200" height="32" fill="url(#bottomKolamPattern)" />
        </svg>
      </div>

      {/* 3. Centered Lotus Medallion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] text-brand-gold fill-none stroke-current" viewBox="0 0 200 200" strokeWidth="1.2">
          {/* Outer Ring System */}
          <circle cx="100" cy="100" r="92" strokeDasharray="2 3" />
          <circle cx="100" cy="100" r="85" />
          <circle cx="100" cy="100" r="78" strokeDasharray="4 2" />

          {/* 12 Radiating Lotus Petals */}
          <g strokeWidth="1.2">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 100 100)`}>
                <path d="M 100 22 Q 112 50 100 78 Q 88 50 100 22 Z" fill="none" />
                <path d="M 100 30 Q 107 50 100 70 Q 93 50 100 30 Z" strokeDasharray="1.5 1.5" fill="none" />
              </g>
            ))}
          </g>

          {/* Inner Concentric Lotus Core */}
          <circle cx="100" cy="100" r="42" />
          <circle cx="100" cy="100" r="32" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="18" />
          <circle cx="100" cy="100" r="6" />
        </svg>
      </div>

      {/* 4. Paisley (Mango / Manga Leaf) Corner Motifs */}
      {/* Top Left Corner */}
      <div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36 hidden min-[375px]:block">
        <svg className="w-full h-full text-brand-gold fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.2">
          <path d="M 10 90 C 10 40, 45 10, 75 10 C 90 10, 95 28, 80 40 C 60 52, 30 62, 30 88 C 30 105, 68 105, 78 88 C 88 72, 72 58, 62 64" fill="none" />
          <path d="M 22 80 C 22 50, 50 24, 70 24" strokeDasharray="2 2" fill="none" />
          <circle cx="75" cy="10" r="3" />
          <circle cx="62" cy="64" r="2" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-4 right-4 w-24 h-24 sm:w-36 sm:h-36 hidden min-[375px]:block transform scale-x-[-1]">
        <svg className="w-full h-full text-brand-gold fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.2">
          <path d="M 10 90 C 10 40, 45 10, 75 10 C 90 10, 95 28, 80 40 C 60 52, 30 62, 30 88 C 30 105, 68 105, 78 88 C 88 72, 72 58, 62 64" fill="none" />
          <path d="M 22 80 C 22 50, 50 24, 70 24" strokeDasharray="2 2" fill="none" />
          <circle cx="75" cy="10" r="3" />
          <circle cx="62" cy="64" r="2" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-36 sm:h-36 hidden min-[375px]:block transform scale-y-[-1]">
        <svg className="w-full h-full text-brand-gold fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.2">
          <path d="M 10 90 C 10 40, 45 10, 75 10 C 90 10, 95 28, 80 40 C 60 52, 30 62, 30 88 C 30 105, 68 105, 78 88 C 88 72, 72 58, 62 64" fill="none" />
          <path d="M 22 80 C 22 50, 50 24, 70 24" strokeDasharray="2 2" fill="none" />
          <circle cx="75" cy="10" r="3" />
          <circle cx="62" cy="64" r="2" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 w-24 h-24 sm:w-36 sm:h-36 hidden min-[375px]:block transform scale-x-[-1] scale-y-[-1]">
        <svg className="w-full h-full text-brand-gold fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.2">
          <path d="M 10 90 C 10 40, 45 10, 75 10 C 90 10, 95 28, 80 40 C 60 52, 30 62, 30 88 C 30 105, 68 105, 78 88 C 88 72, 72 58, 62 64" fill="none" />
          <path d="M 22 80 C 22 50, 50 24, 70 24" strokeDasharray="2 2" fill="none" />
          <circle cx="75" cy="10" r="3" />
          <circle cx="62" cy="64" r="2" />
        </svg>
      </div>
    </div>
  );
}
