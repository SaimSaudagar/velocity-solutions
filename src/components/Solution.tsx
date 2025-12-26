import { Shield, Zap, TrendingUp, CheckCircle } from "lucide-react";

const stages = [
  {
    number: "01",
    icon: Shield,
    title: "Security & Structure",
    weeks: "Weeks 1-6",
    description: "Building the foundational architecture for enterprise-scale reliability.",
    deliverables: [
      "Enterprise Architecture (SOLID, Design Patterns)",
      "Database Design & Optimization",
      "OAuth2/JWT Authentication & RBAC",
      "Security Implementation (OWASP Top 10)",
      "CI/CD Pipeline & Staging Environment",
    ],
  },
  {
    number: "02",
    icon: Zap,
    title: "Performance & Integration",
    weeks: "Weeks 7-12",
    description: "Optimizing speed, reliability, and ecosystem connectivity.",
    deliverables: [
      "API Optimization (<200ms Response)",
      "Redis/Memcached Caching Layer",
      "Third-Party Integrations (Payments, CRM)",
      "Load Testing (10x Traffic Capacity)",
      "Real-Time Features (WebSockets, Push)",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Scalability & Resilience",
    weeks: "Weeks 13+",
    description: "Building systems that handle 10x growth without re-architecture.",
    deliverables: [
      "Cloud Infrastructure (AWS/Firebase)",
      "Auto-Scaling & Load Balancing",
      "Disaster Recovery & Backup Systems",
      "Advanced Monitoring & Alerting",
      "90-Day Post-Launch Support",
    ],
  },
];

const Solution = () => {
  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-glow opacity-60 animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[250px] h-[250px] bg-primary/8 rounded-full blur-3xl animate-float" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise Velocity System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Delivering enterprise-grade systems in 8-20 weeks, not months. 
            Built on the proven S.P.S. Methodology™.
          </p>

          {/* Comparison Badge */}
          <div className="inline-flex items-center gap-6 p-4 rounded-2xl bg-card border border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">8-20 Weeks</p>
              <p className="text-sm text-muted-foreground">Our Timeline</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-muted-foreground line-through">6-12 Months</p>
              <p className="text-sm text-muted-foreground">Typical Agency</p>
            </div>
          </div>
        </div>

        {/* S.P.S. Methodology */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Stage Number */}
                <div className="absolute -top-4 left-8">
                  <span className="px-3 py-1 text-sm font-bold text-primary bg-background border border-primary/30 rounded-lg">
                    Stage {stage.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-2">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <stage.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{stage.weeks}</p>
                <p className="text-muted-foreground mb-6">{stage.description}</p>

                {/* Deliverables */}
                <ul className="space-y-3">
                  {stage.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Connector Line (for desktop) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why It Works */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-2xl bg-card/50 border border-border text-center">
          <p className="text-lg text-muted-foreground italic">
            "80% of scalability problems stem from poor architectural decisions made in the first month. 
            The S.P.S. Methodology prevents the technical debt that kills Series B momentum."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
