import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import { ImageCarousel } from '@/components/image-carousel';
import { RevealText } from '@/components/reveal-text';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all known projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary pt-32 pb-32 px-4 md:px-12 lg:px-24">
      
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <Link 
          href="/reels" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Reels
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Side: Mockups */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 shadow-2xl relative">
            <ImageCarousel images={project.mockups} />
          </div>
          
          {/* Mockup Grid */}
          <div className="grid grid-cols-2 gap-4">
            {project.mockups.map((img, i) => (
               <div key={i} className="aspect-[4/3] relative rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors">
                  <img src={img} alt={`Detail ${i}`} className="object-cover w-full h-full" />
               </div>
            ))}
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="sticky top-32">
            <p className="font-mono text-accent text-xs uppercase tracking-widest mb-4">
              Project / {project.year}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
              <RevealText text={project.title} />
            </h1>
            
            <p className="text-neutral-400 font-light text-lg mb-12 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="mb-12">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-800 pb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-neutral-800">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-white text-black hover:bg-neutral-200 transition-colors h-14 flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-widest text-sm"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.sourceUrl && (
                <a 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors h-14 flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-widest text-sm"
                >
                  Source <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
