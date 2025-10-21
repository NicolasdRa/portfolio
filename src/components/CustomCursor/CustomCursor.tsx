import React, { useRef, useEffect, useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { Wrapper } from './CustomCursor.styled';

const CustomCursor = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const secondaryCursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const { type } = useContext(CustomCursorContext);

  // Check if user prefers reduced motion
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    setIsVisible(supportsHover && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      if (secondaryCursorRef.current && mainCursorRef.current) {
        positionRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - secondaryCursorRef.current.clientHeight / 2;
        mainCursorRef.current.style.transform = `translate3d(${
          mouseX - mainCursorRef.current.clientWidth / 2
        }px, ${mouseY - mainCursorRef.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;
    let rafId: number;
    let isActive = true;

    const followMouse = () => {
      if (!isActive || document.hidden) return;

      rafId = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
        positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.15;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.15;

        if (
          Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    // Handle visibility changes to pause animation when tab is not active
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        followMouse();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    followMouse();

    // Clean up the animation frame on unmount
    return () => {
      isActive = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <Wrapper>
      <div className={`${type}`}>
        <div className="main-cursor" ref={mainCursorRef}>
          <div className="main-cursor-background" />
        </div>
        <div className="secondary-cursor" ref={secondaryCursorRef}>
          <div className="cursor-background" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomCursor;
