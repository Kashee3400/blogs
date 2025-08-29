import MenuItem from "./MenuItems";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  ShoppingBag,
  MessageSquare,
  Shield,
  Calendar,
  Database,
  Mail,
  HelpCircle
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setActiveSection }: any) => {
  const menuItems = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: "Dashboard",
      badge: null,
      paths: ['/admin', '/admin/dashboard']
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: "Analytics",
      badge: null,
      paths: ['/admin/analytics']
    },
    {
      id: 'users',
      icon: Users,
      label: "Users",
      badge: "1.2k",
      paths: ['/admin/users']
    },
    {
      id: 'content',
      icon: FileText,
      label: "Content",
      badge: null,
      paths: ['/admin/posts', '/admin/pages', '/admin/media'],
      subItems: [
        { id: 'posts', label: "Posts", paths: ['/admin/posts'] },
        { id: 'pages', label: "Pages", paths: ['/admin/posts/new'] },
        { id: 'media', label: "Media", paths: ['/admin/media'] }
      ]
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      label: "E-commerce",
      badge: "24",
      paths: ['/admin/products', '/admin/orders', '/admin/categories'],
      subItems: [
        { id: 'products', label: "Products", paths: ['/admin/products'] },
        { id: 'orders', label: "Orders", paths: ['/admin/orders'] },
        { id: 'categories', label: "Categories", paths: ['/admin/categories'] }
      ]
    },
    {
      id: 'messages',
      icon: MessageSquare,
      label: "Messages",
      badge: "5",
      paths: ['/admin/messages']
    },
    {
      id: 'events',
      icon: Calendar,
      label: "Events",
      badge: null,
      paths: ['/admin/events']
    },
    {
      id: 'email',
      icon: Mail,
      label: "Email",
      badge: null,
      paths: ['/admin/email']
    },
    {
      id: 'database',
      icon: Database,
      label: "Database",
      badge: null,
      paths: ['/admin/database']
    },
    {
      id: 'security',
      icon: Shield,
      label: "Security",
      badge: null,
      paths: ['/admin/security']
    },
    {
      id: 'settings',
      icon: Settings,
      label: "Settings",
      badge: null,
      paths: ['/admin/settings'],
      subItems: [
        { id: 'general', label: "General", paths: ['/admin/settings/general'] },
        { id: 'appearance', label: "Appearance", paths: ['/admin/settings/appearance'] },
        { id: 'integrations', label: "Integrations", paths: ['/admin/settings/integrations'] }
      ]
    }
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-xl transition-all duration-300 border-r border-gray-200 flex flex-col h-full`}>
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <LayoutDashboard className="text-white" size={20} />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="font-bold text-xl text-gray-900">AdminPro</h1>
              <p className="text-xs text-gray-500">Management Suite</p>
            </div>
          )}
        </div>
      </div>

      <nav className="p-4 space-y-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            sidebarOpen={sidebarOpen}
            setActiveSection={setActiveSection}
          />
        ))}
      </nav>

      {sidebarOpen && (
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <HelpCircle className="text-white" size={16} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Need Help?</p>
                <p className="text-xs text-gray-600">Contact support</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium py-2 px-3 rounded-lg hover:shadow-md transition-shadow">
              Get Support
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
export default Sidebar;