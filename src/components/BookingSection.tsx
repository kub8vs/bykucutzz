import React, { useState } from 'react';
import { Scissors, Loader2, Phone, User, Calendar, Clock, ShoppingBag } from 'lucide-react';

const services = [
  { id: "strzyzenie-byku", name: "Strzyżenie męskie (Byku)" },
  { id: "strzyzenie", name: "Strzyżenie męskie" },
  { id: "buzzcut", name: "Buzz Cut" },
  { id: "metamorfoza", name: "Metamorfoza" },
  { id: "design", name: "Design / Wzorek" },
  { id: "combo-byku", name: "Strzyżenie + Broda (Byku)" },
  { id: "combo", name: "Strzyżenie + Broda" },
  { id: "broda", name: "Strzyżenie brody" },
  { id: "repigmentacja", name: "Repigmentacja brody" },
  { id: "konturowanie", name: "Konturowanie brody" },
  { id: "zero-broda", name: "Głowa na 0 + broda" },
  { id: "woskowanie", name: "Woskowanie nosa" },
];

const barbers = [
  { id: "byku", name: "Byku" },
  { id: "macias", name: "Macias" },
  { id: "afarish", name: "Afraish" },
  { id: "slotu", name: "Słotu" },
  { id: "ryan", name: "Ryan" },
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', barber: '', date: '', time: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      await fetch('https://hooks.zapier.com/hooks/catch/25754214/uarzdes/', {
        method: 'POST',
        mode: 'no-cors', // Gwarantuje wysyłkę bez błędów CORS
        body: body
      });

      setMessage('✅ REZERWACJA WYSŁANA! CZEKAJ NA KONTAKT.');
      setFormData({ name: '', phone: '', email: '', service: '', barber: '', date: '', time: '' });
    } catch (error) {
      setMessage('❌ Błąd połączenia. Spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rezerwacja" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-12">
          <Scissors className="mx-auto text-primary mb-6 animate-pulse" size={48} />
          <h2 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-4">
            ZAREZERWUJ <span className="text-primary">TERMIN</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
            Pomiń kolejki — zarezerwuj bezpośrednio u nas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-2xl">
          {/* Dane osobowe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Imię i Nazwisko</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input name="name" placeholder="JAKUB ZIMNICKI" value={formData.name} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all text-sm uppercase font-bold" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Telefon</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input name="phone" placeholder="+48 000 000 000" value={formData.phone} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all text-sm font-bold" />
              </div>
            </div>
          </div>

          {/* Wybór Usługi i Barbera */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Wybierz Barbera</label>
              <select name="barber" value={formData.barber} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-xs font-black uppercase appearance-none cursor-pointer">
                <option value="">Wybierz mistrza...</option>
                {barbers.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Rodzaj Usługi</label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-xs font-black uppercase appearance-none cursor-pointer">
                <option value="">Wybierz usługę...</option>
                {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
              </select>
            </div>
          </div>

          {/* Data i Godzina */}
          <div className="grid grid-cols-2 gap-4 text-white">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest text-white">Data</label>
              <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-sm font-bold invert" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest text-white">Godzina</label>
              <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-sm font-bold invert" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-6 mt-6 bg-primary text-background rounded-full font-display text-2xl uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all shadow-[0_10px_40px_rgba(255,215,0,0.2)] disabled:opacity-50">
            {loading ? <Loader2 className="animate-spin mx-auto" size={32} /> : 'ZATWIERDŹ TERMIN'}
          </button>
        </form>

        {message && (
          <div className={`mt-8 p-6 rounded-3xl text-center text-[10px] font-black uppercase tracking-[0.3em] border shadow-2xl animate-bounce ${message.includes('✅') ? 'bg-primary/10 text-primary border-primary/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}