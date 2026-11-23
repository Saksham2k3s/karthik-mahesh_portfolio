export const site = {
  name: "Karthik Thyloor Mahesh",
  initials: "KM",
  title: "Python Full-Stack Developer",
  location: "Athlone, Ireland",
  status: "Open to opportunities",
  email: "karthiktm168@gmail.com",
  phone: "+353 894175038",
  linkedin: "https://www.linkedin.com/in/karthik-thyloor-mahesh-840421435/",
  linkedinHandle: "/in/karthik-thyloor-mahesh",
  portrait: "/image.png",
  summary:
    "Python Full-Stack Developer with 2 years of experience building web applications, REST APIs, and managing AWS deployments. Holds an MSc in Software Design with Cloud Native Computing and AWS Certified Solutions Architect – Associate certification.",
  highlights: [
    { label: "Experience", value: "2+ years" },
    { label: "Focus", value: "Python & AWS" },
    { label: "Credentials", value: "AWS SAA-C03" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    title: "Assistant Manager",
    company: "MrPrice Branded Bargains",
    period: "Nov 2024 – Present",
    highlights: [
      "Promoted to Assistant Manager within 9 months at MrPrice Branded Bargains, taking on increased responsibility for daily retail operations",
      "Oversaw staff schedules and inventory at a retail store serving over 3,000 customers weekly, supporting daily operations",
      "Managed reporting and compliance, resolving escalated operational issues as primary contact during Store Manager absences",
    ],
  },
  {
    title: "Python Full-Stack Developer",
    company: "Vitra Facade Services",
    period: "Apr 2022 – Aug 2024",
    highlights: [
      "Progressed from Python Developer Intern to full-time Python Full-Stack Developer over 18 months, assuming broader application delivery responsibilities",
      "Developed Python full-stack web applications integrating REST APIs and databases for internal enterprise users to meet business needs",
      "Deployed and managed AWS infrastructure for websites and applications, investigating functionality and integration issues to support maintenance",
    ],
  },
];

export const projects = [
  {
    title: "Serverless Cloud Infrastructure for AI Inference Pipelines",
    subtitle: "MSc Dissertation, TUS Athlone",
    period: "2024 – 2025",
    image: "/project-image.png",
    description:
      "Deployed a three-stage serverless inference pipeline using AWS Lambda, Knative/Kubernetes, and distributed Python services with S3 and DynamoDB to benchmark AI workloads by weight class.",
    highlights: [
      "Deployed a three-stage inference pipeline using AWS Lambda, Knative/Kubernetes and distributed Python services with S3 and DynamoDB to benchmark AI workloads by weight class",
      "Developed ADAMANT/CADMANT anomaly-detection logic, achieving over 90% accuracy with under 5% latency overhead and reducing false positives by 40%",
      "Analysed serverless platform performance, concurrency and cost using Prometheus, Grafana and CloudWatch monitoring to inform platform-selection recommendations",
    ],
    tags: [
      "AWS Lambda",
      "Knative",
      "Kubernetes",
      "Docker",
      "AWS S3",
      "DynamoDB",
      "Python",
      "Prometheus",
      "Grafana",
      "CloudWatch",
    ],
  },
  {
    title: "Cloud-Native Collaborative Video Editing Platform",
    subtitle: "Distributed Systems Research Project, TUS Athlone",
    period: "2024 – 2025",
    image: "/project-image.png",
    description:
      "Architected a three-layer collaborative video-editing application with React, Rust microservices, S3 versioning, and DynamoDB for version-controlled storage and REST-based rollback.",
    highlights: [
      "Architected a three-layer video-editing application with React, Rust microservices, S3 versioning and DynamoDB for version-controlled storage and REST-based rollback",
      "Integrated REST APIs, WebSockets and CRDT concepts across distributed components to enable collaborative video-editing workflows",
      "Load-tested five components at up to 100 simulated concurrent users, identifying the primary performance bottleneck and using results to guide improvements",
    ],
    tags: [
      "React",
      "Rust",
      "AWS S3",
      "DynamoDB",
      "AWS Lambda",
      "Docker",
      "REST APIs",
      "WebSockets",
      "CRDTs",
    ],
  },
];

export const skillCategories = [
  {
    title: "Programming & Web",
    skills: [
      "Python",
      "JavaScript",
      "PHP",
      "Rust (Basics)",
      "React",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "API Debugging",
    ],
  },
  {
    title: "AWS & Cloud-Native",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "CloudWatch",
      "Serverless Architectures",
      "Docker",
      "Kubernetes",
      "Knative",
    ],
  },
  {
    title: "Databases, DevOps & Tools",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Git / GitHub",
      "CI/CD Fundamentals",
      "Linux (Ubuntu, Amazon Linux)",
      "Postman",
    ],
  },
];

export const education = [
  {
    degree: "MSc Software Design with Cloud Native Computing",
    school: "Technological University of the Shannon (TUS)",
    details: "Athlone, Ireland",
    period: "Sep 2024 – Oct 2025",
  },
  {
    degree: "BE Electronics and Communication Engineering",
    school: "Global Academy of Technology",
    details: "Bengaluru, India",
    period: "Jan 2020 – Sep 2023",
  },
];

export const certificates = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
    description: "Comprehensive validation covering resilient, high-performing, secure, and cost-optimized AWS architectures (2026).",
  },
  {
    id: "cert-2",
    title: "AWS Certified Cloud Practitioner",
    description: "Foundational cloud fluency, AWS core services, cloud security, architecture, pricing, and support models (2025).",
  },
  {
    id: "cert-3",
    title: "Cloud Fundamentals - Hands-on Labs",
    description: "Practical hands-on lab deployments across EC2 compute, S3 storage, IAM security, VPC networking, and Lambda.",
  },
  {
    id: "cert-4",
    title: "Cloud-Native Infrastructure & DevOps",
    description: "Hands-on implementation of Docker containers, Kubernetes orchestration, Knative serverless, and CI/CD automation.",
  },
];
