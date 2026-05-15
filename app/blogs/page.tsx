'use client';

import { motion } from 'motion/react';
import { RevealText } from '@/components/reveal-text';

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-primary flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-sm tracking-widest mb-6">
          TRANSMISSION PENDING
        </div>
        <h1 className="font-display text-5xl md:text-7xl uppercase font-bold tracking-tighter mb-6 text-optic-white">
          Architectural<br/>
          <span className="text-neutral-500">Thoughts</span>
        </h1>
        <p className="font-light text-neutral-400 max-w-md mx-auto text-lg md:text-xl">
          <RevealText text="Written deep-dives into software utility, design engineering, and the 2026 technical landscape." delay={0.5} />
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </motion.div>
      </motion.div>
    </main>
  );
}
