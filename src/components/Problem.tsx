import { AlertTriangle, Clock, ShieldOff, Users } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: AlertTriangle,
    title: "System Crashes",
    description: "Platform buckles during peak usage, costing users and revenue.",
  },
  {
    icon: Clock,
    title: "Slow APIs",
    description: "Every 100ms delay costs 1% in conversions.",
  },
  {
    icon: ShieldOff,
    title: "Security Risks",
    description: "SOC2, PCI-DSS, GDPR gaps put you at risk.",
  },
  {
    icon: Users,
    title: "Developer Ghosting",
    description: "Missed deadlines. Unfinished features. Broken promises.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-accent/8 rounded-full blur-3xl animate-drift" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/8 rounded-full blur-3xl animate-drift-reverse" />
      
      {/* Floating shapes with varied animations - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-3 h-3 border border-accent/40 rotate-45 animate-float" />
      <div className="hidden sm:block absolute top-40 right-20 w-4 h-4 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="hidden sm:block absolute bottom-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute bottom-40 right-1/3 w-3 h-3 border border-accent/20 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="hidden sm:block absolute top-1/2 left-8 w-2 h-2 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
            The Problem
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
            The <span className="text-gradient">Scaling Paradox</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            You need enterprise infrastructure without enterprise timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-5xl mx-auto mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 text-center"
            >
              <motion.div 
                className="inline-flex p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-accent/10 text-accent mb-2 sm:mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <problem.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <h3 className="text-xs sm:text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The Dilemma */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto px-2"
        >
          <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border bg-card/50 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-center">
              <p className="text-sm sm:text-lg md:text-xl font-medium text-foreground">
                "Enterprise Quality infrastructure..."
              </p>
              <span className="hidden md:block text-2xl text-accent">→</span>
              <span className="md:hidden text-lg text-accent">↓</span>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-muted-foreground">
                "...without 6-12 month timelines."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
