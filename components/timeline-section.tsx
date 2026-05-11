'use client';

import { motion } from 'motion/react';
import { Share2 } from 'lucide-react';
import { RevealText } from './reveal-text';

export function TimelineSection() {
  const experiences = [
    {
      period: "2023 — Current",
      role: "B.Tech in IT",
      institution: "Bengal College of Engineering and Technology",
      description: "Focusing on software utility, logic, and full-stack systems."
    },
    {
      period: "Pre — 2023",
      role: "Secondary & Senior Secondary",
      institution: "Saraswati Vidya Mandir",
      description: "Foundational mathematics, logic, and early technical interests."
    }
  ];

  const certs = ["Google Cloud", "IBM", "Coursera"];

  return (
    <section className="py-24 px-4 md:px-12 lg:px-24">
      <div className="mb-24">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          <RevealText text="The Timeline" />
        </h2>
        <p className="font-mono text-sm text-neutral-500 mt-4 uppercase tracking-widest">
          Progression & Certifications
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-24">
        {/* Experience Timeline */}
        <div className="lg:w-2/3 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 border-l border-neutral-800"
            >
              {/* Timeline marker */}
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-accent" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                <h3 className="font-display text-2xl md:text-3xl uppercase font-bold tracking-tight text-optic-white">
                  {exp.role}
                </h3>
                <span className="font-mono text-accent text-sm uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-xl text-neutral-300 font-light mb-4">{exp.institution}</h4>
              <p className="text-neutral-500 max-w-xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Marquee/Gallery */}
        <div className="lg:w-1/3">
          <h3 className="font-mono text-neutral-500 text-sm uppercase tracking-widest mb-12">Certifications</h3>
          
          <div className="flex flex-col gap-8">
            {certs.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex items-center justify-between p-6 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                <span className="font-display text-xl uppercase tracking-widest text-neutral-300 group-hover:text-optic-white transition-colors">{cert}</span>
                <Share2 className="w-5 h-5 text-neutral-600 group-hover:text-accent transition-colors" />
                
                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
          © 2026 Suryansh Swarn. All rights reserved.
        </p>
        <motion.div 
          className="font-display uppercase tracking-widest text-2xl font-bold text-neutral-800 pointer-events-none"
        >
          SWARN.STUDIO
        </motion.div>
      </footer>
    </section>
  );
}
