import { EngineSection } from '@/components/engine-section';
import { HeroSection } from '@/components/hero-section';
import { VisitorCounter } from '@/components/visitor-counter';

export default function Page() {
  return (
    <main className="min-h-screen bg-primary pb-24">
      <HeroSection />
      <EngineSection />
      <VisitorCounter />
    </main>
  );
}
