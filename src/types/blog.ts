export interface BlogFrontMatter {
  title: string;
  date: string;
  type: string;
  category: string; // Added category field
  excerpt: string;
  readTime?: string;
  thumbnail?: string;
  viewCount?: string;
  likeCount?: number;
  tags?: string[]; // Added tags for better filtering
  author: {
    name: string;
    avatar: string;
    designation: string;
    company: string;
    companyLink: string;
  };
}

interface BlogPost extends BlogFrontMatter {
  slug: string;
  content?: string;
}

interface Category {
  name: string;
  icon: React.ElementType;
  count?: number;
}

interface Props {
  blogPosts: BlogPost[];
  recentPosts: string[];
  categories: Category[];
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

interface TrendingWidgetProps {
  trendingPosts: BlogPost[]; 
}

export type { BlogPost, Category, Props,TrendingWidgetProps};