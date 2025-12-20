import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Import Twoich autentycznych zdjęć
import fadeImg from "../assets/fade.jpg";
import fade1Img from "../assets/fade1.jpg";
import fade2Img from "../assets/fade2.jpg";
import fade4Img from "../assets/fade4.jpg";
import fade5Img from "../assets/fade5.jpg";
import fade6Img from "../assets/fade6.jpg";

const portfolioImages = [
  { id: 1, src: fadeImg, alt: "Fade Haircut", category: "Fade" },
  { id: 2, src: fade1Img, alt: "Beard Styling", category: "Broda" },
  { id: 3, src: fade2Img, alt: "Classic Cut", category: "Classic" },
  { id: 4, src: fade4Img, alt: "Modern Style", category: "Modern" },
  { id: 5, src: fade5Img, alt: "Buzz cut", category: "Buzzcut" },
  { id: 6, src: fade6Img, alt: "Textured crop", category: "Texture" },
];

const PortfolioSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      {/* Tekstura marmuru dla spójności wizualnej */}
      <div className="marble-veins absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-display uppercase italic tracking-tighter mb-4 text-white">
            NASZE <span className="text-primary">PRACE</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImg(image.src)}
              className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-primary font-display text-2xl uppercase tracking-widest italic">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Widok powiększonego zdjęcia */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
            <X size={40} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImg}
            className="max-w-full max-h-[90vh] rounded-3xl object-contain shadow-[0_0_50px_rgba(190,242,255,0.2)]"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;