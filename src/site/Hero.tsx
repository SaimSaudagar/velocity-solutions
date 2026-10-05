import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Arrow, EASE } from "./motion";
import { VSL_ID } from "./lead";
import { useActions } from "./actions";
import logoMark from "@/assets/logo-mark.png";

/* ------------------------------------------------------------------ Nav */
export function Nav() {
  const { openBook } = useActions();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    setHidden(y > 600 && y > last.current + 4);
    if (y < last.current - 4 || y < 600) setHidden(false);
    last.current = y;
  });

  const a = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="brand" aria-label="Saim Saudagar — home">
          <img className="brand__mark" src={logoMark} alt="" />
          <span className="brand__name">
            Saim Saudagar
            <small>Full-stack engineer</small>
          </span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <a className="link-u" href={a("work")}>Work</a>
          <a className="link-u" href={a("testimonials")}>Testimonials</a>
          <a className="link-u" href={a("scorecard")}>Free scorecard</a>
          <a className="link-u" href={a("about")}>About</a>
          <Link className="link-u" to="/services" style={pathname === "/services" ? { color: "var(--accent-text)" } : undefined}>
            Services
          </Link>
        </nav>
        <div className="nav__right">
          <button className="btn btn--sm" onClick={openBook}>
            Get in touch
            <span className="arrow">
              <Arrow size={12} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ VSL */
function VSL() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<string | null>(`https://i.ytimg.com/vi/${VSL_ID}/maxresdefault.jpg`);
  const fallback = () =>
    setThumb((t) => (t && t.includes("maxres") ? `https://i.ytimg.com/vi/${VSL_ID}/hqdefault.jpg` : null));

  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 25%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  useEffect(() => {
    (window as unknown as { __vslPlaying?: boolean }).__vslPlaying = playing;
  }, [playing]);

  return (
    <motion.div className="vsl" ref={ref} style={reduce ? undefined : { scale }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VSL_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Saim Saudagar — intro video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="vsl__cover" onClick={() => setPlaying(true)} aria-label="Play the intro video">
          {thumb && (
            <img
              src={thumb}
              alt=""
              onError={fallback}
              onLoad={(e) => {
                if ((e.target as HTMLImageElement).naturalWidth < 200) fallback();
              }}
            />
          )}
          <span className="vsl__shade" />
          <span className="vsl__play">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  const { openBook, openScorecard } = useActions();
  const reduce = useReducedMotion();
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay: d },
  });

  return (
    <section className="hero hero--center" id="top">
      <div className="wrap">
        <motion.span className="hero__pill" {...fade(0)}>
          <i /> Available for new projects
        </motion.span>

        <motion.h1 className="display hero__title" {...fade(0.05)}>
          <span className="hl">Slow app? Failing payments?</span>
          <span className="hl">Developer disappeared?</span>
          <span className="hl">
            I'm the engineer who <em>fixes it</em>.
          </span>
        </motion.h1>

        <motion.p className="hero__sub" {...fade(0.15)}>
          I'm Saim, a full-stack engineer with 4+ years building FinTech, SaaS and real-estate products.{" "}
          <b>100% job success</b> and <b>5.0★ from 17 client reviews</b> on Upwork.
        </motion.p>

        <motion.p className="hero__watch" {...fade(0.2)}>
          Watch the short intro below ↓
        </motion.p>

        <motion.div className="hero__video" {...fade(0.25)}>
          <VSL />
        </motion.div>

        <motion.div className="hero__ctas" {...fade(0.35)}>
          <button className="btn" onClick={openBook}>
            Get in touch
            <span className="arrow">
              <Arrow />
            </span>
          </button>
          <button className="btn btn--ghost" onClick={openScorecard}>
            Get your free scale score
          </button>
        </motion.div>

        <motion.div className="hero__proof" {...fade(0.45)}>
          <span>
            Engineer at <b>Glintvex (US)</b>
          </span>
          <span>
            ex-<b>VentureDive</b>
          </span>
          <span>
            <b>Top Rated</b> on Upwork
          </span>
          <span>
            Next.js · NestJS · Spring Boot · Flutter · AWS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
