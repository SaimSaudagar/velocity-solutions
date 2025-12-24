import { useState } from "react";
import { Shield, Zap, TrendingUp, CheckCircle, ChevronDown, Clock, FileText, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    number: "01",
    icon: Shield,
    title: "Security & Structure",
    weeks: "Weeks 1-6",
    shortDescription: "Building the foundational architecture for enterprise-scale reliability.",
    fullDescription: "80% of scalability problems stem from poor architectural decisions made in the first month. This stage prevents the technical debt that kills Series B momentum.",
    deliverables: [
      "Enterprise Architecture (SOLID, Design Patterns)",
      "Database Design & Optimization",
      "OAuth2/JWT Authentication & RBAC",
      "Security Implementation (OWASP Top 10)",
      "CI/CD Pipeline & Staging Environment",
    ],
    keyActivities: [
      { icon: Server, label: "Clean code structure following SOLID principles" },
      { icon: FileText, label: "Database normalization & indexing strategies" },
      { icon: Shield, label: "Encryption, input validation, SQL injection prevention" },
    ],
    color: "from-emerald-500 to-cyan-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    number: "02",
    icon: Zap,
    title: "Performance & Integration",
    weeks: "Weeks 7-12",
    shortDescription: "Optimizing speed, reliability, and ecosystem connectivity.",
    fullDescription: "Every 100ms of API latency costs you 1% in conversions. Payment integration failures mean lost revenue. This stage optimizes every millisecond.",
    deliverables: [
      "API Optimization (<200ms Response)",
      "Redis/Memcached Caching Layer",
      "Third-Party Integrations (Payments, CRM)",
      "Load Testing (10x Traffic Capacity)",
      "Real-Time Features (WebSockets, Push)",
    ],
    keyActivities: [
      { icon: Zap, label: "API response time optimization targeting <200ms" },
      { icon: Server, label: "Caching layer with Redis/Memcached" },
      { icon: TrendingUp, label: "Load testing to handle 10x expected traffic" },
    ],
    color: "from-cyan-500 to-blue-500",
    bgGlow: "bg-cyan-500/20",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Scalability & Resilience",
    weeks: "Weeks 13+",
    shortDescription: "Building systems that handle 10x growth without re-architecture.",
    fullDescription: "Investors evaluate technical scalability during Series B due diligence. This stage ensures you're ready for exponential growth without panic re-platforming.",
    deliverables: [
      "Cloud Infrastructure (AWS/Firebase)",
      "Auto-Scaling & Load Balancing",
      "Disaster Recovery & Backup Systems",
      "Advanced Monitoring & Alerting",
      "90-Day Post-Launch Support",
    ],
    keyActivities: [
      { icon: Server, label: "AWS/Firebase deployment with auto-scaling" },
      { icon: Shield, label: "Disaster recovery and automated backups" },
      { icon: FileText, label: "Complete technical documentation package" },
    ],
    color: "from-blue-500 to-violet-500",
    bgGlow: "bg-blue-500/20",
  },
];

const InteractiveTimeline = () => {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const toggleStage = (index: number) => {
    setExpandedStage(expandedStage === index ? null : index);
  };

  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50" />

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

        {/* Interactive Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Track */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:-translate-x-1/2" />

            {/* Timeline Nodes */}
            <div className="space-y-8">
              {stages.map((stage, index) => {
                const isExpanded = expandedStage === index;
                const isHovered = hoveredStage === index;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={stage.number}
                    className={cn(
                      "relative",
                      "md:flex md:items-start",
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-20">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 cursor-pointer",
                          "bg-gradient-to-br shadow-lg",
                          stage.color,
                          isExpanded || isHovered ? "scale-110 shadow-glow" : "scale-100"
                        )}
                        onClick={() => toggleStage(index)}
                        onMouseEnter={() => setHoveredStage(index)}
                        onMouseLeave={() => setHoveredStage(null)}
                      >
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={cn(
                        "ml-28 md:ml-0 md:w-[calc(50%-4rem)]",
                        isEven ? "md:pr-8" : "md:pl-8"
                      )}
                    >
                      <div
                        className={cn(
                          "group p-6 rounded-2xl border cursor-pointer transition-all duration-500",
                          "bg-gradient-card",
                          isExpanded
                            ? "border-primary shadow-glow-sm"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => toggleStage(index)}
                        onMouseEnter={() => setHoveredStage(index)}
                        onMouseLeave={() => setHoveredStage(null)}
                      >
                        {/* Glow Effect */}
                        <div
                          className={cn(
                            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 -z-10",
                            stage.bgGlow,
                            (isExpanded || isHovered) && "opacity-100 blur-2xl"
                          )}
                        />

                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                Stage {stage.number}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {stage.weeks}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold">{stage.title}</h3>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-300",
                              isExpanded && "rotate-180 text-primary"
                            )}
                          />
                        </div>

                        {/* Short Description */}
                        <p className="text-muted-foreground text-sm mb-4">
                          {stage.shortDescription}
                        </p>

                        {/* Expanded Content */}
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-500",
                            isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          {/* Quote */}
                          <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
                            <p className="text-sm text-foreground italic">
                              "{stage.fullDescription}"
                            </p>
                          </div>

                          {/* Key Activities */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-primary mb-3">Key Activities</h4>
                            <div className="space-y-2">
                              {stage.keyActivities.map((activity, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50"
                                >
                                  <activity.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{activity.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-3">Deliverables</h4>
                            <ul className="grid grid-cols-1 gap-2">
                              {stage.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Click hint */}
                        {!isExpanded && (
                          <p className="text-xs text-muted-foreground/60 mt-2">
                            Click to expand details
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why It Works */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-2xl bg-card/50 border border-border text-center">
          <p className="text-lg text-muted-foreground italic">
            "The S.P.S. Methodology prevents the technical debt that kills Series B momentum — 
            delivering enterprise outcomes in startup timelines."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
