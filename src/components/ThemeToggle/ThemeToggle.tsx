import React, { useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useThemeMode } from '../../context/ThemeContext';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { ToggleContainer, ToggleButton } from './ThemeToggle.styled';

export const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeMode();
  const { setType } = useContext(CustomCursorContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if mobile/tablet
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      // Simpler fade-in for mobile
      gsap.to(containerRef.current, { duration: 0.5, opacity: 1, delay: 0.3 });
    } else {
      // Desktop animation from right
      gsap.from(containerRef.current, { duration: 0.3, scale: 0.5, delay: 0.5, x: 100 });
      gsap.to(containerRef.current, { duration: 0.3, opacity: 1, delay: 0.5, x: 100 });
      gsap.to(containerRef.current, { duration: 1, ease: 'elastic.out(1, 0.3)', x: 0, delay: 0.5 });
    }
  }, []);

  return (
    <ToggleContainer ref={containerRef}>
      <ToggleButton
        onClick={toggleTheme}
        onMouseEnter={() => setType('hover')}
        onMouseLeave={() => setType('default')}
        aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
      >
        {themeMode === 'light' ? 'dark' : 'light'}
      </ToggleButton>
    </ToggleContainer>
  );
};