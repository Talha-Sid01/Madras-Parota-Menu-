'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Bestsellers', href: '#bestsellers' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky nav
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-green/95 shadow-lg backdrop-blur-md py-2 border-b border-brand-gold/20' 
            : 'bg-gradient-to-b from-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Mark + Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Madras Parota Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-lg tracking-wider leading-none">
                MADRAS
              </span>
              <span className="font-display font-semibold text-brand-gold text-sm tracking-widest leading-none mt-1">
                PAROTA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-sm font-medium text-white/90 hover:text-brand-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call Now Button */}
          <div className="hidden md:block">
            <a
              href="tel:+917045714545"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gold text-brand-green font-body font-bold text-sm hover:bg-brand-gold-hover hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gold p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-brand-green shadow-xl border-l border-brand-gold/20 transform transition-transform duration-350 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-brand-gold"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-lg font-medium text-white/95 hover:text-brand-gold border-b border-white/10 pb-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917045714545"
              className="inline-flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 rounded-full bg-brand-gold text-brand-green font-body font-bold hover:bg-brand-gold-hover transition-colors duration-200"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/55 md:hidden"
        />
      )}
    </>
  );
}
