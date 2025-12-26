import { Calendar, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-glow opacity-40 animate-pulse-glow" />
      <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-card border border-border overflow-hidden">
            {/* Accent Lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
            
            <div className="text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex p-4 rounded-2xl bg-primary/10 mb-8"
              >
                <Zap className="w-10 h-10 text-primary" />
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Ready to Scale Without
                <br />
                <span className="text-gradient">Breaking Your System?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                Get a free system architecture audit and discover how the Enterprise Velocity System 
                can accelerate your growth without the technical debt.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/book">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="mailto:contact@saimsaudagar.com?subject=Architecture Audit Request">
                    Get Architecture Audit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>

              {/* Trust Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm text-muted-foreground mt-8"
              >
                No commitment required. 15-minute call to discuss your technical challenges.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
