// src/hooks/useSectionSpy.js
import { useCallback, useEffect, useRef, useState } from 'react';

export function useSectionSpy(rootRef, {
  rootMargin = '30px 0px -70% 0px', // top band (≈ top 30% + 30px offset)
  threshold = 0.01,
  initial = 'about',
  onChange, // optional callback(activeKey)
} = {}) {
  const [active, setActive] = useState(initial);
  const elements = useRef(new Map()); // key -> element

  const register = useCallback((key) => (el) => {
    if (el) elements.current.set(key, el);
    else elements.current.delete(key);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const hit = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (hit) {
        const key = hit.target.dataset.section;
        setActive((prev) => {
          if (prev !== key) onChange?.(key);
          return key;
        });
      }
    }, {
      root: rootRef.current,
      rootMargin,
      threshold,
    });

    elements.current.forEach((el) => observer.observe(el));

    // ensure an initial value on mount
    setActive((prev) => {
      onChange?.(prev);
      return prev;
    });

    return () => observer.disconnect();
  }, [rootRef, rootMargin, threshold, onChange]);

  return { activeSection: active, register };
}
