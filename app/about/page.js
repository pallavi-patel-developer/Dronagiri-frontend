import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/about/AboutHeroSection";
import OurStorySection from "../components/about/OurStorySection";
import FarmToHomeSection from "../components/about/FarmToHomeSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import ImpactStatsSection from "../components/about/ImpactStatsSection";
import FarmersSection from "../components/about/FarmersSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import FinalCTASection from "../components/about/FinalCTASection";

export const metadata = {
  title: "About Us | Dronagiri Farm — Pure Organic Goodness From Farm To Family",
  description:
    "Learn the story behind Dronagiri Farm — our mission, our farmers, and our unwavering commitment to bringing 100% certified organic food directly from our fields to your family's table.",
  keywords:
    "about dronagiri farm, organic farm india, farm to table, organic farmers maharashtra, pure organic food, desi ghee, natural spices",
  openGraph: {
    title: "About Us | Dronagiri Farm",
    description:
      "Meet the farmers, discover our story, and learn how we bring pure organic goodness from farm to your family.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero Section */}
        <AboutHeroSection />

        {/* 2. Our Story */}
        <OurStorySection />

        {/* 3. Farm To Home Journey */}
        <FarmToHomeSection />

        {/* 4. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 5. Impact Statistics */}
        <ImpactStatsSection />

        {/* 6. Meet Our Farmers */}
        <FarmersSection />

        {/* 7. Customer Testimonials */}
        <TestimonialsSection />

        {/* 8. Mission & Vision */}
        <MissionVisionSection />

        {/* 9. Final CTA Banner */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
