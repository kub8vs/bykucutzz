import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection"; // Dodaj ten import
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>

      {/* DODAJ SEKCJĘ OPINII TUTAJ */}
      <ReviewsSection />
      
      <section id="rezerwacja">
        <BookingSection />
      </section>
      
      <section id="location">
        <LocationSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;