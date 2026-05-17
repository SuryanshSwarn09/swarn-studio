'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { RevealText } from './reveal-text';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-4 md:px-12 lg:px-24 overflow-hidden pb-32 pt-32">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/premium-photo/black-texture-wool-close-up-woven-cloth-knitted-fabric_236836-6022.jpg"
          alt="Hero Background Placeholder"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlays (Blur + Noise) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl z-0" />
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Accents (Keep for subtle cinematic ambient light) */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Main Content Layout (Grid) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end z-10">

        {/* Left Side: Name and Role */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-end"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] tracking-tighter uppercase font-bold text-white mb-6 mix-blend-overlay">
            Suryansh<br />Swarn
          </h1>
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent" />
            <p className="font-mono text-white/70 text-sm md:text-base uppercase tracking-widest">
              IT Engineer
            </p>
          </div>
        </motion.div>

        {/* Right Side: The Bridging Title */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-end pb-2 lg:pb-6"
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase font-light leading-[1.1] tracking-tight text-neutral-200 group">
            Bridging<br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 inline-block origin-left group-hover:scale-105 transition-transform duration-500 font-bold">
              Software
            </motion.span><br />
            Utility &<br />
            <span className="text-accent italic font-light tracking-wide">Academic</span>
            <br /> Research
          </h2>
          <div className="mt-8 border-l border-white/20 pl-4">
            <p className="text-sm md:text-base font-light text-neutral-400">
              <RevealText text="Focusing on the 2026 technical landscape." delay={1} />
            </p>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-4 md:left-12 lg:left-24 font-mono text-xs tracking-widest text-neutral-500 flex items-center gap-4 hidden md:flex"
      >
        SCROLL TO EXPLORE
        <div className="w-12 h-[1px] bg-neutral-600 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-accent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
