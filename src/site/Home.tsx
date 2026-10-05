import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { useCallback, useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./site.css";
import { ActionsContext } from "./actions";
import { Hero, Nav } from "./Hero";
import { CALENDLY_URL } from "./lead";
import { Arrow, EASE } from "./motion";
import Scorecard from "./Scorecard";
import { About, Compare, FAQ, FinalCTA, Footer, Magnet, Marquee, Method, Offers, Problem, Stats, Testimonials, Work } from "./Sections";

const POPUP_KEY = "ss_magnet_seen";

function safeGet(k: string) {
  try {
    return sessionStorage.getItem(k);
  } catch {
    return null;
  }
}
function safeSet(k: string, v: string) {
  try {
    sessionStorage.setItem(k, v);
  } catch {
    /* ignore */
  }
}

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false);
  const [scoreOpen, setScoreOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  const openBook = useCallback(() => {
    setScoreOpen(false);
    setNudge(false);
    setBookOpen(true);
  }, []);
  const openScorecard = useCallback(() => {
    setNudge(false);
    safeSet(POPUP_KEY, "1");
    setScoreOpen(true);
  }, []);

  /* Smooth scrolling */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!;
      const el = id === "#top" ? document.body : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: id === "#top" ? 0 : -72 });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  /* Lock page scroll while a modal is open */
  useEffect(() => {
    const locked = scoreOpen || bookOpen;
    document.documentElement.classList.toggle("lenis-stopped", locked);
    document.body.style.overflow = locked ? "hidden" : "";
  }, [scoreOpen, bookOpen]);

  /* Lead magnet nudge: shows once per session after 9s or 35% scroll, never over a playing video */
  useEffect(() => {
    if (safeGet(POPUP_KEY) || safeGet("ss_lead_captured")) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      if ((window as unknown as { __vslPlaying?: boolean }).__vslPlaying) return;
      fired = true;
      safeSet(POPUP_KEY, "1");
      setNudge(true);
    };
    const t = window.setTimeout(fire, 9000);
    const onScroll = () => {
      const h = document.documentElement;
      if (h.scrollTop / (h.scrollHeight - h.clientHeight) > 0.35) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Esc closes the scorecard modal */
  useEffect(() => {
    if (!scoreOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setScoreOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scoreOpen]);

  return (
    <ActionsContext.Provider value={{ openBook, openScorecard }}>
      <div className="site">
        <motion.div className="progress-line" style={{ scaleX: progress }} />
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Problem />
          <Magnet />
          <Method />
          <Stats />
          <Work />
          <Testimonials />
          <Offers />
          <Compare />
          <About />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />

        {/* Mobile sticky CTA */}
        <div className="sticky-cta">
          <button className="btn btn--light" onClick={openScorecard}>
            Free scale score
          </button>
          <button className="btn" onClick={openBook} style={{ border: "1px solid rgba(255,255,255,.2)" }}>
            Book a call
          </button>
        </div>

        {/* Desktop nudge toward the lead magnet */}
        <AnimatePresence>
          {nudge && !scoreOpen && !bookOpen && (
            <motion.div
              className="toast-lite"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: EASE }}
              role="dialog"
              aria-label="Free Scale-Readiness Scorecard"
            >
              <div>
                <b>Will your stack survive 10× traffic?</b>
                <span style={{ color: "var(--ink-3)" }}>Free 90-second scorecard — get your score and top 3 fixes.</span>
                <div style={{ marginTop: 14 }}>
                  <button className="btn btn--light btn--sm" onClick={openScorecard}>
                    Get my score
                    <span className="arrow">
                      <Arrow size={12} />
                    </span>
                  </button>
                </div>
              </div>
              <button className="x" aria-label="Dismiss" onClick={() => setNudge(false)}>
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scorecard modal */}
        <AnimatePresence>
          {scoreOpen && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.target === e.currentTarget && setScoreOpen(false)}
              data-lenis-prevent
            >
              <motion.div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-label="Scale-Readiness Scorecard"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <button className="modal__close" onClick={() => setScoreOpen(false)} aria-label="Close">
                  ✕
                </button>
                <aside className="modal__side">
                  <span className="eyebrow" style={{ color: "var(--mute-dark)" }}>
                    <span className="dot" /> Free · 90 seconds
                  </span>
                  <h3>
                    Find what breaks first at <em>10×</em>.
                  </h3>
                  <p>The 9-point Security · Performance · Scalability check I run before quoting any rebuild.</p>
                  <ul>
                    <li>Your 0–100 scale-readiness score</li>
                    <li>Top 3 risks, ranked</li>
                    <li>A concrete fix for each</li>
                  </ul>
                </aside>
                <Scorecard source="scorecard-modal" onBook={openBook} compact />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <PopupModal
          url={CALENDLY_URL}
          open={bookOpen}
          onModalClose={() => setBookOpen(false)}
          rootElement={document.getElementById("root") as HTMLElement}
          pageSettings={{ primaryColor: "0f9aa2", textColor: "0e0f10", hideGdprBanner: true }}
        />
      </div>
    </ActionsContext.Provider>
  );
}
