import { AlertTriangle, Clock, ShieldOff, Users } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: AlertTriangle,
    title: "System Crashes",
    description: "Your platform buckles during peak usage. Every crash costs you users, revenue, and reputation.",
  },
  {
    icon: Clock,
    title: "Slow APIs",
    description: "Sluggish API responses are killing conversions. Every 100ms delay costs 1% in sales.",
  },
  {
    icon: ShieldOff,
    title: "Security Risks",
    description: "Missing compliance standards put your business at legal and financial risk. SOC2, PCI-DSS, GDPR gaps.",
  },
  {
    icon: Users,
    title: "Developer Ghosting",
    description: "Freelancers disappear mid-project. Missed deadlines. Unfinished features. Broken promises.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Growing Companies Face a{" "}
            <span className="text-gradient">Scaling Paradox</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You need enterprise-quality infrastructure, but you don't have enterprise timelines or budgets. 
            Traditional options leave you stuck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10 text-destructive">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Dilemma */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl border border-border bg-card/50 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <p className="text-xl md:text-2xl font-medium text-foreground italic">
                  "We need Enterprise Quality infrastructure..."
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="flex-1">
                <p className="text-xl md:text-2xl font-medium text-muted-foreground italic">
                  "...but without the 6-12 month Enterprise Timelines."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
