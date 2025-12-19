import { Instagram, Facebook, Clock } from "lucide-react";
import logo from "@/assets/logo-byku2.png";

const businessHours = [
  { day: "Poniedziałek – Piątek", hours: "10:00-14:30, 15:00-20:00" },
  { day: "Sobota", hours: "09:00-12:40, 13:00-17:00" },
  { day: "Niedziela", hours: "Zamknięte" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border relative overflow-hidden">
      {/* Marble Background */}
      <div className="marble-veins absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center mb-4">
              <img src={logo} alt="BYKUCUTZZ" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} BYKUCUTZZ
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Wszystkie prawa zastrzeżone.
            </p>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl text-foreground">GODZINY OTWARCIA</h3>
            </div>
            <table className="font-body text-sm">
              <tbody>
                {businessHours.map((item) => (
                  <tr key={item.day} className="border-b border-border/30 last:border-0">
                    <td className="py-2 pr-6 text-muted-foreground whitespace-nowrap">{item.day}</td>
                    <td className={`py-2 font-bold ${item.hours === "Zamknięte" ? "text-red-400" : "text-foreground"}`}>
                      {item.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-display text-xl text-foreground mb-4">ŚLEDŹ NAS</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:neon-glow"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:neon-glow"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="font-body text-xs text-muted-foreground">
            Drewnowska 49a, 91-002 Łódź | JAKOŚĆ PONAD ILOŚĆ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
