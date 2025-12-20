import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo_byku1.png";
import heroImage from "../assets/hero-shop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* TŁO ZE ZDJĘCIEM I NAKŁADKĄ */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Salon Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* TEKSTURA MARMURU */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-[1] marble-veins"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* ANIMACJA LOGO - ZNACZNIE POWIĘKSZONE */}
        <motion.img 
          src={logo} 
          alt="BYKU CUTZZ" 
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
          }}
          // TUTAJ JEST ZMIANA ROZMIARU:
          className="h-[280px] md:h-[500px] mx-auto mb-8 object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.1)]"
        />
        
        {/* GŁÓWNY NAPIS */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-4 text-white"
        >
          JAKOŚĆ PONAD <span className="text-primary italic">ILOŚĆ</span>
        </motion.h1>
        
        {/* PODTYTUŁ */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/40 uppercase tracking-[0.6em] text-[10px] md:text-xs font-black"
        >
          Mistrzowskie cięcie w sercu Łodzi
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;