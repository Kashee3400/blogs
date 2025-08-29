import { Home, User, Mail, FileText } from "lucide-react";
import { useAnimations } from "../../hooks/useAnimations";
import { useEnhancedData } from "../../hooks/useEnhancedData";
import GradientButton from "../common/ui/GradientButton";
import AnimatedCard from "../common/ui/AnimatedCard";
import BlogPostCard from "../common/ui/BlogPostCard";
import SearchWidget from "../common/ui/SearchWidget";
import CategoriesWidget from "../common/ui/CategoriesWidget";
import TrendingWidget from "../common/ui/TrendingWidget";
import NewsletterWidget from "../common/ui/NewsletterWidget";

// Flexible interface that accepts any props
interface MainContentProps {
  [key: string]: any;
}

// Page type configurations
const PAGE_CONFIGS = {
  home: {
    icon: Home,
    title: "Welcome Home",
    subtitle: "Your Digital Space",
    description: "Discover amazing content and connect with our community",
    showBlog: true,
    showSidebar: true,
  },
  about: {
    icon: User,
    title: "About Us",
    subtitle: "Our Story",
    description: "Learn more about who we are and what we do",
    showBlog: false,
    showSidebar: false,
  },
  contact: {
    icon: Mail,
    title: "Get In Touch",
    subtitle: "Contact Us",
    description: "We'd love to hear from you. Reach out anytime!",
    showBlog: false,
    showSidebar: false,
  },
  blog: {
    icon: FileText,
    title: "Our Blog",
    subtitle: "Latest Articles",
    description: "Discover insights, tutorials, and stories that inspire innovation",
    showBlog: true,
    showSidebar: true,
  },
};

// Main Component - accepts any props and adapts based on page type
const MainContent = (props: MainContentProps) => {
  // Destructure props with defaults
  const {
    // Page identification
    pageType = "blog", // home, about, contact, blog, or any custom type
    
    // Content props
    blogPosts = [],
    searchTerm = "",
    setSearchTerm = () => {},
    categories = [],
    recentPosts = [],
    trendingPosts = [],
    
    // Customizable content
    title,
    subtitle,
    description,
    customContent,
    children,
    
    // Layout controls
    showBlog,
    showSidebar,
    showSearch = true,
    showCategories = true,
    showTrending = true,
    showNewsletter = true,
    
    // Styling
    customStyles = {},
    className = "",
    
    // Callbacks
    onSubscribe = (email: string) => alert(`Subscribed with ${email}`),
    
    // Any other props
    ...restProps
  } = props;

  // Get page configuration
  const pageConfig = PAGE_CONFIGS[pageType as keyof typeof PAGE_CONFIGS] || PAGE_CONFIGS.blog;
  const Icon = pageConfig.icon;

  // Use provided props or fall back to page config
  const finalTitle = title || pageConfig.title;
  const finalSubtitle = subtitle || pageConfig.subtitle;
  const finalDescription = description || pageConfig.description;
  const shouldShowBlog = showBlog !== undefined ? showBlog : pageConfig.showBlog;
  const shouldShowSidebar = showSidebar !== undefined ? showSidebar : pageConfig.showSidebar;

  const { hoveredPost, setHoveredPost } = useAnimations();
  const { enhancedBlogPosts, enhancedCategories } = useEnhancedData(blogPosts, categories);

  // Render custom content for non-blog pages
  const renderCustomContent = () => {
    if (customContent) return customContent;
    if (children) return children;
    
    // Default content for different page types
    switch (pageType) {
      case "about":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-slate-600 text-lg leading-relaxed">
              Welcome to our about page. Here you can learn more about our mission, values, and team.
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              <GradientButton type="submit">Send Message</GradientButton>
            </form>
          </div>
        );
      case "home":
        return (
          <div className="text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                <p className="text-slate-600">Amazing feature description here.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                <p className="text-slate-600">Another great feature description.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
                <p className="text-slate-600">Third amazing feature here.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50/30 ${className}`} style={customStyles} {...restProps}>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-1">
            {finalTitle}
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {finalSubtitle}
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {finalDescription}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Enhanced Header with Icon */}
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            {finalTitle}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {finalDescription}
          </p>
        </AnimatedCard>

        {/* Content Layout */}
        <div className={`grid grid-cols-1 ${shouldShowSidebar ? 'lg:grid-cols-4' : ''} gap-8`}>
          {/* Main Content */}
          <div className={shouldShowSidebar ? "lg:col-span-3 space-y-8" : "space-y-8"}>
            {/* Custom Content for non-blog pages */}
            {!shouldShowBlog && (
              <AnimatedCard className="mb-8">
                {renderCustomContent()}
              </AnimatedCard>
            )}

            {/* Blog Content */}
            {shouldShowBlog && enhancedBlogPosts.map((post: any, index: number) => (
              <BlogPostCard
                key={post.id || index}
                post={post}
                index={index}
                hoveredPost={hoveredPost}
                setHoveredPost={setHoveredPost}
              />
            ))}

            {/* Load More for Blog */}
            {shouldShowBlog && enhancedBlogPosts.length > 0 && (
              <AnimatedCard delay={enhancedBlogPosts.length * 150 + 200} className="text-center pt-8">
                <GradientButton variant="secondary">
                  Load More Posts
                </GradientButton>
              </AnimatedCard>
            )}
          </div>

          {/* Sidebar */}
          {shouldShowSidebar && (
            <div className="lg:col-span-1 space-y-6">
              {showSearch && (
                <SearchWidget searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              )}
              
              {showCategories && categories.length > 0 && (
                <CategoriesWidget 
                  categories={enhancedCategories}
                  blogPosts={blogPosts}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm} 
                  recentPosts={recentPosts} 
                />
              )}
              
              {showTrending && trendingPosts.length > 0 && (
                <TrendingWidget 
                  trendingPosts={trendingPosts} 
                />
              )}
              
              {showNewsletter && (
                <NewsletterWidget onSubscribe={onSubscribe} />
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced Styles */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MainContent;