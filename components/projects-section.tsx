'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, Play, X } from 'lucide-react';
import { RevealText } from './reveal-text';
import Link from 'next/link';
import { projects } from '@/lib/projects-data';
import { ImageCarousel } from './image-carousel';

export function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<{ youtubeId: string; title: string } | null>(null);

  return (
    <section className="py-32 px-4 md:px-12 lg:px-24">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-900 pb-12">
        <div>
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mix-blend-difference">
            <RevealText text="The Reels" />
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-8 md:mt-0 max-w-sm text-right">
          [01_Projects] Selected works spanning web infrastructure and digital cinema.
        </p>
      </div>

      <div className="space-y-48">
        
        {/* Curated Engineering Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {projects.map((project, index) => (
            <Link href={`/reels/${project.slug}`} key={project.id} className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 transition-colors rounded-lg flex flex-col h-[500px] md:h-[600px] overflow-hidden">
              
              {/* Top Half: Carousel */}
              <div className="h-[65%] w-full border-b border-neutral-800 relative">
                <ImageCarousel images={project.mockups} />
              </div>
              
              {/* Bottom Half: Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="font-mono text-accent text-[10px] uppercase tracking-widest mb-2 flex justify-between">
                    <span>Engineering / {String(index + 1).padStart(2, '0')}</span>
                    <span className="text-neutral-500">{project.year}</span>
                  </p>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight leading-none mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-neutral-400 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Project 2 & 3: Cinema // Brutalist Grid */}
        <div className="border-t border-neutral-900 pt-24 mt-24">
          <div className="mb-20">
            <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Featured Cinema</p>
            <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none max-w-2xl">
              Non-Verbal <br /> Emotional Journeys
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
             {/* Loop De Loop */}
            <div className="group cursor-pointer" onClick={() => setActiveVideo({ youtubeId: "U0TUZytcZYw", title: "Loop de loop" })}>
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-800 mb-8 group-hover:border-accent transition-all duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-20 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
                  <div className="w-20 h-20 rounded-full bg-accent text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out shadow-[0_0_40px_rgba(251,70,13,0.4)]">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/U0TUZytcZYw/maxresdefault.jpg"
                  alt="Loop de loop Thumbnail"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display text-3xl font-bold uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">Loop de loop</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Short Film', 'Social Media', 'Doom Scrolling', 'Video Art'].map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-neutral-400 border border-neutral-800 px-2 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-neutral-400 font-light max-w-sm">
                    A thought-provoking short film that captures the repetitive and often consuming nature of social media "doom scrolling." It creatively visualizes the endless, trance-like cycle of digital consumption, exploring how getting sucked into our screens acts as a glitch in our everyday routines.
                  </p>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center group-hover:bg-optic-white group-hover:text-primary transition-all flex-shrink-0 mt-2">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Rebuild */}
            <div className="group md:mt-32 cursor-pointer" onClick={() => setActiveVideo({ youtubeId: "Phpf7UZ3f-I", title: "Rebuild" })}>
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-800 mb-8 group-hover:border-accent transition-all duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-20 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
                  <div className="w-20 h-20 rounded-full bg-accent text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out shadow-[0_0_40px_rgba(251,70,13,0.4)]">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/Phpf7UZ3f-I/maxresdefault.jpg"
                  alt="Rebuild Thumbnail"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display text-3xl font-bold uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">Rebuild</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Mental Health', 'Short Film', 'Motivation', 'Awareness'].map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-neutral-400 border border-neutral-800 px-2 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-neutral-400 font-light max-w-sm">
                    A powerful and reflective short film centered around mental health awareness. It delves into the internal and external challenges of personal struggles, highlighting the long, arduous process of healing, maintaining resilience, and rebuilding oneself even when faced with adversity and self-doubt.
                  </p>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center group-hover:bg-optic-white group-hover:text-primary transition-all flex-shrink-0 mt-2">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Cinematic Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 z-[110]"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-7xl aspect-video bg-black border border-neutral-800/50 rounded-lg overflow-hidden shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
                <h3 className="font-display text-2xl text-optic-white uppercase tracking-widest">{activeVideo.title}</h3>
              </div>
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="w-full h-full object-cover border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

