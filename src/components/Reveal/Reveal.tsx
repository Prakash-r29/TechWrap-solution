import { JSX, ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  className?: string;
}

/**
 * Generic scroll-reveal wrapper. Wrap any block of markup in
 * <Reveal> to get a subtle fade-up when it enters the viewport.
 * Reused across every Home page section instead of each section
 * re-implementing its own observer.
 */
export function Reveal({ children, as = "div", delayMs = 0, className = "" }: RevealProps) {
  const { ref, state } = useScrollReveal<HTMLDivElement>();
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`tw-reveal ${className}`.trim()}
      data-reveal={state}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
