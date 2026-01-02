import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  { 
    icon: TrendingUp, 
    value: 500, 
    suffix: "%", 
    label: "Average ROI", 
    description: "Return on investment for clients" 
  },
  { 
    icon: Users, 
    value: 50, 
    suffix: "+", 
    label: "Happy Clients", 
    description: "Startups & enterprises served" 
  },
  { 
    icon: Clock, 
    value: 2, 
    suffix: "x", 
    label: "Faster Delivery", 
    description: "Compared to traditional agencies" 
  },
  { 
    icon: Award, 
    value: 99, 
    suffix: "%", 
    label: "Client Satisfaction", 
    description: "Based on post-project surveys" 
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [80, 0, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          style={{ opacity, y, scale }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Our Impact
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  
                  <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mt-2 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
