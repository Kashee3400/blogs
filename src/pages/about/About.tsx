// =================================================================
// pages/About.tsx - About Page Component
// =================================================================
import { Users, Target, Heart, Instagram, Youtube, Linkedin } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "50K+", label: "Creators Helped" },
    { number: "10M+", label: "Followers Generated" },
    { number: "95%", label: "Success Rate" },
    { number: "3+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authenticity First",
      description: "We believe in genuine growth strategies that build real, engaged communities rather than fake followers."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we teach is backed by real data and proven results from successful social media campaigns."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building supportive communities where creators can learn, grow, and succeed together is at our core."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Sunny</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hi! I'm Sunny, a social media strategist passionate about helping creators and businesses 
                build authentic, engaged communities across all platforms. My journey started when I grew 
                my own accounts from zero to hundreds of thousands of followers using organic strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700 font-medium">@techiesunny</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 font-medium">Techie Sunny</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Sunny Patel</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-gray-800 font-medium">
                    "Success in social media isn't about luck - it's about understanding your audience and 
                    delivering value consistently."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real creators who trusted our strategies
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Beginning (2021)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Started with zero followers and a passion for technology. Struggled for months with inconsistent posting 
                    and poor engagement until I discovered the power of value-driven content and community building.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Breakthrough (2022)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developed my first viral content strategy that led to 100K followers in 6 months. Realized that 
                    authentic engagement was more valuable than follower count and started focusing on building genuine connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Helping Others (2023-Present)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Started sharing my strategies and helping other creators achieve similar results. Built this platform 
                    to make proven social media growth strategies accessible to everyone, regardless of their starting point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-indigo-100 leading-relaxed">
            To democratize social media success by providing authentic, proven strategies that help creators 
            build meaningful communities and achieve their goals without compromising their values or authenticity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
