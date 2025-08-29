import { useParams, Link } from "react-router-dom";
import posts from "./index";
import { parseMarkdown } from "../../utils/parseMarkdown";
import ReactMarkdown from "react-markdown";
import { Clock, Eye, Heart, Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const { content, ...meta } = parseMarkdown(post as string, slug!);
  
  // Get all post slugs for navigation
  const allSlugs = Object.keys(posts);
  const currentIndex = allSlugs.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  // Get prev/next post metadata for navigation
  const prevPost = prevSlug ? parseMarkdown(posts[prevSlug] as string, prevSlug) : null;
  const nextPost = nextSlug ? parseMarkdown(posts[nextSlug] as string, nextSlug) : null;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span>•</span>
            <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
            <span>•</span>
            <span className="text-gray-900">{meta.title}</span>
          </nav>

          {/* Category Badge */}
          <div className="flex items-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <Tag className="w-4 h-4 mr-1" />
              {meta.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {meta.title}
          </h1>

          {/* Excerpt */}
          {meta.excerpt && (
            <p className="text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
              {meta.excerpt}
            </p>
          )}

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            {/* Author */}
            <div className="flex items-center">
              {meta.author?.avatar && (
                <img
                  src={meta.author.avatar}
                  alt={meta.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
              )}
              <div>
                <p className="font-medium text-gray-900">{meta.author?.name}</p>
                <p className="text-xs">
                  {meta.author?.designation}
                  {meta.author?.company && (
                    <>
                      {" @ "}
                      {meta.author?.companyLink ? (
                        <a
                          href={meta.author.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-indigo-600 hover:underline"
                        >
                          {meta.author.company}
                        </a>
                      ) : (
                        meta.author.company
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(meta.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>

            {/* Read Time */}
            {meta.readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{meta.readTime}</span>
              </div>
            )}

            {/* View Count */}
            {meta.viewCount && (
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{meta.viewCount} views</span>
              </div>
            )}

            {/* Like Count */}
            {meta.likeCount && (
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span>{meta.likeCount} likes</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Thumbnail */}
        {meta.thumbnail && (
          <div className="mb-12">
            <img
              src={meta.thumbnail}
              alt={meta.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Tags */}
        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {meta.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-indigo max-w-none">
          <ReactMarkdown
            components={{
              // Custom styling for markdown elements
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-8 bg-indigo-50 rounded-r-lg">
                  <div className="text-gray-800 italic">{children}</div>
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {meta.viewCount ?? "0"} views
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {meta.likeCount ?? 0} likes
              </span>
            </div>
            <div className="text-xs">
              Published {new Date(meta.date).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Post */}
          {prevPost && (
            <Link
              to={`/blog/${prevSlug}`}
              className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous Post
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {prevPost.title}
              </h3>
              {prevPost.excerpt && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {prevPost.excerpt}
                </p>
              )}
            </Link>
          )}

          {/* Next Post */}
          {nextPost && (
            <Link
              to={`/blog/${nextSlug}`}
              className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 md:text-right"
            >
              <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
                Next Post
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {nextPost.title}
              </h3>
              {nextPost.excerpt && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {nextPost.excerpt}
                </p>
              )}
            </Link>
          )}
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;