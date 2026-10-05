import onlyPark1 from "@/assets/onlypark/1.png";
import onlyPark2 from "@/assets/onlypark/2.png";
import tpc1 from "@/assets/tpc/1.png";
import tpc2 from "@/assets/tpc/2.png";

/** Full case-study write-ups, shown in the panel that opens from "Read the full story". */
export type CaseDetail = {
  name: string;
  type: string;
  timeline: string;
  overview: string;
  challenge?: string[];
  solution?: string[];
  results?: string[];
  /** For portfolio projects: a single "What I built" list instead of challenge/solution/results */
  highlights?: string[];
  role?: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  quote?: string;
  who?: string;
  images: { src: string; alt: string }[];
};

/** Extra portfolio projects shown as cards under the main case studies. */
export type ProjectCard = {
  slug: string;
  category: string;
  name: string;
  summary: string;
  stack: string[];
  mark: string;
};

export const PROJECT_CARDS: ProjectCard[] = [
  {
    slug: "dawlati",
    category: "Job portal · UAE",
    name: "Dawlati",
    summary: "Bilingual (English & Arabic) job platform for the UAE, with a backend powering 100,000+ listings and applications.",
    stack: ["Next.js", "NestJS", "REST APIs"],
    mark: "Da",
  },
  {
    slug: "scopeology",
    category: "Medical EdTech · Saudi Arabia",
    name: "Scopeology",
    summary: "Exam-prep platform for Saudi medical residents with timed tests, self-tests, revision modes and analytics.",
    stack: ["Next.js", "REST APIs", "UI/UX"],
    mark: "Sc",
  },
  {
    slug: "askinproperties",
    category: "Real estate · Web platform",
    name: "AskInProperties",
    summary: "Real-estate portal for residential and commercial properties, with search, filters, galleries and lead capture.",
    stack: ["React", "Next.js", "Web APIs"],
    mark: "Ai",
  },
  {
    slug: "bachay",
    category: "Mobile app · iOS & Android",
    name: "Bachay",
    summary: "Family app for parents and kids: learning, shopping, a vaccination tracker with reminders, and Q&A forums.",
    stack: ["Flutter", "Firebase", "APIs"],
    mark: "Ba",
  },
  {
    slug: "ghl-jamie-k-fitness",
    category: "Automation · Fitness coaching, Australia",
    name: "GoHighLevel Automation System",
    summary: "Lead capture, SMS & email nurture, calendar booking and pipeline automation for Jamie K Fitness.",
    stack: ["GoHighLevel", "SMS & email", "Funnels"],
    mark: "GHL",
  },
  {
    slug: "commercial-property-services",
    category: "Facilities & maintenance · Website",
    name: "Commercial Property Services",
    summary: "Services and projects website with CMS-managed content, inquiry workflows and fast, SEO-friendly pages.",
    stack: ["Next.js", "React", "API integration"],
    mark: "CP",
  },
  {
    slug: "premium-salon",
    category: "Beauty & wellness · Website",
    name: "Premium Salon Website",
    summary: "Elegant, fully responsive website for a luxury salon with service pages, galleries and online booking.",
    stack: ["Web design", "Responsive", "Booking flow"],
    mark: "Sa",
  },
];

