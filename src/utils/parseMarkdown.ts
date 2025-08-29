// src/utils/parseMarkdown.ts
import matter from "gray-matter";
import type { BlogFrontMatter, BlogPost } from "../types/blog";

export function parseMarkdown(
  raw: string,
  slug: string,
): BlogPost {
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    ...(data as BlogFrontMatter),
  };
}
