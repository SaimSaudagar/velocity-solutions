import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Arrow, EASE } from "./motion";
import { submitLead } from "./lead";

type Pillar = "Security" | "Performance" | "Scalability";

type Q = {
  pillar: Pillar;
  q: string;
  hint: string;
  risk: string;
  fix: string;
};

/* 9 questions, 3 per S.P.S. pillar. Each "No" / "Not sure" becomes a named risk with a concrete fix. */
const QUESTIONS: Q[] = [
  {
    pillar: "Security",
    q: "Is every API endpoint protected by server-side auth and role checks?",
    hint: "Not just hidden buttons in the UI — the backend itself refuses the request.",
    risk: "Authorization lives in the UI",
    fix: "Move permission checks into backend guards/middleware with role-based access on every route.",
  },
  {
    pillar: "Security",
    q: "Are secrets (API keys, DB passwords, Stripe keys) kept out of the codebase?",
    hint: "Stored in a secrets manager or environment config, and rotated when people leave.",
    risk: "Secrets exposed in code or shared docs",
    fix: "Pull secrets into environment config / a secrets manager and rotate anything a past developer touched.",
  },
  {
    pillar: "Security",
    q: "Has the app been checked against the OWASP Top 10 in the last 12 months?",
    hint: "Injection, broken auth, insecure direct object references and friends.",
    risk: "No recent security review",
    fix: "Run an OWASP Top 10 pass before your next raise or enterprise deal — it's the first thing due diligence asks for.",
  },
  {
    pillar: "Performance",
    q: "Do your main API endpoints respond in under ~200ms under normal load?",
    hint: "The ones your dashboard or mobile app hits on every screen.",
    risk: "Slow core endpoints",
    fix: "Profile the slowest 5 endpoints, add the missing indexes and kill N+1 queries — usually the biggest win per hour spent.",
  },
  {
    pillar: "Performance",
    q: "Is frequently-read data cached instead of hitting the database every time?",
    hint: "Redis or similar for sessions, lookups, dashboards and feeds.",
    risk: "Database takes every hit",
    fix: "Add a caching layer (e.g. Redis) for hot reads so traffic spikes don't land directly on the database.",
  },
  {
    pillar: "Performance",
    q: "If a payment or webhook fails, are you alerted and is it retried automatically?",
    hint: "Stripe/PayPal webhooks, payouts, third-party callbacks.",
    risk: "Silent payment failures",
    fix: "Log, alert and idempotently retry every payment webhook — failed payments are revenue you never see leave.",
  },
  {
    pillar: "Scalability",
    q: "Could you run two or more copies of your backend behind a load balancer today?",
    hint: "No sessions or files stored on a single server's disk or memory.",
    risk: "Backend can't scale horizontally",
    fix: "Make the API stateless (sessions + uploads off the box) so you can add instances instead of re-architecting.",
  },
  {
    pillar: "Scalability",
    q: "Do deploys run through an automated pipeline you can roll back in minutes?",
    hint: "CI/CD rather than someone SSH-ing in and pulling the latest code.",
    risk: "Manual, risky deploys",
    fix: "Set up CI/CD with a staging environment and one-click rollback so shipping stops being scary.",
  },
  {
    pillar: "Scalability",
    q: "Would you know within 5 minutes if production went down at 3am?",
    hint: "Uptime checks, error tracking and alerts that reach a human.",
    risk: "No monitoring or alerting",
    fix: "Add uptime monitoring, error tracking and alert routing — find outages before your customers do.",
  },
];

const OPTIONS = [
  { label: "Yes, confidently", value: 2, key: "1" },
  { label: "Partly / not sure", value: 1, key: "2" },
  { label: "No", value: 0, key: "3" },
];

const PILLARS: Pillar[] = ["Security", "Performance", "Scalability"];

function verdictFor(score: number) {
  if (score >= 80) return { title: "Built to scale.", body: "Your foundations are solid. The gains now are in fine-tuning before the next growth step." };
  if (score >= 55)
    return {
      title: "Holding — for now.",
      body: "It works today, but a few gaps will surface the moment traffic, a big client or due diligence arrives.",
    };
  return {
    title: "At risk under growth.",
    body: "There are gaps here that typically turn into outages, lost payments or a painful rebuild. Worth fixing before you push for growth.",
  };
}

