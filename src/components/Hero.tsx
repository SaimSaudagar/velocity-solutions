import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Simplified */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Q1 2025</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">Enterprise Software.</span>
                <br />
                <span className="text-gradient">Built in Weeks.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10"
              >
                Full-stack development for scaling startups. FinTech, SaaS, PropTech.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/book">
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" onClick={scrollToWork}>
                  See Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Minimal Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border"
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "5.0★", label: "Rating" },
                  { value: "<200ms", label: "APIs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
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
              {/* Animated gradient orb behind */}
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl animate-pulse-glow" />
              
              {/* Decorative ring */}
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-primary/20" />
              
              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 right-8 md:right-4 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur border border-border text-xs font-medium text-primary"
              >
                Spring Boot
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -left-4 md:left-0 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur border border-border text-xs font-medium text-primary"
              >
                Flutter
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-4 md:left-4 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur border border-border text-xs font-medium text-primary"
              >
                Next.js
              </motion.div>
              <motion.div
                animate={{ y: [8, -12, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 md:right-12 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur border border-border text-xs font-medium text-primary"
              >
                Angular
              </motion.div>

              {/* Main profile image container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-card shadow-2xl shadow-primary/20 cursor-pointer group"
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-secondary">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-3xl md:text-4xl font-bold text-gradient">SS</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Your Image</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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