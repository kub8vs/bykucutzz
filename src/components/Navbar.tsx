import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// Import Twojego logo
import logo from "../assets/logo_byku1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "USŁUGI", href: "#services" },
    { name: "EKIPA", href: "#team" },
    { name: "OPINIE", href: "#reviews" },
    { name: "LOKALIZACJA", href: "#location" },
  ];

  return (
    <nav className={`fixed w-full z-[500] transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        
        {/* LOGO GRAFICZNE NA GÓRZE */}
        <a href="#" className="flex flex-col items-center group">
          <img 
            src={logo} 
            alt="BYKU CUTZZ Logo" 
            className="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtelna linia pod logo dla efektu premium */}
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-4"></div>
        </a>

        {/* MENU PONIŻEJ LOGO */}
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

        {/* Mobile Toggle - widoczny obok logo na telefonach */}
        <button className="md:hidden text-white absolute right-6 top-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[400] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300">
          <img src={logo} alt="Logo" className="h-20 mb-8" />
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display italic text-white hover:text-primary transition-colors uppercase">
              {link.name}
            </a>
          ))}
          <a href="#rezerwacja" onClick={() => setIsOpen(false)} className="text-2xl font-display italic text-primary uppercase mt-4">
            UMÓW WIZYTĘ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;