import { useEffect, useRef, useState } from 'react';

export default function useTocHighlight(
  init_id: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState<string>(init_id);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-64px 0px -120px 0px',
      threshold: 1.0,
    });

    const elements = document.querySelectorAll('h2, h3');
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return [activeId, setActiveId];
}
