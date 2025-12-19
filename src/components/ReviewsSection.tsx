import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

// Opinie z Booksy - przykładowe dane (w produkcji można pobierać z API)
const reviews = [
  {
    id: 1,
    name: "Michał K.",
    rating: 5,
    text: "Najlepszy barbershop w Łodzi! Byku to prawdziwy mistrz, zawsze wychodzę zadowolony. Atmosfera na miejscu jest świetna.",
    barber: "Byku",
    date: "2 tygodnie temu",
  },
  {
    id: 2,
    name: "Kacper W.",
    rating: 5,
    text: "Profesjonalna obsługa i świetna atmosfera. Macias robi niesamowite fade'y. Polecam każdemu!",
    barber: "Macias",
    date: "1 tydzień temu",
  },
  {
    id: 3,
    name: "Dawid M.",
    rating: 5,
    text: "Już 3 rok chodzę tylko tutaj. Jakość usług zawsze na najwyższym poziomie. Zero kompromisów!",
    barber: "Afarish",
    date: "3 dni temu",
  },
  {
    id: 4,
    name: "Piotr S.",
    rating: 5,
    text: "Wreszcie znalazłem swojego barbera! Slotu wie co robi, zawsze dopasowuje fryzurę do kształtu głowy.",
    barber: "Slotu",
    date: "5 dni temu",
  },
  {
    id: 5,
    name: "Adam Z.",
    rating: 5,
    text: "Świetne miejsce, profesjonalni barberzy. Ryan zrobił mi idealny design. Wrócę na pewno!",
    barber: "Ryan",
    date: "1 dzień temu",
  },
  {
    id: 6,
    name: "Tomasz R.",
    rating: 5,
    text: "Polecam z całego serca! Atmosfera jak u kumpla, a efekt jak z najlepszego salonu. Top!",
    barber: "Byku",
    date: "4 dni temu",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opinie" className="py-24 md:py-32 relative overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="marble-veins absolute inset-0" />

      {/* Chrome Divider Top */}
      <div className="chrome-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            CO MÓWIĄ <span className="text-primary">KLIENCI</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="font-body font-bold text-foreground ml-2">5.0</span>
            <span className="font-body text-muted-foreground">na Booksy</span>
          </div>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Dziękujemy za zaufanie i opinie naszych klientów
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-lg p-6 group hover:neon-border transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-foreground/90 mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-body font-bold text-foreground">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-body text-xs text-muted-foreground">Barber</p>
                  <p className="font-body font-bold text-primary">{review.barber}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booksy Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://booksy.com/pl-pl/293129_bykucutzz-barbershop_barber-shop_23280_lodz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
          >
            Zobacz wszystkie opinie na Booksy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Chrome Divider Bottom */}
      <div className="chrome-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default ReviewsSection;
