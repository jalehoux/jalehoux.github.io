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
    title: 'Software Engineer',
    period: '2019 — Present',
    blurb:
      'An event-driven order creation pipeline on Kafka, Python processors streaming warehouse data into GCP, internal scheduling and logistics tooling, and AI-assisted engineering workflows.',
  },
  {
    company: 'Prime Buchholz',
    title: 'Frontend Engineer',
    period: '2016 — 2019',
    blurb:
      'Solo-built a mobile-responsive Vue.js app used by 15+ consultants to write client meeting reports in the field, and a Quick Base system that cut data-entry errors by 30%.',
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['React', 'React Native / Expo', 'Astro'] },
  { group: 'Backend & data', items: ['FastAPI', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'Celery'] },
  { group: 'Cloud & tooling', items: ['GCP', 'Docker', 'GitHub Actions', 'Supabase', 'Firebase'] },
  { group: 'AI', items: ['Claude API', 'Claude Code', 'MCP', 'YOLOv8', 'OpenCV'] },
];
