import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use springs for smoother motion
  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  // Debounced cursor type update
  const updateCursorType = useCallback(() => {
    const hoveredElement = document.elementFromPoint(x.get(), y.get());
    if (hoveredElement) {
      const computedStyle = window.getComputedStyle(hoveredElement);
      setIsPointer(computedStyle.cursor === 'pointer');
    }
  }, [x, y]);

  useEffect(() => {
    let rafId;
    let lastUpdateTime = 0;
    const updateInterval = 50; // Update cursor type every 50ms

    const updatePosition = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);

      // Throttle cursor type updates
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime >= updateInterval) {
        updateCursorType();
        lastUpdateTime = currentTime;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Use passive event listener for better performance
    window.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [x, y, updateCursorType]);

  return (
    <>
      {/* Inner cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.5,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Outer cursor */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 0.5,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <div className="w-full h-full rounded-full border border-white" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
