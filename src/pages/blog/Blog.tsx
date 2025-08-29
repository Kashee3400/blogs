// // =================================================================
// // pages/Blog.tsx - Blog Page Component with Filtering
// // =================================================================
import  { useState, useMemo } from 'react';
import {Filter, Search,X } from 'lucide-react';
import BlogList from './BlogList';
import posts from './index'; // Import your posts
import { parseMarkdown } from '../../utils/parseMarkdown';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Parse all posts and extract categories
  const allPosts = useMemo(() => {
    return Object.entries(posts).map(([slug, content]) => 
      parseMarkdown(content as string, slug)
    );
  }, []);

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    categorySet.add("All"); // Always include "All"
    
    allPosts.forEach(post => {
      if (post.category) {
        categorySet.add(post.category);
      }
      // Also add tags as potential categories
      if (post.tags) {
        post.tags.forEach(tag => categorySet.add(tag));
      }
      // Fallback to type if no category
      if (!post.category && post.type) {
        categorySet.add(post.type);
      }
    });
    
    return Array.from(categorySet);
  }, [allPosts]);

  // Filter posts based on active category and search
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(post => {
        return (
          post.category === activeCategory ||
          post.type === activeCategory ||
          (post.tags && post.tags.includes(activeCategory))
        );
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author?.name.toLowerCase().includes(query) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    return filtered;
  }, [allPosts, activeCategory, searchQuery]);

  // Get category counts
  const getCategoryCount = (category: string) => {
    if (category === "All") return allPosts.length;
    return allPosts.filter(post => 
      post.category === category || 
      post.type === category || 
      (post.tags && post.tags.includes(category))
    ).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Social Media Growth 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest strategies, tips, and insights to grow your social media presence across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex lg:gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:flex-1 lg:w-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {(activeCategory !== "All" || searchQuery) && (
                  <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {(activeCategory !== "All" ? 1 : 0) + (searchQuery ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Active Filters Display */}
            {(activeCategory !== "All" || searchQuery) && (
              <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm font-medium text-gray-700">Active filters:</span>
                  {activeCategory !== "All" && (
                    <div className="flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      <span>Category: {activeCategory}</span>
                      <button
                        onClick={() => setActiveCategory("All")}
                        className="ml-1 hover:bg-indigo-200 rounded-full p-0.5 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  {searchQuery && (
                    <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      <span>Search: "{searchQuery}"</span>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 hover:bg-purple-200 rounded-full p-0.5 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}

            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <>
                <BlogList posts={filteredPosts} />
                
                {/* Load More Button */}
                {filteredPosts.length > 6 && (
                  <div className="text-center mt-12">
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Load More Posts
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* No Results State */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {searchQuery 
                    ? `No articles match your search "${searchQuery}" in the ${activeCategory} category.`
                    : `No articles found in the ${activeCategory} category.`
                  }
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:w-80 lg:flex-shrink-0">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {/* Search Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Articles</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Categories Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                    <span className="text-sm text-gray-500">
                      {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const isActive = activeCategory === category;
                      const count = getCategoryCount(category);
                      
                      return (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                            isActive
                              ? 'bg-indigo-500 text-white shadow-md'
                              : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                          }`}
                        >
                          <span className="font-medium">{category}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Blog Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Articles</span>
                      <span className="font-medium">{allPosts.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Categories</span>
                      <span className="font-medium">{categories.length - 1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Showing</span>
                      <span className="font-medium">{filteredPosts.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto h-full pb-20">
              {/* Mobile Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Mobile Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    const count = getCategoryCount(category);
                    
                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          isActive
                            ? 'bg-indigo-500 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                        }`}
                      >
                        <span className="font-medium">{category}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;