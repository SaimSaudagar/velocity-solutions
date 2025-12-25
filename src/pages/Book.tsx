import { InlineWidget } from "react-calendly";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Book = () => {
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
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <div className="container px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Book a <span className="text-gradient">Free Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your technical challenges and explore how the Enterprise Velocity System 
              can accelerate your growth.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border bg-card">
            <InlineWidget
              url="https://calendly.com/saimsaudagar/consultation"
              styles={{
                height: '700px',
                width: '100%',
              }}
              pageSettings={{
                backgroundColor: '0a0a0a',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '21c9d0',
                textColor: 'ffffff',
              }}
            />
          </div>

          {/* Additional Info */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Can't find a suitable time? Email me directly at{" "}
              <a href="mailto:contact@saimsaudagar.com" className="text-primary hover:underline">
                contact@saimsaudagar.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
