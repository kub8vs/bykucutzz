import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    alt: "Fade haircut",
    category: "Fade"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
    alt: "Beard styling",
    category: "Broda"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=900&fit=crop",
    alt: "Classic cut",
    category: "Classic"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    alt: "Modern style",
    category: "Modern"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&h=800&fit=crop",
    alt: "Buzz cut",
    category: "Buzzcut"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=700&fit=crop",
    alt: "Textured crop",
    category: "Texture"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=600&h=600&fit=crop",
    alt: "Skin fade",
    category: "Fade"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1582015752624-e8b1c8b17c4c?w=600&h=800&fit=crop",
    alt: "Pompadour",
    category: "Classic"
  },
];

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Subtle Marble Background */}
      <div className="marble-veins absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            PORT<span className="text-primary neon-text">FOLIO</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Nasze najlepsze realizacje. Każde strzyżenie to dzieło sztuki.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg border border-border/30 bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-body font-bold text-sm uppercase tracking-wider text-primary">
                    {image.category}
                  </span>
                </div>
                {/* Neon Border on Hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg border-2 border-primary/30"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <X size={20} />
            </button>
            <p className="text-center mt-4 font-body font-bold text-primary uppercase tracking-wider">
              {selectedImage.category}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
