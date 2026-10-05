import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { ReactNode, useCallback, useEffect, useState } from "react";
import "@fontsource-variable/geist-mono";
import "./site.css";
import { ActionsContext } from "./actions";
import { Hero, Nav } from "./Hero";
import { CONTACT_EMAIL } from "./lead";
import { Arrow, EASE } from "./motion";
import Scorecard from "./Scorecard";
import {
  About,
  Compare,
  FAQ,
  FinalCTA,
  Footer,
  Magnet,
  Marquee,
  Method,
  Offers,
  Problem,
  Stats,
  Testimonials,
  Work,
} from "./Sections";

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

/** Shared page frame: nav, footer, scorecard modal, booking popup, mobile CTA. */
function SiteShell({ children, nudge: allowNudge = false }: { children: ReactNode; nudge?: boolean }) {
  const [scoreOpen, setScoreOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  /* "Get in touch" opens an email to Saim (no booking calendar) */
  const openBook = useCallback(() => {
    setScoreOpen(false);
    setNudge(false);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry")}`;
  }, []);
  const openScorecard = useCallback(() => {
    setNudge(false);
    safeSet(POPUP_KEY, "1");
    setScoreOpen(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

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
    const locked = scoreOpen;
    document.documentElement.classList.toggle("lenis-stopped", locked);
    document.body.style.overflow = locked ? "hidden" : "";
  }, [scoreOpen]);

  /* Scorecard nudge: once per session, after 9s or 35% down, never over a playing video */
  useEffect(() => {
    if (!allowNudge || safeGet(POPUP_KEY) || safeGet("ss_lead_captured")) return;
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
  }, [allowNudge]);

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
        <main>{children}</main>
        <Footer />

        <div className="sticky-cta">
          <button className="btn btn--ghost" onClick={openScorecard}>
            Free scale score
          </button>
          <button className="btn" onClick={openBook}>
            Get in touch
          </button>
        </div>

        <AnimatePresence>
          {nudge && !scoreOpen && (
            <motion.div
              className="toast-lite"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: EASE }}
              role="dialog"
              aria-label="Free Scale-Readiness Scorecard"
            >
              <div>
                <b>Will your stack survive 10× traffic?</b>
                <span style={{ color: "var(--ink-3)" }}>Free 90-second scorecard: your score and top 3 fixes.</span>
                <div style={{ marginTop: 14 }}>
                  <button className="btn btn--sm" onClick={openScorecard}>
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <button className="modal__close" onClick={() => setScoreOpen(false)} aria-label="Close">
                  ✕
                </button>
                <aside className="modal__side">
                  <span className="eyebrow">
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

      </div>
    </ActionsContext.Provider>
  );
}

/** Personal portfolio homepage. */
export default function Home() {
  return (
    <SiteShell nudge>
      <Hero />
      <Marquee />
      <Stats />
      <Work />
      <Testimonials />
      <Magnet />
      <About />
      <FinalCTA />
    </SiteShell>
  );
}

/** Services page: the engagement / agency-style detail lives here, off the homepage. */
export function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services — Saim Saudagar";
    return () => {
      document.title = "Saim Saudagar - Enterprise-Grade Software Development";
    };
  }, []);
  return (
    <SiteShell>
      <Problem />
      <Method />
      <Offers />
      <Compare />
      <FAQ />
      <FinalCTA />
    </SiteShell>
  );
}
