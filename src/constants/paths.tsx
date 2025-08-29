// src/constants/paths.tsx
class PATHS {
  static Home = "/";
  static Blog = "/blog";
  static Login = "/login";
  static BlogDetail = "/blog/:slug";
  static BlogDetailLink = (slug: string) => `/blog/${slug}`;
  static Services = "/services";
  static About = "/about";
  static Contact = "/contact";
  static Privacy = "/privacy";
  static Disclaimer = "/disclaimer";

  // Admin routes
  static Admin = "/admin";
  static AdminPosts = "/admin/posts";
  static Analytics = "/admin/analytics";
  static AdminNewPost = "/posts/new";

  static NotFound = "*";
}

export default PATHS;
