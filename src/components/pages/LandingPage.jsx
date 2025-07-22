import HeroSection from "@/components/organisms/HeroSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import IntelligenceSection from "@/components/organisms/IntelligenceSection";
import BrandVoiceSection from "@/components/organisms/BrandVoiceSection";
import FeaturesShowcaseSection from "@/components/organisms/FeaturesShowcaseSection";
import CampaignSection from "@/components/organisms/CampaignSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import CTASection from "@/components/organisms/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
<IntelligenceSection />
      <BrandVoiceSection />
      <FeaturesShowcaseSection />
      <CampaignSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;