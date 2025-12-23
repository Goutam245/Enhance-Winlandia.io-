export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Politics",
    slug: "politics",
    description: "In-depth coverage of elections, policy, and political developments shaping our democracy.",
    color: "politics",
    icon: "landmark"
  },
  {
    id: "2",
    name: "Technology",
    slug: "technology",
    description: "Analysis of technological innovation, digital transformation, and the future of computing.",
    color: "technology",
    icon: "cpu"
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    description: "Market insights, corporate strategy, and economic trends affecting the global economy.",
    color: "business",
    icon: "briefcase"
  },
  {
    id: "4",
    name: "Culture",
    slug: "culture",
    description: "Arts, entertainment, lifestyle, and the cultural forces that define our times.",
    color: "culture",
    icon: "palette"
  },
  {
    id: "5",
    name: "World",
    slug: "world",
    description: "International news, global events, and analysis of geopolitical developments.",
    color: "world",
    icon: "globe"
  },
  {
    id: "6",
    name: "Opinion",
    slug: "opinion",
    description: "Thought-provoking perspectives, editorials, and commentary on issues that matter.",
    color: "opinion",
    icon: "message-square"
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
