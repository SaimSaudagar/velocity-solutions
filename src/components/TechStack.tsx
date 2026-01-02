import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Code2,
  Layers,
  GitBranch
} from "lucide-react";

const technologies = [
  { icon: Code2, name: "React/Next.js", category: "Frontend" },
  { icon: Server, name: "Node.js", category: "Backend" },
  { icon: Database, name: "PostgreSQL", category: "Database" },
  { icon: Cloud, name: "AWS/GCP", category: "Cloud" },
  { icon: Shield, name: "Auth0/Clerk", category: "Security" },
  { icon: Zap, name: "Redis", category: "Caching" },
  { icon: Layers, name: "Docker", category: "DevOps" },
  { icon: GitBranch, name: "CI/CD", category: "Automation" },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      id="tech" 
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          style={{ opacity, y, scale }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Technology Stack
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Built with <span className="text-gradient">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            We use battle-tested technologies that scale with your business
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px hsl(var(--primary) / 0.2)"
                }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1">{tech.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
