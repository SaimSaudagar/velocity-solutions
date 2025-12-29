import { ArrowUpRight, Quote, ImageIcon, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import onlyPark2 from "@/assets/onlypark/2.png";
import tpc2 from "@/assets/tpc/2.png";

const caseStudies = [
  {
    slug: "onlypark",
    company: "OnlyPark",
    type: "Dashboard Modernization",
    timeline: "12-16 Weeks",
    result: "10x Performance Boost",
    stack: ["Next.js", "NestJS", "AWS"],
    testimonial: "We greatly appreciate it & very much enjoy working with you.",
    author: "Business Owner",
  },
  {
    slug: "pip-collective",
    company: "The Pip Collective",
    type: "Platform Stabilization",
    timeline: "Ongoing",
    result: "Revenue Recovered",
    stack: ["Full-Stack", "Payments", "API"],
    testimonial: "Brilliant work as always.",
    author: "Platform Owner",
  },
  {
    slug: "crypto-arbitrage",
    company: "Crypto Arbitrage",
    type: "Logic & Deployment",
    timeline: "2-4 Weeks",
    result: "Trading Restored",
    stack: ["Backend", "Trading", "Deploy"],
    testimonial: "Highly recommended developer, friendly and very knowledgeable.",
    author: "Platform Owner",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      {/* Subtle dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Production <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real projects. Real outcomes. Systems running in production today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Link key={study.company} to={`/case-study/${study.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="group flex flex-col p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full cursor-pointer"
              >
                {/* Project Image */}
                <motion.div 
                  className={`relative w-full mb-4 rounded-xl bg-secondary/50 border border-border overflow-hidden group-hover:border-primary/30 transition-colors ${study.slug === "onlypark" || study.slug === "pip-collective" ? "h-40 md:h-48" : "h-32 md:h-40"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {study.slug === "onlypark" ? (
                    <img
                      src={onlyPark2}
                      alt="OnlyPark Dashboard"
                      className="w-full h-full object-contain object-top"
                    />
                  ) : study.slug === "pip-collective" ? (
                    <img
                      src={tpc2}
                      alt="The Pip Collective"
                      className="w-full h-full object-contain object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground/50">Project Screenshot</p>
                      </div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {study.company}
                    </h3>
                    <p className="text-xs text-primary">{study.type}</p>
                  </div>
                  <span className="px-2 py-1 text-xs text-muted-foreground bg-secondary rounded">
                    {study.timeline}
                  </span>
                </div>

                {/* Result Badge */}
                <motion.div 
                  className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm font-medium text-primary">{study.result}</p>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.stack.map((tech, techIndex) => (
                    <motion.span 
                      key={tech} 
                      className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Client Testimonial with Avatar Placeholder */}
                <div className="p-3 rounded-lg bg-secondary/30 border border-border mt-auto group-hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-3">
                    {/* Client Image Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Quote className="w-3 h-3 text-primary mb-1" />
                      <p className="text-xs text-foreground/80 italic line-clamp-2">{study.testimonial}</p>
                      <p className="text-xs text-muted-foreground mt-1">— {study.author}</p>
                    </div>
                  </div>
                </div>

                {/* View More */}
                <motion.div 
                  className="mt-4 pt-3 border-t border-border flex items-center justify-between"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
