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
  challenge: string[];
  solution: string[];
  results: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  quote: string;
  who: string;
  images: { src: string; alt: string }[];
};

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
};
