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


export interface BlogState {
    // Data
    allPosts: BlogPost[];
    categories: string[];

    // UI State
    activeCategory: string;
    searchQuery: string;
    isSidebarOpen: boolean;

    // Actions
    initializePosts: (posts: BlogPost[]) => void;
    setActiveCategory: (category: string) => void;
    setSearchQuery: (query: string) => void;
    toggleSidebar: () => void;
    resetFilters: () => void;

    // Selectors
    getFilteredPosts: () => BlogPost[];
    getCategoryCount: (category: string) => number;
}

export type { BlogPost, Category, Props,TrendingWidgetProps};
