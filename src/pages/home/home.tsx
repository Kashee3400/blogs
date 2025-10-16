import { ChevronRight, TrendingUp, Eye } from 'lucide-react';


export default function Home() {


  const featuredPost = {
    id: 1,
    title: "The Secret of Girls",
    subtitle: "Discovering elegance in simplicity",
    category: "Fashion",
    author: "Sophia Laurent",
    readTime: "8 min read",
    views: "12.4K",
    image: "https://plus.unsplash.com/premium_photo-1661295663162-de140cd303d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    gradient: "from-rose-500/20 via-purple-500/20 to-indigo-500/20"
  };

  const posts = [
    {
      id: 2,
      title: "Parisian Chic: The Ultimate Style Guide",
      excerpt: "Master the effortless elegance that defines French fashion culture",
      category: "Fashion",
      author: "Isabella Rose",
      readTime: "6 min",
      views: "8.2K",
      image: "https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      tag: "Trending"
    },
    {
      id: 3,
      title: "The Science of Radiant Skin",
      excerpt: "Evidence-based skincare routines that actually work for every skin type",
      category: "Beauty",
      author: "Dr. Elena Winters",
      readTime: "10 min",
      views: "15.7K",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
      tag: "Featured"
    },
    {
      id: 4,
      title: "Wanderlust Diaries: Hidden Gems of Amalfi",
      excerpt: "Exclusive coastal escapes beyond the tourist trails of southern Italy",
      category: "Travel",
      author: "Marco Venti",
      readTime: "12 min",
      views: "9.5K",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
      tag: "New"
    },
    {
      id: 5,
      title: "Sustainable Fashion Revolution",
      excerpt: "How conscious choices are reshaping the future of luxury fashion",
      category: "Lifestyle",
      author: "Aria Chen",
      readTime: "7 min",
      views: "11.3K",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      tag: "Trending"
    },
    {
      id: 6,
      title: "Mindful Morning Rituals",
      excerpt: "Transform your day with intentional wellness practices from industry leaders",
      category: "Wellness",
      author: "Luna Park",
      readTime: "5 min",
      views: "7.8K",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      tag: "Popular"
    },
    {
      id: 7,
      title: "Statement Accessories of 2025",
      excerpt: "Bold pieces that define this season's most coveted fashion moments",
      category: "Fashion",
      author: "Viktor Noir",
      readTime: "6 min",
      views: "10.1K",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=600&fit=crop",
      tag: "Featured"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50 transition-colors duration-500">

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Where Style Meets
              <br />Sophistication
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated stories, trends, and insights for the modern connoisseur
            </p>
          </div>

          {/* Featured Post */}
          <div className="relative group cursor-pointer mb-20 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${featuredPost.gradient} to-transparent opacity-60`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{featuredPost.views}</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-white/90 mb-6 max-w-2xl">
                  {featuredPost.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-white/80">
                    <span className="font-medium">{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
                    <span>Read More</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
              Latest Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="group cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {post.tag && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-rose-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                          {post.tag}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}