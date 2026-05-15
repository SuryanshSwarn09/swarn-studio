'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { RevealText } from './reveal-text';
import { Github, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

export function HeroSection() {
  const socials = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/SuryanshSwarn09' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/suryanshswarn/' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/suryanshswarn/' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@suryanshswarn3933' },
    { name: 'Mail', icon: <Mail className="w-5 h-5" />, href: 'mailto:suryanshswarn@gmail.com' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden pt-20">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />



      {/* Background Accents */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" 
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-7"
        >
          <p className="font-mono text-accent text-sm md:text-base uppercase tracking-widest mb-6 block">
            Creative Technologist
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-bold leading-[0.9] tracking-tighter mix-blend-difference z-20 group">
            Bridging<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-optic-white to-neutral-500 inline-block origin-left group-hover:scale-105 transition-transform duration-500"
            >
              Software
            </motion.span><br />
            Utility &<br />
            <span className="text-accent italic font-light tracking-wide">Academic</span>
            <br /> Research
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="text-lg md:text-xl font-light text-neutral-400 border-l-2 border-accent pl-6 py-2">
              <RevealText text="Focusing on the 2026 technical landscape." delay={1} />
            </p>
          </div>
        </motion.div>

        {/* Right Side: Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Stylized Frame */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden group">
            {/* Internal glowing blobs */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-accent/20 rounded-full blur-[80px]"
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] bg-blue-500/10 rounded-full blur-[80px]"
            />

            {/* Central Profile Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                <Image 
                  src="/icon-512.png" 
                  alt="Suryansh Swarn" 
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Frame overlays for cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
              <div className="font-mono text-xs tracking-widest uppercase">
                <span className="text-neutral-500">Identity.Verified</span><br/>
                <span className="text-white/80">Suryansh Swarn</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-4 md:left-12 lg:left-24 font-mono text-xs tracking-widest text-neutral-500 flex items-center gap-4 origin-left -rotate-90 md:rotate-0"
      >
        <div className="w-12 h-[1px] bg-neutral-600 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-accent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}
