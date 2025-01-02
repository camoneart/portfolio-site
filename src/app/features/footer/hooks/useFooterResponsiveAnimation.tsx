import React, { useState, useEffect } from "react";

const useFooterResponsiveAnimation = () => {
  const getAnimationProps = () => {
    const isMobile = window.innerWidth <= 768;
    return {
      initial: { opacity: 0, y: isMobile ? 40 : 70 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: isMobile ? 2.2 : 2.8,
          duration: 1,
          ease: "easeInOut",
        },
      },
    };
  };
  const [animationProps, setAnimationProps] = useState(getAnimationProps());

  useEffect(() => {
    const updateAnimation = () => {
      setAnimationProps(getAnimationProps());
    };

    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return { animationProps };
};

export default useFooterResponsiveAnimation;
