import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lokalizacja" className="py-24 md:py-32 relative overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="marble-veins absolute inset-0" />

      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            ZNAJDŹ <span className="text-primary">NAS</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Zapraszamy do naszego salonu w centrum Łodzi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden neon-border h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.025396073!2d19.4508!3d51.7763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb00c0e4c1a1%3A0x0!2zRHJ6ZXdub3dza2EgNDlhLCA5MS0wMDIgxYHDs2TFug!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BYKUCUTZZ Lokalizacja"
            />
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-xl p-8 group hover:neon-border transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Adres</h3>
                  <p className="font-body text-foreground text-lg">
                    Drewnowska 49a
                  </p>
                  <p className="font-body text-muted-foreground">
                    91-002 Łódź
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-8 group hover:neon-border transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Godziny Otwarcia</h3>
                  <div className="font-body text-muted-foreground space-y-1">
                    <p>Poniedziałek - Piątek: <span className="text-foreground">10:00 - 20:00</span></p>
                    <p>Sobota: <span className="text-foreground">10:00 - 18:00</span></p>
                    <p>Niedziela: <span className="text-foreground">Zamknięte</span></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-xl p-8 group hover:neon-border transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Kontakt</h3>
                  <p className="font-body text-foreground text-lg">
                    +48 123 456 789
                  </p>
                  <p className="font-body text-muted-foreground">
                    kontakt@bykucutzz.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
