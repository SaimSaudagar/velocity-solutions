import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, Check, ImageIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import beforeImage from "@/assets/onlypark/before.png";
import afterImage from "@/assets/onlypark/after.png";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-light.svg";

const caseStudiesData: Record<string, {
  company: string;
  type: string;
  timeline: string;
  overview: string;
  challenge: string[];
  solution: string[];
  results: string[];
  stack: string[];
  testimonial: string;
  author: string;
  metrics: { label: string; value: string }[];
}> = {
  onlypark: {
    company: "OnlyPark",
    type: "Dashboard Modernization",
    timeline: "12-16 Weeks",
    overview: "OnlyPark is a parking management platform that was struggling with legacy technology and performance issues.",
    challenge: [
      "Legacy Laravel dashboard unresponsive under load",
      "API delays causing operational bottlenecks",
      "Previous developers became unresponsive",
    ],
    solution: [
      "Complete architecture redesign with Next.js",
      "Rebuilt backend with NestJS",
      "Set up AWS infrastructure with EC2 and RDS",
    ],
    results: [
      "Dashboard handles 10x the previous load",
      "API response under 200ms",
      "Zero downtime during migration",
    ],
    stack: ["Next.js", "NestJS", "AWS EC2", "AWS RDS", "PostgreSQL", "Redis"],
    testimonial: "Thank you for everything you're doing - we greatly appreciate it & very much enjoy working with you.",
    author: "OnlyPark Business Owner",
    metrics: [
      { label: "Performance", value: "10x" },
      { label: "API Speed", value: "<200ms" },
      { label: "Downtime", value: "0" },
    ],
  },
  "pip-collective": {
    company: "The Pip Collective",
    type: "Platform Stabilization",
    timeline: "Ongoing Partnership",
    overview: "The Pip Collective is a trading education platform that was plagued with bugs and payment failures.",
    challenge: [
      "Critical bugs affecting core functionality",
      "Payment system failures causing revenue loss",
      "Previous team abandoned the project",
    ],
    solution: [
      "Emergency stabilization of authentication",
      "Complete payment integration overhaul",
      "API performance optimization",
    ],
    results: [
      "Authentication issues resolved",
      "Payment system restored and reliable",
      "Revenue streams recovered",
    ],
    stack: ["Full-Stack Development", "Payment Systems", "API Optimization", "Authentication"],
    testimonial: "Brilliant work as always.",
    author: "The Pip Collective Platform Owner",
    metrics: [
      { label: "Recovery", value: "100%" },
      { label: "Bugs Fixed", value: "47+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  "crypto-arbitrage": {
    company: "Crypto Arbitrage Platform",
    type: "Logic Correction & Deployment",
    timeline: "2-4 Weeks",
    overview: "A cryptocurrency arbitrage trading platform left in a broken state by the previous developer.",
    challenge: [
      "Complex trading logic with critical bugs",
      "Platform unable to execute trades",
      "Code left in incomplete state",
    ],
    solution: [
      "Deep analysis of trading algorithms",
      "Fixed critical calculation errors",
      "Deployed to stable production",
    ],
    results: [
      "Trading logic fully operational",
      "Stable production deployment",
      "Quick turnaround minimized losses",
    ],
    stack: ["Backend Logic", "Trading Systems", "Cryptocurrency APIs", "Production Deployment"],
    testimonial: "Highly recommended developer, friendly and very knowledgeable.",
    author: "Crypto Platform Owner",
    metrics: [
      { label: "Time to Fix", value: "2 weeks" },
      { label: "Accuracy", value: "100%" },
      { label: "Deploy", value: "First try" },
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudiesData[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/#work">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const studyKeys = Object.keys(caseStudiesData);
  const currentIndex = studyKeys.indexOf(slug || "");
  const nextStudy = studyKeys[(currentIndex + 1) % studyKeys.length];
  const prevStudy = studyKeys[(currentIndex - 1 + studyKeys.length) % studyKeys.length];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoLight} alt="Saim Saudagar" className="h-10 w-auto hidden dark:block" />
              <img src={logoDark} alt="Saim Saudagar" className="h-10 w-auto dark:hidden" />
              <span className="hidden sm:block text-sm font-semibold text-foreground">Saim Saudagar</span>
            </Link>
            <Button variant="heroOutline" size="sm" asChild>
              <Link to="/#work">
                <ArrowLeft className="w-4 h-4" />
                All Case Studies
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
              {study.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{study.company}</h1>
            <p className="text-lg text-muted-foreground mb-4">{study.overview}</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-secondary rounded-lg text-sm">
                {study.timeline}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-8 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slug === "onlypark" ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-xl border border-border overflow-hidden"
                  >
                    <img
                      src={beforeImage}
                      alt="OnlyPark Before"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-xl border border-border overflow-hidden"
                  >
                    <img
                      src={afterImage}
                      alt="OnlyPark After"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </>
              ) : (
                [1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="aspect-video rounded-xl bg-secondary/50 border border-border flex items-center justify-center"
                  >
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground/50">Project Screenshot {i}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-10 border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {study.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                Challenge
              </h2>
              <ul className="space-y-3">
                {study.challenge.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Solution
              </h2>
              <ul className="space-y-3">
                {study.solution.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-6 text-center">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {study.results.map((result, index) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-2 p-3 rounded-lg bg-background border border-border text-sm"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Client Image Placeholder */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary border border-border flex items-center justify-center">
              <User className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-medium italic mb-4">"{study.testimonial}"</p>
            <p className="text-muted-foreground">— {study.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold mb-3 text-center">Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {study.stack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-secondary rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button variant="heroOutline" size="sm" asChild>
              <Link to={`/case-study/${prevStudy}`}>
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Link>
            </Button>
            <Button variant="hero" size="default" asChild>
              <Link to="/book">
                Book a Consultation
              </Link>
            </Button>
            <Button variant="heroOutline" size="sm" asChild>
              <Link to={`/case-study/${nextStudy}`}>
                Next
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
