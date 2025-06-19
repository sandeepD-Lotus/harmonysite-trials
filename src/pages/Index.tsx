
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { GradientButtonDemo } from "@/components/GradientButtonDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <GradientButtonDemo />
      <CTASection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
