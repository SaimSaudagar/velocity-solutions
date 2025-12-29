import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CursorTracker from "@/components/CursorTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Custom Cursor */}
      <CursorTracker />
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-drift" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-drift-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <InteractiveTimeline />
        <Services />
        <CaseStudies />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
