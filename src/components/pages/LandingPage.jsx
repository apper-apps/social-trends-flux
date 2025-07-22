import React from "react";
import IntelligenceSection from "@/components/organisms/IntelligenceSection";
import FeaturesShowcaseSection from "@/components/organisms/FeaturesShowcaseSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import HeroSection from "@/components/organisms/HeroSection";
import CTASection from "@/components/organisms/CTASection";
import CampaignSection from "@/components/organisms/CampaignSection";
import PricingPlansSection from "@/components/organisms/PricingPlansSection";
import BrandVoiceSection from "@/components/organisms/BrandVoiceSection";
import FAQSection from "@/components/organisms/FAQSection";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <IntelligenceSection />
      <BrandVoiceSection />
      <FeaturesShowcaseSection />
      <FAQSection />
      <PricingPlansSection />
      <CampaignSection />
      <ComparisonSection />
<TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;