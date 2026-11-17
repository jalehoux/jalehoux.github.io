// Single source for personal details used across the site.
export const site = {
  name: 'Jacob Lehoux',
  role: 'Full-stack software engineer',
  location: 'Portsmouth, NH',
  email: 'jalehoux@gmail.com',
  github: 'https://github.com/jalehoux',
  linkedin: 'https://www.linkedin.com/in/jacoblehoux/',
  resume: '/resume.pdf',
  description:
    'Full-stack software engineer with 10 years of experience building event-driven systems, internal platforms and AI-powered products.',
};

export const experience = [
  {
    company: 'Wayfair',
    title: 'Software Engineer', // TODO(jacob): exact title / level
    period: '2019 — Present',
    blurb:
      'Greenfield async order pipelines on Kafka and GCP, internal scheduling and logistics tooling, and AI-assisted engineering workflows.',
  },
  {
    company: 'Prime Buchholz',
    title: 'Frontend Engineer',
    period: '2016 — 2019',
    blurb: 'Client-facing web applications for an institutional investment consulting firm.', // TODO(jacob): confirm
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['React', 'React Native / Expo', 'Astro'] },
  { group: 'Backend & data', items: ['FastAPI', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'Celery'] },
  { group: 'Cloud & tooling', items: ['GCP', 'Docker', 'GitHub Actions', 'Supabase', 'Firebase'] },
  { group: 'AI', items: ['Claude API', 'Claude Code', 'MCP', 'YOLOv8', 'OpenCV'] },
];
