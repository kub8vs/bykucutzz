import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Scissors, ChevronLeft } from "lucide-react";

// --- 1. PEŁNA LISTA 12 USŁUG ---
const services = [
  { id: "strzyzenie-byku", name: "Strzyżenie męskie (Byku)", duration: "45 min" },
  { id: "strzyzenie", name: "Strzyżenie męskie", duration: "45 min" },
  { id: "buzzcut", name: "Buzz Cut", duration: "30 min" },
  { id: "metamorfoza", name: "Metamorfoza", duration: "1h 30 min" },
  { id: "design", name: "Design / Wzorek", duration: "15 min" },
  { id: "combo-byku", name: "Strzyżenie włosów i brody COMBO (Byku)", duration: "1h 15 min" },
  { id: "combo", name: "Strzyżenie włosów i brody COMBO", duration: "1h 15 min" },
  { id: "broda", name: "Strzyżenie brody", duration: "30 min" },
  { id: "repigmentacja", name: "Repigmentacja brody", duration: "30 min" },
  { id: "konturowanie", name: "Konturowanie brody", duration: "20 min" },
  { id: "zero-broda", name: "Strzyżenie głowy na 0 + broda", duration: "1h" },
  { id: "woskowanie", name: "Woskowanie nosa", duration: "10 min" },
];

// --- 2. BARBERZY (ID DOKŁADNIE WG WYMOGÓW ZAPIER) ---
const barbers = [
  { id: "byku", name: "Byku" },
  { id: "macias", name: "Macias" },
  { id: "afarish", name: "Afarish" },
  { id: "slotu", name: "Słotu" },
  { id: "ryan", name: "Ryan" },
];

const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    barber: "",
    date: "",
    time: ""
  });

  // --- 3. INTEGRACJA Z ZAPIER (TWÓJ URL) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/25754214/uarzdes/', {
        method: 'POST',
        // 'no-cors' jest opcjonalne, ale przy Zapierze pomaga uniknąć błędów pre-flight na lokalnym hostingu
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          barber: formData.barber, // "byku", "macias", "afarish", "slotu", "ryan"
          date: formData.date,     // YYYY-MM-DD
          time: formData.time      // HH:MM
        })
      });

      // Zapier zazwyczaj zwraca status 200 nawet bez CORS przy sukcesie
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('❌ Błąd połączenia:', error);
      setIsSubmitting(false);
      alert("Błąd połączenia. Spróbuj ponownie lub zadzwoń do nas.");
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-black text-white text-center flex items-center justify-center min-h-[600px]">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md p-12 bg-[#0a0a0a] rounded-[3rem] border border-primary/20 shadow-2xl">
          <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl mb-4 italic">ZAPISANO!</h2>
          <p className="text-white/40 text-xs mb-8 uppercase tracking-[0.3em]">Twoja rezerwacja została wysłana do kalendarza Barbera.</p>
          <button onClick={() => { setIsSuccess(false); setStep(1); }} className="px-8 py-4 bg-primary text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
            UMÓW KOLEJNĄ WIZYTĘ
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rezerwacja" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-6xl md:text-8xl italic uppercase tracking-tighter italic">REZER<span className="text-primary italic">WACJA</span></h2>
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1 w-16 rounded-full transition-all duration-500 ${step >= i ? "bg-primary" : "bg-white/5"}`} />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0a0a0a] p-8 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-2 block">1. Wybierz Barbera</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {barbers.map(b => (
                      <button key={b.id} type="button" onClick={() => setFormData({...formData, barber: b.id})}
                        className={`p-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${formData.barber === b.id ? "bg-primary text-black border-primary shadow-lg" : "bg-black border-white/5 text-white/20 hover:border-white/20"}`}>
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-2 block">2. Usługa</label>
                  <select required className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-lg uppercase outline-none focus:border-primary cursor-pointer transition-all"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}>
                    <option value="">Wybierz serwis...</option>
                    {services.map(s => <option key={s.id} value={s.name}>{s.name} ({s.duration})</option>)}
                  </select>
                </div>
                <button type="button" onClick={() => setStep(2)} disabled={!formData.barber || !formData.service}
                  className="w-full py-8 bg-white text-black rounded-full font-display text-3xl mt-4 hover:bg-primary transition-all disabled:opacity-5 shadow-xl">
                  DALEJ
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-2 block">3. Data</label>
                    <input type="date" required className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-2xl uppercase outline-none focus:border-primary invert"
                      onChange={(e) => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-2 block">4. Godzina</label>
                    <input type="time" required className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-2xl uppercase outline-none focus:border-primary invert"
                      onChange={(e) => setFormData({...formData, time: e.target.value})} />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-6 border border-white/5 rounded-full font-display text-xl uppercase flex items-center justify-center gap-2"><ChevronLeft size={20} /> Wróć</button>
                  <button type="button" onClick={() => setStep(3)} disabled={!formData.date || !formData.time}
                    className="flex-[2] py-8 bg-white text-black rounded-full font-display text-3xl hover:bg-primary transition-all disabled:opacity-5 uppercase">Kontakt</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div className="space-y-4">
                  <input type="text" placeholder="IMIĘ I NAZWISKO" required className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-xl uppercase outline-none focus:border-primary"
                    onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input type="tel" placeholder="NUMER TELEFONU" required className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-xl uppercase outline-none focus:border-primary"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  <input type="email" placeholder="EMAIL (OPCJONALNIE)" className="w-full bg-black border border-white/5 p-6 rounded-2xl font-display text-xl uppercase outline-none focus:border-primary"
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full py-10 bg-primary text-black rounded-full font-display text-4xl shadow-[0_0_60px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all disabled:opacity-50">
                  {isSubmitting ? "ZAPISYWANIE..." : "UMÓW WIZYTĘ"}
                </button>
                <button type="button" onClick={() => setStep(2)} className="w-full text-white/20 text-[9px] font-black uppercase tracking-[0.4em] mt-8 hover:text-white transition-colors">Zmień termin</button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="mt-16 flex items-center justify-center gap-6 opacity-10">
           <Scissors size={20} /> <span className="font-black text-[9px] uppercase tracking-[0.6em]">Zapier Direct-to-Calendar Protocol</span> <Scissors size={20} className="rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;