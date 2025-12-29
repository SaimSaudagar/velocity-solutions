import { Star, MessageCircle, Shield, Clock, FileText, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise Standards",
    description: "Fortune 500-level architecture and security practices.",
  },
  {
    icon: Star,
    title: "5.0★ Rating",
    description: "Consistent 5-star ratings from FinTech & SaaS clients.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Work directly with the engineer building your product.",
  },
  {
    icon: Clock,
    title: "Faster Delivery",
    description: "8-20 weeks vs 6-12 months typical agency timeline.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    description: "API specs, architecture diagrams, deployment runbooks.",
  },
  {
    icon: HeadphonesIcon,
    title: "Extended Support",
    description: "30-90 days post-launch support included.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-32 left-20 w-1.5 h-1.5 rounded-full bg-primary/40 animate-float" />
      <div className="absolute bottom-40 right-32 w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            Why Choose Saim
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Enterprise Quality. <span className="text-gradient">Freelancer Speed.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Corporate-grade engineering without the corporate timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="mb-3">
                <motion.div 
                  className="inline-flex p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <reason.icon className="w-5 h-5" />
                </motion.div>
              </div>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
