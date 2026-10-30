import { useEffect, useRef, useState } from 'react';

/**
 * Déclenche `true` quand l'élément référencé entre dans le viewport.
 * Remplace framer-motion's `whileInView` sans alourdir le bundle.
 */
export function useInView<T extends HTMLElement>(
  options: { once?: boolean; threshold?: number; rootMargin?: string } = {}
) {
  const { once = true, threshold = 0.15, rootMargin = '-80px' } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView] as const;
}
