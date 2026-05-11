'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, GitFork, Star, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

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

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllGitHubProjects() {
      try {
        // Fetch up to 100 recent projects
        const response = await fetch('https://api.github.com/users/SuryanshSwarn09/repos?sort=updated&per_page=100');
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
        console.error("Failed to fetch GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAllGitHubProjects();
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="min-h-screen bg-primary py-32 px-4 md:px-12 lg:px-24">
        
        {/* Header / Navigation */}
        <div className="mb-24 flex flex-col items-start border-b border-neutral-900 pb-12">
          <Link 
            href="/" 
            className="flex items-center gap-4 text-neutral-500 hover:text-optic-white transition-colors font-mono uppercase tracking-widest text-xs mb-12 group"
          >
            <span className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-optic-white transition-colors">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            </span>
            Return to Base
          </Link>

          <div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mix-blend-difference mb-4">
              All Archives
            </h1>
            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              [Engineering_Log] Complete repository telemetry from SuryanshSwarn09.
            </p>
          </div>
        </div>

        <div className="space-y-48">
          {/* Dynamic Engineering Projects */}
          {loading ? (
            <div className="animate-pulse space-y-24">
              <div className="h-[400px] bg-neutral-900 rounded-lg border border-neutral-800" />
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
                        Archive / {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none mb-8 break-words">
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
        </div>
      </main>
    </SmoothScroll>
  );
}
