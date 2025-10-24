import { useLenis } from "lenis/react";

export function useLenisScrollTo() {
  const lenis = useLenis();
  const scrollTo = (
    target: string | number | HTMLElement | React.RefObject<HTMLElement>,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
    }
  ) => {
    if (!lenis) return;

    let targetEl: HTMLElement | number | null = null;

    // Handle various target types
    if (typeof target === "number") targetEl = target;
    else if (typeof target === "string")
      targetEl = document.querySelector(target) as HTMLElement;
    else if ("current" in target && target.current)
      targetEl = target.current as HTMLElement;
    else if (target instanceof HTMLElement) targetEl = target;
    else return;

    if (targetEl !== null) lenis.scrollTo(targetEl, options);
  };

  return scrollTo;
}
