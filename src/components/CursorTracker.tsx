import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Check if touch device
    if ("ontouchstart" in window) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute rounded-full bg-primary/20 blur-xl"
          animate={{
            width: isPointer ? 80 : 50,
            height: isPointer ? 80 : 50,
            x: isPointer ? -40 : -25,
            y: isPointer ? -40 : -25,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Inner cursor dot */}
        <motion.div
          className="absolute rounded-full bg-primary"
          animate={{
            width: isPointer ? 16 : 8,
            height: isPointer ? 16 : 8,
            x: isPointer ? -8 : -4,
            y: isPointer ? -8 : -4,
            opacity: isPointer ? 0.8 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          animate={{
            scale: [1, 0],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          key={`${mousePosition.x}-${mousePosition.y}`}
        />
      </motion.div>
    </>
  );
};

export default CursorTracker;
