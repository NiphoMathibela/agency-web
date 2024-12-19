import { useRef, useEffect } from 'react';

export const useScrollingText = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      element.style.transform = `translateX(${position}px)`;

      if (position <= -element.offsetWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return { ref };
};