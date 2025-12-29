import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-light.svg";

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

            {/* Right Side - Premium Profile Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-2xl animate-pulse-slow" />

              {/* Animated rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border border-dashed border-primary/20"
              />

              {/* Secondary rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] md:w-[390px] md:h-[390px] lg:w-[430px] lg:h-[430px] rounded-full border border-primary/10"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.1), transparent, hsl(var(--primary) / 0.05), transparent)"
                }}
              />

              {/* Floating tech badges with enhanced styling */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-4 md:right-0 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-xs font-semibold text-primary">Spring Boot</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -left-8 md:-left-4 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-xs font-semibold text-primary">Flutter</span>
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5], x: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 -left-8 md:-left-4 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-xs font-semibold text-primary">Next.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [8, -12, 8], x: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-0 md:right-8 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-xs font-semibold text-primary">Angular</span>
              </motion.div>

              {/* Main profile container with hexagonal-inspired design */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden cursor-pointer group"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/50 to-transparent">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                {/* Inner content area */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-card via-secondary to-card">
                  {/* Animated gradient overlay */}
                  <motion.div
                    animate={{
                      background: [
                        "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.15), transparent 60%)",
                        "radial-gradient(circle at 70% 70%, hsl(var(--primary) / 0.15), transparent 60%)",
                        "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.15), transparent 60%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                  />

                  {/* Content placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30"
                      >
                        <img src={logoLight} alt="Saim Saudagar" className="h-10 md:h-12 w-auto hidden dark:block" />
                        <img src={logoDark} alt="Saim Saudagar" className="h-10 md:h-12 w-auto dark:hidden" />
                      </motion.div>
                      <p className="text-xs text-muted-foreground font-medium">Your Image Here</p>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
              </motion.div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Available for Projects</span>
                </div>
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