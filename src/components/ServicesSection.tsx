import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, SprayCan, Sparkles, Crown, Star, Zap, Brush, Droplet, PenTool, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onServiceSelect: (id: string) => void;
}

const services = [
  { icon: Scissors, name: "Strzyżenie męskie (Byku)", dataServiceName: "strzyzenie-byku", price: "100 zł", duration: "45 min", description: "Precyzyjne cięcie wykonane przez założyciela salonu. Dopasowanie formy do kształtu twarzy i stylu." },
  { icon: Scissors, name: "Strzyżenie męskie", dataServiceName: "strzyzenie", price: "90 zł", duration: "45 min", description: "Klasyczne lub nowoczesne strzyżenie w wykonaniu naszych barberów. Mycie i stylizacja w cenie." },
  { icon: SprayCan, name: "Buzz Cut", dataServiceName: "buzzcut", price: "80 zł", duration: "30 min", description: "Krótkie, techniczne cięcie maszynką. Idealne dla fanów wygody i ostrych linii." },
  { icon: Sparkles, name: "Metamorfoza", dataServiceName: "metamorfoza", price: "110 zł", duration: "1 h 5 min", description: "Całkowita zmiana wizerunku. Konsultacja, dobór nowej fryzury i pełne cięcie." },
  { icon: Crown, name: "Design / Wzorek", dataServiceName: "design", price: "10 zł", duration: "10 min", description: "Personalizacja fryzury poprzez wycięcie brzytwą unikalnego wzoru lub linii." },
  { icon: Star, name: "Strzyżenie włosów i brody COMBO (Byku)", dataServiceName: "combo-byku", price: "140 zł", duration: "1 h 15 min", description: "Pełny serwis u właściciela. Strzyżenie głowy oraz profesjonalne formowanie i konturowanie brody." },
  { icon: Zap, name: "Strzyżenie włosów i brody COMBO", dataServiceName: "combo", price: "130 zł", duration: "1 h 15 min", description: "Kompletny pakiet: fryzura plus zadbana broda. Gorący ręcznik i pielęgnacja w zestawie." },
  { icon: Brush, name: "Strzyżenie brody", dataServiceName: "broda", price: "60 zł", duration: "30 min", description: "Nadanie kształtu brodzie, podgolenie konturów brzytwą i nałożenie odżywczego olejku." },
  { icon: Droplet, name: "Repigmentacja brody", dataServiceName: "repigmentacja", price: "50 zł", duration: "25 min", description: "Naturalne tuszowanie siwizny i wyrównanie koloru brody. Efekt świeżości i zagęszczenia." },
  { icon: PenTool, name: "Konturowanie brody", dataServiceName: "konturowanie", price: "20 zł", duration: "20 min", description: "Szybkie odświeżenie samej linii brody brzytwą lub trymerem." },
  { icon: CircleDot, name: "Strzyżenie głowy na 0 + strzyżenie brody", dataServiceName: "zero-broda", price: "70 zł", duration: "45 min", description: "Pełne golenie głowy maszynką/brzytwą połączone z profesjonalnym serwisem brody." },
  { icon: Sparkles, name: "Woskowanie nosa", dataServiceName: "woskowanie", price: "20 zł", duration: "5 min", description: "Szybkie i skuteczne usuwanie zbędnych włosków z nosa przy użyciu profesjonalnego wosku." },
];

const ServicesSection = ({ onServiceSelect }: ServicesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToBooking = () => {
    const element = document.querySelector("#booking-system");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="uslugi" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div className="marble-veins absolute inset-0" />
      <div className="chrome-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">NASZE <span className="text-primary">USŁUGI</span></h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">Każda usługa wykonywana z najwyższą precyzją i dbałością o szczegóły</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.dataServiceName} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.05 }} className="glass-card rounded-lg p-6 group hover:neon-border transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl text-primary block">{service.price}</span>
                  <span className="font-body text-xs text-muted-foreground">{service.duration}</span>
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{service.name}</h3>
              <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  onServiceSelect(service.dataServiceName);
                  scrollToBooking();
                }}
              >
                Rezerwuj
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="chrome-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default ServicesSection;