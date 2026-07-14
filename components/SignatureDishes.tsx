'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Stand-in photography details for the 4 featured dishes.
// These are sourced from Unsplash under the free license and optimized.
// Owner note: Replace these placeholder URLs with actual photos of restaurant items in next.config.ts / src.
const signatureDishes = [
  {
    name: 'Chicken Parota Roll',
    description: 'Tender spiced chicken pieces rolled in a flaky, warm lacha parota.',
    price: 160,
    type: 'non-veg',
    imageUrl: 'https://images.unsplash.com/photo-1628189401701-40b39665def7?auto=format&fit=crop&q=80&w=600',
    alt: 'Crispy, warm hand-layered parota roll stuffed with spiced chicken masala chunks'
  },
  {
    name: 'Chicken 65',
    description: 'Crisp, deep-fried chicken bites marinated in curry leaves and spices.',
    price: 180,
    type: 'non-veg',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
    alt: 'Deep-fried golden chicken pieces garnished with fried curry leaves and green chillies'
  },
  {
    name: 'Masala Dosa',
    description: 'Crispy rice crepe stuffed with a spiced potato-onion mash.',
    price: 80, // Base regular price is 80
    type: 'veg',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600',
    alt: 'Golden-crispy Masala Dosa served with coconut chutneys and hot sambar bowl'
  },
  {
    name: 'South Indian Chicken Dum Biryani',
    description: 'Aromatic dum-cooked basmati rice served with four chicken pieces and raita.',
    price: 200,
    type: 'non-veg',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    alt: 'Traditional copper pot layered basmati rice chicken dum biryani with hard boiled egg'
  }
];

export default function SignatureDishes() {
  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Customer Favourites</span>
          </div>
          <h2 className="font-display font-extrabold text-brand-green text-3xl sm:text-4xl tracking-tight">
            Signature Dishes
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-brand-charcoal/70 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
            Taste the dishes that make us famous. Made with fresh ingredients and our secret blend of Chettinad spices.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col h-full bg-brand-cream/20 rounded-2xl overflow-hidden shadow-sm border border-brand-green/5 hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden group">
                <Image
                  src={dish.imageUrl}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Veg / Non-Veg Indicator Overlay */}
                <div className="absolute top-4 right-4 z-10 p-1.5 rounded-lg bg-white/95 shadow-sm border border-brand-green/5 flex items-center justify-center">
                  <span className={`flex items-center justify-center w-4 h-4 border-2 p-0.5 rounded-sm bg-white ${
                    dish.type === 'veg' ? 'border-green-600' : 'border-brand-red'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full block ${
                      dish.type === 'veg' ? 'bg-green-600' : 'bg-brand-red'
                    }`} />
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-display font-bold text-brand-green text-lg leading-snug">
                    {dish.name}
                  </h3>
                  <span className="font-body font-extrabold text-brand-green text-base shrink-0">
                    ₹{dish.price}
                  </span>
                </div>
                <p className="font-body text-brand-charcoal/70 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="mt-auto pt-4 border-t border-brand-green/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold font-body tracking-wider uppercase">
                    ★ Best Seller
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
