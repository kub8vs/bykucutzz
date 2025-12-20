import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marek W.",
    rating: 5,
    text: "Najlepszy barber w Łodzi. Atmosfera petarda, a cięcie zawsze na najwyższym poziomie. Byku wie co robi!",
    date: "2 dni temu"
  },
  {
    name: "Kamil G.",
    rating: 5,
    text: "Combo u Maciasa to czysta przyjemność. Broda idealnie wykonturowana, gorący ręcznik robi robotę.",
    date: "tydzień temu"
  },
  {
    name: "Adrian L.",
    rating: 5,
    text: "Słotu to mistrz detalu. Wzorek wyszedł idealnie. Na pewno wrócę!",
    date: "2 tygodnie temu"
  },
  {
    name: "Jakub Z.",
    rating: 5,
    text: "Mega dobry fade u Ryana!",
    date: "1 dzień temu"
  },
  {
    name: "Piotr H.",
    rating: 5,
    text: "Dobra robota Afraish!",
    date: "5 dni temu"
  },
  {
    name: "Maciek D.",
    rating: 5,
    text: "Fresh cut na święta",
    date: "2 dni temu"
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-primary" size={20} />
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl font-display uppercase italic tracking-tighter mb-4">
            CO MÓWIĄ O NAS NA <span className="text-primary">BOOKSY</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
            ŚREDNIA OCENA 5.0/5 NA PODSTAWIE PONAD 500 OPINII
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative group hover:border-primary/30 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={12} />
                ))}
              </div>

              <p className="text-white/80 italic mb-6 text-sm leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <p className="font-bold uppercase tracking-widest text-xs text-white">{review.name}</p>
                <p className="text-white/20 text-[9px] uppercase mt-1 tracking-tighter">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://booksy.com/pl-pl/293129_bykucutzz-barbershop_barber-shop_23280_lodz#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-black text-primary border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest"
          >
            Zobacz wszystkie opinie na Booksy
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;