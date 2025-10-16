import { create } from 'zustand';
import  {type BlogPost, type BlogState } from '../types/blog';


export const useBlogStore = create<BlogState>((set, get) => ({
  // Initial state
  allPosts: [],
  categories: ['All'],
  activeCategory: 'All',
  searchQuery: '',
  isSidebarOpen: false,

  // Actions
  initializePosts: (posts: BlogPost[]) => {
    const categorySet = new Set<string>();
    categorySet.add('All');

    posts.forEach((post) => {
      if (post.category) {
        categorySet.add(post.category);
      }
      if (post.tags) {
        post.tags.forEach((tag) => categorySet.add(tag));
      }
      if (!post.category && post.type) {
        categorySet.add(post.type);
      }
    });

    set({
      allPosts: posts,
      categories: Array.from(categorySet),
    });
  },

  setActiveCategory: (category: string) => set({ activeCategory: category }),

  setSearchQuery: (query: string) => set({ searchQuery: query }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  resetFilters: () =>
    set({
      activeCategory: 'All',
      searchQuery: '',
    }),

  // Selectors
  getFilteredPosts: () => {
    const state = get();
    let filtered = state.allPosts;

    // Filter by category
    if (state.activeCategory !== 'All') {
      filtered = filtered.filter((post) => {
        return (
          post.category === state.activeCategory ||
          post.type === state.activeCategory ||
          (post.tags && post.tags.includes(state.activeCategory))
        );
      });
    }

    // Filter by search query
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
        //   post.author?.name.toLowerCase().includes(query) ||
          (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)))
      );
    }

    return filtered;
  },

  getCategoryCount: (category: string) => {
    const state = get();
    if (category === 'All') return state.allPosts.length;

    return state.allPosts.filter(
      (post) =>
        post.category === category ||
        post.type === category ||
        (post.tags && post.tags.includes(category))
    ).length;
  },
}));

export const selectActiveCategory = (state: BlogState) => state.activeCategory;
export const selectSearchQuery = (state: BlogState) => state.searchQuery;
export const selectIsSidebarOpen = (state: BlogState) => state.isSidebarOpen;
export const selectCategories = (state: BlogState) => state.categories;
export const selectFilteredPosts = (state: BlogState) => state.getFilteredPosts();
export const selectCategoryCount = (category: string) => (state: BlogState) =>
  state.getCategoryCount(category);