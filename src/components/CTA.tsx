import { Calendar, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] md:w-[900px] h-[250px] sm:w-[400px] md:h-[500px] bg-gradient-glow opacity-40 animate-pulse-glow" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 80
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="relative p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl bg-gradient-card border border-border overflow-hidden"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Accent Lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
            
            <div className="text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 mb-6 sm:mb-8"
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6"
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
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
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
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                    <Link to="/book">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      Book Free Consultation
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                    <a href="mailto:contact@saimsaudagar.com?subject=Architecture Audit Request">
                      Get Architecture Audit
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8"
              >
                No commitment required. 15-minute call to discuss your technical challenges.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
