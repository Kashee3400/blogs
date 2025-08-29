import AnimatedCard from "../ui/AnimatedCard";
import { Search } from "lucide-react";

interface SearchWidgetProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

const SearchWidget = ({ searchTerm, setSearchTerm }: SearchWidgetProps) => (
  <AnimatedCard delay={400} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <Search className="w-5 h-5 text-indigo-600" />
      </div>
      Search Articles
    </h3>
    <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 pl-12 border-2 border-slate-100 rounded-xl focus:border-indigo-400 focus:outline-none transition-all duration-300 bg-slate-50 focus:bg-white focus:shadow-md"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
    </div>
  </AnimatedCard>
);

export default SearchWidget;
