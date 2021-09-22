import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link, PageProps } from 'gatsby';

const NotFound: React.FC<PageProps> = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) throw Error('divRef is not assigned');
    const element = contentRef.current;
    gsap.fromTo(element, { opacity: 0 }, { duration: 0.8, ease: 'expo.out', opacity: 1 });
  }, []);

  return (
    <main className="error-page">
      <div ref={contentRef} className="error-container">
        <h1>dead end...</h1>
        <Link to="/" className="cta">
          back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
