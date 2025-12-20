import React from 'react';
import { Scissors, ArrowRight, Clock, Star, ShieldCheck } from 'lucide-react';

const BookingSection = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 p-4 rounded-full border border-white/10">
            <Scissors className="text-primary animate-pulse" size={48} />
          </div>
        </div>
        
        <div className="space-y-6 mb-12">
          <h2 className="text-6xl md:text-8xl font-display uppercase italic tracking-tighter leading-none">
            UMÓW <span className="text-primary">WIZYTĘ</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] md:text-xs font-black max-w-md mx-auto">
            KLIKNIJ PONIŻEJ, ABY OTWORZYĆ KALENDARZ BOOKSY
          </p>
        </div>

        <div className="flex justify-center flex-col items-center gap-6">
          <a
            href="https://booksy.com/pl-pl/293129_bykucutzz-barbershop_barber-shop_23280_lodz" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 px-16 py-10 bg-primary text-background rounded-full font-display text-3xl md:text-4xl uppercase tracking-widest transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_80px_rgba(255,215,0,0.15)]"
          >
            ZAREZERWUJ TERAZ
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={40} />
          </a>

          <div className="flex items-center gap-8 mt-12 text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">
            <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Szybkie terminy</span>
            <span className="flex items-center gap-2"><Star size={14} className="text-primary" /> Top Barberzy</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> Bezpieczny system</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;