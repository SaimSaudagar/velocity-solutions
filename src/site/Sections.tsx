import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, CountUp, EASE, MaskLines, Reveal } from "./motion";
import Scorecard from "./Scorecard";
import { useActions } from "./actions";
import { CONTACT_EMAIL } from "./lead";
import onlyPark from "@/assets/onlypark/1.png";
import tpc from "@/assets/tpc/1.png";
import portrait from "@/assets/profile-picture.png";

/* ================================================================ Marquee */
const BUILT = [
  ["OnlyPark", "PropTech · AU"],
  ["The Pip Collective", "Trading · FinTech"],
  ["VentureDive", "Enterprise"],
  ["Dawlati", "100k+ listings"],
  ["Onepay Wallet", "50k+ transactions"],
  ["EFU Life", "Insurance"],
  ["Autoversal", "500k listings"],
  ["Core for Contractors", "SaaS"],
  ["Propfy", "Real estate"],
];

export function Marquee() {
  const items = [...BUILT, ...BUILT];
  return (
    <div className="marquee" aria-label="Products and teams I've built for">
      <div className="marquee__label eyebrow" style={{ display: "flex", justifyContent: "center" }}>
        Platforms I've engineered &amp; teams I've shipped with
      </div>
      <div className="marquee__track">
        {items.map(([n, s], i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= BUILT.length}>
            {n} <small>{s}</small>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ Problem */
const PAINS = [
  {
    t: "It slows to a crawl when it matters",
    d: "Peak hours, a launch, a big customer onboarding — that's exactly when APIs time out and dashboards hang.",
    c: "Every 100ms of latency ≈ 1% conversions",
  },
  {
    t: "Payments fail quietly",
    d: "Webhooks drop, retries don't exist, and you find out from an angry customer instead of an alert.",
    c: "Revenue you never see leave",
  },
  {
    t: "The last developer disappeared",
    d: "You're left with code nobody understands, no documentation, and a backlog that keeps growing.",
    c: "Every change takes 3× longer",
  },
  {
    t: "Security gaps you can't see",
    d: "No OWASP review, secrets in the repo, auth enforced in the UI only. Fine — until due diligence or a breach.",
    c: "Post-launch fixes cost ~10× more",
  },
];

function Pain({ p, n }: { p: (typeof PAINS)[number]; n: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 45%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <Reveal>
      <div className="pain" ref={ref}>
        <span className="pain__n">{String(n + 1).padStart(2, "0")}</span>
        <span className="pain__t">{p.t}</span>
        <span className="pain__d">{p.d}</span>
        <span className="pain__cost">{p.c}</span>
        <motion.span className="pain__bar" style={{ scaleX, width: "100%" }} />
      </div>
    </Reveal>
  );
}

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> Sound familiar?
            </Reveal>
            <MaskLines
              className="display h-lg"
              lines={[<>Your product works.</>, <>Growth is what <em>breaks</em> it.</>]}
            />
          </div>
          <Reveal className="lede" delay={0.1}>
            Most platforms aren't failing because of bad ideas. They're failing because of architectural
            shortcuts taken in month one — and those shortcuts get expensive exactly when the business starts
            working.
          </Reveal>
        </div>
        <div className="pain-list">
          {PAINS.map((p, n) => (
            <Pain p={p} n={n} key={p.t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ Lead magnet */
export function Magnet() {
  const { openBook } = useActions();
  return (
    <section className="section section--tint" id="scorecard">
      <div className="wrap magnet">
        <div className="magnet__copy">
          <Reveal className="eyebrow">
            <span className="dot" /> Free tool · 90 seconds
          </Reveal>
          <MaskLines
            className="display h-lg"
            lines={[<>Find what breaks</>, <>first at <em>10×</em>.</>]}
          />
          <Reveal className="lede" delay={0.1}>
            <p style={{ margin: "20px 0 0" }}>
              The Scale-Readiness Scorecard is the same 9-point checklist I run before quoting any rebuild. Answer
              honestly and you'll know — today — whether your stack is ready for the next growth step.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="magnet__value">
              <li>
                <span>01</span>
                <span>A 0–100 score across Security, Performance and Scalability</span>
              </li>
              <li>
                <span>02</span>
                <span>The three risks most likely to cause your next outage or failed payment</span>
              </li>
              <li>
                <span>03</span>
                <span>The specific fix for each — something your team can act on this sprint</span>
              </li>
              <li>
                <span>04</span>
                <span>A copy emailed to you, ready to forward to your CTO or co-founder</span>
              </li>
            </ul>
            <div className="magnet__price">
              <span>
                Paid architecture audits start at a full week of work. <b>This version is free.</b>
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Scorecard source="scorecard-inline" onBook={openBook} />
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ Method */
const STAGES = [
  {
    n: "01",
    weeks: "Weeks 1–6",
    name: "Security",
    title: (
      <>
        Security <em>&amp;</em> Structure
      </>
    ),
    focus: "Secure, maintainable foundations that won't crack under growth.",
    items: [
      "Clean architecture, SOLID & design patterns",
      "Normalized schema, indexing strategy",
      "OAuth2 / JWT with role-based access",
      "Versioned REST / GraphQL APIs",
      "Encryption, validation, OWASP Top 10",
      "Git workflow, CI/CD, staging env",
    ],
    out: ["Working API endpoints", "Database schema", "Security audit report", "Staging environment"],
    why: "80% of scaling problems trace back to architecture decisions made in the first month.",
  },
  {
    n: "02",
    weeks: "Weeks 7–12",
    name: "Performance",
    title: (
      <>
        Performance <em>&amp;</em> Integration
      </>
    ),
    focus: "Turn working code into a competitive advantage: speed, reliability and the integrations revenue depends on.",
    items: [
      "API response targets under 200ms",
      "Query optimization & caching (Redis)",
      "Payments, CRM, analytics, email/SMS",
      "Rate limiting & error handling",
      "Load testing at 10× expected traffic",
      "WebSockets, push & real-time updates",
    ],
    out: ["Optimized APIs", "Live integrations", "Caching layer", "Load-test results"],
    why: "Slow mobile experiences and failed payments push users to competitors — quietly.",
  },
  {
    n: "03",
    weeks: "Weeks 13+",
    name: "Scalability",
    title: (
      <>
        Scalability <em>&amp;</em> Resilience
      </>
    ),
    focus: "Infrastructure that absorbs 10× growth without a panic re-platform or emergency hire.",
    items: [
      "AWS / Firebase auto-scaling",
      "Stateless, horizontally scalable services",
      "Read replicas & connection pooling",
      "Monitoring, alerting, uptime tracking",
      "Backups & disaster recovery",
      "Docs, runbooks & knowledge transfer",
    ],
    out: ["Production infrastructure", "Monitoring dashboards", "Recovery plan", "30/60/90-day support"],
    why: "Investors look at technical scalability in due diligence. This is the stage that survives it.",
  },
];

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 70%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="section section--dark" id="method">
      <div className="wrap method" ref={ref}>
        <div className="method__rail">
          <Reveal className="eyebrow">
            <span className="dot" /> The S.P.S. Method
          </Reveal>
          <MaskLines
            className="display h-lg"
            lines={[<>One sequence.</>, <>No <em>shortcuts</em>.</>]}
          />
          <Reveal className="lede" delay={0.1}>
            <p style={{ margin: "20px 0 0" }}>
              Security, then Performance, then Scalability — always in that order. It's why projects land in 8–20
              weeks instead of the 6–12 months agencies quote, and why they don't need rebuilding a year later.
            </p>
          </Reveal>
          <div className="method__counter" aria-hidden="true">
            <div className="method__big">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  initial={reduce ? false : { y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  {STAGES[active].n}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="method__stage-name">/ {STAGES[active].name}</div>
          </div>
          <div className="method__track">
            <motion.i style={{ scaleX: progress }} />
          </div>
          <div className="method__seq">
            <span style={{ color: active >= 0 ? "var(--ink)" : undefined }}>S · Security</span>
            <span style={{ color: active >= 1 ? "var(--ink)" : undefined }}>P · Performance</span>
            <span style={{ color: active >= 2 ? "var(--ink)" : undefined }}>S · Scale</span>
          </div>
        </div>

        <div>
          {STAGES.map((s, n) => (
            <motion.article
              className="stage"
              key={s.n}
              onViewportEnter={() => setActive(n)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
            >
              <Reveal>
                <div className="stage__top">
                  <span>Stage {s.n}</span>
                  <span>{s.weeks}</span>
                </div>
                <h3>{s.title}</h3>
                <p className="stage__focus">{s.focus}</p>
                <ul className="stage__list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <div className="eyebrow" style={{ marginBottom: 10 }}>
                  You receive
                </div>
                <div className="chips">
                  {s.out.map((o) => (
                    <span className="chip" key={o}>
                      {o}
                    </span>
                  ))}
                </div>
                <p className="stage__why">{s.why}</p>
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ Stats */
export function Stats() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="stats">
          <div className="stat">
            <b>
              <CountUp to={4} suffix="+" />
            </b>
            <span>Years building production systems — VentureDive, EFU Life, MonetDT, Glintvex</span>
          </div>
          <div className="stat">
            <b>
              <CountUp to={80} suffix="%" />
            </b>
            <span>Faster page loads after the OnlyPark re-architecture</span>
          </div>
          <div className="stat">
            <b>
              <CountUp to={99} suffix="%" />
            </b>
            <span>Payment success rate restored on a live FinTech platform</span>
          </div>
          <div className="stat">
            <b>
              <CountUp to={50} suffix="k+" />
            </b>
            <span>Transactions processed through a wallet backend I engineered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ Work */
function ParallaxImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <div className="media-inner" ref={ref}>
      <motion.img src={src} alt={alt} loading="lazy" style={reduce ? undefined : { y }} />
    </div>
  );
}

const CASES = [
  {
    slug: "onlypark",
    name: "OnlyPark",
    kicker: ["Parking management · Australia", "12–16 weeks", "Next.js · NestJS · AWS"],
    summary:
      "A legacy Laravel admin dashboard was buckling under load and the previous developers had gone quiet. I rebuilt the dashboard and API layer from the ground up.",
    metric: ["80%", "faster page loads — and a contract extension"],
    before: ["Dashboard unresponsive under load", "API delays blocking operations", "Previous devs disengaged"],
    after: ["Next.js + NestJS rebuild", "Optimized API on AWS EC2/RDS", "Reliable, weekly delivery"],
    quote: "Thank you for everything you're doing — we greatly appreciate it & very much enjoy working with you.",
    who: "Business owner, OnlyPark",
    img: onlyPark,
    url: "admin.onlypark",
  },
  {
    slug: "pip-collective",
    name: "The Pip Collective",
    kicker: ["Trading platform · FinTech", "Ongoing", "Laravel · MySQL · Stripe"],
    summary:
      "Login bugs, failing payments and slow APIs on a live, paying platform — after the previous team abandoned it. Stabilized first, then took over ongoing development.",
    metric: ["99%", "payment success rate — revenue-critical flows restored"],
    before: ["Login & auth failures", "Stripe payments failing", "Previous team walked away"],
    after: ["Auth and payments rebuilt", "Significant API speed-up", "Ongoing feature development"],
    quote: "F**king brilliant bud, great work as always.",
    who: "Platform owner, The Pip Collective",
    img: tpc,
    url: "thepipcollective.com",
  },
  {
    slug: "crypto-arbitrage",
    name: "Crypto Arbitrage Engine",
    kicker: ["Automated trading · Private", "2–4 weeks", "TypeScript · Node.js · React · AWS"],
    summary:
      "The arbitrage engine produced wrong numbers from incomplete market feeds and couldn't be deployed. I rebuilt the calculation core and normalized every feed.",
    metric: ["10+", "exchange APIs normalized — live on AWS before launch"],
    before: ["Incorrect arbitrage results", "Incomplete, inconsistent feeds", "Stalled, not deployable"],
    after: ["Accurate spread calculation", "Unified real-time data layer", "Production deployment"],
    quote: "Highly recommended developer, friendly and very knowledgeable.",
    who: "Project stakeholder",
    img: null,
    url: "engine — private",
  },
];

function Terminal() {
  return (
    <div className="term" aria-hidden="true">
      <div className="dim">$ arb-engine --pairs BTC/USDT,ETH/USDT --live</div>
      <div>
        <span className="ok">✓</span> feeds normalized <span className="dim">· 10 exchanges · 0 gaps</span>
      </div>
      <table>
        <tbody>
          <tr>
            <td>BTC/USDT</td>
            <td className="dim">ex-A → ex-F</td>
            <td className="acc">+0.42%</td>
          </tr>
          <tr>
            <td>ETH/USDT</td>
            <td className="dim">ex-C → ex-B</td>
            <td className="acc">+0.31%</td>
          </tr>
          <tr>
            <td>SOL/USDT</td>
            <td className="dim">ex-D → ex-A</td>
            <td className="acc">+0.18%</td>
          </tr>
          <tr>
            <td>XRP/USDT</td>
            <td className="dim">ex-E → ex-C</td>
            <td className="dim">below threshold</td>
          </tr>
        </tbody>
      </table>
      <div>
        <span className="ok">✓</span> fees, slippage &amp; depth applied
      </div>
      <div>
        <span className="ok">✓</span> deployed · aws · healthy
      </div>
      <div style={{ marginTop: 8 }}>
        <span className="dim">$</span> <span className="cursor-blink" />
      </div>
    </div>
  );
}

const SHIPPED = [
  ["Autoversal", "Automotive marketplace — 500k+ listings, 50% faster search", "Next.js · Spring Boot · PostgreSQL", "live"],
  ["Core for Contractors", "Contractor management — 70% less manual tracking", "Next.js · PostgreSQL · Twilio", "live"],
  ["Dawlati", "Jobs platform backend for 100k+ listings & applications", "NestJS · REST", "shipped"],
  ["Onepay Wallet", "Digital wallet microservices, 50k+ transactions", "Spring Boot · NestJS · Angular", "shipped"],
  ["Propfy", "Real-estate listings app on iOS & Android", "Flutter · Firebase", "shipped"],
];

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> Selected work
            </Reveal>
            <MaskLines className="display h-lg" lines={[<>Rescued, rebuilt,</>, <>and <em>still running</em>.</>]} />
          </div>
          <Reveal className="lede" delay={0.1}>
            Three of the projects where a business was on the line. No mockups — these are live production
            systems handling real users and real money.
          </Reveal>
        </div>

        {CASES.map((c, n) => (
          <article className={`case ${n % 2 ? "case--flip" : ""}`} key={c.slug}>
            <Reveal>
              <div className="case__kicker">
                {c.kicker.map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </div>
              <h3>{c.name}</h3>
              <p style={{ color: "var(--ink-3)", margin: 0 }}>{c.summary}</p>
              <div className="case__metric">
                <b>{c.metric[0]}</b>
                <span>{c.metric[1]}</span>
              </div>
              <div className="ba">
                <div className="before">
                  <h4>Before</h4>
                  <ul>
                    {c.before.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="after">
                  <h4>After</h4>
                  <ul>
                    {c.after.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <blockquote className="case__quote" style={{ margin: "24px 0 0" }}>
                “{c.quote}”<cite>— {c.who}</cite>
              </blockquote>
              <Link to={`/case-study/${c.slug}`} className="link-u mono" style={{ display: "inline-flex", gap: 8, marginTop: 22, fontSize: 13 }}>
                Read the case study <Arrow size={12} />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="case__media">
                <div className="browser">
                  <i />
                  <i />
                  <i />
                  <span>{c.url}</span>
                </div>
                {c.img ? <ParallaxImg src={c.img} alt={`${c.name} dashboard`} /> : <Terminal />}
              </div>
            </Reveal>
          </article>
        ))}

        <Reveal>
          <div className="eyebrow" style={{ margin: "56px 0 0" }}>
            More in production
          </div>
          <div className="shipped">
            {SHIPPED.map(([n, w, s, st]) => (
              <div className="shipped__row" key={n}>
                <strong>{n}</strong>
                <span className="what">{w}</span>
                <span className="stack">{s}</span>
                <span className={`live ${st !== "live" ? "live--private" : ""}`}>{st}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ Testimonials */
export function Testimonials() {
  return (
    <section className="section section--dark" id="proof">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> In their words
            </Reveal>
            <MaskLines className="display h-lg" lines={[<>No ghosting.</>, <>No <em>debt bombs</em>.</>]} />
          </div>
          <Reveal className="lede" delay={0.1}>
            The most common thing clients say isn't about code. It's that someone finally picked up the phone,
            told them the truth, and shipped.
          </Reveal>
        </div>
        <div className="quotes">
          <Reveal className="quote quote--feature">
            <span className="stars">★★★★★</span>
            <p>“Thank you for everything you're doing — we greatly appreciate it &amp; very much enjoy working with you.”</p>
            <footer>
              <span>
                Business owner
                <small>OnlyPark · Dashboard rebuild</small>
              </span>
              <span className="mono" style={{ fontSize: 12 }}>
                Contract extended
              </span>
            </footer>
          </Reveal>
          <Reveal className="quote" delay={0.08}>
            <span className="stars">★★★★★</span>
            <p>“F**king brilliant bud, great work as always.”</p>
            <footer>
              <span>
                Platform owner
                <small>The Pip Collective</small>
              </span>
            </footer>
          </Reveal>
          <Reveal className="quote" delay={0.16}>
            <span className="stars">★★★★★</span>
            <p>“Highly recommended developer, friendly and very knowledgeable.”</p>
            <footer>
              <span>
                Project stakeholder
                <small>Crypto arbitrage platform</small>
              </span>
            </footer>
          </Reveal>
        </div>
        <Reveal className="upwork-strip">
          <div className="upwork-strip__nums">
            <div>
              <b>
                <CountUp to={100} suffix="%" />
              </b>
              <span>Job success</span>
            </div>
            <div>
              <b>
                <CountUp to={5} decimals={1} />
              </b>
              <span>17 reviews</span>
            </div>
            <div>
              <b>
                <CountUp to={23} />
              </b>
              <span>Upwork contracts</span>
            </div>
            <div>
              <b>Top</b>
              <span>Rated talent</span>
            </div>
          </div>
          <a
            className="btn btn--ghost btn--sm"
            href="https://www.upwork.com/freelancers/~01689bedc009d1066d"
            target="_blank"
            rel="noreferrer"
          >
            Verify on Upwork
            <span className="arrow">
              <Arrow size={12} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ Offers */
const OFFERS = [
  {
    name: "Velocity Starter",
    title: "Fix the foundation",
    for: "You have a product that works. One part of it — an API, payments, auth, a migration — needs to be done properly.",
    price: "$8k–15k",
    time: "6–10 weeks · S.P.S. stages 1–2",
    items: [
      "Backend API with secure auth (REST or GraphQL)",
      "Database design, optimization & migration",
      "One major integration (Stripe, CRM, maps…)",
      "AWS / Firebase deployment with monitoring",
      "OWASP Top 10 security coverage",
      "API docs + Postman collection",
      "30 days post-launch support",
    ],
  },
  {
    name: "Velocity Growth",
    title: "Build to scale",
    for: "You're scaling from MVP to a real platform: web + mobile, multiple integrations, ready for 10× users.",
    price: "$20k–40k",
    alt: "or $5–8k / month",
    time: "10–16 weeks · Full S.P.S.",
    hot: true,
    items: [
      "Everything in Starter",
      "Full-stack web app (Next.js / Angular)",
      "Flutter iOS + Android from one codebase",
      "Caching, real-time features, load balancing",
      "3–5 integrations: payments, CRM, analytics, SMS",
      "<200ms API targets, load-tested at 10×",
      "Admin dashboard · SOC2 / PCI-DSS prep",
      "90 days priority support",
    ],
  },
  {
    name: "Velocity Enterprise",
    title: "A technical partner",
    for: "A complex multi-platform ecosystem — or you need a technical co-founder alternative heading into Series B.",
    price: "$50k+",
    alt: "or $10–15k / month",
    time: "16–24 weeks · Extended stage 3 + advisory",
    items: [
      "Everything in Growth",
      "Web + iOS + Android + partner APIs",
      "Distributed systems & message queues",
      "Multi-currency, escrow, wallet & crypto payments",
      "Full DevOps & CI/CD automation",
      "Pen-testing prep & compliance support",
      "Quarterly architecture & roadmap sessions",
      "24-hour response SLA",
    ],
  },
];

export function Offers() {
  const { openBook } = useActions();
  return (
    <section className="section" id="engagements">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> Engagements
            </Reveal>
            <MaskLines className="display h-lg" lines={[<>Pick your velocity.</>]} />
          </div>
          <Reveal className="lede" delay={0.1}>
            Same method at every level — the difference is scope, complexity and support. Final price is set
            after a short technical review, so you never pay for guesswork.
          </Reveal>
        </div>

        <div className="offers">
          {OFFERS.map((o, n) => (
            <Reveal key={o.name} delay={n * 0.08} className={`offer ${o.hot ? "offer--hot" : ""}`}>
              {o.hot && <span className="offer__badge">Most chosen</span>}
              <span className="offer__name">{o.name}</span>
              <h3>{o.title}</h3>
              <p className="offer__for">{o.for}</p>
              <div className="offer__price">
                <b>{o.price}</b>
                {o.alt && <span>{o.alt}</span>}
              </div>
              <div className="offer__time">{o.time}</div>
              <ul>
                {o.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <button className={`btn ${o.hot ? "btn--light" : "btn--ghost"}`} onClick={openBook}>
                Scope this with me
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="terms">
          <div>
            <b>Pay as it's proven.</b>
            <span>40% to start, 30% when the performance milestone lands, 30% on production deployment.</span>
          </div>
          <div>
            <b>You own everything.</b>
            <span>Code, repo, infrastructure and documentation are yours from day one — no lock-in.</span>
          </div>
          <div>
            <b>Weekly, visible progress.</b>
            <span>A working update every week on staging. You'll never have to chase me for status.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ Compare */
const ROWS = [
  ["Time to production", "8–20 weeks", "Unpredictable", "6–12 months"],
  ["Architecture", "Planned for 10× from week one", "Built for today's ticket", "Strong, after long discovery"],
  ["Who you talk to", "The engineer writing the code", "Varies — sometimes nobody", "Account manager"],
  ["Security & compliance", "OWASP, PCI-DSS, SOC2 prep built in", "Rarely considered", "Usually, at a premium"],
  ["Cost", "No agency overhead", "Cheap, then expensive", "$150+/hr blended"],
  ["Handover", "Docs, runbooks & knowledge transfer", "Often none", "Formal, slow"],
];

export function Compare() {
  return (
    <section className="section section--tint">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> The honest comparison
            </Reveal>
            <MaskLines className="display h-md" lines={[<>Agency quality without</>, <>the agency <em>timeline</em>.</>]} />
          </div>
        </div>
        <Reveal className="compare-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th />
                <th className="me">Working with me</th>
                <th>Typical freelancer</th>
                <th>Typical agency</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td className="me">{r[1]}</td>
                  <td className="bad">{r[2]}</td>
                  <td className="bad">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ About */
const CAREER = [
  ["2026 — now", "Glintvex (US)", "Full-Stack Software Engineer & Technical Consultant. 8+ end-to-end apps for FinTech, real estate and trading clients."],
  ["2024 — 2026", "VentureDive", "Led a 3-person team; re-architected backends and cut infrastructure cost by 28%."],
  ["2023 — 2024", "EFU Life Assurance", "Java middleware on IBM BPM — 38% less manual work in policy processing."],
  ["2022 — 2023", "MonetDT", "Spring Boot & NestJS wallet microservices; 34% fewer failed transactions."],
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div ref={ref}>
          <motion.div className="portrait" style={reduce ? undefined : { y }}>
            <img src={portrait} alt="Saim Saudagar" loading="lazy" />
            <div className="portrait__tag">
              <span>
                Saim Saudagar
                <br />
                <small>Karachi · works with US, UK, AU &amp; UAE</small>
              </span>
              <span className="live" style={{ color: "#7be495" }}>
                Available
              </span>
            </div>
          </motion.div>
        </div>
        <div>
          <Reveal className="eyebrow">
            <span className="dot" /> Who you'll work with
          </Reveal>
          <MaskLines className="display h-md" lines={[<>Enterprise training.</>, <>Freelancer <em>accountability</em>.</>]} />
          <Reveal className="lede" delay={0.1}>
            <p style={{ margin: "22px 0 0" }}>
              I'm Saim — a Computer Science grad from IBA Karachi with four years inside engineering teams at
              VentureDive, EFU Life and now Glintvex, a US company where I'm a full-stack engineer and technical
              consultant. That's where the S.P.S. method comes from: the discipline of enterprise engineering,
              without the meetings, layers and 12-month timelines.
            </p>
            <p style={{ margin: "16px 0 0" }}>
              You talk directly to the person writing your code. I explain technical decisions in business terms,
              and I'll tell you when something <i>isn't</i> worth building yet.
            </p>
          </Reveal>
          <Reveal className="timeline" delay={0.15}>
            {CAREER.map(([yr, co, did]) => (
              <div className="timeline__row" key={co}>
                <span className="yr">{yr}</span>
                <span className="co">{co}</span>
                <span className="did">{did}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="chips" delay={0.2}>
            {["Java", "Spring Boot", "NestJS", "Node.js", "Next.js", "React", "Angular", "Flutter", "PostgreSQL", "MySQL", "Redis", "AWS", "Docker", "Stripe", "CI/CD"].map(
              (t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ),
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ FAQ */
const FAQS = [
  [
    "Can one engineer really handle a project this size?",
    "For the scope I take on, yes — and it's usually faster. There's no coordination overhead, no handoffs between account managers and developers, and one person owns the whole architecture. When a project genuinely needs more hands, I'll tell you upfront rather than overpromise.",
  ],
  [
    "How much does it cost?",
    "It depends on whether you need a contained stabilization fix or foundational work across several systems. Most projects land between $8k and $60k, and some move into a monthly retainer. I'll give you a real number after a short technical review — not before.",
  ],
  [
    "Why won't you send a proposal before a call?",
    "Because in complex systems, that's how scope gets mispriced and expectations break. A 15-minute technical consult means any proposal you get is accurate, scoped and realistic. You'll have it within 48 hours of the call.",
  ],
  [
    "What happens with the existing code from my last developer?",
    "I start with an audit: what's salvageable, what's risky, and what's quietly costing you money. Often a full rebuild isn't needed — stabilizing auth, payments and the slowest endpoints recovers most of the value.",
  ],
  [
    "What's not included?",
    "UI/UX design from scratch (I can recommend partners), copywriting and content, app store marketing, and 24/7 live support across every US timezone. I'd rather be clear about that now.",
  ],
  [
    "How do we communicate across timezones?",
    "Weekly progress updates on a staging environment, async updates in between, and overlapping hours for calls with US, UK, Australian and Gulf teams. Enterprise engagements include a 24-hour response SLA.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">
              <span className="dot" /> Questions
            </Reveal>
            <MaskLines className="display h-lg" lines={[<>Straight answers.</>]} />
          </div>
          <Reveal className="lede" delay={0.1}>
            Anything else, ask on the call — or email{" "}
            <a className="link-u" href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--ink)" }}>
              {CONTACT_EMAIL}
            </a>
            .
          </Reveal>
        </div>
        <div className="faq">
          {FAQS.map(([q, a], n) => (
            <Reveal className={`faq__item ${open === n ? "open" : ""}`} key={q} y={14}>
              <button className="faq__q" onClick={() => setOpen(open === n ? null : n)} aria-expanded={open === n}>
                {q}
                <span className="faq__icon" aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {open === n && (
                  <motion.div
                    className="faq__a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <div>{a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ Final CTA + footer */
export function FinalCTA() {
  const { openBook, openScorecard } = useActions();
  return (
    <section className="section section--dark final" id="contact">
      <div className="wrap final__grid">
        <div>
          <Reveal className="eyebrow">
            <span className="dot" /> Next step
          </Reveal>
          <MaskLines
            className="display h-lg"
            lines={[<>Stop losing sleep</>, <>over <em>production</em>.</>]}
          />
          <Reveal className="lede" delay={0.1}>
            <p style={{ margin: "22px 0 0" }}>
              In 15 minutes we'll find the real bottleneck, separate what's risky from what's noise, and decide
              whether it's a contained fix or ongoing work. If it's not a fit, I'll say so.
            </p>
          </Reveal>
        </div>
        <Reveal className="final__paths" delay={0.15}>
          <button className="path" onClick={openBook}>
            <span>
              <b>Book a 15-minute technical audit</b>
              <small>Free · confidential · no commitment</small>
            </span>
            <span className="arrow">
              <Arrow />
            </span>
          </button>
          <button className="path" onClick={openScorecard}>
            <span>
              <b>Take the Scale-Readiness Scorecard</b>
              <small>9 questions · results in 90 seconds</small>
            </span>
            <span className="arrow">
              <Arrow />
            </span>
          </button>
          <a className="path" href={`mailto:${CONTACT_EMAIL}?subject=Project%20enquiry`}>
            <span>
              <b>Email the details</b>
              <small>Reply within 24 hours with a clear plan</small>
            </span>
            <span className="arrow">
              <Arrow />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__giant" aria-hidden="true">
          Saim <em>Saudagar</em>
        </div>
        <div className="footer__row">
          <span>© {new Date().getFullYear()} Saim Saudagar. Enterprise-grade development at freelancer speed.</span>
          <nav aria-label="Footer">
            <a className="link-u" href="https://linkedin.com/in/saimsaudagar" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="link-u" href="https://github.com/saimsaudagar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link-u" href="https://www.upwork.com/freelancers/~01689bedc009d1066d" target="_blank" rel="noreferrer">
              Upwork
            </a>
            <a className="link-u" href={`mailto:${CONTACT_EMAIL}`}>
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
