import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
