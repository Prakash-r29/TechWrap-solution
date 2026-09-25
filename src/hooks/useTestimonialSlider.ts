import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseSliderOptions {
  length: number;
  autoplayMs?: number;
}

interface UseSliderResult {
  index: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
  isPaused: boolean;
  pause: () => void;
  resume: () => void;
}

/**
 * Slider state machine shared by the testimonial carousel.
 * - Autoplays on an interval, advancing one slide at a time.
 * - Pauses on hover, focus-within, or touch, and resumes after
 *   the pointer/finger leaves.
 * - Any manual prev/next/dot click resets the autoplay timer so
 *   it doesn't jump immediately after a deliberate interaction.
 * - Autoplay never starts at all if the user prefers reduced motion;
 *   manual navigation still works.
 */
export function useTestimonialSlider({ length, autoplayMs = 6000 }: UseSliderOptions): UseSliderResult {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (reducedMotion || isPaused || length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, autoplayMs);
  }, [autoplayMs, clearTimer, isPaused, length, reducedMotion]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % length) + length) % length);
  }, [length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return { index, next, prev, goTo, isPaused, pause, resume };
}
