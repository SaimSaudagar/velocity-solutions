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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-3">
                <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-sm font-semibold mb-1">{reason.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
