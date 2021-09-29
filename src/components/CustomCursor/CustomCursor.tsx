import React, { useRef, useEffect } from 'react';
import { Wrapper } from './CustomCursor.styled';

const CustomCursor = () => {
  const mainCursorRef = useRef(null);
  const secondaryCursorRef = useRef(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - secondaryCursorRef.current.clientHeight / 2;
      mainCursorRef.current.style.transform = `translate3d(${
        mouseX - mainCursorRef.current.clientWidth / 2
      }px, ${mouseY - mainCursorRef.current.clientHeight / 2}px, 0)`;
    });
    return () => {
      document.removeEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;

        const mouseX = clientX;
        const mouseY = clientY;

        positionRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - secondaryCursorRef.current.clientHeight / 2;
        mainCursorRef.current.style.transform = `translate3d(${
          mouseX - mainCursorRef.current.clientWidth / 2
        }px, ${mouseY - mainCursorRef.current.clientHeight / 2}px, 0)`;
      });
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
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
      secondaryCursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
    return () => {};
  }, []);

  return (
    <Wrapper>
      <div className="main-cursor" ref={mainCursorRef}>
        <div className="main-cursor-background" />
      </div>
      <div className="secondary-cursor" ref={secondaryCursorRef}>
        <div className="cursor-background" />
      </div>
    </Wrapper>
  );
};

export default CustomCursor;
