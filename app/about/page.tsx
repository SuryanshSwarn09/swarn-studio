import { AboutSidebar } from '@/components/about-sidebar';
import { AboutProfile } from '@/components/about-profile';
import { TimelineSection } from '@/components/timeline-section';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary pb-32 pt-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
        
        {/* Left Sidebar Navigation */}
        <div className="lg:col-span-1 relative">
          <AboutSidebar />
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-3 space-y-24">
          <AboutProfile />

          <section id="internships" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [01_Experience] / Internships & Contributions
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Internship data placeholder
            </div>
          </section>

          <section id="studies" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [02_Education] / Studies
            </h2>
            <div className="-mt-32">
              {/* TimelineSection handles its own padding, but we might need to adjust it later */}
              <TimelineSection />
            </div>
          </section>

          <section id="skills" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [03_Stack] / Technical Skills
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Technical skills placeholder
            </div>
          </section>

          <section id="hobbies" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [04_Personal] / Hobbies
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Hobbies placeholder
            </div>
          </section>

          <section id="certifications" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [05_Credentials] / Certifications
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Certifications placeholder
            </div>
          </section>

          <section id="volunteer" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [06_Community] / Volunteer Work
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Volunteer work placeholder
            </div>
          </section>

          <section id="philosophy" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [07_Mindset] / Philosophy & Values
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Philosophy & values placeholder
            </div>
          </section>

          <section id="learning" className="scroll-mt-32">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
              [08_Growth] / Currently Learning
            </h2>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-neutral-500 font-mono text-sm text-center">
              // Currently learning placeholder
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