export const CASE_DETAILS: Record<string, CaseDetail> = {
  onlypark: {
    name: "OnlyPark",
    type: "Dashboard modernization · Parking management, Australia",
    timeline: "12–16 weeks",
    overview:
      "OnlyPark is a parking management platform used to run car parks, permits and compliance notices. Its legacy Laravel admin dashboard was buckling under load, API delays were blocking day-to-day operations, and the previous developers had stopped responding.",
    challenge: [
      "Legacy Laravel dashboard unresponsive under load",
      "API delays causing operational bottlenecks",
      "Previous developers became unresponsive",
    ],
    solution: [
      "Re-architected the admin dashboard in Next.js",
      "Rebuilt the backend and API layer with NestJS",
      "Set up AWS infrastructure on EC2 and RDS",
    ],
    results: [
      "Page load time cut by 80%",
      "Fast, reliable API for daily operations",
      "Client extended the contract",
    ],
    stack: ["Next.js", "NestJS", "AWS EC2", "AWS RDS", "PostgreSQL"],
    metrics: [
      { value: "80%", label: "Faster page loads" },
      { value: "12–16", label: "Weeks to deliver" },
      { value: "✓", label: "Contract extended" },
    ],
    quote: "Thank you for everything you're doing — we greatly appreciate it & very much enjoy working with you.",
    who: "Business owner, OnlyPark",
    images: [
      { src: onlyPark1, alt: "OnlyPark admin dashboard" },
      { src: onlyPark2, alt: "OnlyPark dashboard detail" },
    ],
  },
  "pip-collective": {
    name: "The Pip Collective",
    type: "Platform stabilization · Trading education, FinTech",
    timeline: "Ongoing",
    overview:
      "The Pip Collective is a paying trading-education platform. Login bugs, failing Stripe payments and slow APIs were costing it revenue, and the previous team had abandoned the project.",
    challenge: [
      "Critical login and authentication bugs",
      "Stripe payment failures causing lost revenue",
      "Previous team abandoned the project",
    ],
    solution: [
      "Emergency stabilization of authentication",
      "Rebuilt the Stripe payment flows end to end",
      "Optimized slow API endpoints",
    ],
    results: [
      "Payment success rate restored to 99%",
      "Authentication issues resolved",
      "Took over ongoing feature development",
    ],
    stack: ["Laravel", "MySQL", "Stripe", "REST APIs"],
    metrics: [
      { value: "99%", label: "Payment success rate" },
      { value: "✓", label: "Auth issues resolved" },
      { value: "Ongoing", label: "Partnership" },
    ],
    quote: "F**king brilliant bud, great work as always.",
    who: "Platform owner, The Pip Collective",
    images: [
      { src: tpc1, alt: "The Pip Collective landing page" },
      { src: tpc2, alt: "The Pip Collective platform" },
    ],
  },
  "crypto-arbitrage": {
    name: "Crypto Arbitrage Engine",
    type: "Logic correction & deployment · Automated trading (private)",
    timeline: "2–4 weeks",
    overview:
      "A crypto arbitrage engine left broken by the previous developer: it produced incorrect results from incomplete market feeds and couldn't be deployed.",
    challenge: [
      "Incorrect arbitrage calculations",
      "Incomplete, inconsistent exchange feeds",
      "Code left stalled and not deployable",
    ],
    solution: [
      "Rebuilt the spread-calculation core",
      "Normalized 10+ exchange APIs into one real-time data layer",
      "Deployed to stable production on AWS",
    ],
    results: [
      "Accurate arbitrage calculations",
      "Unified real-time market data",
      "Live in production before launch",
    ],
    stack: ["TypeScript", "Node.js", "React", "AWS"],
    metrics: [
      { value: "10+", label: "Exchange APIs normalized" },
      { value: "2–4", label: "Weeks to fix & deploy" },
      { value: "✓", label: "Live on AWS" },
    ],
    quote: "Highly recommended developer, friendly and very knowledgeable.",
    who: "Project stakeholder",
    images: [],
  },
  dawlati: {
    name: "Dawlati",
    type: "Full-stack job portal · UAE",
    timeline: "Web platform",
    overview:
      "Dawlati is a career platform for the UAE that connects candidates and employers. I built the web platform in React/Next.js and designed the NestJS backend that powers job listings, candidate applications and employer profiles at scale.",
    highlights: [
      "Scalable NestJS backend supporting 100,000+ listings and applications",
      "Web platform built with React/Next.js",
      "Job listings, user profiles and employer–candidate features",
      "Job matching, applications and real-time updates via backend APIs",
      "Secure REST APIs and authentication — 35% fewer auth-related incidents",
      "English & Arabic support with localization for UAE users",
      "Job search, application flow, notifications and user tracking",
    ],
    stack: ["Next.js", "React", "NestJS", "REST APIs", "Authentication", "i18n (EN/AR)"],
    images: [],
  },
  scopeology: {
    name: "Scopeology",
    type: "Medical EdTech platform · Saudi Arabia",
    timeline: "Web app",
    overview:
      "Scopeology is a medical learning platform built for Saudi medical residents preparing for annual promotions and board examinations. The goal was a modern, scalable, easy-to-use system for practising questions, tracking progress and staying on top of medical events.",
    highlights: [
      "Complete medical education platform for Saudi residents",
      "Self-test, timed-test and revision modes",
      "User dashboards, test modules and analytics",
      "Backend APIs for questions, scoring and progress tracking",
      "Dynamic medical events calendar and category system",
      "Optimized page load, caching and data flow",
      "Mobile-friendly, secure and scalable architecture",
    ],
    stack: ["Next.js", "REST APIs", "UI/UX design", "Web application"],
    images: [],
  },
  askinproperties: {
    name: "AskInProperties",
    type: "Real-estate platform · Web app",
    timeline: "Web app",
    overview:
      "AskInProperties is a full-scale real-estate web platform that showcases residential and commercial properties and projects, and turns visitor interest into qualified leads.",
    highlights: [
      "Full-featured property listing portal in React/Next.js",
      "Dynamic listings with search, filters and categories",
      "Project and property galleries with images and details",
      "Backend APIs for property data, inquiries and contact forms",
      "Secure form submissions for lead capture",
      "Fast page loads and SEO-friendly structure",
      "Responsive design for desktop and mobile browsing",
    ],
    stack: ["React", "Next.js", "Web APIs", "UI/UX"],
    images: [],
  },
  bachay: {
    name: "Bachay",
    type: "Flutter mobile app · iOS & Android",
    timeline: "Mobile app",
    role: "Mobile Application Developer",
    overview:
      "Bachay is a feature-rich mobile app for parents and kids, bringing learning, shopping, health tracking and community together in one family-centred platform.",
    highlights: [
      "Cross-platform app for Android and iOS built in Flutter",
      "Firebase authentication, database and push notifications",
      "Vaccination tracker with reminders and scheduling",
      "Shopping for kids' essentials",
      "Quizzes, articles, learning sections and Q&A forums",
      "Secure API connections and smooth, optimized app flow",
    ],
    stack: ["Flutter", "Firebase", "REST APIs", "UI/UX"],
    images: [],
  },
  "ghl-jamie-k-fitness": {
    name: "GoHighLevel Automation System",
    type: "Marketing automation · Jamie K Fitness, Australia",
    timeline: "Automation build",
    overview:
      "A complete GoHighLevel automation system for a fitness coaching business in Australia — from the first form fill to a booked consultation — fully documented and handed over so the client's team runs it independently.",
    highlights: [
      "Lead capture forms and consultation funnel",
      "Automated SMS and email nurture sequences",
      "Calendar booking integration",
      "Pipeline stage automation",
      "Full documentation and hand-over to the client team",
    ],
    stack: ["GoHighLevel", "Workflows", "SMS", "Email", "Funnels", "Calendar booking"],
    images: [],
  },
  "commercial-property-services": {
    name: "Commercial Property Services",
    type: "Company website · Facilities & maintenance",
    timeline: "Website",
    overview:
      "A professional, user-friendly website for a commercial property services company offering maintenance, facilities management and project delivery.",
    highlights: [
      "Full company website built with React/Next.js",
      "Dynamic services pages and project listings",
      "“Projects & Contracts” section showcasing past work",
      "Contact forms, inquiry workflows and CMS-managed content",
      "Performance-optimized, fast-loading pages",
      "Clear navigation and SEO-friendly structure",
    ],
    stack: ["Next.js", "React", "API integration", "CMS"],
    images: [],
  },
  "premium-salon": {
    name: "Premium Salon Website",
    type: "Web design & development · Luxury beauty salon",
    timeline: "Website",
    overview:
      "A luxury beauty salon needed a professional online presence that reflects its brand — elegant, fast on every device, and built to turn visitors into bookings.",
    highlights: [
      "Fully responsive, modern website",
      "Clean, elegant UI aligned with the brand identity",
      "Service pages, galleries and online appointment booking",
      "Content sections for treatments and packages",
      "Optimized page speed, structure and on-page SEO",
      "Layout designed to improve engagement and conversions",
    ],
    stack: ["Web design", "Responsive design", "Booking flow", "On-page SEO"],
    images: [],
  },
};
