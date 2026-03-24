import HeroSection from "@/components/sections/HeroSection";
import AboutSummary from "@/components/sections/home/AboutSummary";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import ContactCTA from "@/components/sections/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <ServicesSection />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
