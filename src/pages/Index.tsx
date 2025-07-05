
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import NewsletterSignup from '../components/NewsletterSignup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Social Links Section */}
      <SocialLinks />
    </div>
  );
};

export default Index;
