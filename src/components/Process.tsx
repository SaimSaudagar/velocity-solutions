import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "We learn about your vision, goals, and challenges in a free 30-minute consultation.",
    duration: "30 min",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Planning",
    description: "We create a detailed roadmap with technical architecture, timelines, and milestones.",
    duration: "1 week",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Code,
    number: "03",
    title: "Development Sprints",
    description: "Agile development with weekly demos. You see progress and provide feedback continuously.",
    duration: "4-10 weeks",
    color: "from-primary/20 to-emerald-500/20"
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Scale",
    description: "We deploy, monitor, and optimize. Then provide ongoing support as you grow.",
    duration: "Ongoing",
    color: "from-orange-500/20 to-red-500/20"
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);

  // Progress line animation
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          style={{ opacity, y, scale }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            How It Works
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results, every time
          </p>
        </motion.div>

        <motion.div style={{ opacity, scale }} className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border/30 hidden sm:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80
                  }}
                  className="relative pl-0 sm:pl-20 md:pl-24"
                >
                  {/* Step Number Circle - Positioned differently on mobile */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="hidden sm:flex absolute left-0 top-4 sm:top-6 w-8 h-8 sm:w-16 sm:h-16 bg-background border-2 border-primary rounded-full items-center justify-center z-10"
                  >
                    <span className="text-primary font-bold text-xs sm:text-lg">{step.number}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                        {/* Mobile number badge */}
                        <div className="flex items-center gap-3 sm:hidden">
                          <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded-lg">{step.number}</span>
                          <span className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="hidden sm:flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-foreground text-lg md:text-xl">
                              {step.title}
                            </h3>
                            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="font-bold text-foreground text-base mb-2 sm:hidden">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <ArrowRight className="w-5 h-5 text-primary/30 rotate-90" />
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
