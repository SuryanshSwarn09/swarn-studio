import { AboutSection } from '@/components/about-section';
import { CustomCursor } from '@/components/custom-cursor';
import { EngineSection } from '@/components/engine-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SmoothScroll } from '@/components/smooth-scroll';
import { TimelineSection } from '@/components/timeline-section';

export default function Page() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="min-h-screen bg-primary">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EngineSection />
        <TimelineSection />
      </main>
    </SmoothScroll>
  );
}
