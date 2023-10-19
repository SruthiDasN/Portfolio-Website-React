import { useState, useEffect } from 'react';

export const useScrollAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000); // Adjust the duration as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!animate) {
        toggleAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
},[animate]);
    return animate;
};