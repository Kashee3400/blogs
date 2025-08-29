// =================================================================
// pages/Services.tsx - Services Page Component
// =================================================================
import { Check, Star, ArrowRight, Users, TrendingUp, Target, Zap, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Instagram Growth Audit",
      description: "Complete analysis of your Instagram account with personalized growth recommendations",
      price: "$97",
      period: "one-time",
      features: [
        "Complete profile optimization",
        "Hashtag strategy analysis",
        "Content performance review",
        "Competitor analysis",
        "Growth action plan",
        "30-day follow-up"
      ],
      popular: false,
      icon: Target
    },
    {
      title: "Social Media Mastery Course",
      description: "Comprehensive course covering growth strategies for all major platforms",
      price: "$297",
      period: "lifetime access",
      features: [
        "50+ video lessons",
        "Platform-specific strategies",
        "Content templates",
        "Analytics tracking sheets",
        "Private community access",
        "Monthly live Q&As",
        "Lifetime updates"
      ],
      popular: true,
      icon: TrendingUp
    },
    {
      title: "1-on-1 Growth Consulting",
      description: "Personal mentorship sessions to accelerate your social media growth",
      price: "$497",
      period: "per session",
      features: [
        "90-minute strategy session",
        "Personalized growth plan",
        "Platform optimization",
        "Content strategy development",
        "Follow-up action items",
        "Email support for 30 days"
      ],
      popular: false,
      icon: Users
    }
  ];

  const additionalServices = [
    {
      title: "Content Creation Templates",
      description: "Ready-to-use templates for posts, stories, and videos",
      icon: Zap,
      price: "Free"
    },
    {
      title: "Analytics Dashboard",
      description: "Track your growth across all platforms in one place",
      icon: TrendingUp,
      price: "$29/month"
    },
    {
      title: "Community Access",
      description: "Join our exclusive community of growing creators",
      icon: Users,
      price: "$19/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution to accelerate your social media growth journey with our proven strategies and expert guidance.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500 ml-2">/ {service.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                  service.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl' 
                    : 'bg-gray-100 text-gray-900 hover:bg-indigo-50 hover:text-indigo-600'
                }`}>
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Tools & Resources
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your growth journey with our supplementary tools and community resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                  <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Our strategies have helped thousands of creators achieve significant growth across all platforms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Strategies</h3>
              <p className="text-gray-600">Stay ahead with cutting-edge techniques that adapt to platform algorithm changes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Get personalized guidance from experienced social media growth specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Choose a service that fits your needs and start seeing results within the first week.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;