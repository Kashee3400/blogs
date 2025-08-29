import AnimatedCard from "./AnimatedCard";
import type { Props } from "../../../types/blog";
import { useAnimations } from "../../../hooks/useAnimations";


const CategoriesWidget= ({
  categories,
}:Props ) => {
    const { activeCategory, setActiveCategory } = useAnimations();
  
  return (
    <AnimatedCard delay={200} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.name}>
            {/* <>{cat.icon}</> */}
            <button
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
            >
              {cat.name} {cat.count && <span className="text-sm text-slate-400">({cat.count})</span>}
            </button>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
};

export default CategoriesWidget;
