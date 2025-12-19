import React, { useState } from 'react';
import { Scissors, Loader2, Phone, User, Calendar, Clock } from 'lucide-react';

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
    name: '', phone: '', service: '', barber: '', date: '', time: ''
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
      // LOGIKA IDENTYCZNA Z FORMULARZEM Z FOOTERA
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      await fetch('https://hooks.zapier.com/hooks/catch/25754214/uarzdes/', {
        method: 'POST',
        mode: 'no-cors', // Omija błędy CORS i brak SSL lokalnie
        body: body
      });

      setMessage('✅ REZERWACJA WYSŁANA!');
      setFormData({ name: '', phone: '', service: '', barber: '', date: '', time: '' });
    } catch (error) {
      setMessage('❌ Błąd połączenia.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rezerwacja" className="py-24 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <Scissors className="mx-auto text-primary mb-6 animate-pulse" size={40} />
          <h2 className="text-5xl md:text-6xl font-display uppercase italic tracking-tighter mb-4">
            ZAREZERWUJ <span className="text-primary italic">TERMIN</span>
          </h2>
          <p className="text-white/30 uppercase tracking-[0.4em] text-[10px] font-black">
            Direct Protocol — Omiń system Booksy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-[#0a0a0a] p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Imię i Nazwisko</label>
              <input name="name" placeholder="JAKUB ZIMNICKI" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm uppercase font-bold text-white placeholder:text-white/10" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Telefon</label>
              <input name="phone" placeholder="+48 000 000 000" value={formData.phone} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm font-bold text-white placeholder:text-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Wybierz Barbera</label>
              <select name="barber" value={formData.barber} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-xs font-black uppercase appearance-none cursor-pointer text-white">
                <option value="" className="bg-black">Wybierz...</option>
                {barbers.map(b => <option key={b.id} value={b.id} className="bg-black">{b.name}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Usługa</label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-xs font-black uppercase appearance-none cursor-pointer text-white">
                <option value="" className="bg-black">Wybierz...</option>
                {services.map(s => <option key={s.id} value={s.name} className="bg-black">{s.name}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Data</label>
              <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-sm font-bold invert" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-primary uppercase px-2 tracking-widest">Godzina</label>
              <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary text-sm font-bold invert" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-6 mt-6 bg-primary text-background rounded-full font-display text-2xl uppercase tracking-widest hover:bg-white transition-all shadow-xl disabled:opacity-50">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : 'ZATWIERDŹ'}
          </button>
        </form>

        {message && (
          <div className={`mt-8 p-6 rounded-3xl text-center text-xs font-black uppercase tracking-widest ${message.includes('✅') ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}