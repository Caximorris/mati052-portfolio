export const personalInfo = {
  name: 'Matias Tamagni',
  title: 'Full-Stack Software Engineer',
  email: 'mjtamagni@hotmail.com',
  phone: '+34 644 599 995',
  website: 'mati052.com',
  github: 'https://github.com/Caximorris',
  linkedin: 'https://linkedin.com/in/matias-tamagni',
  summary: 'Builds and ships production systems across two stacks — TypeScript/Node.js and C#/.NET. Currently maintaining POS software used in live retail environments while completing a Computer Engineering degree, with projects spanning SaaS, REST APIs, CI/CD pipelines and algorithmic systems.',
}

export const roles = [
  'Full-Stack Software Engineer',
  'TypeScript / Node.js Developer',
  'C# / .NET Developer',
  'Computer Engineering Student',
]

export const skills = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'C#', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Visual Basic', category: 'Languages' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'ASP.NET Core', category: 'Backend' },
  { name: 'REST API Design', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Backend' },
  { name: 'Entity Framework Core', category: 'Backend' },
  { name: 'SignalR', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Blazor WebAssembly', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Responsive Design', category: 'Frontend' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'AWS Amplify', category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps' },
  { name: 'Git', category: 'Cloud & DevOps' },
  { name: 'Render', category: 'Cloud & DevOps' },
  { name: 'Railway', category: 'Cloud & DevOps' },
  { name: 'Azure Static Web Apps', category: 'Cloud & DevOps' },
  { name: 'Agile', category: 'Practices' },
  { name: 'Scrum', category: 'Practices' },
  { name: 'Unit Testing', category: 'Practices' },
  { name: 'CI/CD', category: 'Practices' },
  { name: 'Code Review', category: 'Practices' },
  { name: 'Technical Documentation', category: 'Practices' },
]

export const experience = [
  {
    company: 'Cuiner',
    location: 'Mallorca, Spain',
    role: 'Application Support & Software Technician',
    period: 'Feb 2026 – Present',
    bullets: [
      'Reduced manual effort in operational workflows by building internal automation tools in Visual Basic and SQL, enabling the team to handle POS configuration tasks faster across production environments.',
      'Improved system reliability by diagnosing and resolving software issues in business-critical systems, applying structured root-cause analysis and implementing corrective solutions with minimal service disruption.',
      'Collaborated cross-functionally with technical and operational teams in a Scrum-based environment to prioritize and deliver improvements to internal tooling; participated in code review processes for automation scripts.',
    ],
  },
  {
    company: 'K-Tuin',
    location: 'Mallorca, Spain',
    role: 'Apple Repair Technician',
    period: 'Jan 2025 – Nov 2025',
    bullets: [
      'Handled structured incident diagnosis and systematic problem-solving across Apple hardware and software in a high-volume technical environment.',
      'Maintained SLA compliance while diagnosing and resolving software, firmware and hardware issues on Apple devices.',
      'Used official diagnostic platforms and technical documentation to follow structured troubleshooting procedures.',
    ],
  },
  {
    company: 'ANOVO',
    location: 'Mallorca, Spain',
    role: 'Repair Technician',
    period: 'Aug 2024 – Jan 2025',
    bullets: [
      'Performed OS deployment, configuration and troubleshooting.',
      'Diagnosed technical issues using structured testing procedures.',
    ],
  },
  {
    company: 'MediaMarkt',
    location: 'Mallorca, Spain',
    role: 'Repair Technician',
    period: 'Aug 2023 – Jan 2024',
    bullets: [
      'Diagnosed software and hardware issues across consumer devices.',
      'Performed component replacement and functional validation.',
    ],
  },
]

export const education = [
  {
    school: 'UOC — Universitat Oberta de Catalunya',
    degree: 'B.Sc. Computer Engineering — In Progress',
    period: '2024 – Present (expected 2028)',
    location: 'Online, Spain',
    highlights: [
      'Relevant coursework: Algorithms, Operating Systems, Databases, Software Engineering, Networks.',
      'Applying academic concepts directly in professional work at Cuiner.',
    ],
  },
  {
    school: 'Udemy — Colt Steele',
    degree: 'The Web Developer Bootcamp',
    period: '2023',
    location: 'Online',
    highlights: [
      'Full-stack curriculum covering HTML, CSS, JavaScript, Node.js, Express, MongoDB and REST APIs.',
      'Built multiple projects end-to-end including authentication flows and database-backed applications.',
    ],
  },
]

export const projects = [
  {
    name: 'Planora',
    subtitle: 'Task Management SaaS',
    url: 'https://planora.website',
    github: 'https://github.com/Caximorris/planora',
    bullets: [
      'Full-stack SaaS task manager built with ASP.NET Core 10 Web API, Blazor WebAssembly, PostgreSQL and Entity Framework Core.',
      'JWT authentication, role-based access control and real-time board updates via SignalR, with unit tests covering core domain logic.',
      'Deployed via GitHub Actions CI/CD — backend on Azure Container Apps, frontend on Azure Static Web Apps, database on Neon.',
    ],
    stack: ['ASP.NET Core', 'Blazor', 'PostgreSQL', 'SignalR', 'EF Core'],
    featured: true,
  },
  {
    name: 'MatiTradingBot',
    subtitle: 'Algorithmic Trading Lab',
    github: 'https://github.com/Caximorris/MatiTradingBot',
    bullets: [
      'Python 3.12 backtesting and live-paper-trading system for BTC strategies against OKX, with 179 passing tests.',
      'Strict guards against lookahead bias and overfitting; Decimal arithmetic throughout for financial precision.',
      'Adapter-pattern exchange abstraction runs identical strategy code against historical data or live OKX paper trading.',
      'Live execution deployed to a GCP VM with real-time Telegram reporting.',
    ],
    stack: ['Python', 'OKX', 'GCP', 'Telegram', 'Pytest'],
    featured: true,
  },
  {
    name: 'Natural Parks',
    subtitle: 'Full-Stack Web App',
    url: 'https://naturalparks.onrender.com',
    github: 'https://github.com/Caximorris/naturalparks',
    bullets: [
      'Full-stack web application with user authentication and role-based access control.',
      'Reviews, image uploads and REST APIs backed by MongoDB.',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],
    featured: true,
  },
  {
    name: 'Personal Portfolio',
    subtitle: 'This Website',
    url: 'https://mati052.com',
    github: 'https://github.com/Caximorris/mati052-portfolio',
    bullets: [
      'Personal portfolio and project showcase built with React 19, TypeScript, Framer Motion and Vite.',
      'Deployed on AWS Amplify with automatic CI/CD from GitHub.',
    ],
    stack: ['React', 'TypeScript', 'Framer Motion', 'AWS Amplify'],
    featured: false,
  },
]
