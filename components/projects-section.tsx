'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, GitFork, Star, ArrowRight } from 'lucide-react';
import { RevealText } from './reveal-text';
import Link from 'next/link';

interface GithubRepo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
}

export function ProjectsSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubProjects() {
      try {
        const response = await fetch('https://api.github.com/users/SuryanshSwarn09/repos?sort=updated&per_page=2');
        if (response.ok) {
          const data = await response.json();

          const processedRepos = data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            html_url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics || [],
            language: repo.language,
          }));

          setRepos(processedRepos);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProjects();
  }, []);

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

        {/* Dynamic Engineering Projects */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-[400px] bg-neutral-900 rounded-lg border border-neutral-800 animate-pulse" />
            <div className="h-[400px] bg-neutral-900 rounded-lg border border-neutral-800 animate-pulse" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {repos.map((repo, index) => (
              <div key={repo.id} className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 md:p-12 hover:border-neutral-700 transition-colors rounded-lg">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">
                      Featured Engineering / {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-8 break-words group-hover:text-accent transition-colors">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                  </div>

                  <div className="font-mono text-sm text-neutral-400 space-y-8 mt-12">
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {repo.language && (
                        <span className="border border-neutral-800 bg-neutral-950 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics.slice(0, 5).map((tag) => (
                        <span key={tag} className="border border-neutral-800 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-neutral-800 flex gap-8 flex-wrap">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-optic-white transition-colors uppercase tracking-widest text-xs">
                          View Live <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-optic-white transition-colors uppercase tracking-widest text-xs">
                        Source Code <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div className="flex justify-end pt-12">
            <Link href="/projects">
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                View All Projects
              </button>
            </Link>
          </div>
        )}

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
            <div className="group">
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-800 mb-8">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/80 to-transparent z-10 pointer-events-none" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display text-3xl font-bold uppercase tracking-wide mb-4">Loop De Loop</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Video Art', 'Storytelling', 'Experimental'].map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-neutral-400 border border-neutral-800 px-2 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-neutral-400 font-light max-w-sm">
                    An experimental piece exploring cyclical emotional states. Uses timeline-based compositing, brutalist cuts, and advanced motion tracking to disorient the viewer intentionally.
                  </p>
                </div>

                <a href="#" className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center hover:bg-optic-white hover:text-primary transition-all flex-shrink-0 mt-2">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Rebuild */}
            <div className="group md:mt-32">
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-800 mb-8">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/80 to-transparent z-10 pointer-events-none" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display text-3xl font-bold uppercase tracking-wide mb-4">Rebuild</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Editing', 'Soundscape', 'Deconstruction'].map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-neutral-400 border border-neutral-800 px-2 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-neutral-400 font-light max-w-sm">
                    A non-verbal narrative focusing on deconstruction and reconstruction. The edit is cut precisely to sync with a heavy, industrial soundscape.
                  </p>
                </div>

                <a href="#" className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center hover:bg-optic-white hover:text-primary transition-all flex-shrink-0 mt-2">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

