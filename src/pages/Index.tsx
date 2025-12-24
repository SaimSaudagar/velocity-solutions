import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
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
