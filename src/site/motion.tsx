import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export const EASE = [0.2, 0.7, 0.1, 1] as const;

/** Fades + lifts its children into view once. */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "p" | "span";
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
};

/** Headline whose lines slide up from a mask. */
export const MaskLines = ({
  lines,
  className,
  delay = 0,
  as = "h2",
  onLoad = false,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  onLoad?: boolean;
}) => {
  const reduce = useReducedMotion();
  const Tag = as;
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = onLoad || inView;
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => (
        <span className="line" key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={reduce ? false : { y: "110%" }}
            animate={show ? { y: "0%" } : undefined}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.09 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

/** Counts up a number when it scrolls into view. */
export const CountUp = ({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: (v) => setVal(v) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
