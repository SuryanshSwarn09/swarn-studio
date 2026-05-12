'use client';

import { motion } from 'motion/react';
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
      {/* Header / Socials */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full p-4 md:p-12 z-50 flex justify-between items-center"
      >
        <div className="font-display font-bold text-xl uppercase tracking-tighter text-optic-white">
          SWARN.STUDIO
        </div>
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-end">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent transition-colors duration-300 group"
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.header>

      {/* Background Accents */}
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-6xl z-10"
      >
        <p className="font-mono text-accent text-sm md:text-base uppercase tracking-widest mb-6 block">
          Creative Technologist
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold leading-[0.9] tracking-tighter mix-blend-difference z-20 group">
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

        <div className="mt-12 md:mt-24 max-w-xl">
          <p className="text-lg md:text-2xl font-light text-neutral-400 border-l-2 border-accent pl-6 py-2">
            <RevealText text="Focusing on the 2026 technical landscape." delay={1} />
          </p>
        </div>
      </motion.div>

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
