import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-shop.jpg";
import logo from "@/assets/logo_byku2.png";

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking-system");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Neon Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          {/* Logo Image with Neon Glow - 30% larger */}
          <img 
            src={logo} 
            alt="BYKUCUTZZ" 
            className="mx-auto w-[550px] md:w-[800px] lg:w-[940px] h-auto"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(92,209,242,0.6)) drop-shadow(0 0 80px rgba(92,209,242,0.4)) drop-shadow(0 0 120px rgba(92,209,242,0.25))'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-1"
        >
          <p className="font-display text-2xl md:text-4xl text-foreground/90 uppercase tracking-[0.2em]">
            Jakość Ponad Ilość
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-1"
        >
          <p className="font-body font-bold text-lg md:text-xl text-foreground/70 uppercase tracking-[0.3em]">
            Barbershop
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Precyzja. Styl. Perfekcja. Doświadcz najwyższej jakości usług barberskich w sercu Łodzi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Button variant="hero" size="xl" onClick={scrollToBooking} className="booking-trigger">
            Umów Wizytę
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => {
          const element = document.querySelector("#uslugi");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-float cursor-pointer"
      >
        <ChevronDown size={32} className="animate-pulse" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
