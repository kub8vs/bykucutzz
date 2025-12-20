import React from 'react';
import { Scissors, ArrowRight } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="rezerwacja" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Dekoracyjne tło dla klimatu premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <Scissors className="mx-auto text-primary animate-pulse" size={56} />
          
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-display uppercase italic tracking-tighter leading-none">
              UMÓW <span className="text-primary">WIZYTĘ</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
              NAJSZYBSZA REZERWACJA ONLINE PRZEZ SYSTEM BOOKSY
            </p>
          </div>

          {/* PRZYCISK BOOKSY - Wykorzystuje klasę widgetu Booksy */}
          <div className="flex justify-center pt-8">
            <a
              href="https://booksy.com/pl-pl/77405_byku-cutzz_barber-shop_13750_lodz" 
              className="booksy-widget-button group relative inline-flex items-center gap-6 px-12 py-8 bg-primary text-background rounded-full font-display text-3xl uppercase tracking-widest transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_60px_rgba(255,215,0,0.2)]"
              data-booksy-id="77405" // Tutaj wpisz swój rzeczywisty ID z Booksy, jeśli go masz
            >
              ZAREZERWUJ TERAZ
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
            </a>
          </div>

          <p className="text-white/20 text-[9px] uppercase tracking-widest mt-12">
            Kliknięcie otworzy pełną listę usług i dostępnych terminów
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;