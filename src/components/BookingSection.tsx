import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, ArrowRight, Clock, Star, ShieldCheck } from 'lucide-react';
import heroImage from "../assets/hero-shop.jpg";

const BookingSection = () => {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* 1. ZDJĘCIE W TLE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Barbershop Atmosphere" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black hero-overlay"></div>
      </div>

      {/* 2. ZAAWANSOWANA TEKSTURA MARMURU Z ANIMACJĄ */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-[1] marble-veins"
      ></motion.div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        {/* Ikona */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 p-6 rounded-full border border-primary/20 backdrop-blur-sm">
            <Scissors className="text-primary animate-pulse" size={48} />
          </div>
        </motion.div>
        
        <div className="space-y-6 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display uppercase italic tracking-tighter leading-none"
          >
            UMÓW <span className="text-primary">WIZYTĘ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 uppercase tracking-[0.5em] text-[10px] md:text-xs font-black max-w-md mx-auto"
          >
            KLIKNIJ PONIŻEJ, ABY OTWORZYĆ KALENDARZ BOOKSY
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center flex-col items-center gap-10"
        >
          {/* PRZYCISK BOOKSY */}
          <a
            href="https://booksy.com/pl-pl/293129_bykucutzz-barbershop_barber-shop_23280_lodz" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 px-16 py-10 bg-primary text-background rounded-full font-display text-3xl md:text-4xl uppercase tracking-widest transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_80px_rgba(190,242,255,0.2)]"
          >
            ZAREZERWUJ TERAZ
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={40} />
          </a>

          {/* Badge'y z benefitami */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4 text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Clock size={14} className="text-primary" /> Szybkie terminy
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Star size={14} className="text-primary" /> 5.0 na Booksy
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <ShieldCheck size={14} className="text-primary" /> Bezpieczna rezerwacja
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;