import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    overview: "OnlyPark is a parking management platform that was struggling with legacy technology and performance issues. The previous Laravel-based dashboard was unresponsive under load, causing operational bottlenecks.",
    challenge: [
      "Legacy Laravel dashboard became unresponsive under increased user load",
      "API delays causing significant operational bottlenecks for the business",
      "Previous developers disengaged and became unresponsive mid-project",
      "Technical debt accumulated over years making updates risky",
      "No proper documentation or testing in place",
    ],
    solution: [
      "Complete architecture redesign using modern Next.js frontend",
      "Rebuilt backend with NestJS for better performance and maintainability",
      "Implemented optimized APIs with caching strategies",
      "Set up AWS infrastructure with EC2 and RDS for reliability",
      "Created comprehensive documentation and CI/CD pipelines",
    ],
    results: [
      "Dashboard now handles 10x the previous load without issues",
      "API response times reduced from 2-3 seconds to under 200ms",
      "Development velocity increased significantly with new architecture",
      "Contract extended due to reliable delivery and quality work",
      "Zero downtime during the migration process",
    ],
    stack: ["Next.js", "NestJS", "AWS EC2", "AWS RDS", "PostgreSQL", "Redis"],
    testimonial: "Thank you for everything you're doing - we greatly appreciate it & very much enjoy working with you.",
    author: "OnlyPark Business Owner",
    metrics: [
      { label: "Performance Improvement", value: "10x" },
      { label: "API Response Time", value: "<200ms" },
      { label: "Downtime During Migration", value: "0" },
    ],
  },
  "pip-collective": {
    company: "The Pip Collective",
    type: "Platform Stabilization",
    timeline: "Ongoing Partnership",
    overview: "The Pip Collective is a trading education platform that was plagued with bugs, login issues, and payment failures after being abandoned by their previous development team.",
    challenge: [
      "Numerous critical bugs affecting core functionality",
      "Login and authentication issues blocking user access",
      "Payment system failures causing revenue loss",
      "Slow APIs degrading user experience",
      "Previous development team abandoned the project mid-way",
    ],
    solution: [
      "Emergency stabilization of authentication system",
      "Complete payment integration overhaul and testing",
      "Systematic bug identification and resolution",
      "API performance optimization and caching implementation",
      "Ongoing maintenance and feature development partnership",
    ],
    results: [
      "Authentication and login issues completely resolved",
      "Payment system restored and processing reliably",
      "Significant API performance improvements across the platform",
      "Revenue streams recovered and growing",
      "Platform stability maintained with ongoing support",
    ],
    stack: ["Full-Stack Development", "Payment Systems", "API Optimization", "Authentication"],
    testimonial: "F**king brilliant bud, great work as always.",
    author: "The Pip Collective Platform Owner",
    metrics: [
      { label: "Revenue Recovery", value: "100%" },
      { label: "Critical Bugs Fixed", value: "47+" },
      { label: "Uptime Since Fix", value: "99.9%" },
    ],
  },
  "crypto-arbitrage": {
    company: "Crypto Arbitrage Platform",
    type: "Logic Correction & Deployment",
    timeline: "2-4 Weeks",
    overview: "A sophisticated cryptocurrency arbitrage trading platform that was left in a broken state by the previous developer, unable to execute trades properly.",
    challenge: [
      "Complex arbitrage trading logic contained critical bugs",
      "Platform unable to execute trades correctly",
      "Previous developer left code in an incomplete, broken state",
      "Time-sensitive nature of trading meant daily losses",
      "Lack of documentation for complex business logic",
    ],
    solution: [
      "Deep analysis of existing trading logic and algorithms",
      "Identified and fixed critical calculation errors",
      "Optimized trade execution for speed and reliability",
      "Deployed to stable production environment",
      "Created documentation for future maintenance",
    ],
    results: [
      "Trading logic fully corrected and operational",
      "Platform deployed to stable production environment",
      "Full operational capability restored",
      "Quick turnaround minimized potential losses",
      "System running profitably with proper documentation",
    ],
    stack: ["Backend Logic", "Trading Systems", "Cryptocurrency APIs", "Production Deployment"],
    testimonial: "Quick turnaround and deep technical understanding of complex trading systems.",
    author: "Crypto Platform Owner",
    metrics: [
      { label: "Time to Fix", value: "2 weeks" },
      { label: "Trading Accuracy", value: "100%" },
      { label: "Deployment Success", value: "First try" },
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
          <nav className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">SS</span>
              <span className="hidden sm:block text-lg font-semibold text-foreground">Saim Saudagar</span>
            </Link>
            <Button variant="heroOutline" size="default" asChild>
              <Link to="/#work">
                <ArrowLeft className="w-4 h-4" />
                All Case Studies
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
              {study.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{study.company}</h1>
            <p className="text-xl text-muted-foreground mb-6">{study.overview}</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm">
                Timeline: {study.timeline}
              </span>
              {study.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {study.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{metric.value}</p>
                <p className="text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                The Challenge
              </h2>
              <ul className="space-y-4">
                {study.challenge.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                The Solution
              </h2>
              <ul className="space-y-4">
                {study.solution.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-center">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.results.map((result, index) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium italic mb-6">"{study.testimonial}"</p>
            <p className="text-muted-foreground">— {study.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {study.stack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button variant="heroOutline" asChild>
              <Link to={`/case-study/${prevStudy}`}>
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/book">
                Book a Consultation
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
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
