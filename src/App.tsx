import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import { Services } from "./site/Home";
import { useEffect } from "react";
import Book from "./pages/Book";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<PageTransition><Book /></PageTransition>} />
        <Route path="/case-study/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

/** Load the ElevenLabs voice widget only after the page is idle, so it never slows the first paint. */
const useDeferredVoiceWidget = () => {
  useEffect(() => {
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      const sc = document.createElement("script");
      sc.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      sc.async = true;
      document.body.appendChild(sc);
    };
    const t = window.setTimeout(load, 6000);
    const events = ["pointerdown", "keydown", "scroll"] as const;
    const onFirst = () => window.setTimeout(load, 2500);
    events.forEach((e) => window.addEventListener(e, onFirst, { once: true, passive: true }));
    return () => {
      clearTimeout(t);
      events.forEach((e) => window.removeEventListener(e, onFirst));
    };
  }, []);
};

const App = () => {
  useDeferredVoiceWidget();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <elevenlabs-convai agent-id="agent_2301kg0rf08wfaerjafp8w1hpznf"></elevenlabs-convai>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
