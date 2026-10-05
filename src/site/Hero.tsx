import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Arrow, EASE, MaskLines } from "./motion";
import { VSL_ID } from "./lead";
import { useActions } from "./actions";

/* ------------------------------------------------------------------ Nav */
export function Nav() {
  const { openBook } = useActions();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    const probe = 36;
    setDark(
      Array.from(document.querySelectorAll(".section--dark, .footer")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom >= probe;
      }),
    );
    setHidden(y > 600 && y > last.current + 4);
    if (y < last.current - 4 || y < 600) setHidden(false);
    last.current = y;
  });

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""} ${dark ? "is-dark" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label="Saim Saudagar — home">
          <span className="brand__mark">ss</span>
          <span className="brand__name">
            Saim Saudagar
            <small>Glintvex · Systems engineering</small>
          </span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a className="link-u" href="#method">Method</a>
          <a className="link-u" href="#work">Work</a>
          <a className="link-u" href="#scorecard">Free scorecard</a>
          <a className="link-u" href="#engagements">Engagements</a>
          <a className="link-u" href="#faq">FAQ</a>
        </nav>
        <div className="nav__right">
          <span className="nav__status">
            <i /> Booking new projects for this quarter
          </span>
          <button className="btn btn--sm" onClick={openBook}>
            Book a call
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
  const fallback = () => setThumb((t) => (t && t.includes("maxres") ? `https://i.ytimg.com/vi/${VSL_ID}/hqdefault.jpg` : null));
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 25%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [32, 20]);

  useEffect(() => {
    (window as unknown as { __vslPlaying?: boolean }).__vslPlaying = playing;
  }, [playing]);

  return (
    <div className="vsl-stage" ref={ref}>
      <motion.div
        className="vsl"
        style={reduce ? undefined : { scale, borderRadius: radius }}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VSL_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Saim Saudagar — how I take platforms from fragile to scale-ready"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="vsl__cover" onClick={() => setPlaying(true)} aria-label="Play the overview video">
            {thumb && (
              <img
                src={thumb}
                alt=""
                onError={fallback}
                onLoad={(e) => {
                  // YouTube returns a 120px grey placeholder when maxres doesn't exist
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
            <span className="vsl__meta">
              <span>
                <small>Watch first · short overview</small>
                <strong>Why growing platforms break — and the 3-stage fix.</strong>
              </span>
              <span className="vsl__tag">Sound on</span>
            </span>
          </button>
        )}
      </motion.div>
      <div className="vsl__caption">
        <span>For CTOs and founders whose product works — until traffic, payments or a big client push it.</span>
        <span className="mono" style={{ fontSize: 12 }}>
          Next.js · NestJS · Spring Boot · Flutter · AWS
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  const { openBook, openScorecard } = useActions();
  const reduce = useReducedMotion();
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay: d },
  });

  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" />
      <div className="wrap" style={{ position: "relative" }}>
        <motion.div className="eyebrow" {...fade(0.05)}>
          <span className="dot" /> For Series A–B FinTech, SaaS &amp; PropTech teams
        </motion.div>

        <div className="hero__top">
          <MaskLines
            as="h1"
            onLoad
            delay={0.1}
            className="display h-xl"
            lines={[
              <>Enterprise-grade</>,
              <>systems, shipped in</>,
              <>
                <em>weeks</em>, not quarters.
              </>,
            ]}
          />
          <motion.div className="hero__side" {...fade(0.55)}>
            <p>
              I rebuild slow, fragile and half-finished platforms into secure systems that hold up at 10× the
              load — with Fortune-500 engineering discipline and the speed of a single, accountable engineer.
            </p>
            <div className="hero__ctas">
              <button className="btn" onClick={openScorecard}>
                Get your free scale score
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
              <button className="btn btn--ghost" onClick={openBook}>
                Book a 15-min audit
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero__proof" {...fade(0.75)}>
          <span>
            <b>Top Rated</b> on Upwork
          </span>
          <span>
            <b>100%</b> job success
          </span>
          <span>
            <b>5.0★</b> across 17 reviews
          </span>
          <span>
            Ex-<b>VentureDive</b> engineer
          </span>
        </motion.div>

        <VSL />
      </div>
    </section>
  );
}
