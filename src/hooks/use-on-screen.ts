import { useEffect, useState, useRef } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(refCurrent);

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, [ref, options]);

  return { ref, isInView };
}
