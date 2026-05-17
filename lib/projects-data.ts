export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  mockups: string[];
  liveUrl?: string;
  sourceUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Disaster Map',
    slug: 'disaster-map-nasa-eonet',
    shortDescription: 'A NASA EONET v3 Interactive Mapping Console driven by a pure aerospace styling matrix.',
    longDescription: 'A high-performance geospatial interface built to visualize real-time NASA EONET satellite streams. Features custom map clustering with Leaflet, responsive conditional rendering for empty states, and a progressive web app (PWA) architecture. Engineered over a one-month sprint with a strict focus on usability and data presentation.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'EONET API', 'JavaScript'],
    mockups: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
    ],
    liveUrl: 'https://disaster-map-nasa-eonet.vercel.app/',
    sourceUrl: 'https://github.com/SuryanshSwarn09/Disaster-map-NASA-EONET',
    year: '2026',
  },
  {
    id: '02',
    title: 'Markdown LaTeX Generator',
    slug: 'markdown-pdf',
    shortDescription: 'A minimal web app to preview Markdown and LaTeX math instantly with PDF export.',
    longDescription: 'An AI-formatting sanitizer and real-time markdown editor. Features live rendering of KaTeX math, automatic syntax highlighting with highlight.js, a smart insertion toolbar, and optimized @media print stylesheets for perfect PDF document saving. Wrapped in a Liquid Glass UI with persistent Light/Dark modes.',
    techStack: ['React', 'Vite', 'marked.js', 'highlight.js', 'KaTeX'],
    mockups: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    ],
    liveUrl: 'https://markdown-pdf-self.vercel.app/',
    sourceUrl: 'https://github.com/SuryanshSwarn09/markdown-pdf',
    year: '2026',
  },
  {
    id: '03',
    title: 'Eat & Park Management',
    slug: 'eat-and-park-management-webapp',
    shortDescription: 'An integrated management platform for restaurant dining and parking workflows.',
    longDescription: 'A full-stack web application designed to streamline the operations of combined dining and parking facilities. Features integration with the Gemini API via Google AI Studio for smart management capabilities and automated workflows.',
    techStack: ['Next.js', 'React', 'Node.js', 'Gemini API', 'Tailwind CSS'],
    mockups: [
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop',
    ],
    sourceUrl: 'https://github.com/SuryanshSwarn09/eat-and-park-management-webapp',
    year: '2026',
  },
];
