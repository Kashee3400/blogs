import AnimatedCard from "./AnimatedCard";
import type { TrendingWidgetProps } from "../../../types/blog";


const TrendingWidget = ({ trendingPosts }:TrendingWidgetProps) => {
  return (
    <AnimatedCard delay={300} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Trending Posts</h3>
      <ul className="space-y-4">
        {trendingPosts.map((post) => (
          <li key={post.slug} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <a
              href={`/blog/${post.slug}`}
              className="block text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300"
            >
              {post.title}
            </a>
            <p className="text-xs text-slate-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
};

export default TrendingWidget;
