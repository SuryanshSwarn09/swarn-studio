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
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixfVAJAlcj6kGAFWkbMvgLjRuW0WU21g5-A6CMruvAFFLO6bC7kEt0RZ9hEygth5I3W9nZ9YGDbabtlSyBR54jf26kRXXlo9nlaWDz9S5p7DJanKgG9CPzhnp9eDTdmaxb4tjMH5h8ubHtbAdwqPKllyIfAQl6_23pqJ6_ZDAwbIW2vY-daVkI-2q-TDc/s2000/disaster-map-mockup%20(1).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvdxhx4RDF3DAU_6a7M3aHucYuIKlt6T5ayramrkKSZaFzqkfPVwJ1dUfziLdBtacA4-aWXcTXYKnU4MuF9PHXZErlKPxUZL0VGikRJMAQP-Oq7MnKAQCpKd08Z9AZzr-iuMsiVbaVkXo7eKkdeDqTJOwa-hErdMkpV3zjjAD9CQRhpYTOa3hpyIXKW2s/s2000/disaster-map-mockup%20(2).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF6Qv15kz-U2s_fYUQ7m-f3s7JK_U40idPtcBozuAju3nb1zpWRFvXkIPfpM3MJTbeeraFCiXm-urZA7JkSUCq7TZmHF9rLcJUxebx1zPg6GcYWILXqpudDbZTVRjSMNx3eLx8Up-CcPl2jatqJ5bQoIrZfdBrIva0ASsf96u_ODCJ-HhuKKeTcGOBNgI/s2000/disaster-map-mockup%20(3).png',
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
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDlqyxdNt54m3J5Im5_mDF3YTfFYu_jZY7rnfwLQkoz2iNXfP0iB3v6jHKQ8qFyoNFQraSmw02R3mMZChgRd3UYfB-IcpbfN2BFZ7t2YaHBnkACip4C4M8inkwbWVUtoRAUjEVWjLKgkk_aWoyPbh3fFbRB3EOxqelneySZEDmOcC3oKxyka8DpcJlruA/s2796/Markdown-pdf-phone%20(1).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvGFI7-9F-nNViL8TS6Bmdza0xtzIoGjc-ny8799nbS9p-1WAKh-7j-9lmG0ZPVDQGIPyrx_5PFlIYI9oFHi2HiS8C-aZKzUow6IdPjsooqmPDLr30JyWfMcK5FyqV5sDhwoPcqKzlfuFS-0m5z8tTULeWhq7-o-74VCAeXkVYlPpXHtOHmyQLnlyxOns/s3096/Markdown-pdf-phone%20(2).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGFM94XqQc8MhG4BoDVyy63fFzLxoPzErUVbQkwPt2Wm5UqIV0zevvmtKzW0wk5GQVkbr5up4B1n-Auu0UXSjY-7dUoG6zfBuc4PvKmZg7jrPTFHczV8la_vMYJe5lZesV5YtEGSPFCAjfYLkSEuzXnzZVmud7-pasG_9oFRYJFOy_dXaBqkvcFwBZWsc/s2796/Markdown-pdf-phone%20(3).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUeuvFK9-BxtTH-4dmGYJN4904ZWDIj-i02_liCkNy-MciAdfFIptEnCj02D1mDlChtCfLUB3pmDNh7Ld4xm-ut7-ZjCIrlk7MgCvZCSE8En699oLAKV4GLZK7EtnptvMAlsbVwevokdjcGEwnX39PiutcBXYS2fsOG3a0mrwwILW-r06nK7HyIsVe4qk/s2359/Markdown-pdf-samsung%20(1).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVmErySZxXLfwm_gLaJiMQL7RWBrhTrkfAhcwCSUto3slQQrGtCIFi-Q-2fEnJDDzhJqzsFvLHYUa00Cwo4Tw5t_PkDYhyP9ZbywRgV0i_Rl6eFNiC4hkPj9mX_9m293-MKMDn3YocxTxATxXCGxS17qvGBkoiDRt0kJ867cl6XOHyksqaEZnp-TnJz1o/s2505/Markdown-pdf-samsung%20(2).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEionBE3ejTbEvgebqLTqTrp8TmUMMxJPKtmvJ3YQfmdWVges6yfgpaqJqqLrxPbx_9QjTlw-7vtTp72O8untSqMISjwV7qU7PR9DMuoTMZY8FCdf0Ft_KvJylZ9B1HhPeG6NASvnDqA0W0hJsmBcV7pdMH-QFefjT_hJuk1UvHYh_59N1C6f7AW58FfZ5o/s2359/Markdown-pdf-samsung%20(3).png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2lw-aRPnBPp3v7vTIBw-cbcy6CBdQk9l2cxoUQby9-uP2LsKRjO6TzofXTWD_a1wXUtLyfspwUiYw3DSyKrqGcQ6XFZf1XnSfH3dWdXkO1yAeZsN4sVmxSWJkBgL6aZ0njpPhiqkRl4kO4L_jZPyIlCuMa-QIWFwh2BbWGNGfcuP5dPRiCNpJTF4Y9jQ/s2509/Markdown-pdf-samsung%20(4).png',
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
