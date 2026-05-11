'use client';

import { motion } from 'motion/react';
import { RevealText } from './reveal-text';

export function AboutSection() {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-neutral-900 pt-16">
        <div className="md:col-span-4">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest sticky top-32">
            [00_About] / The Narrative
          </h2>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          <div className="font-display text-3xl md:text-5xl font-light text-neutral-200 leading-[1.1] tracking-tight space-y-8">
            <p className="block">
              I&apos;m <span className="italic">Suryansh</span>—an engineer who finds as much comfort in the rigid structure of an algorithm as in the messy, fluid nature of cinema.
            </p>
            <p className="block text-neutral-400">
              I don&apos;t just write code to move data; I build it to tell a story. Whether I&apos;m architecting a Python backend to handle thousands of requests, or cutting frames together for an experimental film, the goal is the same: to create an experience that feels seamless and deliberate.
            </p>
            <p className="block text-xl md:text-2xl text-neutral-500 font-sans tracking-normal mt-12 pl-6 border-l border-neutral-800">
              Currently pursuing my B.Tech in IT at Bengal College of Engineering and Technology, focusing on building systems for the decade ahead. No fluff, just proof of work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
