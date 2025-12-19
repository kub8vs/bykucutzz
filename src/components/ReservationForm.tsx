import React, { useState } from 'react';
import { Scissors, Loader2, Calendar, User, ShoppingBag } from 'lucide-react';

export default function ReservationForm() {
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
      // Omijanie CORS: Wysyłamy dane jako URLSearchParams, co nie wymaga "preflight"
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      await fetch('https://hooks.zapier.com/hooks/catch/25754214/uarzdes/', {
        method: 'POST',
        mode: 'no-cors', // Kluczowe dla działania bez SSL i przy blokadach CORS
        body: body
      });

      // W trybie no-cors przeglądarka nie zwraca statusu, więc informujemy o sukcesie wysyłki
      setMessage('✅ REZERWACJA WYSŁANA!');
      setFormData({ name: '', phone: '', email: '', service: '', barber: '', date: '', time: '' });
    } catch (error) {
      console.error('Błąd wysyłki:', error);
      setMessage('❌ BŁĄD POŁĄCZENIA. Wyłącz AdBlocka.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-8 bg-[#0a0a0a] border border-white/5 rounded-[3rem] shadow-2xl text-white font-sans">
      <div className="text-center mb-8">
        <Scissors className="mx-auto text-[#FFD700] mb-4" size={40} />
        <h2 className="text-5xl font-black uppercase tracking-tighter italic">BYKU <span className="text-[#FFD700]">REZERWACJA</span></h2>
        <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] mt-3 font-bold">Direct Calendar Protocol</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <input name="name" placeholder="IMIĘ I NAZWISKO" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all text-sm font-bold uppercase" />
          <input name="phone" placeholder="NUMER TELEFONU" value={formData.phone} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all text-sm font-bold" />
          <input name="email" type="email" placeholder="EMAIL (OPCJONALNIE)" value={formData.email} onChange={handleChange} className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all text-sm font-bold" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select name="barber" value={formData.barber} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] text-xs font-black uppercase appearance-none cursor-pointer">
              <option value="">BARBER...</option>
              <option value="byku">BYKU</option>
              <option value="macias">MACIAS</option>
              <option value="afarish">AFARISH</option>
              <option value="slotu">SŁOTU</option>
              <option value="ryan">RYAN</option>
            </select>
          </div>
          <div className="relative">
            <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] text-xs font-black uppercase appearance-none cursor-pointer">
              <option value="">USŁUGA...</option>
              <option value="Strzyżenie męskie (Byku)">Strzyżenie (BYKU)</option>
              <option value="Strzyżenie męskie">Strzyżenie męskie</option>
              <option value="Buzz Cut">Buzz Cut</option>
              <option value="Metamorfoza">Metamorfoza</option>
              <option value="Design">Design / Wzorek</option>
              <option value="Combo Byku">Combo (BYKU)</option>
              <option value="Combo">Combo włosy+broda</option>
              <option value="Broda">Strzyżenie brody</option>
              <option value="Repigmentacja">Repigmentacja</option>
              <option value="Konturowanie">Konturowanie</option>
              <option value="0 + Broda">0 + Broda</option>
              <option value="Woskowanie">Woskowanie nosa</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] text-sm invert font-bold" />
          <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] text-sm invert font-bold" />
        </div>

        <button type="submit" disabled={loading} className="w-full py-8 bg-white text-black rounded-full font-black text-2xl uppercase tracking-widest hover:bg-[#FFD700] transition-all disabled:opacity-50">
          {loading ? <Loader2 className="animate-spin mx-auto" size={32} /> : 'POTWIERDŹ TERMIN'}
        </button>
      </form>

      {message && (
        <div className={`mt-8 p-6 rounded-3xl text-center text-xs font-black uppercase tracking-widest ${message.includes('✅') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
          {message}
        </div>
      )}
    </div>
  );
}