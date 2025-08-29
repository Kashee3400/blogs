// =================================================================
// pages/Contact.tsx - Contact Page Component
// =================================================================
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@techiesunny.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Our office location"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@techiesunny", color: "from-pink-500 to-red-500" },
    { icon: Youtube, name: "YouTube", handle: "Techie Sunny", color: "from-red-500 to-red-600" },
    { icon: Twitter, name: "Twitter", handle: "@techiesunny", color: "from-blue-400 to-blue-500" },
    { icon: Linkedin, name: "LinkedIn", handle: "Sunny Patel", color: "from-blue-600 to-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We’d love to hear from you. Reach out using the form below or connect via our contact info.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <info.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
              <p className="text-indigo-600 font-medium">{info.details}</p>
              <p className="text-sm text-gray-500 mt-2">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" /> Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect with us</h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`bg-gradient-to-r ${social.color} text-white p-6 rounded-2xl shadow hover:shadow-lg transition`}
              >
                <social.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">{social.name}</p>
                <p className="text-sm opacity-90">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// =================================================================