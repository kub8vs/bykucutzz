import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Stan przechowujący techniczne ID wybranej usługi
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* Przekazujemy funkcję wyboru do sekcji usług */}
      <ServicesSection onServiceSelect={handleServiceSelect} />
      <PortfolioSection />
      <TeamSection />
      {/* Przekazujemy stan do sekcji rezerwacji */}
      <BookingSection preselectedServiceId={selectedServiceId} />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;