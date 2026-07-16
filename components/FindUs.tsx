import React from 'react';
import { MapPin, Phone, MessageSquare, Compass } from 'lucide-react';

export default function FindUs() {
  const address = "New Link Rd, opp Evershine Mall, Malad, Chincholi Bunder, Malad West, Mumbai, Maharashtra 400064";
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=New+Link+Rd%2C+opp+Evershine+Mall%2C+Malad%2C+Chincholi+Bunder%2C+Malad+West%2C+Mumbai%2C+Maharashtra+400064";
  
  // Maps embed URL based on query
  const mapEmbedUrl = "https://maps.google.com/maps?q=New%20Link%20Rd%2C%20opp%20Evershine%20Mall%2C%20Malad%2C%20Chincholi%20Bunder%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display font-extrabold text-brand-green text-3xl sm:text-4xl tracking-tight">
            Find Us
          </h2>
          <div className="h-1 w-12 bg-brand-gold rounded-full mt-4" />
          <p className="font-body text-brand-charcoal/70 text-sm sm:text-base mt-3 max-w-md">
            Visit us in Malad West or get in touch for takeaway and table inquiries.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Embed (Left) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-sm border border-brand-green/10 min-h-[350px] lg:min-h-auto relative">
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing Madras Parota Location in Malad West Mumbai"
            />
          </div>

          {/* Contact Cards (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-brand-cream/15 border border-brand-green/5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-brand-green/5 text-brand-gold shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-green text-lg">Our Address</h3>
                <p className="font-body text-brand-charcoal/80 text-sm mt-2 leading-relaxed">
                  {address}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-brand-gold hover:text-brand-gold-hover hover:underline mt-3 uppercase tracking-wider"
                >
                  <Compass className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Call Card */}
            <div className="p-6 rounded-2xl bg-brand-cream/15 border border-brand-green/5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-brand-green/5 text-brand-gold shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-green text-lg">Call to Order / Inquiries</h3>
                <p className="font-body text-brand-charcoal/80 text-sm mt-2">
                  Call us on either of our direct lines for quick takeaway orders:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
                  <a
                    href="tel:+917045714545"
                    className="font-body font-extrabold text-brand-green hover:text-brand-gold text-base transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-gold block" />
                    +91 70457 14545
                  </a>
                  <a
                    href="tel:+917045794545"
                    className="font-body font-extrabold text-brand-green hover:text-brand-gold text-base transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-gold block" />
                    +91 70457 94545
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-brand-cream/15 border border-brand-green/5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-brand-green/5 text-brand-gold shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-green text-lg">Chat on WhatsApp</h3>
                <p className="font-body text-brand-charcoal/80 text-sm mt-2 leading-relaxed">
                  Have questions about menu availability? Send us a quick text.
                </p>
                <a
                  href="https://wa.me/917045714545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-body font-bold text-xs hover:bg-green-700 active:scale-95 transition-all duration-200 mt-4 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
