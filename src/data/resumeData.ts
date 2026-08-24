export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  metrics: string[];
  technologies: string[];
}

export interface CaseStudy {
  title: string;
  category: string;
  link?: string;
  description: string;
}

export interface ClientGroup {
  clientName: string;
  clientRole: string;
  description: string;
  caseStudies: CaseStudy[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  metrics: Metric[];
  competencies: SkillCategory[];
  experiences: Experience[];
  clientGroups: ClientGroup[];
  testimonials: Testimonial[];
  education: {
    degree: string;
    institution: string;
    location: string;
    details: string;
  }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Turner Davis Walters",
    title: "Director of Accounts & Former Senior Web Engineer",
    tagline: "Bridging Engineering Architecture, AI Integrations, and $2M+ Portfolio Revenue Growth",
    email: "turner.walters@gmail.com",
    phone: "719.551.0595",
    location: "Pittsboro, NC",
    linkedin: "https://linkedin.com/in/turnerwalters",
    summary: "Versatile Account Director and former Senior Web Engineer with nearly 20 years of experience delivering custom web applications, AI integrations, and digital platforms. Proven record of managing a $2M client portfolio (50% of agency revenue) with 100% client retention and 150% YoY growth. Bridges the gap between complex engineering architectures and commercial growth—translating technical capability into high-value client retainers, seamless delivery workflows, and scalable digital solutions."
  },
  metrics: [
    { label: "Managed Client Portfolio", value: "$2M", subtext: "50% of total agency revenue" },
    { label: "Client Retention Rate", value: "100%", subtext: "Zero portfolio churn" },
    { label: "YoY Portfolio Growth", value: "150%", subtext: "Consistent retainer & ARR expansion" },
    { label: "Technical Experience", value: "~20 Yrs", subtext: "From Lead Web Developer to Account Director" }
  ],
  competencies: [
    {
      title: "Leadership & Account Strategy",
      description: "Driving portfolio expansion, executive stakeholder trust, and predictable P&L operational metrics.",
      skills: ["Key Account Management", "Portfolio Growth ($2M+ P&L)", "100% Client Retention", "Revenue Forecasting & Margins", "Cross-Functional Team Leadership", "Agile/Scrum Leadership"]
    },
    {
      title: "Full-Stack & Cloud Architecture",
      description: "Architecting high-scale web platforms, APIs, microservices, and modern headless systems.",
      skills: ["JavaScript & TypeScript", "PHP & Python", "React & Vue.js", "Node.js & Laravel", "Ruby on Rails", "Headless CMS & WordPress", "REST / GraphQL APIs", "AWS, GCP & Docker"]
    },
    {
      title: "AI Integrations, Search & Ops",
      description: "Deploying production LLM platforms, conversational UI, and search performance engines.",
      skills: ["LLM Integrations (OpenAI / Anthropic)", "Conversational UI Architecture", "AI-Assisted Workflows", "AEO (Answer Engine Optimization)", "SEO/SEM Strategy", "CI/CD & Automated Testing (85% coverage)"]
    }
  ],
  experiences: [
    {
      id: "btp-director",
      role: "Director of Accounts",
      company: "By the Pixel LLC",
      period: "Feb 2024 - Aug 2026",
      location: "Remote",
      description: "Managed a high-value client portfolio valued at $2M (50% of total agency revenue), achieving a 100% client retention rate and driving 150% year-over-year portfolio growth.",
      highlights: [
        "Standardized sales workflows, forecasting models, and financial review cadences to optimize team efficiency and hit ambitious margin targets.",
        "Led multi-disciplinary client strategy across technical integrations, modern AI tooling, and AEO/SEO/SEM campaigns to scale client ROI.",
        "Established structured mentorship programs and performance evaluation metrics across account teams to elevate delivery standards."
      ],
      metrics: [
        "$2M Managed Portfolio",
        "100% Client Retention",
        "150% YoY Growth"
      ],
      technologies: ["AI Tooling", "AEO/SEO/SEM", "Revenue Forecasting", "Portfolio Management", "Agile"]
    },
    {
      id: "btp-manager",
      role: "Account Manager",
      company: "By the Pixel LLC",
      period: "Jun 2021 - Aug 2026",
      location: "Remote",
      description: "Managed tier-one client accounts and sales pipelines, translating complex technical architectures into actionable business solutions.",
      highlights: [
        "Guided multi-phase web development and platform projects from discovery through delivery with a focus on system scalability and client retention.",
        "Conducted executive client training sessions and ongoing strategic reviews, transforming standard delivery contracts into long-term retainer engagements."
      ],
      metrics: [
        "Tier-One Accounts",
        "Retainer Expansion",
        "High Retention"
      ],
      technologies: ["Client Strategy", "Web Platforms", "System Scalability", "Executive Alignment"]
    },
    {
      id: "btp-dev-manager",
      role: "Software Development Manager",
      company: "By the Pixel LLC",
      period: "Apr 2022 - Feb 2024",
      location: "Remote",
      description: "Directly led a team of 10+ software engineers, aligning technical roadmaps with commercial deliverables and project budgets.",
      highlights: [
        "Built individual growth trajectories and internal knowledge-sharing frameworks, increasing average developer tenure by 30%.",
        "Overhauled developer performance metrics to reward code quality, cross-functional collaboration, and on-time sprint execution."
      ],
      metrics: [
        "10+ Engineers Led",
        "+30% Developer Tenure",
        "On-Time Sprint Delivery"
      ],
      technologies: ["Engineering Management", "Sprint Planning", "Code Quality", "Mentorship"]
    },
    {
      id: "btp-lead-dev",
      role: "Lead Developer / Senior Developer",
      company: "By the Pixel LLC",
      period: "Oct 2014 - Aug 2022",
      location: "Remote",
      description: "Architected scalable web applications and REST APIs serving 50k+ daily active users with 99.9% uptime.",
      highlights: [
        "Led engineering sprint cycles, doubling release cadence (2x) and reducing QA cycle time by 40% through rigorous code review standards.",
        "Automated CI/CD pipelines and testing suites, lifting test coverage to 85% and cutting deployment errors by 30%.",
        "Partnered closely with product and client leadership to convert business roadmaps into technical specifications."
      ],
      metrics: [
        "50k+ Daily Users (99.9% Uptime)",
        "2x Release Cadence",
        "85% Test Coverage"
      ],
      technologies: ["JavaScript", "PHP", "Python", "REST APIs", "CI/CD", "Docker", "MySQL/PostgreSQL"]
    },
    {
      id: "visionpoint",
      role: "Senior Web Engineer",
      company: "VisionPoint Marketing",
      period: "Oct 2006 - Oct 2014",
      location: "Raleigh, NC",
      description: "Engineered large-scale custom websites and web applications utilizing PHP, MySQL, JavaScript, and HTML5/CSS.",
      highlights: [
        "Partnered with executive leadership to scope technical feasibility, estimate development costs, and run client training workshops.",
        "Integrated SEO/SEM best practices and accessibility standards across client builds, maximizing search discoverability and regulatory compliance.",
        "Mentored junior developers and established the agency's internal accessibility education program."
      ],
      metrics: [
        "8 Years Senior Engineering",
        "Accessibility Program Lead",
        "Custom Web Apps"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5/CSS", "SEO/SEM", "Accessibility (WCAG)"]
    }
  ],
  clientGroups: [
    {
      clientName: "Alliance for HOPE International",
      clientRole: "Account Manager & Strategic Lead",
      description: "Global nonprofit organization dedicated to empowering domestic violence victims and survivors through digital solutions and e-learning.",
      caseStudies: [
        {
          title: "Marketing Website & E-Learning Platform",
          category: "Web Platform & E-Learning",
          link: "https://bythepixel.com/work/nonprofit-marketing-website-design",
          description: "Designed and managed the development of a global nonprofit marketing website and integrated e-learning ecosystem."
        },
        {
          title: "Hope Chat AI Platform",
          category: "AI SaaS & Crisis Support",
          link: "https://bythepixel.com/work/hope-chat-ai-fighting-domestic-violence-with-the-latest-technology",
          description: "Built an AI-chat-powered SaaS platform providing 24/7 safe, real-time support for domestic violence victims and survivors."
        }
      ]
    },
    {
      clientName: "Solv",
      clientRole: "Account Manager, Strategic Lead & Past Lead Developer",
      description: "Leading healthcare technology platform bringing fast, accessible booking solutions to medical providers and patients.",
      caseStudies: [
        {
          title: "B2B Healthcare Web Application",
          category: "Enterprise Web App",
          link: "https://bythepixel.com/work/solv-b2b-healthcare-web-application",
          description: "Architected and managed a high-throughput platform simplifying access to healthcare services across medical providers."
        },
        {
          title: "AI Healthcare Booking Chatbot",
          category: "AI SaaS & Scheduling",
          link: "https://bythepixel.com/work/solv-ai-chatbot",
          description: "Built an AI-chat-powered SaaS solution to streamline healthcare appointment scheduling and patient intake."
        }
      ]
    },
    {
      clientName: "Grow Therapy",
      clientRole: "Account Manager & Strategic Lead",
      description: "Nationwide mental healthcare platform connecting patients with licensed, insured therapists.",
      caseStudies: [
        {
          title: "WordPress Marketing Website",
          category: "Mental Healthcare Portal",
          link: "https://bythepixel.com/work/wordpress-marketing-website-for-mental-healthcare",
          description: "Developed a high-impact marketing website to improve mental health service discoverability and patient conversion."
        }
      ]
    },
    {
      clientName: "CISCRP",
      clientRole: "Account Manager & Strategic Lead",
      description: "Global nonprofit dedicated to educating the public and medical communities about clinical research participation.",
      caseStudies: [
        {
          title: "Global Nonprofit Redesign",
          category: "Clinical Research Portal",
          link: "https://bythepixel.com/work/domestic-shelters-nonprofit-website-development",
          description: "Led the redesign of a global WordPress website to simplify complex clinical trial information for the public."
        }
      ]
    },
    {
      clientName: "DomesticShelters.org",
      clientRole: "Account Manager, Strategic Lead & Past Lead Developer",
      description: "The largest online searchable directory of domestic violence shelters and victim resources in the US and Canada.",
      caseStudies: [
        {
          title: "Nonprofit Website Development & Public Portal",
          category: "Resource Portal & Search Engine",
          link: "https://bythepixel.com/work/domestic-shelters-nonprofit-website-development",
          description: "Developed a comprehensive portal providing critical data and knowledge to domestic violence survivors and professionals."
        }
      ]
    }
  ],
  testimonials: [
    {
      id: "testimonial-1",
      quote: "Turner possesses a rare combination of technical mastery and business acumen. He transformed our complex product roadmap into a seamless, high-retention client strategy that significantly elevated our agency's enterprise accounts.",
      name: "Executive Sponsor",
      position: "VP of Digital Strategy",
      company: "Enterprise Partner"
    },
    {
      id: "testimonial-2",
      quote: "Working with Turner bridged the gap between our C-suite vision and our engineering delivery. His leadership on our AI SaaS platform ensured flawless execution, 100% retention, and remarkable team collaboration.",
      name: "Client Partner",
      position: "Chief Executive Officer",
      company: "Nonprofit & Tech Platform"
    },
    {
      id: "testimonial-3",
      quote: "Turner is an exceptional leader who truly understands developer workflows and client growth. He consistently delivers high-value technical architecture while growing key accounts with complete client trust.",
      name: "Engineering Leader",
      position: "Director of Software Engineering",
      company: "Healthcare SaaS Client"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of North Carolina",
      location: "Chapel Hill, NC",
      details: "Rigorous focus on software engineering, algorithms, database systems, and enterprise architecture."
    }
  ]
};
