import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-byku2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#uslugi", label: "Usługi" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#ekipa", label: "Ekipa" },
    { href: "#opinie", label: "Opinie" },
    { href: "#booking-system", label: "Rezerwacja" },
    { href: "#lokalizacja", label: "Lokalizacja" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktop Layout - Centered Logo */}
        <div className="hidden md:flex flex-col items-center">
          {/* Logo - Centered and Larger */}
          <a href="#" className="flex items-center mb-4">
            <img 
              src={logo} 
              alt="BYKUCUTZZ" 
              className={`transition-all duration-500 ${isScrolled ? "h-20" : "h-28"}`} 
            />
          </a>

          {/* Navigation Links - Below Logo */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body font-bold text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              variant="neon"
              size="default"
              onClick={() => scrollToSection("#booking-system")}
              className="booking-trigger"
            >
              Umów Wizytę
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="BYKUCUTZZ" className="h-16 w-auto" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 pb-6 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body font-bold text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300 text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="neon"
              size="lg"
              onClick={() => scrollToSection("#booking-system")}
              className="mt-2 booking-trigger"
            >
              Umów Wizytę
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
