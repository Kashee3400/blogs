import { useState, useEffect } from 'react';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Twitter,
  Linkedin,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Star,
  ArrowUp
} from 'lucide-react';

// Social Media Icons (same as navbar)
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

const ModernFooter = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Reference', href: '/api' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' }
    ],
    connect: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Partnerships', href: '/partners' },
      { name: 'Affiliate Program', href: '/affiliate' }
    ]
  };

  const socialLinks = [
    { 
      icon: InstagramIcon, 
      href: 'https://instagram.com', 
      name: 'Instagram',
      gradient: 'from-pink-500 via-red-500 to-yellow-500'
    },
    { 
      icon: FacebookIcon, 
      href: 'https://facebook.com', 
      name: 'Facebook',
      gradient: 'from-blue-600 to-blue-800'
    },
    { 
      icon: YouTubeIcon, 
      href: 'https://youtube.com', 
      name: 'YouTube',
      gradient: 'from-red-600 to-red-800'
    },
    { 
      icon: ThreadsIcon, 
      href: 'https://threads.net', 
      name: 'Threads',
      gradient: 'from-gray-800 to-black'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com', 
      name: 'Twitter',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com', 
      name: 'LinkedIn',
      gradient: 'from-blue-700 to-blue-900'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '24/7', label: 'Support', icon: Shield },
    { number: '150%', label: 'Growth', icon: TrendingUp }
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="relative mt-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          
          {/* Newsletter Section */}
          <div className="mb-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Stay in the loop
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Get the latest updates, exclusive content, and special offers delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubscribed
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:scale-105 shadow-lg hover:shadow-2xl'
                  }`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Star className="w-5 h-5 fill-current" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tech Crusader
                  </h3>
                  <p className="text-sm text-gray-400">Innovation & Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering the digital future with cutting-edge technology solutions, innovative content, and exceptional user experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">+91 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">hello@techcrusader.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-white capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-indigo-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 flex items-center justify-center lg:justify-start space-x-2">
                  <span>&copy; {currentYear} Tech Crusader. Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span>in India</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">All rights reserved. Crafted with passion.</p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm hidden sm:block">Follow us:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                      title={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          
          {/* Floating animation ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Back to top
          </div>
        </button>
      )}

      {/* Demo Content for Scrolling
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Modern Footer Design Showcase
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Scroll down to see the beautiful footer with glassmorphism effects, animated backgrounds, 
            newsletter subscription, social media integration, and a floating back-to-top button that 
            appears when you're near the bottom of the page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Feature {i + 1}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ModernFooter;