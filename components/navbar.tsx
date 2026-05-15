'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Clapperboard, FileText, Github, Linkedin, Instagram, Youtube, Mail, Share2 } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [showSocials, setShowSocials] = useState(false);

  const links = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Reels', href: '/reels', icon: <Clapperboard className="w-4 h-4" /> },
    { name: 'Blogs', href: '/blogs', icon: <FileText className="w-4 h-4" /> },
  ];

  const socials = [
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com/SuryanshSwarn09' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/suryanshswarn/' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/suryanshswarn/' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: 'https://www.youtube.com/@suryanshswarn3933' },
    { name: 'Mail', icon: <Mail className="w-4 h-4" />, href: 'mailto:suryanshswarn@gmail.com' },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="relative flex items-center justify-between gap-4 sm:gap-6 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        
        {/* Socials Popover */}
        <AnimatePresence>
          {showSocials && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[calc(100%+16px)] right-0 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center gap-5 shadow-2xl"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left: Branding */}
        <Link href="/" className="mr-2 ml-2 flex items-center group">
          <span className="font-display font-bold text-xs uppercase tracking-tighter text-white group-hover:text-accent transition-colors">
            SWARN.
          </span>
        </Link>

        {/* Center: Page Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active-bg"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  <span className={`${isActive ? 'text-accent' : ''}`}>
                    {link.icon}
                  </span>
                  <span className="hidden md:inline-block">{link.name}</span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right: Socials Toggle Button */}
        <div className="flex items-center pl-2 sm:pl-4 border-l border-white/10">
          <button
            onClick={() => setShowSocials(!showSocials)}
            className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
              showSocials ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white hover:bg-white/5'
            }`}
            aria-label="Toggle Socials"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
