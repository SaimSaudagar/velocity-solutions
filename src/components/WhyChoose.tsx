import { Star, MessageCircle, Shield, Clock, FileText, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise Engineering Standards",
    description: "Fortune 500-level architecture and security practices. SOLID principles, design patterns, and comprehensive documentation.",
  },
  {
    icon: Star,
    title: "5.0★ Client Satisfaction",
    description: "Consistent 5-star ratings from FinTech, SaaS, and PropTech clients. Check testimonials and live references.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "No account managers or middlemen. You work directly with the engineer building your product.",
  },
  {
    icon: Clock,
    title: "Faster Than Agencies",
    description: "8-20 weeks vs 6-12 months. Same enterprise quality, delivered at startup speed.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "API specs, architecture diagrams, deployment runbooks. Your team can maintain and extend without dependency.",
  },
  {
    icon: HeadphonesIcon,
    title: "Extended Support",
    description: "30-90 days of post-launch support included. Priority response times and dedicated optimization.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            Why Choose Saim
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise Quality. <span className="text-gradient">Freelancer Speed.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The best of both worlds: corporate-grade engineering without the corporate timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "5.0", label: "Average Rating" },
            { value: "<200ms", label: "API Response Target" },
            { value: "10x", label: "Scale Ready" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card/30 border border-border">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
