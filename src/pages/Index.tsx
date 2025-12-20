import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection"; // Dodaj ten import
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>

      {/* Nowa sekcja Portfolio */}
      <PortfolioSection />
      
      <section id="reviews">
        <ReviewsSection />
      </section>
      
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