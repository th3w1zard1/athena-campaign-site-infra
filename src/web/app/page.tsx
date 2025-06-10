import React from 'react';
import Hero from './components/Hero';
import CampaignFocus from './components/CampaignFocus';
import NewsletterSignup from './components/NewsletterSignup';
import DonationSection from './components/DonationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CampaignFocus />
      <DonationSection />
      <NewsletterSignup />
    </>
  );
}
