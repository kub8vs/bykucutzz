import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, ArrowRight, Scissors, Phone, User, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

// PEŁNA LISTA 12 USŁUG
const services = [
  { id: "strzyzenie-byku", name: "Strzyżenie męskie (Byku)", itemId: "20906887" },
  { id: "strzyzenie", name: "Strzyżenie męskie", itemId: "20906938" },
  { id: "buzzcut", name: "Buzz Cut", itemId: "19625140" },
  { id: "metamorfoza", name: "Metamorfoza", itemId: "19625235" },
  { id: "design", name: "Design / Wzorek", itemId: "19625171" },
  { id: "combo-byku", name: "Strzyżenie + Broda (Byku)", itemId: "20907054" },
  { id: "combo", name: "Strzyżenie + Broda", itemId: "20907121" },
  { id: "broda", name: "Strzyżenie brody", itemId: "20907287" },
  { id: "repigmentacja", name: "Repigmentacja brody", itemId: "20676098" },
  { id: "konturowanie", name: "Konturowanie brody", itemId: "19626167" },
  { id: "zero-broda", name: "Głowa na 0 + broda", itemId: "20932984" },
  { id: "woskowanie", name: "Woskowanie nosa", itemId: "20676148" },
];

const barbers = [
  { id: "byku", name: "Byku" },
  { id: "macias", name: "Macias" },
  { id: "afarish", name: "Afraish" },
  { id: "slotu", name: "Słotu" },
  { id: "ryan", name: "Ryan" },
];

const BookingSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBarberOpen, setIsBarberOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // LOGIKA WYSYŁKI IDENTYCZNA Z TWOIM DRUGIM FORMULARZEM
  const handleBooking = async () => {
    if (!selectedService || !selectedBarber || !userName || !userPhone) {
      alert("Proszę wypełnić wszystkie pola (Imię i Telefon)!");
      return;
    }

    setLoading(true);
    const sData = services.find(s => s.id === selectedService);
    const bData = barbers.find(b => b.id === selectedBarber);

    try {
      const ZAPIER_URL = 'https://hooks.zapier.com/hooks/catch/25754214/uarzdes/';
      
      // KLUCZ: Używamy URLSearchParams zamiast JSON, aby ominąć CORS
      const params = new URLSearchParams();
      params.append('name', userName);
      params.append('phone', userPhone);
      params.append('service', sData?.name || "");
      params.append('barber', bData?.id || "");
      params.append('date', format(new Date(), "yyyy-MM-dd")); // Domyślnie dzisiaj
      params.append('source', 'Premium_Form');

      await fetch(ZAPIER_URL, {
        method: 'POST',
        mode: 'no-cors', // To sprawia, że dane przechodzą bez blokady
        body: params
      });

      setShowBooking(false);
      alert("✅ REZERWACJA WYSŁANA! Barber zaraz do Ciebie oddzwoni.");
      setUserName("");
      setUserPhone("");
    } catch (error) {
      alert("❌ Błąd sieci. Wyłącz AdBlocka.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background min-h-[900px]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 uppercase tracking-tighter">
          <h2 className="text-6xl font-display">UMÓW <span className="text-primary italic">WIZYTĘ</span></h2>
          <p className="text-muted-foreground mt-4 tracking-widest font-bold text-xs">WYBIERZ SERWIS I MISTRZA</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* USŁUGA */}
          <div className="relative">
            <button onClick={() => setIsServiceOpen(!isServiceOpen)} className="w-full glass-card p-6 rounded-2xl border border-white/10 flex justify-between items-center bg-card shadow-xl">
              <div className="text-left">
                <p className="text-[10px] text-primary font-black mb-1 tracking-widest uppercase">1. USŁUGA</p>
                <p className="font-display text-xl uppercase tracking-tight">{services.find(s => s.id === selectedService)?.name || "Co robimy?"}</p>
              </div>
              <ChevronDown className={`text-primary transition-transform ${isServiceOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isServiceOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 right-0 mt-2 bg-card border border-white/10 rounded-2xl z-[100] max-h-60 overflow-y-auto shadow-2xl">
                  {services.map(s => (
                    <button key={s.id} onClick={() => { setSelectedService(s.id); setIsServiceOpen(false); }} className="w-full p-4 text-left hover:bg-primary/20 border-b border-white/5 uppercase text-xs font-bold">{s.name}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BARBER */}
          <div className="relative">
            <button onClick={() => setIsBarberOpen(!isBarberOpen)} className="w-full glass-card p-6 rounded-2xl border border-white/10 flex justify-between items-center bg-card shadow-xl">
              <div className="text-left">
                <p className="text-[10px] text-primary font-black mb-1 tracking-widest uppercase">2. BARBER</p>
                <p className="font-display text-xl uppercase tracking-tight">{barbers.find(b => b.id === selectedBarber)?.name || "Kogo wybierasz?"}</p>
              </div>
              <ChevronDown className={`text-primary transition-transform ${isBarberOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isBarberOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 right-0 mt-2 bg-card border border-white/10 rounded-2xl z-[100] shadow-2xl overflow-hidden">
                  {barbers.map(b => (
                    <button key={b.id} onClick={() => { setSelectedBarber(b.id); setIsBarberOpen(false); }} className="w-full p-4 text-left hover:bg-primary/20 border-b border-white/5 uppercase text-xs font-bold">{b.name}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            disabled={!selectedService || !selectedBarber}
            onClick={() => setShowBooking(true)}
            className={`group px-16 py-6 rounded-full font-display text-2xl flex items-center gap-4 transition-all duration-500
              ${selectedService && selectedBarber ? "bg-primary text-background hover:scale-105 shadow-[0_0_50px_rgba(var(--primary),0.3)]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}
          >
            SPRAWDŹ TERMINY <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* MODAL FINALNY Z DANYMI - To tutaj brakowało danych do Zapiera */}
        <AnimatePresence>
          {showBooking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={() => setShowBooking(false)} />
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-md bg-card p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                <button onClick={() => setShowBooking(false)} className="absolute top-6 right-6 text-muted-foreground hover:text-white"><X /></button>
                <div className="text-center mb-8">
                  <Scissors className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-display uppercase italic">Potwierdź dane</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="space-y-1">
                    <label className="text-[10px] text-primary font-black uppercase tracking-widest px-1">Imię i Nazwisko</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Podaj imię" className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-primary text-sm uppercase font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-primary font-black uppercase tracking-widest px-1">Telefon</label>
                    <input type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} placeholder="Numer telefonu" className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-primary text-sm font-bold" />
                  </div>
                </div>

                <button 
                  onClick={handleBooking}
                  disabled={loading}
                  className="w-full py-6 bg-primary text-background rounded-full font-display text-xl uppercase tracking-widest hover:bg-white transition-colors"
                >
                  {loading ? "WYSYŁANIE..." : "ZATWIERDŹ"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingSection;