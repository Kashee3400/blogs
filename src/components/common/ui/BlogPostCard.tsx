import type { BlogPost } from "./../../../types/blog";

import React, { useState } from 'react';
import { Calendar,User, Clock, ArrowRight, Heart, Bookmark, Share2, Eye, Tag } from 'lucide-react';
import { useNavigate } from "react-router-dom";
interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  hoveredPost: string | null;
  setHoveredPost: (slug: string | null) => void;
}
import PATHS from "../../../constants/paths";

const BlogPostCard = ({ 
  post, 
  index, 
  hoveredPost, 
  setHoveredPost 
}: BlogPostCardProps
) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
        hoveredPost === post.slug 
          ? 'shadow-lg scale-[0.99] ring-1 ring-indigo-200' 
          : 'shadow-md hover:shadow-xl'
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setHoveredPost(post.slug)}
      onMouseLeave={() => setHoveredPost(null)}
      onClick={() => navigate(PATHS.BlogDetailLink(post.slug))}
    >
      {/* Thumbnail Section - More Compact */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {post.thumbnail ? (
          <>
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const img = e.currentTarget;
                img.style.display = 'none';
                if (img.nextElementSibling instanceof HTMLElement) {
                  img.nextElementSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback for broken images */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 hidden items-center justify-center">
              <div className="text-white text-center">
                <Tag className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="text-sm font-medium opacity-90">{post.category || post.type}</p>
              </div>
            </div>
          </>
        ) : (
          /* No thumbnail fallback */
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <Tag className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <p className="text-lg font-semibold">{post.category || post.type}</p>
              <p className="text-sm opacity-75">{post.readTime || 'Quick read'}</p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {post.category || post.type}
          </span>
        </div>

        {/* Action buttons - Smaller and more subtle */}
        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <Bookmark className={`w-3 h-3 ${isBookmarked ? 'text-indigo-600 fill-current' : 'text-gray-600'}`} />
          </button>
          <button 
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <Share2 className="w-3 h-3 text-gray-600" />
          </button>
        </div>

        {/* Stats overlay - Bottom left */}
        {(post.viewCount || post.likeCount) && (
          <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white/90 text-xs">
            {post.viewCount && (
              <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Eye className="w-3 h-3" />
                <span>{post.viewCount}</span>
              </div>
            )}
            {post.likeCount && (
              <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Heart className="w-3 h-3" />
                <span>{post.likeCount}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content Section - More Compact */}
      <div className="p-5">
        {/* Meta information - Smaller */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          {post.author?.name && (
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
              {post.author.name}
            </span>
          )}
        </div>

        {/* Title - Properly sized */}
        <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-200 leading-tight line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt - Compact */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags - If available */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400 px-2 py-1">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* CTA Section - Smaller and cleaner */}
        <div className="flex items-center justify-between">
          <button
            className="group/btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              navigate(PATHS.BlogDetailLink(post.slug));
            }}
          >
            Read More
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Like button - Smaller */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="w-8 h-8 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'} transition-colors duration-200`} />
          </button>
        </div>
      </div>

      {/* Author info bar - Bottom */}
      {post.author && (
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {post.author.avatar ? (
                <img
                  src={post.author.avatar || ""}
                  alt={post.author.name || "Author"}
                  className="w-6 h-6 rounded-full object-cover"
                  onError={(e) => {
                    // fallback: remove broken src and show default icon
                    const target = e.currentTarget;
                    target.onerror = null; // prevent infinite loop
                    target.style.display = "none";
                    const nextSibling = target.nextElementSibling;
                    if (nextSibling) nextSibling.classList.remove("hidden");
                  }}
                />
              ) : null}

              {/* Fallback icon (hidden by default, shown if image fails) */}
              <div className={`w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 ${post.author.avatar ? "hidden" : ""}`}>
                <User size={14} />
              </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {post.author.designation}
                {post.author.company && ` at ${post.author.company}`}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Hover border effect - Subtle */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default BlogPostCard;