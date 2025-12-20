import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Sekcja Hero */}
      <HeroSection />
      
      {/* Sekcja Usługi */}
      <section id="services">
        <ServicesSection />
      </section>
      
      {/* Sekcja Ekipy */}
      <section id="team">
        <TeamSection />
      </section>
      
      {/* Sekcja Rezerwacji (Przycisk Booksy) */}
      <section id="rezerwacja">
        <BookingSection />
      </section>
      
      {/* Sekcja Lokalizacji i Kontaktu */}
      <section id="location">
        <LocationSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;