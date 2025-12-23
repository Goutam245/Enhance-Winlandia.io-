export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Investigative Reporter",
    department: "Editorial",
    location: "New York, NY",
    type: "Full-time",
    description: "We're seeking an experienced investigative journalist to join our award-winning investigative team. The ideal candidate will have a proven track record of breaking major stories and the tenacity to pursue complex investigations over extended periods. You'll work on high-impact stories that hold powerful institutions accountable.",
    requirements: [
      "7+ years of investigative journalism experience",
      "Portfolio of major investigative pieces",
      "Strong source development skills",
      "Experience with FOIA requests and public records",
      "Ability to work independently on long-term projects",
      "Excellent legal awareness and ethics"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Unlimited PTO",
      "Remote work flexibility",
      "Professional development budget"
    ],
    salary: "$120,000 - $180,000"
  },
  {
    id: "2",
    title: "Data Journalist",
    department: "Data & Visuals",
    location: "Remote",
    type: "Full-time",
    description: "Join our data journalism team to uncover stories hidden in datasets and create compelling visualizations. You'll combine reporting skills with data analysis to produce groundbreaking journalism that makes complex information accessible to our readers.",
    requirements: [
      "3+ years experience in data journalism",
      "Proficiency in Python or R for data analysis",
      "Experience with data visualization tools (D3.js, Tableau)",
      "Strong statistical literacy",
      "Journalism degree or equivalent experience",
      "Portfolio of data-driven stories"
    ],
    benefits: [
      "Competitive salary",
      "Full remote work",
      "Latest tech equipment provided",
      "Health and wellness benefits",
      "Flexible working hours",
      "Learning and development opportunities"
    ],
    salary: "$90,000 - $130,000"
  },
  {
    id: "3",
    title: "Social Media Editor",
    department: "Audience Development",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "We're looking for a creative and strategic social media editor to grow our audience across platforms. You'll develop our voice on social, create engaging content, and analyze performance to optimize our social strategy.",
    requirements: [
      "5+ years social media experience in journalism",
      "Deep understanding of platform algorithms",
      "Experience with social media analytics tools",
      "Strong news judgment",
      "Creative content creation skills",
      "Crisis communication experience"
    ],
    benefits: [
      "Competitive salary",
      "Hybrid work model",
      "Health benefits",
      "Paid parental leave",
      "Annual conference budget",
      "Gym membership"
    ],
    salary: "$75,000 - $95,000"
  },
  {
    id: "4",
    title: "Newsletter Editor",
    department: "Editorial",
    location: "Remote",
    type: "Full-time",
    description: "Help grow and engage our newsletter audience by curating compelling content and developing new newsletter products. You'll be responsible for our daily briefing and will have the opportunity to launch new newsletter formats.",
    requirements: [
      "3+ years newsletter or email marketing experience",
      "Strong editorial judgment",
      "Experience with email platforms (Substack, Mailchimp)",
      "Data-driven approach to content",
      "Excellent writing and editing skills",
      "Understanding of audience growth strategies"
    ],
    benefits: [
      "Competitive salary",
      "Fully remote",
      "Health insurance",
      "Flexible schedule",
      "Home office stipend",
      "Stock options"
    ],
    salary: "$70,000 - $90,000"
  },
  {
    id: "5",
    title: "Video Producer",
    department: "Video",
    location: "New York, NY",
    type: "Full-time",
    description: "Create compelling video content that brings our journalism to life. From short-form social clips to documentary-style features, you'll help expand our video presence across platforms.",
    requirements: [
      "4+ years video production experience",
      "Proficiency in Adobe Premiere, After Effects",
      "Experience with on-location shoots",
      "Understanding of social video formats",
      "Strong storytelling instincts",
      "Ability to work under deadline pressure"
    ],
    benefits: [
      "Competitive salary",
      "Full production equipment",
      "Health and dental benefits",
      "Generous PTO",
      "Creative freedom",
      "Industry event access"
    ],
    salary: "$80,000 - $110,000"
  },
  {
    id: "6",
    title: "Business Reporter",
    department: "Editorial",
    location: "New York, NY",
    type: "Full-time",
    description: "Cover companies, markets, and economic trends for our business section. The ideal candidate will have strong source relationships and the ability to break news while also producing thoughtful analysis.",
    requirements: [
      "5+ years business journalism experience",
      "Strong understanding of financial markets",
      "Established source network",
      "Experience covering public companies",
      "Comfort with financial data",
      "MBA or economics background preferred"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Comprehensive benefits",
      "401(k) match",
      "Professional development",
      "Industry events"
    ],
    salary: "$100,000 - $140,000"
  },
  {
    id: "7",
    title: "UX Designer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Shape the reader experience across our digital platforms. You'll work closely with editorial and engineering teams to create intuitive, engaging interfaces that serve our journalism and our audience.",
    requirements: [
      "5+ years UX design experience",
      "Portfolio demonstrating news/media work",
      "Proficiency in Figma",
      "Understanding of web accessibility",
      "Experience with user research",
      "Strong communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Fully remote",
      "Latest design tools",
      "Health benefits",
      "Flexible hours",
      "Creative environment"
    ],
    salary: "$110,000 - $150,000"
  },
  {
    id: "8",
    title: "Copy Editor",
    department: "Editorial",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our journalism meets the highest standards of accuracy, clarity, and style. You'll work across sections, editing everything from breaking news to long-form features.",
    requirements: [
      "3+ years copy editing experience",
      "Excellent command of AP style",
      "Attention to detail",
      "Ability to work on tight deadlines",
      "Familiarity with CMS platforms",
      "Strong fact-checking skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work",
      "Health insurance",
      "Paid time off",
      "Professional development",
      "Flexible schedule"
    ],
    salary: "$55,000 - $75,000"
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};
