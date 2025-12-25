import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Velocity Starter",
    timeline: "6-10 weeks",
    stages: "S.P.S. Stages 1-2",
    description: "For early Series A companies needing specific technical upgrades or MVP enhancements.",
    features: [
      "Backend API with authentication (REST/GraphQL)",
      "Database design & optimization",
      "One major integration (Stripe, CRM, or Analytics)",
      "AWS/Firebase cloud deployment",
      "Security implementation (OWASP Top 10)",
      "30 days post-launch support",
    ],
    ideal: "SaaS or FinTech with validated product needing specific backend improvements.",
    popular: false,
  },
  {
    name: "Velocity Growth",
    timeline: "10-16 weeks",
    stages: "Full S.P.S. Stages 1-3",
    description: "For Series A-B companies scaling infrastructure for 10x user growth.",
    features: [
      "Full-stack web application (Angular/Next.js + Backend)",
      "Cross-platform mobile app (Flutter iOS + Android)",
      "Advanced backend (microservices, caching, real-time)",
      "Multiple integrations (Payments + CRM + Analytics)",
      "Performance optimization (<200ms APIs)",
      "Security audit & compliance prep (SOC2, PCI-DSS)",
      "Auto-scaling cloud infrastructure",
      "90 days premium support",
    ],
    ideal: "Growing FinTech/SaaS hitting performance bottlenecks.",
    popular: true,
  },
  {
    name: "Velocity Enterprise",
    timeline: "16-24 weeks",
    stages: "Extended Stage 3 + Advisory",
    description: "For Series B companies requiring enterprise-grade systems and ongoing partnership.",
    features: [
      "Multi-platform ecosystem (Web + iOS + Android + Admin)",
      "Enterprise backend (distributed systems, message queues)",
      "Advanced payments (multi-currency, escrow, crypto)",
      "Real-time infrastructure (WebSockets, live tracking)",
      "Blockchain/Web3 integrations",
      "Complete DevOps & CI/CD automation",
      "Penetration testing & compliance certification",
      "Technical roadmap & quarterly consulting",
      "6 months dedicated support",
    ],
    ideal: "Series B companies with complex multi-platform needs.",
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            Service Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient">Velocity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All packages follow the same S.P.S. methodology. The difference is scope, complexity, and support level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-card border-primary shadow-glow-sm scale-105"
                  : "bg-card/50 border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 text-sm font-semibold text-primary-foreground bg-gradient-primary rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <span>{pkg.timeline}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{pkg.stages}</span>
                </div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal For */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal For</p>
                <p className="text-sm text-foreground">{pkg.ideal}</p>
              </div>

              {/* CTA */}
              <Button variant={pkg.popular ? "hero" : "heroOutline"} size="lg" className="w-full" asChild>
                <Link to="/book">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
