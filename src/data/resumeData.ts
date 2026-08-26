export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface ExecutiveSnapshotItem {
  label: string;
  value: string;
}

export interface AccordionSkill {
  title: string;
  subSkills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  items: AccordionSkill[];
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
  executiveSnapshot: ExecutiveSnapshotItem[];
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
    name: "Turner Walters",
    title: "Director of Accounts & Senior Web Engineer",
    tagline: "Bridging Client Relationships, Engineering Architecture, AI Integrations, and $2M+ Portfolio Revenue Growth",
    email: "turner.walters@gmail.com",
    phone: "719.551.0595",
    location: "Pittsboro, NC",
    linkedin: "https://linkedin.com/in/turnerwalters",
    summary: "Versatile Account Director and Senior Web Engineer with 20 years of experience delivering custom web applications, AI integrations, and digital platforms. Managed a $2M client portfolio (50% of agency revenue) spanning contract sizes from $3k to $1M+ with 100% client retention and 150% YoY growth. Builds lasting C-suite trust through consultative value expansion, agile resource scaling, flexible billing restructuring, and standardized AI workflows."
  },
  executiveSnapshot: [
    { label: "P&L Portfolio", value: "$2M (50% Agency Rev)" },
    { label: "Client Retention", value: "100% Rate" },
    { label: "Specialization", value: "AI, SaaS, Web Apps, Websites, AEO/SEO/SEM" },
    { label: "Education", value: "B.S. Computer Science" }
  ],
  metrics: [
    { label: "Managed Client Portfolio", value: "$2M", subtext: "50% of total agency revenue" },
    { label: "Client Deal Spectrum", value: "$3k - $1M+", subtext: "From agile builds to enterprise platforms" },
    { label: "Client Retention Rate", value: "100%", subtext: "Zero portfolio churn" },
    { label: "YoY Portfolio Growth", value: "150%", subtext: "Consultative organic retainer expansion" }
  ],
  competencies: [
    {
      title: "Portfolio & Account Growth",
      description: "Managing $2M+ agency P&L, contract spectrums from $3k to $1M+, and C-suite client trust.",
      items: [
        { title: "Consultative Sales & Deal Closure", subSkills: ["$3k-$1M+ Deal Range", "Value-Add Expansion", "No-Pressure Selling"] },
        { title: "Executive Stakeholder Alignment", subSkills: ["VP & C-Suite Partners", "Strategic Reviews", "Long-Term Retainers"] },
        { title: "Contract & Billing Restructuring", subSkills: ["Predictable Billing", "MSA Negotiations", "Relationship Preservation"] },
        { title: "Agile Resource Burst Scaling", subSkills: ["Rapid Resource Mobilization", "Sprint Velocity", "Deadline Delivery"] },
        { title: "HubSpot CRM & Sales Ops", subSkills: ["Pipeline Tracking", "CRM Migration", "Automated Outreach"] }
      ]
    },
    {
      title: "Engineering Leadership & Delivery",
      description: "Directing 10+ software engineers, optimizing sprint cycles, and maintaining high QA standards.",
      items: [
        { title: "Cross-Functional Management", subSkills: ["Engineering Alignment", "Account Managers", "Design Strategy"] },
        { title: "Agile & Scrum Leadership", subSkills: ["Sprint Planning", "Resource Allocation", "Scope Control"] },
        { title: "Engineering Mentorship", subSkills: ["Individual Growth", "Tenure Growth (+30%)", "Knowledge Sharing"] },
        { title: "Release & Code Quality", subSkills: ["2x Release Cadence", "Code Reviews", "QA Cycle -40%"] },
        { title: "DevOps & Test Automation", subSkills: ["CI/CD Pipelines", "Automated Testing", "85% Test Coverage"] }
      ]
    },
    {
      title: "Full-Stack Architecture & Cloud",
      description: "Architecting high-scale web platforms, APIs, microservices, and modern cloud infrastructure.",
      items: [
        { title: "Programming Languages", subSkills: ["JavaScript", "TypeScript", "PHP", "Python", "Ruby"] },
        { title: "Frontend & Web Frameworks", subSkills: ["React", "Vue.js", "HTML5", "CSS3 / Tailwind"] },
        { title: "Backend Runtimes & Frameworks", subSkills: ["Node.js", "Laravel", "Ruby on Rails"] },
        { title: "API & Microservices", subSkills: ["REST APIs", "GraphQL", "Microservices", "Webhooks"] },
        { title: "Cloud & Infrastructure", subSkills: ["AWS", "GCP", "Vercel", "Docker"] }
      ]
    },
    {
      title: "AI Integrations, Search & Strategy",
      description: "Deploying production LLM platforms, conversational UI, internal AI governance, and AEO.",
      items: [
        { title: "Internal AI Standardization", subSkills: ["Claude Enterprise", "AI Policy Governance", "Team Adoption"] },
        { title: "LLM Platforms & Integrations", subSkills: ["OpenAI API", "Anthropic API", "Custom Prompts", "RAG"] },
        { title: "Conversational UI Architecture", subSkills: ["Real-Time AI Chat", "Crisis Support Bots", "24/7 Intake"] },
        { title: "Developer AI Tools & Workflow", subSkills: ["Claude", "Gemini", "ChatGPT", "Cursor", "Antigravity"] },
        { title: "AEO & Digital Search Strategy", subSkills: ["Answer Engine Opt", "SEO/SEM Audits", "LLM Indexing"] }
      ]
    }
  ],
  experiences: [
    {
      id: "btp-director",
      role: "Director of Accounts",
      company: "By the Pixel LLC",
      period: "Feb 2024 - Aug 2026",
      location: "Remote",
      description: "Managed a high-value client portfolio valued at $2M (50% of total agency revenue), managing engagement sizes ranging from $3k to $1M+ with a 100% client retention rate and 150% YoY portfolio growth.",
      highlights: [
        "Partnered with C-suite and executive leaders to organically grow account value through consultative, no-pressure strategic alignment.",
        "Navigated complex client executive leadership transitions by proactively restructuring contract models into predictable, transparent billing frameworks, preserving key accounts and driving long-term retainer growth.",
        "Spearheaded agency-wide AI standardization, establishing Claude as the core internal AI tool while creating flexible policy frameworks for developer-specific tool choices.",
        "Led end-to-end inbound sales operations by qualifying incoming leads, conducting technical discovery sessions, partnering with engineering leads to estimate complex projects, and personally authoring comprehensive proposals and SOWs.",
        "Standardized sales workflows, forecasting models, and financial review cadences to optimize team efficiency and hit ambitious margin targets."
      ],
      metrics: [
        "$2M Portfolio ($3k - $1M+ Deals)",
        "100% Client Retention",
        "150% YoY Organic Expansion"
      ],
      technologies: ["Sales Leadership", "Contract Restructuring", "Claude AI Standardization", "Consultative Selling", "HubSpot CRM", "Revenue Forecasting", "Portfolio Management"]
    },
    {
      id: "btp-manager",
      role: "Account Manager",
      company: "By the Pixel LLC",
      period: "Jun 2021 - Aug 2026",
      location: "Remote",
      description: "Managed tier-one client accounts and sales pipelines, translating complex technical architectures into actionable business solutions for healthcare, nonprofit, retail, and SaaS clients.",
      highlights: [
        "Orchestrated rapid burst-development resource scaling during high-stakes product relaunches (such as Grow Therapy), meeting tight client deadlines, building deep executive trust, and expanding retainer size significantly the following year.",
        "Managed tier-one inbound sales pipelines from initial lead response through deal closure, driving client discovery, collaborating on technical estimation, and writing tailored client proposals.",
        "Conducted executive client training sessions and ongoing strategic reviews, transforming standard delivery contracts into long-term retainer engagements."
      ],
      metrics: [
        "Tier-One Accounts",
        "Burst Resource Mobilization",
        "Retainer Expansion"
      ],
      technologies: ["Sales", "Agile Burst Scaling", "Inbound Lead Qualification", "Proposal Writing", "Deal Scoping", "Client Strategy"]
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
      technologies: ["Performance Reviews", "Engineering Management", "Sprint Planning", "Code Quality", "Mentorship"]
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
      technologies: ["JavaScript", "PHP", "Ruby", "Ruby on Rails", "Laravel", "HTML5/CSS", "REST APIs", "CI/CD", "Docker", "MySQL/PostgreSQL"]
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
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5/CSS", "WordPress", "Drupal", "CodeIgniter", "ExpressionEngine", "SEO/SEM", "Accessibility (WCAG)"]
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
          link: "https://bythepixel.com/work/nonprofit-website-design-for-alliance-for-hope",
          description: "Global nonprofit marketing website and integrated e-learning ecosystem."
        },
        {
          title: "Hope Chat AI Platform",
          category: "AI SaaS & Crisis Support",
          link: "https://bythepixel.com/work/hope-chat-ai-fighting-domestic-violence-with-the-latest-technology",
          description: "AI-chat-powered SaaS platform providing 24/7 safe, real-time support for domestic violence victims and survivors."
        }
      ]
    },
    {
      clientName: "Solv",
      clientRole: "Account Manager, Strategic Lead & Former Lead Developer",
      description: "Leading healthcare technology platform bringing fast, accessible booking solutions to medical providers and patients.",
      caseStudies: [
        {
          title: "B2B Healthcare Web Application",
          category: "Enterprise Web App",
          link: "https://bythepixel.com/work/solv-b2b-healthcare-web-application",
          description: "High-throughput platform simplifying access to healthcare services across medical providers."
        },
        {
          title: "AI Healthcare Booking Chatbot",
          category: "AI SaaS & Scheduling",
          link: "https://bythepixel.com/work/solv-ai-chatbot",
          description: "AI-chat-powered SaaS solution to streamline healthcare appointment scheduling and patient intake."
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
          description: "High-impact marketing website to improve mental health service discoverability and patient conversion."
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
          description: "Global WordPress website to simplify complex clinical trial information for the public."
        }
      ]
    },
    {
      clientName: "DomesticShelters.org",
      clientRole: "Account Manager, Strategic Lead & Former Lead Developer",
      description: "The largest online searchable directory of domestic violence shelters and victim resources in the US and Canada.",
      caseStudies: [
        {
          title: "Nonprofit Website Development & Public Portal",
          category: "Resource Portal & Search Engine",
          link: "https://bythepixel.com/work/domestic-shelters-nonprofit-website-development",
          description: "Comprehensive portal providing critical data and knowledge to domestic violence survivors and professionals."
        }
      ]
    }
  ],
  testimonials: [
    {
      id: "testimonial-1",
      quote: "I had the pleasure of working with Turner for nine years, during which he provided technical support for DomesticShleters.org. He has incredible ability to understand and remember the nuances of complexs projects and recommend cost-effective solutions designed not just to solve today's problems, but to anticiapte future needs.  Turner is responsive, easy to work with, incredibly smart, and especially skilled at translating complex technical concepts into plain language - bridging the gap between technology and clients in a way that consistently leads to better outcomes.",
      name: "Ashley Rumshalg",
      position: "National Director, DomesticShelters.org",
      company: "Alliance for HOPE International"
    },
    {
      id: "testimonial-2",
      quote: "Coming Soon...",
      name: "Testimonial 2 Name",
      position: "Testimonial 2 Position",
      company: "Testimonial 2 Company"
    },
    {
      id: "testimonial-3",
      quote: "Coming Soon...",
      name: "Testimonial 3 Name",
      position: "Testimonial 3 Position",
      company: "Testimonial 3 Company"
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
