"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const useMousePosition = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return position;
};

const useInteractiveElementHover = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const isInteractiveElement = (element: HTMLElement): boolean => {
      const tagName = element.tagName.toLowerCase();
      const interactiveTags = ['a', 'button', 'input', 'select', 'textarea'];
      
      return (
        interactiveTags.includes(tagName) ||
        interactiveTags.some(tag => element.closest(tag) !== null)
      );
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return isHovering;
};

const MouseStalker = () => {
  const { x, y } = useMousePosition();
  const isInteractiveElementHovered = useInteractiveElementHover();
  
  const springProps = useSpring({
    to: { 
      transform: `translate(${x - 5}px, ${y - 6}px)`,
      opacity: isInteractiveElementHovered ? 0 : 1,
      scale: isInteractiveElementHovered ? 0.5 : 1,
    },
    config: { mass: 1, tension: 120, friction: 14 }
  });

  return (
    <animated.div
      style={{
        ...springProps,
        position: 'fixed',
        width: '9px',
        height: '9px',
        borderRadius: '50%',
        backgroundColor: '#ff3d00',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: springProps.transform,
        opacity: springProps.opacity,
        scale: springProps.scale,
      }}
    />
  );
};

export default MouseStalker;