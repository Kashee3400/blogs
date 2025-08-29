import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const MenuItem = ({ item, sidebarOpen, setActiveSection }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});


  const IconComponent = item.icon;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const toggleMenu = (menuId:number) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  // active if current path is in this item's paths or its subItems
  const isActive =
    item.paths?.includes(location.pathname) ||
    (hasSubItems &&
      item.subItems.some((sub) => sub.paths?.includes(location.pathname)));

  const isExpanded = expandedMenus[item.id];

  return (
    <div>
      <button
        onClick={() => {
          if (hasSubItems) {
            toggleMenu(item.id);
          } else {
            setActiveSection(item.id);
            navigate(item.paths?.[0] || "/admin");
          }
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
      >
        <div className="flex items-center gap-3">
          <IconComponent size={20} className={isActive ? "text-white" : "text-gray-500"} />
          {sidebarOpen && <span className="font-medium">{item.label}</span>}
        </div>
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            {item.badge && (
              <span
                className={`px-2 py-1 text-xs rounded-full font-semibold ${isActive ? "bg-white/20 text-white" : "bg-blue-100 text-blue-600"
                  }`}
              >
                {item.badge}
              </span>
            )}
            {hasSubItems && (
              <ChevronDown
                size={16}
                className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            )}
          </div>
        )}
      </button>

      {hasSubItems && isExpanded && sidebarOpen && (
        <div className="ml-6 mt-2 space-y-1">
          {item.subItems.map((subItem, index: number) => {
            const subActive = subItem.paths?.includes(location.pathname);
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveSection(subItem.id);
                  navigate(subItem.paths?.[0] || "/admin");
                }}
                className={`w-full text-left block px-3 py-2 text-sm rounded-md transition-colors ${subActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                {subItem.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
