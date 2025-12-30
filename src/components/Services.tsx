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
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/8 rounded-full blur-3xl animate-drift" />
      <div className="absolute bottom-0 right-1/4 w-[175px] sm:w-[275px] md:w-[350px] h-[175px] sm:h-[275px] md:h-[350px] bg-accent/8 rounded-full blur-3xl animate-drift-reverse" />
      
      {/* Subtle grid with shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      
      {/* Floating accent elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-40 right-20 w-4 h-4 border border-primary/30 rounded-full animate-float" />
      <div className="hidden sm:block absolute bottom-32 left-16 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute top-1/3 left-10 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
            Service Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Choose Your <span className="text-gradient">Velocity</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            All packages follow the same S.P.S. methodology. The difference is scope, complexity, and support level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className={`relative flex flex-col p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-card border-primary shadow-glow-sm md:scale-100 lg:scale-105"
                  : "bg-card/50 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 sm:px-4 sm:py-1 text-xs sm:text-sm font-semibold text-primary-foreground bg-gradient-primary rounded-full">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{pkg.name}</h3>
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">
                  <span>{pkg.timeline}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{pkg.stages}</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + featureIndex * 0.05 }}
                  >
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Ideal For */}
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50 border border-border mb-4 sm:mb-6">
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal For</p>
                <p className="text-xs sm:text-sm text-foreground">{pkg.ideal}</p>
              </div>

              {/* CTA */}
              <Button variant={pkg.popular ? "hero" : "heroOutline"} size="lg" className="w-full text-sm sm:text-base" asChild>
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
