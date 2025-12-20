import React from 'react';
import logo from "../assets/logo_byku1.png";
import heroImage from "../assets/hero-shop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* TŁO: ZDJĘCIE SALONU */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Salon Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* TEKSTURA MARMURU (MUSI BYĆ NAD ZDJĘCIEM) */}
      <div className="absolute inset-0 z-[1] marble-veins"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* WIĘKSZE LOGO */}
        <img 
          src={logo} 
          alt="BYKU CUTZZ" 
          className="h-48 md:h-80 mx-auto mb-10 animate-float object-contain"
        />
        
        {/* MNIEJSZY NAPIS */}
        <h1 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-4 text-white">
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