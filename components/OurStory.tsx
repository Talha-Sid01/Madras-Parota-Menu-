import React from 'react';
import { Quote } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-cream/10 border-t border-brand-green/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-3.5 rounded-full bg-brand-gold/10 text-brand-gold">
            <Quote className="w-6 h-6 fill-current" />
          </div>
        </div>
        
        <h2 className="font-display font-extrabold text-brand-green-dark text-3xl sm:text-4xl tracking-wide">
          Our Story
        </h2>
        
        {/* Luxury Gold Ornament Divider */}
        <div className="flex items-center gap-2 mt-4 mb-6 w-full max-w-[180px] mx-auto select-none">
          <div className="h-[1.2px] bg-gradient-to-r from-brand-gold/10 via-brand-gold/50 to-brand-gold flex-grow" />
          <span className="text-brand-gold text-[9px] tracking-widest font-bold">✦ ❖ ✦</span>
          <div className="h-[1.2px] bg-gradient-to-l from-brand-gold/10 via-brand-gold/50 to-brand-gold flex-grow" />
        </div>
        
        {/* Paragraphs */}
        <div className="mt-8 space-y-6 animate-float-subtle">
          <p className="font-display font-medium text-brand-green-dark text-lg sm:text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto drop-shadow-sm">
            "Born on the streets of Chennai and perfected in Malad, Madras Parota brings you hand-layered parotas, slow-cooked Chettinad gravies, and temple-town South Indian flavours — made fresh, served hot, every single day."
          </p>
          <p className="font-body text-brand-charcoal/75 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Every layered parota we serve is hand-layered and clapped on a screaming-hot griddle to achieve that signature flaky texture. Our slow-cooked gravies are simmered daily with house-ground masalas, offering an authentic taste of traditional Chennai street food right here in Mumbai.
          </p>
        </div>
      </div>
    </section>
  );
}
