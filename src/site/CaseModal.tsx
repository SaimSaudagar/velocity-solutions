import { motion } from "framer-motion";
import { useEffect } from "react";
import { CASE_DETAILS } from "./caseStudies";
import { Arrow, EASE } from "./motion";

export default function CaseModal({
  slug,
  onClose,
  onContact,
  onNavigate,
}: {
  slug: string;
  onClose: () => void;
  onContact: () => void;
  onNavigate: (slug: string) => void;
}) {
  const c = CASE_DETAILS[slug];
  const slugs = Object.keys(CASE_DETAILS);
  const next = slugs[(slugs.indexOf(slug) + 1) % slugs.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!c) return null;

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-lenis-prevent
    >
      <motion.article
        key={slug}
        className="modal case-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${c.name} case study`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <header className="cm__head">
          <span className="eyebrow">
            <span className="dot" /> Case study · {c.timeline}
          </span>
          <h2 className="display cm__title">{c.name}</h2>
          <p className="cm__type">{c.type}</p>
          <p className="cm__overview">{c.overview}</p>
        </header>

        <div className="cm__metrics">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {c.images[0] && <img className="cm__img" src={c.images[0].src} alt={c.images[0].alt} loading="lazy" />}

        <div className="cm__cols">
          <section>
            <h3 className="cm__h warn">The challenge</h3>
            <ul>
              {c.challenge.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="cm__h">What I did</h3>
            <ul>
              {c.solution.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="cm__h good">Results</h3>
            <ul>
              {c.results.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        </div>

        {c.images[1] && <img className="cm__img" src={c.images[1].src} alt={c.images[1].alt} loading="lazy" />}

        <blockquote className="cm__quote">
          “{c.quote}”<cite>— {c.who}</cite>
        </blockquote>

        <div className="cm__stack">
          <span className="eyebrow">Tech stack</span>
          <div className="chips">
            {c.stack.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <footer className="cm__foot">
          <button className="btn" onClick={onContact}>
            Get in touch
            <span className="arrow">
              <Arrow />
            </span>
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate(next)}>
            Next: {CASE_DETAILS[next].name}
          </button>
        </footer>
      </motion.article>
    </motion.div>
  );
}
