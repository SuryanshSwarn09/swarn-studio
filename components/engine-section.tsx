'use client';

import { motion } from 'motion/react';
import { RevealText } from './reveal-text';
import { Sparkles } from 'lucide-react';

const TechItem = ({ icon, name, lucide: Icon }: { icon?: string, name: string, lucide?: any }) => (
  <div className="flex flex-col items-center justify-center gap-4 p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-accent hover:bg-neutral-800/50 transition-all duration-300 group">
    {icon ? (
      <img src={`https://cdn.simpleicons.org/${icon}/a3a3a3`} alt={name} className="w-10 h-10 group-hover:scale-110 group-hover:brightness-150 transition-all duration-300" />
    ) : Icon ? (
      <Icon className="w-10 h-10 text-neutral-400 group-hover:text-neutral-200 group-hover:scale-110 transition-all duration-300" />
    ) : null}
    <span className="font-mono text-[10px] md:text-xs text-neutral-500 group-hover:text-neutral-300 uppercase tracking-widest text-center">{name}</span>
  </div>
);

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
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Languages block */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8 border-b border-neutral-800 pb-4">01. Languages</h3>
          <div className="grid grid-cols-3 gap-4">
            <TechItem icon="cplusplus" name="C++" />
            <TechItem icon="html5" name="HTML" />
            <TechItem icon="css" name="CSS" />
            <TechItem icon="javascript" name="JavaScript" />
            <TechItem icon="latex" name="LaTeX" />
          </div>
        </motion.div>

        {/* Frameworks block */}
        <motion.div variants={itemVariants} className="flex flex-col md:translate-y-8">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8 border-b border-neutral-800 pb-4">02. Frameworks & Web</h3>
          <div className="grid grid-cols-3 gap-4">
            <TechItem icon="react" name="React" />
            <TechItem icon="tailwindcss" name="Tailwind" />
            <TechItem icon="vite" name="Vite" />
            <TechItem icon="nextdotjs" name="Next.js" />

          </div>
        </motion.div>

        {/* Tools block */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8 border-b border-neutral-800 pb-4">03. Tools & AI</h3>
          <div className="grid grid-cols-3 gap-4">
            <TechItem icon="git" name="Git" />
            <TechItem icon="github" name="GitHub" />
            <TechItem icon="claude" name="Claude" />
            <TechItem lucide={Sparkles} name="AI Studio" />
            <TechItem icon="vercel" name="Vercel" />
            <TechItem icon="netlify" name="Netlify" />

          </div>
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
