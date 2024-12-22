import { useEffect, useState } from "react";

export const isInView = (
  element: any,
  rootMargin: string,
  runOnce?: boolean
) => {
  const [isVisible, setState] = useState(false);
  let isViewed: boolean = false;

  useEffect(
    () => {
      if (isViewed) return;
      const current = element?.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { rootMargin }
      );
      current && observer?.observe(current);

      return () => current && observer.unobserve(current);
    },
    runOnce ? undefined : []
  );

  if (isVisible && runOnce) isViewed = true;
  return isVisible;
};
