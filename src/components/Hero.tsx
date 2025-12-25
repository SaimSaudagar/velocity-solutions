import { ArrowRight, Calendar, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Q1 2025 Projects</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">Enterprise-Grade Software.</span>
                <br />
                <span className="text-gradient">Built in Weeks, Not Months.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Full-stack development for FinTech, SaaS, and PropTech companies scaling from Series A to B. 
                Enterprise architecture delivered at freelancer speed.
              </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["Java Spring Boot", "NestJS", "Angular", "Next.js", "Flutter"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 text-sm bg-secondary rounded-lg text-muted-foreground border border-border"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/book">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" onClick={scrollToWork}>
                  See Live Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  { icon: Shield, text: "SOC2 & PCI-DSS Ready" },
                  { icon: Zap, text: "<200ms API Response" },
                  { icon: TrendingUp, text: "10x Scale Ready" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl bg-card/50 border border-border"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Interactive Profile Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Decorative rings */}
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-primary/10" />
              
              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 md:right-0 px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground"
              >
                Java Spring Boot
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground"
              >
                Flutter
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-0 px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground"
              >
                Angular
              </motion.div>
              <motion.div
                animate={{ y: [8, -12, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-5 md:right-10 px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground"
              >
                Next.js
              </motion.div>

              {/* Main profile image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 shadow-2xl shadow-primary/20 cursor-pointer group"
              >
                {/* Placeholder - Replace src with your image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-bold text-gradient">SS</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Add your image here</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/20 animate-pulse" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
