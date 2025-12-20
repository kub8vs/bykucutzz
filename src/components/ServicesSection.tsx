import { motion } from "framer-motion";
import { Scissors, CheckCircle2 } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/pl-pl/293129_bykucutzz-barbershop_barber-shop_23280_lodz";

const services = [
  { name: "Strzyżenie męskie (Byku)", price: "100 PLN", desc: "Usługa premium u właściciela" },
  { name: "Strzyżenie męskie", price: "90 PLN", desc: "Klasyczne strzyżenie + mycie" },
  { name: "Combo Włosy+Broda (Byku)", price: "140 PLN", desc: "Włosy + Broda u właściciela" },
  { name: "Combo Włosy+Broda", price: "130 PLN", desc: "Pełny serwis barberski" },
  { name: "Strzyżenie Brody", price: "60 PLN", desc: "Kształt, kontur i gorący ręcznik" },
  { name: "Buzz Cut", price: "80 PLN", desc: "Strzyżenie samą maszynką" },
  { name: "Metamorfoza", price: "110 PLN", desc: "Całkowita zmiana wizerunku" },
  { name: "Design / Wzorek", price: "10 PLN", desc: "Indywidualne wzory maszynką" },
  { name: "Repigmentacja", price: "50 PLN", desc: "Maskowanie siwizny brody" },
  { name: "Konturowanie", price: "20 PLN", desc: "Odświeżenie linii zarostu" },
  { name: "Głowa na 0 + Broda", price: "70 PLN", desc: "Golenie głowy + serwis brody" },
  { name: "Woskowanie Nosa", price: "20 PLN", desc: "Usuwanie zbędnych włosków" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-display uppercase italic tracking-tighter mb-4">NASZE <span className="text-primary">USŁUGI</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-primary/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <Scissors className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" size={20} />
                <span className="text-2xl font-display text-primary">{service.price}</span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2 tracking-tight group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6 font-medium">{service.desc}</p>
              
              <a 
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white/5 border border-white/10 rounded-xl inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all"
              >
                REZERWUJ <CheckCircle2 size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;