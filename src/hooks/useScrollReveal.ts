import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type RevealState = "visible" | "pending";

/**
 * Returns a ref to attach to any element and a data-attribute value
 * ("pending" | "visible") that CSS uses to animate the element in
 * once it scrolls into view. No-ops entirely when the user prefers
 * reduced motion, or once the element has revealed (never re-hides
 * on scroll-up, which reads as flickery rather than premium).
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<RevealState>(
    reducedMotion ? "visible" : "pending"
  );

  useEffect(() => {
    if (reducedMotion) {
      setState("visible");
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return { ref, state };
}
