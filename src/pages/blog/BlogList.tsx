// =================================================================
// BlogList.tsx - Updated to accept filtered posts
// =================================================================
import { useState } from 'react';
import BlogPostCard from '../../components/common/ui/BlogPostCard';
import type { BlogPost } from '../../types/blog';
import posts from './index';
import { parseMarkdown } from '../../utils/parseMarkdown';

interface BlogListProps {
  posts?: BlogPost[]; // Accept filtered posts as prop
}

const BlogList = ({ posts: filteredPosts }: BlogListProps) => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  // If no filtered posts provided, parse all posts (fallback)
  const postsToShow = filteredPosts || Object.entries(posts).map(([slug, content]) => 
    parseMarkdown(content as string, slug)
  );

  // Sort posts by date (newest first)
  const sortedPosts = [...postsToShow].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedPosts.map((blog, index) => (
          <li key={blog.slug} className="list-none">
            <BlogPostCard
              post={blog}
              index={index}
              hoveredPost={hoveredPost}
              setHoveredPost={setHoveredPost}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;