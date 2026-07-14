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
    <section className="border-y border-brand-green/10 bg-brand-cream/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-4 rounded-xl transition-all duration-350 hover:bg-white hover:shadow-sm"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-brand-green/5 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-green text-base leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-brand-charcoal/70 text-xs sm:text-sm mt-1 leading-normal">
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
