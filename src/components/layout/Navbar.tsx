import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { 
  Home, 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Shield, 
  FileText, 
  AlertTriangle,
  User,
  Search,
  Bell,
  Settings
} from 'lucide-react';

// Simulated social icons since we don't have react-icons
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12.006c.027 3.094.718 5.502 2.057 7.174 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.547 0-2.886-.793-3.681-2.18-.777-1.357-.58-3.023.539-4.564.18-.248.37-.46.572-.633.75-.64 1.605-.974 2.637-.974 1.547 0 2.583.515 3.174 1.574.264.473.42 1.009.48 1.640.877.236 1.706.65 2.456 1.222.718.547 1.39 1.257 1.962 2.085.455.658.805 1.57.805 2.65 0 3.897-2.759 6.8-7.2 7.566-.814.14-1.66.21-2.516.21z"/>
  </svg>
);

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
  }, [location.pathname]);

  // More menu items
  const moreMenuItems = [
    { 
      name: 'Privacy Policy', 
      icon: Shield, 
      href: '/privacy',
      description: 'How we protect your data'
    },
    { 
      name: 'About Us', 
      icon: User, 
      href: '/about',
      description: 'Learn about our mission'
    },
    { 
      name: 'Disclaimer', 
      icon: AlertTriangle, 
      href: '/disclaimer',
      description: 'Important legal information'
    },
    { 
      name: 'Contact Us', 
      icon: Phone, 
      href: '/contact',
      description: 'Get in touch with us'
    }
  ];

  // Main navigation items
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Services', href: '/services', icon: Settings },
  ];

  // Function to check if route is active
  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo - Use Link for navigation */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">S</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Sunny
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Social Media Growth</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-indigo-50 relative overflow-hidden ${
                    isActiveRoute(item.href)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                    isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              ))}

              {/* More Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  onMouseEnter={() => setIsMoreMenuOpen(true)}
                  className="group px-4 py-2.5 rounded-xl text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:bg-indigo-50 flex items-center space-x-2"
                >
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </button>

                {/* Dropdown Menu */}
                {isMoreMenuOpen && (
                  <div 
                    className="absolute top-full mt-2 right-0 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/20 overflow-hidden transform transition-all duration-300 animate-in slide-in-from-top-5"
                    onMouseLeave={() => setIsMoreMenuOpen(false)}
                  >
                    <div className="p-2">
                      {moreMenuItems.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                            isActiveRoute(item.href)
                              ? 'bg-indigo-50 text-indigo-600'
                              : 'hover:bg-indigo-50'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActiveRoute(item.href)
                              ? 'bg-gradient-to-br from-indigo-200 to-purple-200'
                              : 'bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200'
                          }`}>
                            <item.icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold transition-colors duration-300 ${
                              isActiveRoute(item.href)
                                ? 'text-indigo-600'
                                : 'text-gray-900 group-hover:text-indigo-600'
                            }`}>
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                          <ChevronDown className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-gray-100/80 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActiveRoute(item.href)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile More Menu */}
              <div className="pt-4 border-t border-gray-200/20">
                <div className="text-sm font-semibold text-gray-500 px-4 py-2">More</div>
                {moreMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActiveRoute(item.href)
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* {/* //       Enhanced Floating Social Media */}
      <div className="fixed left-6 top-1/3 flex flex-col space-y-3 z-40 group">
        {/* Social Media Links */}
        <div className="flex flex-col space-y-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group/insta"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-0 group-hover/insta:opacity-100 transition-opacity duration-300"></div>
            <InstagramIcon />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover/insta:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
              Follow us on Instagram
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group/fb"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover/fb:opacity-100 transition-opacity duration-300"></div>
            <FacebookIcon />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover/fb:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
              Like our Facebook page
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-red-600 to-red-800 hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group/yt"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-0 group-hover/yt:opacity-100 transition-opacity duration-300"></div>
            <YouTubeIcon />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover/yt:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
              Subscribe to our channel
            </div>
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.net"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-black hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group/threads"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover/threads:opacity-100 transition-opacity duration-300"></div>
            <ThreadsIcon />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover/threads:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
              Follow us on Threads
            </div>
          </a>
        </div>

        {/* Floating indicator */}
        <div className="w-1 h-16 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mx-auto opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    </>
  );
};

export default ModernNavbar;