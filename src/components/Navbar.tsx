import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import logo from "../assets/logo_byku1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokada przewijania tła przy otwartym menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "USŁUGI", href: "#services" },
    { name: "EKIPA", href: "#team" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "OPINIE", href: "#reviews" },
    { name: "LOKALIZACJA", href: "#location" },
  ];

  return (
    <>
      {/* GŁÓWNY PASEK NAWIGACJI */}
      <nav className={`fixed w-full z-[500] transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-8"
      }`}>
        <div className="container mx-auto px-6 flex flex-col items-center relative">
          
          {/* LOGO - Zawsze wycentrowane */}
          <a href="#" className="flex flex-col items-center group transition-transform hover:scale-105">
            <img 
              src={logo} 
              alt="BYKU CUTZZ" 
              className={`transition-all duration-500 object-contain ${
                scrolled ? "h-12 md:h-16" : "h-16 md:h-24"
              }`}
            />
            {!scrolled && (
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-4"></div>
            )}
          </a>

          {/* MENU DESKTOP - Ukryte na telefonach */}
          <div className="hidden md:flex items-center gap-10 mt-6 bg-white/5 px-10 py-4 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-black tracking-[0.4em] text-white/60 hover:text-primary transition-all uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-white/10 mx-2"></div>
            <a 
              href="#rezerwacja" 
              className="text-[10px] font-black tracking-[0.4em] text-primary hover:text-white transition-all uppercase"
            >
              UMÓW WIZYTĘ
            </a>
          </div>

          {/* PRZYCISK HAMBURGERA - Zawsze w tym samym miejscu na górze po prawej */}
          <button 
            className="md:hidden text-white absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* PEŁNOEKRANOWE MENU MOBILNE (OVERLAY) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center animate-in fade-in duration-500">
          {/* Tekstura marmuru w tle menu */}
          <div className="marble-veins absolute inset-0 opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-6 w-full px-6">
            <img src={logo} alt="Logo" className="h-24 mb-10 drop-shadow-[0_0_30px_rgba(102,226,255,0.2)]" />
            
            <div className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-4xl font-display italic text-white hover:text-primary transition-all uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="#rezerwacja" 
              onClick={() => setIsOpen(false)} 
              className="mt-6 px-12 py-5 bg-primary text-black rounded-full font-display text-2xl uppercase tracking-widest shadow-[0_0_40px_rgba(102,226,255,0.4)] transition-transform active:scale-95"
            >
              UMÓW WIZYTĘ
            </a>

            {/* PRZYCISK POWRÓT - Wyraźny i funkcjonalny */}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white/50 uppercase text-[10px] font-black tracking-[0.3em] hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowLeft size={16} /> POWRÓT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;