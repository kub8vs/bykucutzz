import React from 'react';
import { Scissors } from 'lucide-react';
// POPRAWIONY IMPORT:
import logo from "../assets/logo_byku1.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <img 
          src={logo} 
          alt="BYKU CUTZZ" 
          className="h-32 md:h-48 mx-auto mb-8 animate-float object-contain"
        />
        <h1 className="text-7xl md:text-9xl font-display uppercase italic tracking-tighter mb-4">
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