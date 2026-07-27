import React from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import SignatureDishes from '@/components/SignatureDishes';
import GoogleReviewBanner from '@/components/GoogleReviewBanner';
import MenuSection from '@/components/MenuSection';
import OurStory from '@/components/OurStory';
import FindUs from '@/components/FindUs';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <>
      {/* Session-aware Preloader Overlay */}
      <Preloader />

      {/* Sticky Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Banner, Brand Headline, CTA */}
        <Hero />

        {/* Brand highlights strip */}
        <Highlights />

        {/* 4 Featured Signature items with stand-in photos */}
        <SignatureDishes />

        {/* Click to Google Review Banner */}
        <GoogleReviewBanner />

        {/* Scroll-spy Menu, Search, Category Navigation, and variants pricing */}
        <MenuSection />

        {/* Our Story / Narrative */}
        <OurStory />

        {/* Find Us (Google Map & Contact Cards) */}
        <FindUs />
      </main>

      {/* Main Footer Info */}
      <Footer />

      {/* Sticky Action Contacts Bar (Mobile Only) */}
      <MobileActionBar />
    </>
  );
}
