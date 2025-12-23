export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter?: string;
  linkedin?: string;
  expertise: string[];
  articlesCount: number;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Alexandra Morrison",
    role: "Senior Political Correspondent",
    bio: "Alexandra Morrison is an award-winning political journalist with over 15 years of experience covering national and international politics. Her investigative work has been recognized with multiple journalism awards, and she has interviewed heads of state on four continents. Alexandra holds a degree in Political Science from Georgetown University and completed a fellowship at the Reuters Institute for the Study of Journalism at Oxford. Her reporting has shaped public understanding of complex policy issues and earned her a reputation for fearless, fair, and deeply researched journalism.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    email: "alexandra.morrison@winlandia.io",
    twitter: "@alexmorrison",
    linkedin: "alexandra-morrison",
    expertise: ["Politics", "Elections", "Policy Analysis"],
    articlesCount: 156
  },
  {
    id: "2",
    name: "Dr. James Chen",
    role: "Technology Editor",
    bio: "Dr. James Chen brings a unique perspective to technology journalism, combining academic rigor with accessible writing. With a Ph.D. in Computer Science from MIT and a decade of industry experience at leading tech companies, James understands both the technical foundations and business implications of emerging technologies. He joined Winlandia to help readers navigate the rapidly evolving tech landscape, from artificial intelligence to quantum computing. His analysis is sought after by industry leaders and policymakers alike.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    email: "james.chen@winlandia.io",
    twitter: "@drjameschen",
    linkedin: "jameschen-tech",
    expertise: ["AI", "Emerging Technology", "Digital Innovation"],
    articlesCount: 203
  },
  {
    id: "3",
    name: "Sarah Williams",
    role: "Business & Economics Correspondent",
    bio: "Sarah Williams has covered business and economics for two decades, from Wall Street trading floors to Silicon Valley boardrooms. Her reporting has exposed corporate malfeasance, explained complex market movements, and profiled industry disruptors. A graduate of the Wharton School, Sarah combines financial expertise with storytelling skill. She has authored two books on economic trends and appears regularly as a commentator on financial news networks. Her work helps readers understand the forces shaping the global economy.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    email: "sarah.williams@winlandia.io",
    twitter: "@sarahwilliams",
    linkedin: "sarah-williams-finance",
    expertise: ["Markets", "Corporate Strategy", "Economic Policy"],
    articlesCount: 189
  },
  {
    id: "4",
    name: "Marcus Thompson",
    role: "Arts & Culture Editor",
    bio: "Marcus Thompson believes that culture is the mirror in which society sees itself. As Arts & Culture Editor, he covers everything from blockbuster films to underground art movements, from literary fiction to digital culture. Marcus studied comparative literature at Columbia and began his career as a music critic before expanding his purview to all forms of creative expression. His essays have been anthologized in collections of the year's best arts writing. He approaches culture with curiosity, rigor, and genuine enthusiasm.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "marcus.thompson@winlandia.io",
    twitter: "@marcusthompson",
    linkedin: "marcus-thompson-culture",
    expertise: ["Film", "Music", "Visual Arts", "Literature"],
    articlesCount: 234
  },
  {
    id: "5",
    name: "Dr. Elena Rodriguez",
    role: "International Affairs Correspondent",
    bio: "Dr. Elena Rodriguez has reported from more than 50 countries, covering conflicts, crises, and moments of hope. With a doctorate in International Relations from the London School of Economics and field experience in some of the world's most challenging environments, Elena brings depth and nuance to complex global stories. She speaks five languages fluently and maintains an extensive network of sources worldwide. Her reporting has won numerous awards and has influenced policy debates in capitals around the world.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    email: "elena.rodriguez@winlandia.io",
    twitter: "@elenarodriguez",
    linkedin: "elena-rodriguez-intl",
    expertise: ["Geopolitics", "Climate", "Human Rights"],
    articlesCount: 178
  },
  {
    id: "6",
    name: "David Park",
    role: "Opinion & Editorial Director",
    bio: "David Park oversees Winlandia's opinion section, curating diverse perspectives on the issues that matter most. Before joining Winlandia, David was a professor of philosophy and ethics at Stanford University. He brings this intellectual background to his role, seeking out voices that challenge assumptions and advance public debate. David believes that democracy depends on the free exchange of ideas, including uncomfortable ones. His own essays have appeared in major publications and sparked national conversations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    email: "david.park@winlandia.io",
    twitter: "@davidpark",
    linkedin: "david-park-opinion",
    expertise: ["Ethics", "Philosophy", "Public Policy"],
    articlesCount: 145
  },
  {
    id: "7",
    name: "Rachel Foster",
    role: "Deputy Editor, News",
    bio: "Rachel Foster has spent her career at the forefront of breaking news, from natural disasters to political upheavals. As Deputy Editor, she coordinates Winlandia's rapid response to major events while maintaining the high standards readers expect. Rachel started as a local reporter in Chicago before moving to national coverage. She is known for her calm under pressure, editorial judgment, and commitment to accuracy. Under her leadership, Winlandia's news operation has become known for being first—and right.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    email: "rachel.foster@winlandia.io",
    twitter: "@rachelfoster",
    linkedin: "rachel-foster-news",
    expertise: ["Breaking News", "Investigations", "Political Coverage"],
    articlesCount: 312
  },
  {
    id: "8",
    name: "Michael Okonkwo",
    role: "Science & Environment Correspondent",
    bio: "Michael Okonkwo translates complex scientific research into stories that matter to everyday readers. With degrees in biology and journalism, he covers everything from climate change to medical breakthroughs, always seeking to explain why scientific developments matter for society. Michael has reported from Antarctica, the Amazon, and research laboratories around the world. His work has been recognized for making science accessible without sacrificing accuracy. He believes that scientific literacy is essential for informed citizenship.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    email: "michael.okonkwo@winlandia.io",
    twitter: "@mokonkwo",
    linkedin: "michael-okonkwo-science",
    expertise: ["Climate Science", "Medicine", "Research"],
    articlesCount: 167
  },
  {
    id: "9",
    name: "Jennifer Kim",
    role: "Lifestyle & Wellness Editor",
    bio: "Jennifer Kim believes that how we live our daily lives is as important as major world events. As Lifestyle & Wellness Editor, she covers the trends, research, and innovations shaping how we eat, exercise, work, and relate to each other. Jennifer brings a critical eye to wellness claims, separating evidence-based advice from fads. Her work has helped millions of readers make more informed choices about their health and habits. She is particularly interested in the intersection of technology and wellbeing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    email: "jennifer.kim@winlandia.io",
    twitter: "@jenniferkim",
    linkedin: "jennifer-kim-lifestyle",
    expertise: ["Health", "Wellness", "Lifestyle Trends"],
    articlesCount: 198
  },
  {
    id: "10",
    name: "Robert Martinez",
    role: "Investigative Reporter",
    bio: "Robert Martinez is a dogged investigative journalist whose work has led to congressional investigations, criminal prosecutions, and major policy reforms. His multi-year investigation into financial fraud won the Pulitzer Prize for Investigative Reporting. Robert believes that accountability journalism is the cornerstone of democracy. He spends months, sometimes years, on a single story, digging through documents and cultivating sources to uncover truths that powerful interests would prefer to remain hidden.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    email: "robert.martinez@winlandia.io",
    twitter: "@robmartinez",
    linkedin: "robert-martinez-investigator",
    expertise: ["Investigations", "Corporate Accountability", "Government Oversight"],
    articlesCount: 89
  },
  {
    id: "11",
    name: "Amanda Lee",
    role: "Digital Innovation Reporter",
    bio: "Amanda Lee covers the intersection of technology, business, and society, with a focus on startups, venture capital, and digital transformation. Before journalism, Amanda worked as a product manager at several tech companies, giving her insider understanding of how digital products are built and scaled. She is particularly interested in how technology is reshaping traditional industries and the ethical questions these transformations raise. Her newsletter on tech trends has over 100,000 subscribers.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    email: "amanda.lee@winlandia.io",
    twitter: "@amandalee",
    linkedin: "amanda-lee-tech",
    expertise: ["Startups", "Venture Capital", "Digital Transformation"],
    articlesCount: 145
  },
  {
    id: "12",
    name: "Christopher Wright",
    role: "Sports & Recreation Editor",
    bio: "Christopher Wright covers sports as both athletic competition and cultural phenomenon. His reporting goes beyond box scores to explore issues of race, money, health, and identity in athletics. Chris played college basketball before injuries redirected him to journalism, and he brings an athlete's understanding to his coverage. He has profiled legendary coaches, investigated abuse in youth sports, and written memorable pieces on sports' ability to unite communities. His work captures why games matter.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    email: "christopher.wright@winlandia.io",
    twitter: "@chriswright",
    linkedin: "christopher-wright-sports",
    expertise: ["Professional Sports", "Olympics", "Sports Business"],
    articlesCount: 234
  },
  {
    id: "13",
    name: "Natalie Brooks",
    role: "Real Estate & Housing Correspondent",
    bio: "Natalie Brooks covers the economics, politics, and human stories of housing. In a time of affordability crisis and changing living patterns, her reporting helps readers understand the forces shaping where and how we live. Natalie has investigated discriminatory lending practices, chronicled the effects of gentrification, and analyzed policy solutions to housing shortages. Her work combines data journalism with compelling narratives about the communities behind the statistics.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    email: "natalie.brooks@winlandia.io",
    twitter: "@nataliebrooks",
    linkedin: "natalie-brooks-housing",
    expertise: ["Real Estate", "Urban Planning", "Housing Policy"],
    articlesCount: 112
  },
  {
    id: "14",
    name: "Daniel Nakamura",
    role: "Food & Dining Editor",
    bio: "Daniel Nakamura believes that food is a lens through which we can understand culture, economics, immigration, and identity. As Food & Dining Editor, he covers restaurant openings and culinary trends, but also investigates labor practices in the food industry, the effects of climate change on agriculture, and the stories behind beloved dishes. Daniel trained as a chef before turning to journalism, bringing firsthand knowledge of kitchens to his reporting. His restaurant reviews are trusted guides for discerning diners.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
    email: "daniel.nakamura@winlandia.io",
    twitter: "@dankamura",
    linkedin: "daniel-nakamura-food",
    expertise: ["Restaurants", "Food Industry", "Culinary Culture"],
    articlesCount: 178
  },
  {
    id: "15",
    name: "Sophia Chen",
    role: "Education Reporter",
    bio: "Sophia Chen covers education from preschool through graduate school, examining how we learn, who has access to opportunity, and what skills the future will require. Her reporting has investigated student debt, analyzed educational technology, and profiled innovative educators. Sophia was a public school teacher before journalism and maintains deep connections to education communities. She believes that quality education is the foundation of a just society and that journalism can help hold educational institutions accountable.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    email: "sophia.chen@winlandia.io",
    twitter: "@sophiachen",
    linkedin: "sophia-chen-education",
    expertise: ["K-12 Education", "Higher Education", "Ed Tech"],
    articlesCount: 134
  }
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};

export const getAuthorsByExpertise = (expertise: string): Author[] => {
  return authors.filter(author => 
    author.expertise.some(e => e.toLowerCase().includes(expertise.toLowerCase()))
  );
};
