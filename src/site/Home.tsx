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
import CaseModal from "./CaseModal";
import { CASE_DETAILS } from "./caseStudies";
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

/** Shared page frame: nav, footer, scorecard modal, booking popup, mobile CTA. */
function SiteShell({ children, nudge: allowNudge = false }: { children: ReactNode; nudge?: boolean }) {
  const [scoreOpen, setScoreOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  /* Case-study panel; ?case=<slug> in the URL opens it directly (old /case-study/<slug> links redirect here) */
  const [caseSlug, setCaseSlug] = useState<string | null>(() => {
    const c = new URLSearchParams(window.location.search).get("case");
    return c && CASE_DETAILS[c] ? c : null;
  });

  const setCaseUrl = (slug: string | null) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("case", slug);
    else url.searchParams.delete("case");
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  };
  const openCase = useCallback((slug: string) => {
    if (!CASE_DETAILS[slug]) return;
    setNudge(false);
    setCaseSlug(slug);
    setCaseUrl(slug);
  }, []);
  const closeCase = useCallback(() => {
    setCaseSlug(null);
    setCaseUrl(null);
  }, []);

  /* "Get in touch" opens an email to Saim (no booking calendar) */
  const openBook = useCallback(() => {
    setScoreOpen(false);
    setNudge(false);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry")}`;
  }, []);
  const openScorecard = useCallback(() => {
    setNudge(false);
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
    const locked = scoreOpen || !!caseSlug;
    document.documentElement.classList.toggle("lenis-stopped", locked);
    document.body.style.overflow = locked ? "hidden" : "";
  }, [scoreOpen, caseSlug]);

  /* Scorecard popup (bottom-left): shows on every page load, after 5s or 25% scroll, never over a playing video */
  useEffect(() => {
    if (!allowNudge) return;
    let fired = false;
    let retry = 0;
    const fire = () => {
      if (fired) return;
      if ((window as unknown as { __vslPlaying?: boolean }).__vslPlaying) {
        window.clearTimeout(retry);
        retry = window.setTimeout(fire, 20000);
        return;
      }
      fired = true;
      setNudge(true);
    };
    const t = window.setTimeout(fire, 5000);
    const onScroll = () => {
      const h = document.documentElement;
      if (h.scrollTop / (h.scrollHeight - h.clientHeight) > 0.25) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      clearTimeout(retry);
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
    <ActionsContext.Provider value={{ openBook, openScorecard, openCase }}>
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
          {nudge && !scoreOpen && !caseSlug && (
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
          {caseSlug && (
            <CaseModal
              key="case"
              slug={caseSlug}
              onClose={closeCase}
              onNavigate={openCase}
              onContact={() => {
                closeCase();
                openBook();
              }}
            />
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
