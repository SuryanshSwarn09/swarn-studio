'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { RevealText } from './reveal-text';
import { Github, Linkedin, Mail, Globe2 } from 'lucide-react';

export function AboutProfile() {
  const socials = [
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com/SuryanshSwarn09' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/suryanshswarn/' },
    { name: 'Email', icon: <Mail className="w-4 h-4" />, href: 'mailto:suryanshswarn@gmail.com' },
  ];

  return (
    <div id="introduction" className="flex flex-col xl:flex-row gap-12 xl:gap-20 pb-20 border-b border-white/5 scroll-mt-32">
      {/* Avatar & Badges */}
      <div className="flex flex-col items-center xl:items-start gap-6 shrink-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 rounded-full border border-white/10 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/[0.02]"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-accent/10">
            <Image 
              src="/icon-512.png" 
              alt="Suryansh Swarn" 
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center xl:items-start gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 font-mono">
            <Globe2 className="w-3 h-3 text-accent" />
            Asia/Kolkata
          </div>
          <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
            {['English', 'Hindi', 'Bengali'].map(lang => (
              <span key={lang} className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-500 bg-black/20">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Name, Role & Bio */}
      <div className="flex flex-col flex-1 gap-6 text-center xl:text-left">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-2">
            Suryansh <br className="hidden sm:block xl:hidden"/> Swarn
          </h1>
          <p className="text-xl md:text-2xl font-light text-neutral-400 tracking-wide">
            Creative Technologist
          </p>
        </div>

        <div className="flex items-center justify-center xl:justify-start gap-4 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-accent hover:border-accent/50 transition-colors text-sm font-mono"
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-6 text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
          <RevealText 
            text="I'm Suryansh—a developer who finds as much comfort in the rigid structure of an algorithm as in the messy, fluid nature of cinema. I specialize in building scalable web solutions while exploring the theoretical frontiers of modern computing, bridging the gap between practical software utility and academic research."
            delay={0.5} 
          />
        </div>
      </div>
    </div>
  );
}
