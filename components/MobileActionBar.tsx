import React from 'react';
import { Phone, MessageSquare, Compass } from 'lucide-react';

export default function MobileActionBar() {
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Shop+No.+13%2F14%2C+Ground+Floor%2C+Vasant+Nagar+Co-op.+Society%2C+Chincholi+Bunder%2C+Malad+Link+Road%2C+Malad+West+400064";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-green/10 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden">
      <div className="flex h-16 items-stretch">
        
        {/* Call Button */}
        <a
          href="tel:+917045714545"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-brand-green text-white font-body font-bold text-xs active:bg-brand-green/90 transition-colors"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span>Call Now</span>
        </a>

        {/* Divider */}
        <div className="w-[1px] bg-white/20 self-stretch my-2" />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917045714545"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-green-600 text-white font-body font-bold text-xs active:bg-green-700 transition-colors"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-[1px] bg-brand-green/10 self-stretch my-2" />

        {/* Directions Button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-brand-gold text-brand-green font-body font-bold text-xs active:bg-brand-gold-hover transition-colors"
        >
          <Compass className="w-5 h-5" />
          <span>Directions</span>
        </a>

      </div>
    </div>
  );
}
