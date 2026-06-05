export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  tools?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; description: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  year: string;
  category: 'Interior Design' | 'Furniture Design' | 'Civil Infrastructure' | 'Operations & Strategy';
  description: string;
  highlights: string[];
  tools: string[];
  kpis: { label: string; value: string }[];
  imageUrl: string;
  isCustom?: boolean;
}

export const PERSONAL_INFO = {
  name: 'TRILOKESH SAMAL',
  titles: ['Senior Operations Executive', 'Interior & Furniture Design Specialist', 'Civil Infrastructure Engineer'],
  phones: ['+91-8249328823', '+91-9827712528'],
  email: 'trilokesh.samal26@gmail.com',
  location: 'Bhubaneswar, Odisha',
  github: 'https://github.com', // Placeholder for user customization
  linkedin: 'https://linkedin.com/in', // Placeholder for user customization
  profileSumary: 'Dynamic and result-oriented Senior Operations Executive with over 9 years of cross-functional leadership spanning Business Operations, Strategy Execution, and Infrastructure Engineering. Recognized for driving enterprise transformation by scaling high-performing regional teams, optimizing complex supply chain and project delivery lifecycles, and managing multi-million-rupee corporate portfolios. Proven success in establishing market footprint, maximizing client satisfaction ecosystem parameters (100% CSAT & top-tier NPS), and combining rigorous civil engineering principles with advanced design automation to optimize operational bottom lines.',
  certifications: ['Advanced Diploma In Structural Design & Analysis'],
  languages: ['English', 'Hindi', 'Odia']
};

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'INIFD Bhubaneswar',
    degree: 'Masters In Interior Design',
    year: '2023'
  },
  {
    institution: 'VIVTECH',
    degree: 'B.Tech In Civil Engineering',
    year: '2014'
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: 'Strategic Leadership',
    skills: [
      { name: 'Corporate Change Management', level: 95, description: 'Scaling regional presence and restructuring delivery workflows' },
      { name: 'Team Mentorship & Growth', level: 90, description: 'Guiding multidisciplinary teams, creative and technical engineers' },
      { name: 'P&L Accountability', level: 88, description: 'Budget management, resource allocation, and optimizing unit margin' }
    ]
  },
  {
    category: 'Operations & Strategy',
    skills: [
      { name: 'Process Optimization', level: 96, description: 'Workflow mapping, eliminating blockages, and supply-chain structures' },
      { name: 'Project Lifecycle Management', level: 94, description: 'From conceptual blue-sky strategy to final physical handover' },
      { name: 'Client Ecosystems & CRM', level: 95, description: 'Formulating client retention models to hit and sustain target NPS' }
    ]
  },
  {
    category: 'Financial & Technical Controls',
    skills: [
      { name: 'Bill of Quantities (BOQs)', level: 95, description: 'Highly detailed auditing, material analysis, and budget insulation' },
      { name: 'Procurement Strategy', level: 90, description: 'Tracking materials market variables, vendor negotiations' },
      { name: 'AutoCAD & 3ds MAX', level: 92, description: 'Constructing robust structures, spatial planning, and interior layouts' },
      { name: 'Spatial Analytics & CAD/CAM', level: 88, description: 'Integrating precision structural design into manufacturing systems' }
    ]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Livspace India Pvt Ltd',
    role: 'Business Manager – Strategy & Operations',
    duration: 'May 2024 – Present',
    location: 'India',
    bullets: [
      'Orchestrate regional business growth strategies and end-to-end design operations, leading senior sales execution and market penetration tactics.',
      'Formulate and execute structured training frameworks for creative and technical design personnel, systematically boosting overall workforce operational efficiency and project delivery benchmarks.',
      'Drive company-wide quality assurance and client retention models, successfully maintaining a strict 100% Client Satisfaction (CSAT) score.',
      'Own and manage data-driven regional performance metrics, optimizing Net Promoter Scores (NPS) to directly match global corporate standards.'
    ],
    tools: ['Salesforce', 'Interior CRM', 'Operational Dashboards', 'AutoCAD'],
    metrics: [
      { label: 'Client Satisfaction', value: '100% CSAT' },
      { label: 'Workforce Efficiency', value: '+35% Growth' }
    ]
  },
  {
    company: 'Doowup',
    role: 'Senior Manager – Regional Strategy & Sales',
    duration: 'January 2024 – April 2024',
    location: 'Bhubaneswar, Odisha',
    bullets: [
      'Pioneered localized market-entry strategies by successfully marrying technical architectural design consulting with robust enterprise business development initiatives.',
      'Directed an elite multidisciplinary team of consultants to architect and scale bespoke, scalable spatial solutions for a high-net-worth portfolio.'
    ],
    tools: ['Business Analytics', 'Client Consulting', '3D Spatial Planning'],
    metrics: [
      { label: 'Regional Sales', value: 'Top Performer' },
      { label: 'HNI Portfolio', value: '25+ Private Clients' }
    ]
  },
  {
    company: 'Della Luxury Products',
    role: 'Senior Project Lead & Furniture Designer',
    duration: 'July 2023 – January 2024',
    location: 'India',
    bullets: [
      'Supervised the operational conceptualization, engineering integrity, and production scaling of premium luxury manufacturing lines.',
      'Bridged communication barriers between heavy manufacturing plants, creative design desks, and executive stakeholders to guarantee structural stability and luxury finish standards.'
    ],
    tools: ['SolidWorks', '3ds MAX', 'ERP Sourcing', 'Structural QA'],
    metrics: [
      { label: 'Production Defect Rate', value: '< 1.5%' },
      { label: 'Lines Launched', value: '4 Major Collections' }
    ]
  },
  {
    company: 'Furniture Gallery',
    role: 'Senior Production Manager & Designer',
    duration: 'September 2022 – July 2023',
    location: 'Lucknow, Uttar Pradesh',
    bullets: [
      'Owned total end-to-end management of production facility workflows, assembly lines, and asset scheduling from blue-sky concept to final distribution.',
      'Maintained strict corporate fiscal discipline by designing exhaustive individual line-item cost analyses and margin models prior to committing manufacturing resources.'
    ],
    tools: ['Visual ERP', 'Production Planner', 'MS Excel', 'AutoCAD'],
    metrics: [
      { label: 'Production Lead Time', value: '-22% Delay' },
      { label: 'Operational Accuracy', value: '99.2%' }
    ]
  },
  {
    company: 'Furniture Plaza',
    role: 'Project In-Charge & Lead Designer',
    duration: 'June 2020 – September 2022',
    location: 'Bhubaneswar, Odisha',
    bullets: [
      'Directed comprehensive, multi-phase project management lifecycles for high-visibility government installations, enterprise corporate offices, and sprawling residential complexes.',
      'Authored initial technical AutoCAD structures for complex, multi-million-rupee projects to secure critical executive-level and institutional client approvals.',
      'Engineered meticulous Bill of Quantities (BOQs) to insulate budgets against variance, optimized layout usage, and tracked volatile market material rates to build a resilient localized supply chain.'
    ],
    tools: ['AutoCAD', 'BOQ Generator', 'Project MS', 'Structural Estimation'],
    metrics: [
      { label: 'Corporate Handovers', value: '12 Major Hubs' },
      { label: 'Budget Variance', value: '< 2% Deviation' }
    ]
  },
  {
    company: 'MS. Ticon',
    role: 'Junior Engineer – Civil Operations',
    duration: 'September 2018 – February 2020',
    location: 'Jajpur, India',
    bullets: [
      'Spearheaded regional on-site construction layouts, land management, and foundational structural engineering for large-scale building assets.',
      'Managed, evaluated, and directed extensive on-site vendor crews and technical labors to drive total compliance with safety parameters and AutoCAD blueprints.'
    ],
    tools: ['Civil Blueprints', 'AutoCAD Structural', 'Site Safety Rules'],
    metrics: [
      { label: 'On-site Workforce', value: '50+ Personnel' },
      { label: 'Lost Time Incident', value: '0 Accidents' }
    ]
  },
  {
    company: 'Manipal University Jaipur',
    role: 'Assistant Engineer – Systems & Infrastructure',
    duration: 'August 2016 – August 2018',
    location: 'Jaipur, India',
    bullets: [
      'Managed core engineering laboratory infrastructure, research activities, and procedural safety protocols for high-tech academic divisions.',
      'Structured, curated, and optimized advanced CAD/CAM system frameworks to build technical capabilities and operational proficiencies across junior engineers.'
    ],
    tools: ['CAD/CAM Integration', 'Lab Infrastructure', 'MATLAB', 'SolidWorks'],
    metrics: [
      { label: 'Lab Infrastructure', value: '6 Labs Managed' },
      { label: 'Engineers Trained', value: '180+ Graduates' }
    ]
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj_1',
    title: 'Livspace Luxury Executive Residence',
    organization: 'Livspace India',
    role: 'Business Manager - Strategy & Operations',
    year: '2024',
    category: 'Interior Design',
    description: 'A stellar high-end multi-story private luxury apartment in Bhubaneswar, highlighting bespoke spatial configurations, intelligent luxury lighting, and integrated custom smart-home systems.',
    highlights: [
      'Orchestrated end-to-end design operations from layout drafting in AutoCAD to on-site assembly, achieving a flawless 100% Client Satisfaction status.',
      'Designed custom modular kitchen arrays and multi-functional storage fixtures, leveraging advanced spatial planning to increase usable floor plan by 15%.',
      'Configured local supply chain channels to procure premium walnut finishes and quartz details, coming in 5% under initial budget estimates.'
    ],
    tools: ['AutoCAD', 'Spatial Consulting', '3D Visualization', 'Local Sourcing'],
    kpis: [
      { label: 'Client Feedback', value: '10/10 Rating' },
      { label: 'Usable Space Plus', value: '+15% Room' },
      { label: 'Budget Precision', value: '100% on Target' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj_2',
    title: 'The Della "Apex" Luxury Furniture Collection',
    organization: 'Della Luxury Products',
    role: 'Senior Project Lead & Furniture Designer',
    year: '2023',
    category: 'Furniture Design',
    description: 'Supervised the operational scaling and industrial integrity of a highly sophisticated, gold-accented rosewood and structural steel premium furniture line designated for global deployment.',
    highlights: [
      'Bridged engineering teams with high-complexity manufacturing plants to resolve structural tolerance and load distribution puzzles in structural chairs.',
      'Eliminated material waste by implementing nested cutting models in solid wood procurement pipelines, decreasing manufacturing waste by 18%.',
      'Secured regulatory and aesthetic clearances from ultra-luxury residential clients, launching 4 major collections in the executive class.'
    ],
    tools: ['SolidWorks', 'Load-Bearing QA', 'Artistic Design', 'CAM Engineering'],
    kpis: [
      { label: 'Industrial Waste', value: '-18% Saved' },
      { label: 'Product Defect', value: '< 1.5% Rate' },
      { label: 'Line Turnaround', value: '6 Months Launch' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj_3',
    title: 'State Corporate Headquarters Hub',
    organization: 'Furniture Plaza',
    role: 'Project In-Charge & Lead Designer',
    year: '2022',
    category: 'Operations & Strategy',
    description: 'Lead operations for the comprehensive spatial build-out, acoustic treatment, and executive furniture layout of a 45,000 square foot government-affiliated office complex.',
    highlights: [
      'Engineered highly complex Bill of Quantities (BOQs) to insulate fiscal boundaries against inflation spikes, keeping final expenditure within a strict 1.8% deviation.',
      'Supervised 12 local subcontractors and an on-site installation group, establishing a streamlined task tracking flow to hand over keys 3 weeks ahead of schedule.',
      'Resolved acoustic leakage issues by specifying custom acoustic fiber panels formatted within CAD layout structural guidelines.'
    ],
    tools: ['AutoCAD Layouts', 'Acoustic Integration', 'BOQ Procurement', 'Subcontractor Management'],
    kpis: [
      { label: 'Budget Deviation', value: '1.8% Under' },
      { label: 'Time Advantage', value: '3 Weeks Early' },
      { label: 'Total Area Built', value: '45k SQFT' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj_4',
    title: 'Commercial Complex Highway Foundation',
    organization: 'MS. Ticon',
    role: 'Junior Engineer – Civil Operations',
    year: '2019',
    category: 'Civil Infrastructure',
    description: 'Directed on-site layout planning, soil bearing capabilities, and reinforced concrete basement frameworking for an expansive commercial logistics complex.',
    highlights: [
      'Oversaw foundational soil compacting and core piling stages, verifying structural integrity against AutoCAD blueprints and engineering stress models.',
      'Managed a dedicated crew of 50+ masonry, concrete, and mechanical specialists under zero-lost-time safety standards.',
      'Pioneered local material testing checks on concrete curing stages, eliminating potential micro-fractures prior to structural load bearing.'
    ],
    tools: ['Soil Bearing Analysis', 'Concrete Testing', 'Blueprints Auditing', 'On-site Surveying'],
    kpis: [
      { label: 'Workforce Size', value: '50+ Masonry' },
      { label: 'Safety Incidents', value: '0 Zero Rating' },
      { label: 'Piling Depth', value: '24 Meters' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
  }
];

export const KEY_ACHIEVEMENTS = [
  {
    title: 'Operational Turnarounds',
    value: '100% CSAT',
    icon: 'sentiment_very_satisfied',
    description: 'Repeatedly achieved 100% Client Satisfaction scores and industry-leading NPS metrics across major regional operations at Livspace.'
  },
  {
    title: 'Enterprise Delivery',
    value: '45,000+ SQFT',
    icon: 'corporate_fare',
    description: 'Successfully negotiated, styled, and delivered complex interior and structural systems for premium government offices and corporate entities.'
  },
  {
    title: 'Financial Oversight',
    value: '-22% Leakage',
    icon: 'payments',
    description: 'Pioneered automated BOQ auditing formulas and aggressive supplier negotiation strategies to drastically minimize project expenditures.'
  }
];
