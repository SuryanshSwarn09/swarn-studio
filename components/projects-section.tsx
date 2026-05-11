'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, GitFork, Star, ArrowRight } from 'lucide-react';
import { RevealText } from './reveal-text';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
  readme: string | null;
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
          
          const reposWithReadmes = await Promise.all(
            data.map(async (repo: any) => {
              let readme = null;
              try {
                const readmeRes = await fetch(`https://raw.githubusercontent.com/SuryanshSwarn09/${repo.name}/${repo.default_branch}/README.md`);
                if (readmeRes.ok) {
                  readme = await readmeRes.text();
                }
              } catch (e) {
                console.error("Failed to fetch readme for", repo.name);
              }
              
              return {
                id: repo.id,
                name: repo.name,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                html_url: repo.html_url,
                homepage: repo.homepage,
                topics: repo.topics || [],
                language: repo.language,
                readme: readme,
              };
            })
          );
          
          setRepos(reposWithReadmes);
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
          <div className="animate-pulse space-y-24">
            <div className="h-[400px] bg-neutral-900 rounded-lg border border-neutral-800" />
            <div className="h-[400px] bg-neutral-900 rounded-lg border border-neutral-800" />
          </div>
        ) : (
          repos.map((repo, index) => (
            <div key={repo.id} className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Title & Stats */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full sticky top-32">
                  <div>
                    <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">
                      Featured Engineering / {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-8 break-words">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                  </div>

                  <div className="font-mono text-sm text-neutral-400 space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent"/> 
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4"/> 
                        {repo.forks_count}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {repo.language && (
                        <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics.map((tag) => (
                        <span key={tag} className="border border-neutral-800 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-neutral-900 flex gap-8 flex-wrap">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-optic-white transition-colors uppercase tracking-widest text-xs">
                          View Live <ArrowUpRight className="w-4 h-4"/>
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-optic-white transition-colors uppercase tracking-widest text-xs">
                        Source Code <Github className="w-4 h-4"/>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Readme Content */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="bg-neutral-900 p-8 md:p-12 font-mono text-sm text-neutral-300 leading-relaxed border border-neutral-800 relative overflow-hidden max-h-[600px] overflow-y-auto custom-scrollbar">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                      <Github className="w-24 h-24" />
                    </div>
                    <p className="text-optic-white mb-6 uppercase tracking-widest border-b border-neutral-800 pb-4 inline-block">README.md</p>
                    
                    <div className="prose prose-invert prose-sm prose-neutral max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-a:text-accent prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-800">
                      {repo.readme ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {repo.readme}
                        </ReactMarkdown>
                      ) : (
                        <p className="italic text-neutral-500">No README provided for this repository.</p>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))
        )}

        {!loading && repos.length > 0 && (
          <div className="flex justify-end pt-12">
            <Link 
              href="/projects" 
              className="flex items-center gap-4 text-optic-white hover:text-accent transition-colors font-mono uppercase tracking-widest text-sm group"
            >
              View All Projects 
              <span className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-accent transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        )}

        {/* Project 2 & 3: Cinema // Brutalist Grid */}
        <div className="border-t border-neutral-900 pt-24 mt-24">
          <div className="mb-20">
            <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Featured Cinema</p>
            <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none max-w-2xl">
              Non-Verbal <br/> Emotional Journeys
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

