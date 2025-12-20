import React from 'react';
import logo from "../assets/logo_byku1.png";
import heroImage from "../assets/hero-shop.jpg"; // Import zdjęcia salonu

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 1. ZDJĘCIE SALONU W TLE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Salon Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* 2. TEKSTURA MARMURU */}
      <div className="absolute inset-0 z-1 marble-veins"></div>

      {/* 3. TREŚĆ GŁÓWNA */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <img 
          src={logo} 
          alt="BYKU CUTZZ" 
          className="h-32 md:h-48 mx-auto mb-8 animate-float object-contain"
        />
        <h1 className="text-7xl md:text-9xl font-display uppercase italic tracking-tighter mb-4 text-white">
          JAKOŚĆ PONAD <span className="text-primary italic">ILOŚĆ</span>
        </h1>
        <p className="text-white/40 uppercase tracking-[0.6em] text-[10px] md:text-xs font-black">
          Mistrzowskie cięcie w sercu Łodzi
        </p>
      </div>
    </section>
  );
};

export default HeroSection;