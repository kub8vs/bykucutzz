import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import logo from "../assets/logo_byku1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokowanie przewijania strony, gdy menu jest otwarte
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
    <nav className={`fixed w-full z-[500] transition-all duration-500 ${
      scrolled ? "bg-black/95 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-8"
    }`}>
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        
        {/* LOGO - Zawsze widoczne na środku */}
        <a href="#" className="flex flex-col items-center group">
          <img 
            src={logo} 
            alt="BYKU CUTZZ Logo" 
            className="h-16 md:h-24 w-auto object-contain transition-transform duration-500"
          />
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-4"></div>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10 bg-white/5 px-10 py-4 rounded-full border border-white/5 backdrop-blur-sm">
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

        {/* PRZYCISK HAMBURGERA (MOBILNY) - Stały */}
        <button 
          className="md:hidden text-white absolute right-6 top-10 p-2 bg-white/5 rounded-full border border-white/10" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* PEŁNOEKRANOWE MENU MOBILNE */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center animate-in fade-in duration-300">
          {/* Tekstura marmuru w tle menu */}
          <div className="marble-veins absolute inset-0 opacity-20 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
            <img src={logo} alt="Logo" className="h-24 mb-6 opacity-50" />
            
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-4xl font-display italic text-white hover:text-primary transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#rezerwacja" 
              onClick={() => setIsOpen(false)} 
              className="mt-4 px-12 py-5 bg-primary text-black rounded-full font-display text-2xl uppercase tracking-widest shadow-[0_0_30px_rgba(102,226,255,0.3)]"
            >
              UMÓW WIZYTĘ
            </a>

            {/* PRZYCISK POWRÓT - Zamyka menu i zostaje w sekcji */}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 flex items-center gap-3 text-white/40 uppercase text-xs font-black tracking-[0.3em] hover:text-white transition-colors"
            >
              <ArrowLeft size={18} /> POWRÓT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;