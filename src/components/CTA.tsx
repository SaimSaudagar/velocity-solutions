import { Calendar, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-card border border-border overflow-hidden">
            {/* Accent Lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
            
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-8">
                <Zap className="w-10 h-10 text-primary" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Scale Without
                <br />
                <span className="text-gradient">Breaking Your System?</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Get a free system architecture audit and discover how the Enterprise Velocity System 
                can accelerate your growth without the technical debt.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </Button>
                <Button variant="heroOutline" size="xl">
                  Get Architecture Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Note */}
              <p className="text-sm text-muted-foreground mt-8">
                No commitment required. 15-minute call to discuss your technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
