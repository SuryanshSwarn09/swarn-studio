'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'internships', label: 'Internship & Contributions' },
  { id: 'studies', label: 'Studies' },
  { id: 'skills', label: 'Technical skills' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'volunteer', label: 'Volunteer Work' },
  { id: 'philosophy', label: 'Philosophy & Values' },
  { id: 'learning', label: 'Currently Learning' },
];

export function AboutSidebar() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-32 hidden lg:block">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollTo(section.id)}
              className={`text-left text-sm transition-all duration-300 w-full pl-4 border-l-2 ${
                activeSection === section.id
                  ? 'border-accent text-optic-white font-medium shadow-[inset_0_0_20px_rgba(251,70,13,0.1)]'
                  : 'border-white/5 text-neutral-500 hover:text-neutral-300 hover:border-white/20'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
