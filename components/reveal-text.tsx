'use client';

import { motion } from 'motion/react';
import React from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  // Split at spaces for word-by-word to vastly improve performance 
  // over character-by-character for large blocks of text.
  const words = text.split(" ");

  const containerData = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay * 0.1 },
    },
  };

  const childData = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerData}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            variants={childData}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && <span> </span>}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
