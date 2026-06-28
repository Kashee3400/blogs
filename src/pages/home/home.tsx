
import { Eye, ChevronRight, TrendingUp, Sparkles, Heart, Star, ShoppingBag, Award, ArrowRight } from 'lucide-react';

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

  const categories = [
    { name: "Fashion", icon: ShoppingBag, count: "240+", color: "from-pink-500 to-rose-500" },
    { name: "Beauty", icon: Sparkles, count: "180+", color: "from-purple-500 to-indigo-500" },
    { name: "Wellness", icon: Heart, count: "150+", color: "from-emerald-500 to-teal-500" },
    { name: "Lifestyle", icon: Star, count: "200+", color: "from-amber-500 to-orange-500" }
  ];

  const trendingTopics = [
    "Minimalist Wardrobe", "Clean Beauty", "Self-Care Routines",
    "Sustainable Fashion", "Skincare Tips", "Style Guides"
  ];

  const featuredProducts = [
    {
      title: "Luxury Skincare Essentials",
      description: "Curated collection of premium beauty products",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=600&fit=crop",
      badge: "Editor's Pick"
    },
    {
      title: "Spring Fashion Edit",
      description: "This season's must-have pieces",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      badge: "New"
    },
    {
      title: "Wellness & Self-Care",
      description: "Products for mind, body, and soul",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
      badge: "Trending"
    }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Fashion Blogger",
      content: "This platform transformed how I approach style and self-care. Absolutely love the curated content!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Olivia Martinez",
      role: "Beauty Enthusiast",
      content: "The beauty tips and product recommendations are always spot-on. My go-to source for everything beauty!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Sophia Anderson",
      role: "Wellness Coach",
      content: "A perfect blend of fashion, beauty, and wellness. The holistic approach is exactly what I needed!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50">

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-purple-600 animate-pulse" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Celebrate Your
              <br />Beautiful Life
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Your ultimate destination for fashion, beauty, wellness, and lifestyle inspiration
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {trendingTopics.map((topic, i) => (
                <span key={i} className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-105">
                  #{topic}
                </span>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-purple-600 font-semibold">{cat.count} Articles</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Post */}
          <div className="relative group cursor-pointer mb-20">
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

          {/* Featured Collections */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-purple-600" />
              Featured Collections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, i) => (
                <div key={i} className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-80">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{product.title}</h4>
                    <p className="text-white/80 mb-4">{product.description}</p>
                    <button className="flex items-center space-x-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
              Latest Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
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

          {/* Testimonials Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Our Community Says</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Join thousands of women who've transformed their style, beauty, and wellness journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
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

// export default function Home() {


//   const featuredPost = {
//     id: 1,
//     title: "The Secret of Girls",
//     subtitle: "Discovering elegance in simplicity",
//     category: "Fashion",
//     author: "Sophia Laurent",
//     readTime: "8 min read",
//     views: "12.4K",
//     image: "https://plus.unsplash.com/premium_photo-1661295663162-de140cd303d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
//     gradient: "from-rose-500/20 via-purple-500/20 to-indigo-500/20"
//   };

//   const posts = [
//     {
//       id: 2,
//       title: "Parisian Chic: The Ultimate Style Guide",
//       excerpt: "Master the effortless elegance that defines French fashion culture",
//       category: "Fashion",
//       author: "Isabella Rose",
//       readTime: "6 min",
//       views: "8.2K",
//       image: "https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
//       tag: "Trending"
//     },
//     {
//       id: 3,
//       title: "The Science of Radiant Skin",
//       excerpt: "Evidence-based skincare routines that actually work for every skin type",
//       category: "Beauty",
//       author: "Dr. Elena Winters",
//       readTime: "10 min",
//       views: "15.7K",
//       image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
//       tag: "Featured"
//     },
//     {
//       id: 4,
//       title: "Wanderlust Diaries: Hidden Gems of Amalfi",
//       excerpt: "Exclusive coastal escapes beyond the tourist trails of southern Italy",
//       category: "Travel",
//       author: "Marco Venti",
//       readTime: "12 min",
//       views: "9.5K",
//       image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
//       tag: "New"
//     },
//     {
//       id: 5,
//       title: "Sustainable Fashion Revolution",
//       excerpt: "How conscious choices are reshaping the future of luxury fashion",
//       category: "Lifestyle",
//       author: "Aria Chen",
//       readTime: "7 min",
//       views: "11.3K",
//       image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
//       tag: "Trending"
//     },
//     {
//       id: 6,
//       title: "Mindful Morning Rituals",
//       excerpt: "Transform your day with intentional wellness practices from industry leaders",
//       category: "Wellness",
//       author: "Luna Park",
//       readTime: "5 min",
//       views: "7.8K",
//       image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
//       tag: "Popular"
//     },
//     {
//       id: 7,
//       title: "Statement Accessories of 2025",
//       excerpt: "Bold pieces that define this season's most coveted fashion moments",
//       category: "Fashion",
//       author: "Viktor Noir",
//       readTime: "6 min",
//       views: "10.1K",
//       image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=600&fit=crop",
//       tag: "Featured"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50 transition-colors duration-500">

//       {/* Hero Section */}
//       <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
//               Where Style Meets
//               <br />Sophistication
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Curated stories, trends, and insights for the modern connoisseur
//             </p>
//           </div>

//           {/* Featured Post */}
//           <div className="relative group cursor-pointer mb-20 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
//             <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src={featuredPost.image}
//                 alt={featuredPost.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className={`absolute inset-0 bg-gradient-to-t ${featuredPost.gradient} to-transparent opacity-60`}></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

//               <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
//                     {featuredPost.category}
//                   </span>
//                   <div className="flex items-center space-x-2 text-white/80 text-sm">
//                     <Eye className="w-4 h-4" />
//                     <span>{featuredPost.views}</span>
//                   </div>
//                 </div>
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
//                   {featuredPost.title}
//                 </h2>
//                 <p className="text-xl text-white/90 mb-6 max-w-2xl">
//                   {featuredPost.subtitle}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4 text-white/80">
//                     <span className="font-medium">{featuredPost.author}</span>
//                     <span>•</span>
//                     <span>{featuredPost.readTime}</span>
//                   </div>
//                   <button className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
//                     <span>Read More</span>
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Posts Grid */}
//           <div className="mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
//               <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
//               Latest Stories
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {posts.map((post, index) => (
//                 <div
//                   key={post.id}
//                   className="group cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                       {post.tag && (
//                         <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-rose-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
//                           {post.tag}
//                         </span>
//                       )}
//                     </div>

//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-3">
//                         <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
//                           {post.category}
//                         </span>
//                         <div className="flex items-center space-x-1 text-gray-500 text-sm">
//                           <Eye className="w-4 h-4" />
//                           <span>{post.views}</span>
//                         </div>
//                       </div>

//                       <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
//                         {post.title}
//                       </h3>

//                       <p className="text-gray-600 mb-4 line-clamp-2">
//                         {post.excerpt}
//                       </p>

//                       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                         <div className="flex items-center space-x-3">
//                           <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full"></div>
//                           <span className="text-sm font-medium text-gray-700">{post.author}</span>
//                         </div>
//                         <span className="text-sm text-gray-500">{post.readTime}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }