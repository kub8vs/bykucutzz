import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Usunięto REZERWACJA z listy, aby nie dublować przycisku
  // Wewnątrz Navbar.tsx zaktualizuj tablicę navLinks:
  const navLinks = [
    { name: "USŁUGI", href: "#services" },
    { name: "EKIPA", href: "#team" },
    { name: "OPINIE", href: "#reviews" }, // Dodane
    { name: "LOKALIZACJA", href: "#location" },
  ];

  return (
    <nav className={`fixed w-full z-[500] transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Scissors className="text-primary group-hover:rotate-12 transition-transform" />
          <span className="font-display text-2xl tracking-tighter italic text-white">BYKU<span className="text-primary">CUTZZ</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-black tracking-[0.3em] text-white/70 hover:text-primary transition-colors uppercase">
              {link.name}
            </a>
          ))}
          {/* Ten przycisk teraz jako jedyny kieruje do sekcji Booksy */}
          <a href="#rezerwacja" className="px-8 py-3 bg-primary text-background rounded-full font-black text-[10px] tracking-widest hover:bg-white transition-all uppercase">
            UMÓW WIZYTĘ
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[400] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display italic text-white hover:text-primary transition-colors uppercase">
              {link.name}
            </a>
          ))}
          <a href="#rezerwacja" onClick={() => setIsOpen(false)} className="px-10 py-5 bg-primary text-background rounded-full font-black text-sm tracking-widest uppercase">
            UMÓW WIZYTĘ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;