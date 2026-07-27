'use client';

import React from 'react';
import { Star, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoogleReviewBanner() {
  const reviewUrl = "https://g.page/r/CXqBoA5QDXgJEAI/review";

  return (
    <section className="py-8 md:py-12 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-[#08452F] to-[#042418] p-6 sm:p-8 md:p-10 text-center shadow-[0_15px_35px_rgba(201,162,39,0.18)]"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brand-gold/30 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-brand-gold/30 rounded-br-lg pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4 select-none animate-float-subtle">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6.5 sm:h-6.5 fill-brand-gold text-brand-gold drop-shadow-[0_2px_8px_rgba(201,162,39,0.4)]" />
            ))}
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-wide leading-tight">
            Love Our South Indian Flavours?
          </h3>
          
          {/* Discount Offer Highlight */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-brand-gold text-brand-green-dark border border-brand-gold/40 shadow-md">
            <span className="font-body font-black text-xs sm:text-sm uppercase tracking-wider">
              ✦ Get 10% Discount On Your Bill ✦
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-body text-white/80 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Support our family restaurant by sharing a quick Google review. Show it to your server during billing to receive your discount!
          </p>

          {/* Button CTA */}
          <div className="mt-8">
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-hover text-brand-green-dark font-body font-black text-sm tracking-wide shadow-[0_4px_20px_rgba(201,162,39,0.3)] hover:shadow-[0_8px_25px_rgba(201,162,39,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Write a Google Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
