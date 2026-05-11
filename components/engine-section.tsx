'use client';

import { motion } from 'motion/react';
import { RevealText } from './reveal-text';

export function EngineSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 15 } },
  };

  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-neutral-950">
      <div className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          <RevealText text="The Engine" />
        </h2>
        <p className="font-mono text-sm text-neutral-500 mt-4 uppercase tracking-widest">
          Skills & Tech Stack
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Languages block */}
        <motion.div variants={itemVariants} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-accent transition-colors duration-300">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8">01. Languages</h3>
          <ul className="space-y-4 font-display text-2xl md:text-3xl font-light uppercase tracking-tight text-neutral-200">
            <li>Python</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </motion.div>

        {/* Frameworks block */}
        <motion.div variants={itemVariants} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-accent transition-colors duration-300 md:translate-y-8">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8">02. Frameworks</h3>
          <ul className="space-y-4 font-display text-2xl md:text-3xl font-light uppercase tracking-tight text-neutral-200">
            <li>Next.js</li>
            <li>React</li>
            <li>Flask</li>
          </ul>
        </motion.div>

        {/* Tools block */}
        <motion.div variants={itemVariants} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-accent transition-colors duration-300">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8">03. Tools</h3>
          <ul className="space-y-4 font-display text-2xl md:text-3xl font-light uppercase tracking-tight text-neutral-200">
            <li>Git</li>
            <li>Capcut</li>
            <li>AI Models</li>
          </ul>
        </motion.div>
      </motion.div>
      
      {/* Marquee background effect */}
      <div className="mt-32 overflow-hidden whitespace-nowrap border-y border-neutral-800 py-6 flex">
        <motion.div 
          className="font-display text-6xl md:text-8xl font-black uppercase text-neutral-900 flex-shrink-0"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          &nbsp;ONE PROJECT PER MONTH — ONE PROJECT PER MONTH — ONE PROJECT PER MONTH — ONE PROJECT PER MONTH —
        </motion.div>
        <motion.div 
          className="font-display text-6xl md:text-8xl font-black uppercase text-neutral-900 flex-shrink-0"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          &nbsp;ONE PROJECT PER MONTH — ONE PROJECT PER MONTH — ONE PROJECT PER MONTH — ONE PROJECT PER MONTH —
        </motion.div>
      </div>
    </section>
  );
}
