import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
];

const PartnersCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  // Double the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
      <motion.div style={{ opacity, y }}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partners & <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to have worked with amazing companies and helped them achieve their digital goals
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel - Row 1 (Left to Right) */}
        <div className="relative mb-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -50 * partners.length * 10],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`row1-${partner.name}-${index}`}
                className="flex-shrink-0 px-8 py-6 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ minWidth: '120px' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Scroll Carousel - Row 2 (Right to Left) */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [-50 * partners.length * 10, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.reverse().map((partner, index) => (
              <motion.div
                key={`row2-${partner.name}-${index}`}
                className="flex-shrink-0 px-8 py-6 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ minWidth: '120px' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="container mx-auto px-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Delivered" },
              { value: "8+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnersCarousel;