const colorFor = (v: number) => (v >= 80 ? "#4ade80" : v >= 55 ? "#fbbf24" : "#f97415");

type Step = "intro" | "quiz" | "gate" | "result";

export default function Scorecard({
  source = "scorecard",
  onBook,
  compact = false,
}: {
  source?: string;
  onBook?: () => void;
  compact?: boolean;
}) {
  const [step, setStep] = useState<Step>("intro");
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const results = useMemo(() => {
    const pillars: Record<string, number> = {};
    PILLARS.forEach((p) => {
      const idx = QUESTIONS.map((q, n) => (q.pillar === p ? n : -1)).filter((n) => n >= 0);
      const got = idx.reduce((s, n) => s + (answers[n] ?? 0), 0);
      pillars[p] = Math.round((got / (idx.length * 2)) * 100);
    });
    const total = Math.round((answers.reduce((s, a) => s + a, 0) / (QUESTIONS.length * 2)) * 100);
    const risks = QUESTIONS.map((q, n) => ({ ...q, a: answers[n] ?? 2 }))
      .filter((q) => q.a < 2)
      .sort((a, b) => a.a - b.a);
    return { pillars, total, risks };
  }, [answers]);

  const answer = useCallback(
    (v: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[i] = v;
        return next;
      });
      if (i < QUESTIONS.length - 1) setI(i + 1);
      else {
        let captured = false;
        try {
          captured = sessionStorage.getItem("ss_lead_captured") === "1";
        } catch {
          /* ignore */
        }
        setStep(captured ? "result" : "gate");
      }
    },
    [i],
  );

  useEffect(() => {
    if (step !== "quiz") return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const o = OPTIONS.find((o) => o.key === e.key);
      if (o) answer(o.value);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, answer]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Add your first name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid work email";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    await submitLead({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      source,
      score: results.total,
      pillars: results.pillars,
      risks: results.risks.map((r) => r.risk),
    });
    setSending(false);
    setStep("result");
  };

  const restart = () => {
    setAnswers([]);
    setI(0);
    setStep("quiz");
  };

  const q = QUESTIONS[i];
  const pct = step === "intro" ? 0 : step === "quiz" ? (i / QUESTIONS.length) * 100 : 100;
  const v = verdictFor(results.total);

  const slide = {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
    transition: { duration: 0.45, ease: EASE },
  };

  return (
    <div className={`score ${compact ? "" : "card"}`} aria-live="polite">
      <div className="score__head">
        <span>Scale-Readiness Scorecard</span>
        <span>
          {step === "quiz" ? `${String(i + 1).padStart(2, "0")} / ${QUESTIONS.length}` : step === "intro" ? "~90 sec" : step === "gate" ? "Last step" : "Your results"}
        </span>
      </div>
      <div className="score__progress">
        <i style={{ width: `${pct}%` }} />
      </div>

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div key="intro" {...slide} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span className="score__pillar">Free · 9 questions · No call required</span>
            <p className="score__q">Will your platform survive 10× the traffic?</p>
            <p className="score__hint">
              Answer 9 yes/no questions across Security, Performance and Scalability. You'll get a score, the
              three risks most likely to break first, and the exact fix for each — the same checklist I run on
              paid audits.
            </p>
            <div className="pillar-preview" aria-hidden="true">
              <div>
                <b>S</b>
                <span>Security · 3</span>
              </div>
              <div>
                <b>P</b>
                <span>Performance · 3</span>
              </div>
              <div>
                <b>S</b>
                <span>Scalability · 3</span>
              </div>
            </div>
            <div style={{ marginTop: "auto", display: "grid", gap: 14 }}>
              <button className="btn" onClick={() => setStep("quiz")} style={{ justifyContent: "space-between" }}>
                Start the scorecard
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
              <span className="fine" style={{ margin: 0 }}>
                Built from the S.P.S. framework used on live FinTech, PropTech &amp; trading platforms.
              </span>
            </div>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div key={`q${i}`} {...slide} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span className="score__pillar">
              {q.pillar === "Security" ? "S" : q.pillar === "Performance" ? "P" : "S"} · {q.pillar}
            </span>
            <p className="score__q">{q.q}</p>
            <p className="score__hint">{q.hint}</p>
            <div className="score__opts">
              {OPTIONS.map((o) => (
                <button key={o.value} className="opt" onClick={() => answer(o.value)}>
                  {o.label}
                  <kbd>{o.key}</kbd>
                </button>
              ))}
            </div>
            {i > 0 && (
              <button className="score__back" onClick={() => setI(i - 1)}>
                ← Previous question
              </button>
            )}
          </motion.div>
        )}

        {step === "gate" && (
          <motion.form key="gate" {...slide} onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span className="score__pillar">Your score is ready</span>
            <p className="score__q">Where should I send your report?</p>
            <p className="score__hint">
              You'll see your results instantly on the next screen. I'll also email you the full fix plan so you
              can share it with your team.
            </p>
            <div className="field">
              <label htmlFor={`${source}-name`}>First name</label>
              <input
                id={`${source}-name`}
                autoComplete="given-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor={`${source}-email`}>Work email</label>
              <input
                id={`${source}-email`}
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor={`${source}-company`}>Product URL (optional)</label>
              <input
                id={`${source}-company`}
                placeholder="yourproduct.com"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <button className="btn" type="submit" disabled={sending} style={{ justifyContent: "space-between", marginTop: 8 }}>
              {sending ? "Calculating…" : "Show my score"}
              <span className="arrow">
                <Arrow />
              </span>
            </button>
            <span className="fine">No spam, no newsletter you didn't ask for. One email with your report.</span>
          </motion.form>
        )}

        {step === "result" && (
          <motion.div key="result" {...slide}>
            <div className="gauge">
              <div className="gauge__ring">
                <svg width="148" height="148" viewBox="0 0 148 148">
                  <circle cx="74" cy="74" r="64" fill="none" stroke="var(--paper-3)" strokeWidth="10" />
                  <motion.circle
                    cx="74"
                    cy="74"
                    r="64"
                    fill="none"
                    stroke={colorFor(results.total)}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 64}
                    initial={{ strokeDashoffset: 2 * Math.PI * 64 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 64 * (1 - results.total / 100) }}
                    transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
                  />
                </svg>
                <div className="gauge__num">
                  <div>
                    <b>{results.total}</b>
                    <small>/ 100</small>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p className="verdict">{v.title}</p>
                <p className="score__hint" style={{ margin: 0 }}>
                  {v.body}
                </p>
              </div>
            </div>

            <div className="bars">
              {PILLARS.map((p, n) => (
                <div className="bar__row" key={p}>
                  <span>{p}</span>
                  <div className="bar__track">
                    <motion.i
                      style={{ background: colorFor(results.pillars[p]) }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(results.pillars[p], 3)}%` }}
                      transition={{ duration: 1, ease: EASE, delay: 0.4 + n * 0.12 }}
                    />
                  </div>
                  <span>{results.pillars[p]}</span>
                </div>
              ))}
            </div>

            {results.risks.length > 0 ? (
              <>
                <div className="eyebrow" style={{ marginBottom: 6 }}>
                  What will break first
                </div>
                <ul className="fixes">
                  {results.risks.slice(0, 3).map((r, n) => (
                    <li key={r.risk}>
                      <span>{String(n + 1).padStart(2, "0")}</span>
                      <span>
                        <b>{r.risk}</b>
                        {r.fix}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="score__hint">No red flags on the fundamentals. The next step is load testing and cost tuning.</p>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <button className="btn" onClick={onBook}>
                Walk me through the fixes — free
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
              <button className="btn btn--ghost" onClick={restart}>
                Retake
              </button>
            </div>
            <p className="fine">15-minute call. I'll map your top risks and tell you honestly whether they need fixing yet.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
