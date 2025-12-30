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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-glow animate-pulse-glow" />

      <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Simplified */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 sm:mb-8"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs sm:text-sm text-muted-foreground">Available for Q1 2025</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
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
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10"
              >
                Full-stack development for scaling startups. FinTech, SaaS, PropTech.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                  <Link to="/book">
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base" onClick={scrollToWork}>
                  See Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Minimal Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border"
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "5.0★", label: "Rating" },
                  { value: "<200ms", label: "APIs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Premium Profile Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              {/* Outer glow ring */}
              <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-2xl animate-pulse-slow" />

              {/* Animated rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full border border-dashed border-primary/20"
              />

              {/* Secondary rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[195px] h-[195px] sm:w-[260px] sm:h-[260px] md:w-[325px] md:h-[325px] lg:w-[365px] lg:h-[365px] rounded-full border border-primary/10"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.1), transparent, hsl(var(--primary) / 0.05), transparent)"
                }}
              />

              {/* Floating tech badges with enhanced styling - hidden on very small screens */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-2 sm:-top-4 right-2 sm:right-4 md:right-0 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-[10px] sm:text-xs font-semibold text-primary">Spring Boot</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute bottom-12 sm:bottom-16 -left-2 sm:-left-4 md:-left-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-[10px] sm:text-xs font-semibold text-primary">Flutter</span>
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5], x: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute top-16 sm:top-20 -left-2 sm:-left-4 md:-left-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-[10px] sm:text-xs font-semibold text-primary">Next.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [8, -12, 8], x: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute bottom-6 sm:bottom-8 right-0 sm:right-4 md:right-8 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
              >
                <span className="text-[10px] sm:text-xs font-semibold text-primary">Angular</span>
              </motion.div>

              {/* Main profile container with hexagonal-inspired design */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden cursor-pointer group"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-full p-[2px] sm:p-[3px] bg-gradient-to-br from-primary via-primary/50 to-transparent">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                {/* Inner content area */}
                <div className="absolute inset-[2px] sm:inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-card via-secondary to-card">
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
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30"
                      >
                        <img src={logoLight} alt="Saim Saudagar" className="h-6 sm:h-8 md:h-10 w-auto hidden dark:block" />
                        <img src={logoDark} alt="Saim Saudagar" className="h-6 sm:h-8 md:h-10 w-auto dark:hidden" />
                      </motion.div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">Your Image Here</p>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
              </motion.div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-medium text-foreground whitespace-nowrap">Available for Projects</span>
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