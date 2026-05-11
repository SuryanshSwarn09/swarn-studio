'use client';

import { motion } from 'motion/react';
import React from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  // Split at spaces for word-by-word, or character by character. 
  // Let's do word by word for performance, or char by char if requested.
  // The PRD mentioned "letter-by-letter as they enter the viewport" for some text.
  const letters = Array.from(text);

  const containerData = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 },
    }),
  };

  const childData = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
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
      {letters.map((letter, index) => (
        <motion.span
          variants={childData}
          key={index}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
