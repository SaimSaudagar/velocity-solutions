import type { ProjectCard } from "./caseStudies";

const PATHS: Record<NonNullable<ProjectCard["icon"]>, JSX.Element> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9v11h14V9" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="16.5" cy="9" r="2" />
      <path d="M3.5 20v-4.5A4.5 4.5 0 0 1 12.5 15.5V20" />
      <path d="M13.5 20v-3a3 3 0 0 1 6 0v3" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h5a3 3 0 0 1 3 3v6" />
      <path d="m14.5 12.5 2.5 2.5 2.5-2.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a2 2 0 0 1 2 2v10" />
      <path d="M3 21h18" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
    </>
  ),
};

export default function ProjectMark({ p }: { p: ProjectCard }) {
  if (p.logo) {
    return (
      <span className="pcard__mark pcard__mark--logo" aria-hidden="true">
        <img src={p.logo} alt="" />
      </span>
    );
  }
  if (p.icon) {
    return (
      <span className="pcard__mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {PATHS[p.icon]}
        </svg>
      </span>
    );
  }
  return (
    <span className="pcard__mark" aria-hidden="true">
      {p.mark}
    </span>
  );
}
