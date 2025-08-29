import { useState } from "react";
import type { Category } from "../types/blog";

export const useAnimations = () => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return {
    hoveredPost,
    setHoveredPost,
    activeCategory,
    setActiveCategory,
  };
};

