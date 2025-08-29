// src/blogs/index.ts
const rawPosts = import.meta.glob("../../assets/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});


// Normalize keys -> { "hello-world": markdownContent }
const posts: Record<string, string> = Object.keys(rawPosts).reduce((acc, path) => {
  // get filename without extension
  const slug = path.split("/").pop()?.replace(".md", "") || "";
  acc[slug] = (rawPosts as Record<string, string>)[path];
  return acc;
}, {} as Record<string, string>);

export default posts;
