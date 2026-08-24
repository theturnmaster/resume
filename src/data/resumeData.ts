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
  clientCategory: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
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
    github: string;
    summary: string;
  };
  metrics: Metric[];
  competencies: SkillCategory[];
  experiences: Experience[];
  caseStudies: CaseStudy[];
  education: {
    degree: string;
    institution: string;
    year: string;
    details: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Alex Sterling",
    title: "Senior Technical Account Director",
    tagline: "Bridging Enterprise SaaS Strategy, Cloud Architecture, and Revenue Growth",
    email: "alex.sterling@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA / Remote",
    linkedin: "https://linkedin.com/in/alex-sterling-tech",
    github: "https://github.com/alexsterling-tech",
    summary: "Senior Enterprise Account Director with 10+ years driving ARR expansion ($25M+ managed portfolio), zero-churn retention, and technical delivery across complex cloud infrastructure, API platforms, and AI/ML SaaS solutions. Proven track record partnering directly with CTOs, VP Engineers, and C-Suite executives to align technical roadmap solutions with measurable business outcomes."
  },
  metrics: [
    { label: "Managed ARR Portfolio", value: "$28M+", subtext: "Enterprise accounts across Fortune 500 & scale-ups" },
    { label: "Net Retention Rate (NRR)", value: "128%", subtext: "Consistent 3-year trailing average expansion" },
    { label: "Gross Revenue Churn", value: "< 1.5%", subtext: "Proactive SLA management & executive QBRs" },
    { label: "Technical Integration Velocity", value: "3x Faster", subtext: "Reduced customer onboarding time via API & dev-tooling alignment" }
  ],
  competencies: [
    {
      title: "Enterprise Revenue & Account Strategy",
      description: "Managing complex C-level negotiations, contract expansions, and multi-threaded stakeholder relationships.",
      skills: ["Enterprise Account Planning", "C-Suite & Executive Alignment", "QBR & Value Realization", "NRR & ARR Expansion", "SLA & Escalation Management", "Contract Negotiation (MSAs/SOWs)"]
    },
    {
      title: "Technical & Architecture Fluency",
      description: "Translating enterprise software requirements into actionable technical solution blueprints.",
      skills: ["RESTful APIs & Webhooks", "Cloud Architecture (AWS/GCP)", "Data Warehousing (Snowflake/BigQuery)", "SaaS Architecture & Multi-Tenancy", "Security & Compliance (SOC2, HIPAA, GDPR)", "DevOps & CI/CD Fundamentals"]
    },
    {
      title: "Analytics, Tooling & Operations",
      description: "Leveraging data engineering tools and modern CRM stacks to drive predictable operational excellence.",
      skills: ["SQL & Business Intelligence (Looker/Tableau)", "Salesforce / Gainsight CRM", "Postman & API Debugging", "Jira & Agile Workflows", "Python (Data Parsing & Scripts)", "Product Analytics (Mixpanel/Amplitude)"]
    }
  ],
  experiences: [
    {
      id: "cloudscale",
      role: "Senior Technical Account Director",
      company: "CloudScale Systems",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading the Tier-1 Enterprise Strategic Accounts division overseeing CloudScale's high-throughput API gateway, data streaming platform, and cloud infrastructure management products.",
      highlights: [
        "Grew portfolio ARR from $16M to $28M within 24 months through strategic cross-selling of new microservices API security module.",
        "Architected executive engagement model for top 15 strategic accounts, partnering directly with Enterprise Engineering VPs to optimize cloud infrastructure spend by 22%.",
        "Pioneered a technical customer success framework leveraging SQL telemetry dashboards to detect API bottleneck risks prior to customer escalations.",
        "Negotiated multi-year $6.5M enterprise renewal with global fintech client, securing 3-year commit with 15% YoY expansion."
      ],
      metrics: [
        "132% Average NRR",
        "$12M ARR Expansion",
        "0 Enterprise Churn"
      ],
      technologies: ["AWS", "Kubernetes", "REST APIs", "SQL", "Looker", "Salesforce", "Postman"]
    },
    {
      id: "datavortex",
      role: "Enterprise Account Director - Technical Accounts",
      company: "DataVortex Analytics",
      period: "2019 - 2022",
      location: "San Francisco, CA",
      description: "Managed a $12M portfolio of 25 enterprise SaaS clients deploying real-time data streaming and warehouse integrations.",
      highlights: [
        "Led cross-functional teams of Solutions Architects, Account Managers, and Product Managers to deliver custom data connector integrations.",
        "Drove 122% NRR by establishing developer advisory committees with customer tech leads to shape product roadmap items.",
        "Resolved complex multi-party technical incidents during peak Black Friday traffic for retail enterprise accounts, protecting $3M in baseline ARR."
      ],
      metrics: [
        "122% NRR",
        "$3.8M New ARR from Upsells",
        "99.4% Customer CSAT"
      ],
      technologies: ["Snowflake", "Python", "Kafka", "Tableau", "Gainsight", "Jira"]
    },
    {
      id: "apiflow",
      role: "Technical Account Manager -> Senior TAM",
      company: "APIFlow Technologies",
      period: "2016 - 2019",
      location: "Austin, TX",
      description: "Served as the primary technical advisor for mid-market and enterprise developer-first SaaS clients.",
      highlights: [
        "Spearheaded technical onboarding for 40+ enterprise accounts, reducing average launch time from 90 days to 28 days.",
        "Built automated Python scripts to validate client webhook responses during migration phases, saving ~15 engineering hours per client onboarding."
      ],
      metrics: [
        "68% Onboarding Speedup",
        "98% Renewal Rate"
      ],
      technologies: ["REST APIs", "Webhooks", "JSON/XML", "Postman", "Python", "Zendesk"]
    }
  ],
  caseStudies: [
    {
      title: "Fintech Platform Scaling: 10M+ Daily API Call Migration",
      clientCategory: "Global Payments Provider",
      challenge: "Customer experienced severe rate-limiting bottlenecks during peak transaction hours, threatening key enterprise renewal.",
      solution: "Led technical discovery with customer's Principal Architect, co-authoring a custom microservices rate-limiting blueprint and zero-downtime migration timeline.",
      impact: [
        "Eliminated 100% of peak latency spikes",
        "Secured 3-Year $7.2M contract extension",
        "Increased account ARR by +45% via dedicated throughput tier"
      ],
      techStack: ["API Gateway", "Redis Caching", "AWS CloudWatch", "Custom SLA Framework"]
    },
    {
      title: "Data Warehouse Modernization & Cost Optimization",
      clientCategory: "Enterprise E-Commerce Giant",
      challenge: "Legacy ETL queries were running over budget by 35% monthly, leading executive sponsors to question renewal ROI.",
      solution: "Conducted deep-dive SQL query audit alongside Senior Data Engineers to redesign partition indexing and query cache schedules.",
      impact: [
        "Reduced monthly query compute costs by 28%",
        "Unlocked new cross-sell for real-time streaming module ($450k ARR)",
        "Presented ROI model directly to client CFO & VP Data"
      ],
      techStack: ["Snowflake", "SQL Optimization", "Looker", "BigQuery"]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Information Systems & Business Administration",
      institution: "University of California, Berkeley",
      year: "2012 - 2016",
      details: "Focus on Enterprise Software Architecture, Database Management, and Corporate Finance."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Certified Enterprise Account Executive (CEAE)",
      issuer: "Revenue Academy",
      year: "2022"
    },
    {
      name: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      year: "2021"
    }
  ]
};
