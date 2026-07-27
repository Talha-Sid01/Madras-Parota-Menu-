import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Compass, Instagram } from 'lucide-react';

export default function Footer() {
  const address = "New Link Rd, opp Evershine Mall, Malad, Chincholi Bunder, Malad West, Mumbai - 400064";
  const directionsUrl = "https://share.google/5GnIQRnsboSGdbPpo";
  const instagramUrl = "https://instagram.com/madrasparota";
  const whatsappUrl = "https://wa.me/917045794545";

  return (
    <footer className="bg-brand-green text-white pt-16 pb-28 md:pb-16 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.png"
                  alt="Madras Parota Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-xl tracking-wider leading-none">
                  MADRAS
                </span>
                <span className="font-display font-bold text-brand-gold text-base tracking-widest leading-none mt-1">
                  PAROTA
                </span>
              </div>
            </div>
            <p className="font-accent text-brand-gold text-xl mt-4 select-none">
              Authentic South Indian Food
            </p>
            <p className="font-body text-white/70 text-sm mt-4 leading-relaxed max-w-sm">
              Savor the taste of Chennai street-style parotas, rolls, and rich Chettinad curries. Freshly hand-layered and cooked to order daily.
            </p>
            <p className="font-body text-white/40 text-[11px] mt-3 max-w-sm italic">
              Prices inclusive of applicable taxes. Subject to change without notice.
            </p>
          </div>

          {/* Column 2: Hours & Contact */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display font-bold text-brand-gold text-lg tracking-wide">
              Hours & Takeaway
            </h3>
            
            {/* Hours Block */}
            <div className="mt-4">
              <span className="text-white/60 text-xs font-body font-bold uppercase tracking-wider block">Opening Hours</span>
              <span className="font-body text-base mt-1 block">
                11:00 AM – 11:00 PM (All Days)
              </span>
            </div>

            {/* Direct Lines */}
            <div className="mt-6">
              <span className="text-white/60 text-xs font-body font-bold uppercase tracking-wider block">Call to Order</span>
              <div className="flex flex-col gap-1 mt-1 font-body">
                <a href="tel:+917045794545" className="hover:text-brand-gold hover:underline transition-colors block text-base font-semibold">
                  +91 70457 94545
                </a>
                <a href="tel:+917045714545" className="hover:text-brand-gold hover:underline transition-colors block text-base font-semibold">
                  +91 70457 14545
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Address & Social */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display font-bold text-brand-gold text-lg tracking-wide">
              Our Location
            </h3>
            <p className="font-body text-white/70 text-sm mt-4 leading-relaxed max-w-xs">
              {address}
            </p>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-4 mt-6">
              {/* Phone call quick link */}
              <a
                href="tel:+917045794545"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-gold transition-all duration-200"
                aria-label="Call Restaurant"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>

              {/* WhatsApp direct chat link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-gold transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>

              {/* Maps navigation link */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-gold transition-all duration-200"
                aria-label="Get Google Maps Directions"
              >
                <Compass className="w-5 h-5" />
              </a>

              {/* Instagram Profile link */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-gold transition-all duration-200"
                aria-label="Visit Instagram Page"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-white/45 font-body">
          <p>© {new Date().getFullYear()} Madras Parota. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Malad West, Mumbai • Developed for Madras Parota
          </p>
        </div>

      </div>
    </footer>
  );
}
