import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";
import barber4 from "@/assets/barber-4.jpg";
import barber5 from "@/assets/barber-5.jpg";

const team = [
  { name: "Byku", role: "Founder & Master Barber", image: barber1 },
  { name: "Macias", role: "Barber", image: barber2 },
  { name: "Afarish", role: "Barber", image: barber3 },
  { name: "Slotu", role: "Barber", image: barber4 },
  { name: "Ryan", role: "Barber", image: barber5 },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ekipa" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            NASZA <span className="text-primary">EKIPA</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Doświadczeni barberzy z pasją do perfekcji
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image Container with Cyan Border */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 border-2 border-primary/30 group-hover:border-primary transition-colors duration-500 shadow-[0_0_15px_rgba(92,209,242,0.2)] group-hover:shadow-[0_0_25px_rgba(92,209,242,0.4)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
