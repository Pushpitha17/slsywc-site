'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, MotionValue, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  shouldAnimate : boolean
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value , shouldAnimate }) => {
  const count: MotionValue<number> = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (shouldAnimate) {
      animate(count, value, {
        duration: 2,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
    } else {
      setDisplayValue(value);
    }
  }, [count, value, shouldAnimate]);

  return (
    <motion.div
      className="text-2xl md:text-4xl font-bold text-white"
    >
      {displayValue}
    </motion.div>
  );
};

export default AnimatedCounter;