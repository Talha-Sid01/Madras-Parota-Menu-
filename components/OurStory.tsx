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
        
        <h2 className="font-display font-extrabold text-brand-green text-3xl sm:text-4xl tracking-tight">
          Our Story
        </h2>
        <div className="h-1 w-12 bg-brand-gold rounded-full mt-4 mx-auto" />
        
        {/* Paragraphs */}
        <div className="mt-8 space-y-6">
          <p className="font-display font-medium text-brand-green text-lg sm:text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto">
            "Born on the streets of Chennai and perfected in Malad, Madras Parota brings you hand-layered parotas, slow-cooked Chettinad gravies, and temple-town South Indian flavours — made fresh, served hot, every single day."
          </p>
          <p className="font-body text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Every layered parota we serve is hand-layered and clapped on a screaming-hot griddle to achieve that signature flaky texture. Our slow-cooked gravies are simmered daily with house-ground masalas, offering an authentic taste of traditional Chennai street food right here in Mumbai.
          </p>
        </div>
      </div>
    </section>
  );
}
