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
    <section id="problem" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient">Scaling Paradox</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            You need enterprise infrastructure without enterprise timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 rounded-xl bg-gradient-card border border-border hover:border-accent/30 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-2 rounded-lg bg-accent/10 text-accent mb-3">
                <problem.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-6 rounded-2xl border border-border bg-card/50 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center">
              <p className="text-lg md:text-xl font-medium text-foreground">
                "Enterprise Quality infrastructure..."
              </p>
              <span className="hidden md:block text-2xl text-accent">→</span>
              <p className="text-lg md:text-xl font-medium text-muted-foreground">
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
