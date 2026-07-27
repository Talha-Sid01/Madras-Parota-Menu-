import React from 'react';
import { ChefHat, Flame, Leaf, Utensils } from 'lucide-react';

export default function Highlights() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-gold" />,
      title: "Veg & Non-Veg Options",
      description: "Separate kitchen prep and counters for pure veg items"
    },
    {
      icon: <Flame className="w-6 h-6 text-brand-gold" />,
      title: "Chettinad-Style Gravies",
      description: "Rich, aromatic in-house slow-cooked spice gravies"
    },
    {
      icon: <ChefHat className="w-6 h-6 text-brand-gold" />,
      title: "Fresh, Made-to-Order",
      description: "Hand-rolled parotas clapped fresh on the hot griddle"
    },
    {
      icon: <Utensils className="w-6 h-6 text-brand-gold" />,
      title: "Dine-in & Takeaway",
      description: "Quick service for quick dining or hot, packed takeaway"
    }
  ];

  return (
    <section className="border-y border-brand-green/10 bg-brand-cream/10 py-12 relative overflow-hidden">
      {/* Decorative center spotlight */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-5 rounded-2xl border border-brand-gold/10 bg-brand-sandalwood/40 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-cream hover:shadow-[0_10px_30px_rgba(201,162,39,0.08)] hover:border-brand-gold/30"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-brand-green-dark/5 border border-brand-gold/15 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-green-dark text-base leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-brand-charcoal/75 text-xs sm:text-sm mt-1.5 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
