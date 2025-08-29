import { useMemo } from "react";
import type { BlogPost, Category } from "../types/blog";

export const useEnhancedData = (blogPosts: BlogPost[], categories: Category[]) => {
  const enhancedBlogPosts = useMemo(
    () =>
      blogPosts.map((post) => ({
        ...post,
        readTime: post.readTime || "5 min read",
        image:
          post.thumbnail ||
          `https://images.unsplash.com/photo-${
            1500000000000 + post.slug
          }?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80`,
      })),
    [blogPosts]
  );

  const enhancedCategories = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        count: cat.count || Math.floor(Math.random() * 20) + 5,
      })),
    [categories]
  );

  return { enhancedBlogPosts, enhancedCategories };
};
