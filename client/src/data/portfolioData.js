export const personalInfo = {
  name: "ABIRAJ K",
  role: "Software Engineer",
  secondaryHeadline: "Backend • Cloud • AI",
  shortIntro: "I'm a Computer Science student and aspiring Software Engineer focused on building scalable backend systems, cloud applications, and AI-powered products.",
  aboutDescription: [
    "I am a Computer Science Engineering student at Rathinam Technical Campus with a deep passion for building high-performance backend systems, distributed cloud architectures, and intelligent software products.",
    "My focus lies in translating complex algorithmic problems into robust, production-grade applications. I enjoy architecting RESTful services, database schemas, and microservice workflows that emphasize scalability, data integrity, and low-latency execution.",
    "Driven by curiosity and engineering rigor, I continually explore modern cloud computing paradigms, DevOps automation, and AI agent frameworks to solve meaningful, real-world problems."
  ],
  education: {
    institution: "Rathinam Technical Campus",
    degree: "B.E. Computer Science and Engineering",
    status: "Current Student",
    location: "Coimbatore, India",
    highlight: "Focused on Core Computer Science, Distributed Systems & Cloud Architectures"
  },
  careerInterests: [
    "Software Engineering",
    "Backend Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "System Design"
  ],
  socialLinks: {
    github: "https://github.com/ABIRAJKUMAR",
    linkedin: "https://linkedin.com/in/abiraj-k",
    email: "abiraj.official@example.com",
    location: "Tamil Nadu, India"
  },
  resumeUrl: "#resume" // Can be linked to /resume.pdf or Google Drive link
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      name: "Programming Languages",
      description: "Core languages used for systems, backend, and algorithmic problem solving",
      skills: [
        { name: "Java", level: "Core / OOP / Collections", icon: "Coffee" },
        { name: "JavaScript", level: "ES6+ / Async / Runtime", icon: "FileCode2" },
        { name: "Python", level: "Scripting / AI / Automation", icon: "Terminal" }
      ]
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Server architectures, REST endpoints, and middleware systems",
      skills: [
        { name: "Node.js", level: "Event-driven runtime", icon: "Server" },
        { name: "Express.js", level: "REST API Framework", icon: "Layers" },
        { name: "REST APIs", level: "API Design & Architecture", icon: "Network" }
      ]
    },
    {
      id: "database",
      name: "Databases & Storage",
      description: "Relational & NoSQL database management and indexing",
      skills: [
        { name: "PostgreSQL", level: "Relational / Indexing / SQL", icon: "Database" },
        { name: "Supabase", level: "BaaS / Postgres / Auth", icon: "Sparkles" },
        { name: "MongoDB", level: "NoSQL / Document store", icon: "Boxes" },
        { name: "MySQL", level: "Relational DBMS", icon: "Database" }
      ]
    },
    {
      id: "cloud_devops",
      name: "Cloud & DevOps",
      description: "Deployment, containerization, CI/CD, and infrastructure automation",
      skills: [
        { name: "AWS", level: "Cloud Services & Hosting", icon: "Cloud" },
        { name: "Docker", level: "Containerization & Multi-stage", icon: "Container" },
        { name: "Git", level: "Version Control & Branching", icon: "GitBranch" },
        { name: "GitHub", level: "Collaboration & Actions", icon: "Github" },
        { name: "Jenkins", level: "CI/CD Pipelines", icon: "Cpu" },
        { name: "Ansible", level: "Configuration Management", icon: "Settings2" },
        { name: "Terraform", level: "Infrastructure as Code", icon: "Boxes" },
        { name: "Linux", level: "Shell Scripting / Admin", icon: "Terminal" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Responsive interfaces and client-side state management",
      skills: [
        { name: "React.js", level: "Component Lifecycle & Hooks", icon: "Code2" },
        { name: "Tailwind CSS", level: "Modern Utility-first CSS", icon: "Palette" },
        { name: "HTML5", level: "Semantic Markup & SEO", icon: "Globe" },
        { name: "CSS3", level: "Responsive Layouts & Flex/Grid", icon: "Layout" }
      ]
    },
    {
      id: "cs_fundamentals",
      name: "Computer Science Core",
      description: "Fundamental CS theory and systems engineering concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: "Time & Space Complexity", icon: "Binary" },
        { name: "OOP", level: "Design Patterns & SOLID", icon: "Boxes" },
        { name: "DBMS", level: "Transactions & ACID Properties", icon: "Database" },
        { name: "Operating Systems", level: "Processes, Threads & Memory", icon: "Cpu" },
        { name: "Computer Networks", level: "TCP/IP, HTTP, WebSockets", icon: "Network" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "uzhavan-2-doorstep",
    title: "Uzhavan 2 Doorstep",
    tagline: "AgTech marketplace connecting farmers directly with customers",
    description: "An AgTech marketplace connecting farmers directly with customers and improving agricultural product distribution.",
    longDescription: "Uzhavan 2 Doorstep is an end-to-end digital marketplace engineered to eliminate middlemen in the agricultural supply chain. It empowers local farmers with transparent real-time market rates, AI-assisted crop disease diagnosis, and streamlined direct-to-consumer order fulfillment workflows.",
    category: "Full Stack / AgTech / AI",
    featured: true,
    accentColor: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    features: [
      "Farmer dashboard with crop inventory management and sales analytics",
      "Live market rate ticker aggregating regional mandi pricing data",
      "AI crop disease scanner for automated leaf pathology detection",
      "Real-time order tracking and dispatch notification system"
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "Cloudinary"
    ],
    links: {
      demo: "https://uzhavan2doorstep.demo", // Editable demo link
      github: "https://github.com/Abiraj-k/uzhavan-2-doorstep", // Editable repo link
    },
    architectureNote: "Built with a responsive React frontend connected to Supabase PostgreSQL with secure Row Level Security policies, automated asset uploads via Cloudinary, and lightweight Node.js background processors."
  },
  {
    id: "hackup",
    title: "HackUp",
    tagline: "Opportunity discovery platform for Tier 2 & 3 college innovators",
    description: "A platform designed to help Tier 2 and Tier 3 college students discover hackathons, technical events, and opportunities.",
    longDescription: "HackUp bridges the information gap for engineering students outside Tier 1 institutions. It aggregates hackathons, technical symposiums, research grants, and internship drives into a single unified portal with personalized deadline tracking and team formation capabilities.",
    category: "Web Platform / Education",
    featured: true,
    accentColor: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.2)",
    features: [
      "Curated hackathon and technical event discovery engine",
      "Event listings with tag-based filtering and calendar reminders",
      "Student-focused opportunities hub (grants, mentorships, webinars)",
      "Push and email notifications for approaching registration deadlines"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    links: {
      demo: "https://hackup-platform.demo", // Editable demo link
      github: "https://github.com/Abiraj-k/hackup", // Editable repo link
    },
    architectureNote: "Utilizes Next.js and TypeScript for type-safe rendering, backed by Express.js REST APIs with MongoDB indexing for ultra-fast query performance across thousands of events."
  },
  {
    id: "verdix",
    title: "Verdix",
    tagline: "Autonomous multi-step AI agent skill demo for intelligent decision-making",
    description: "A reusable AI agent skill demo developed for an agent-focused hackathon.",
    longDescription: "Verdix is an autonomous agentic framework designed to ingest unstructured documents, perform contextual vector searches, evaluate factual relevance, detect logical conflicts across sources, and formulate transparent multi-step decisions with audit traces.",
    category: "Artificial Intelligence / Agents",
    featured: true,
    accentColor: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.2)",
    features: [
      "Document ingestion and semantic vector search pipeline",
      "Dynamic relevance evaluation engine with cross-referencing",
      "Conflict detection module for contradictory source statements",
      "Autonomous agent decision making with verifiable reasoning logs"
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Supabase"
    ],
    links: {
      demo: "https://verdix-agent.demo", // Editable demo link
      github: "https://github.com/Abiraj-k/verdix", // Editable repo link
    },
    architectureNote: "Implements deterministic validation chains on top of LLM outputs, utilizing Supabase pgvector for high-dimensional document embeddings and Redux for real-time agent thought streaming."
  }
];

// NOTE FOR USER: The entries below are editable placeholders representing genuine milestone categories.
// You can update dates, titles, and descriptions as you achieve new milestones!
export const experienceData = [
  {
    category: "Hackathons",
    title: "Agentic AI Hackathon Participant / Builder",
    organization: "Technical Innovation Challenge",
    period: "2024 - Present",
    badge: "Hackathon",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    description: "Designed and implemented Verdix, a modular AI agent framework showcasing autonomous document verification, conflict detection, and multi-step reasoning."
  },
  {
    category: "Technical Events",
    title: "AgTech Innovation Showcase",
    organization: "Campus Tech Symposium",
    period: "2024",
    badge: "Project Showcase",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description: "Presented the Uzhavan 2 Doorstep platform, demonstrating live market analytics and AI crop disease scanning architectures to academic peers and industry mentors."
  },
  {
    category: "Internships",
    title: "Software Engineering Intern (Incoming / Target)",
    organization: "[Editable: Target Organization / Company]",
    period: "[Editable: e.g. Summer 2025]",
    badge: "Internship",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    description: "Focused on contributing to distributed backend microservices, optimizing database queries, and participating in agile software development lifecycles."
  },
  {
    category: "Certifications",
    title: "Cloud & Backend Development Practice",
    organization: "Independent Technical Mastery",
    period: "Ongoing",
    badge: "Specialization",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    description: "Actively solving Data Structures & Algorithms problems, building cloud infrastructure automation with Docker & Terraform, and mastering REST API design."
  }
];

export const educationData = {
  institution: "Rathinam Technical Campus",
  degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
  status: "Current Student",
  location: "Coimbatore, Tamil Nadu",
  duration: "Undergraduate Program",
  description: "Rigorous academic training in core computer science disciplines including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
  highlights: [
    "Active contributor to technical clubs and student developer initiatives",
    "Focus on backend architecture, cloud infrastructure, and AI engineering",
    "Hands-on project work in full-stack web applications and systems programming"
  ]
};
