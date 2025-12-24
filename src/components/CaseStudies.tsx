import { ArrowUpRight, Quote } from "lucide-react";

const caseStudies = [
  {
    company: "OnlyPark",
    type: "Dashboard Modernization",
    timeline: "12-16 Weeks",
    before: [
      "Legacy Laravel dashboard unresponsive under load",
      "API delays causing operational bottlenecks",
      "Previous developers disengaged & unresponsive",
    ],
    after: [
      "Modern Next.js + NestJS architecture",
      "Optimized APIs for speed and scalability",
      "Reliable delivery leading to contract extension",
    ],
    stack: ["Next.js", "NestJS", "AWS EC2", "AWS RDS"],
    testimonial: "Thank you for everything you're doing - we greatly appreciate it & very much enjoy working with you.",
    author: "OP Business Owner",
    result: "Complete Platform Rebuild",
  },
  {
    company: "The Pip Collective",
    type: "Platform Stabilization",
    timeline: "Ongoing",
    before: [
      "Numerous bugs, login issues & payment failures",
      "Slow APIs affecting user experience",
      "Previous team abandoned the project",
    ],
    after: [
      "Auth/login fixed, payments restored & reliable",
      "Significant API performance improvements",
      "Ongoing feature development & maintenance",
    ],
    stack: ["Full-Stack", "Payment Systems", "API Optimization"],
    testimonial: "F**king brilliant bud, great work as always.",
    author: "PC Platform Owner",
    result: "Revenue Recovered",
  },
  {
    company: "Crypto Arbitrage Platform",
    type: "Logic Correction & Deployment",
    timeline: "2-4 Weeks",
    before: [
      "Complex arbitrage logic with critical bugs",
      "Platform unable to execute trades properly",
      "Previous developer left code in broken state",
    ],
    after: [
      "Fixed and optimized trading logic",
      "Stable production deployment",
      "Full operational capability restored",
    ],
    stack: ["Backend Logic", "Trading Systems", "Deployment"],
    testimonial: "Quick turnaround and deep technical understanding of complex trading systems.",
    author: "Platform Owner",
    result: "Trading Operations Restored",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Production-Ready <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real outcomes. Systems running in production today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="group flex flex-col p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {study.company}
                  </h3>
                  <p className="text-sm text-primary">{study.type}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-lg">
                  {study.timeline}
                </span>
              </div>

              {/* Before/After */}
              <div className="space-y-6 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-medium text-destructive uppercase tracking-wider mb-3">Before</p>
                  <ul className="space-y-2">
                    {study.before.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">After</p>
                  <ul className="space-y-2">
                    {study.after.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs text-muted-foreground bg-secondary rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <Quote className="w-4 h-4 text-primary mb-2" />
                <p className="text-sm text-foreground italic mb-2">{study.testimonial}</p>
                <p className="text-xs text-muted-foreground">— {study.author}</p>
              </div>

              {/* Result Badge */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{study.result}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
