
'use client';
import PartitionIMg from '../../../public/Modern-Glass-Partitions.jpg'
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Image, Star, ArrowRight } from 'lucide-react';

const ModernBusinessPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Aluminium Works",
      description: "Premium quality aluminum solutions for modern spaces",
      items: ["Windows", "Doors", "Partitions", "Custom Solutions"],
      icon: "🏗️"
    },
    {
      title: "UPVC Solutions",
      description: "Energy-efficient and weather-resistant installations",
      items: ["Windows", "Doors", "Frames", "Fixtures"],
      icon: "🏠"
    },
    {
      title: "Glass Works",
      description: "Elegant and sophisticated glass installations",
      items: ["Tempered Glass", "Decorative Glass", "Mirrors", "Partitions"],
      icon: "✨"
    },
    {
      title: "Interior Solutions",
      description: "Contemporary interior design excellence",
      items: ["False Ceiling", "Media Walls", "Wall Panels", "Mirror Work"],
      icon: "🎨"
    }
  ];

  const portfolio = [
    {
      category: 'aluminum',
      title: 'Modern Office Partition',
      image: '../../../public/Modern-Glass-Partitions.jpg',
      description: 'Custom aluminum partition with glass integration'
    },
    {
      category: 'upvc',
      title: 'Villa Windows',
      image: '/api/placeholder/400/300',
      description: 'Energy-efficient UPVC windows installation'
    },
    {
      category: 'glass',
      title: 'Decorative Mirror Wall',
      image: '/api/placeholder/400/300',
      description: 'Custom mirror design for luxury hotel'
    },
    {
      category: 'interior',
      title: 'Modern Living Room',
      image: '/api/placeholder/400/300',
      description: 'Complete interior renovation with custom elements'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold  bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Aluminium Point & Decors
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-800 hover:text-blue-600 transition-colors group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100">
            <div className="px-4 py-2">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/api/placeholder/1920/1080" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="text-center text-white fade-in-element">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your Space with
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {' '}Premium Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Expert craftsmanship in aluminum, UPVC, glass work, and modern interior solutions
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-element">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                         transform hover:-translate-y-2 transition-all duration-300 fade-in-element"
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 group">
                        <ChevronRight
                          size={16}
                          className="text-blue-600 mr-2 transform group-hover:translate-x-1 transition-transform"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-element">
            Our Latest Projects
          </h2>
          
          {/* Portfolio Filter */}
          <div className="flex justify-center mb-12 space-x-4 fade-in-element">
            {['all', 'aluminum', 'upvc', 'glass', 'interior'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all duration-300 
                          ${activeTab === tab 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio
              .filter((item) => activeTab === 'all' || item.category === activeTab)
              .map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg fade-in-element"
                >
                 <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
               
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-element">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 fade-in-element">
              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Phone', content: '+1 234 567 8900' },
                  { icon: Mail, title: 'Email', content: 'info@aluminumpoint.com' },
                  { icon: MapPin, title: 'Address', content: '123 Business Street, City' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center 
                                  group-hover:bg-blue-600 transition-colors duration-300">
                      <item.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 fade-in-element">
              <form className="space-y-6">
                <div className="space-y-4">
                  {[
                    { type: 'text', placeholder: 'Your Name' },
                    { type: 'email', placeholder: 'Your Email' }
                  ].map((input, index) => (
                    <input
                      key={index}
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  ))}
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                           hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Aluminum Point & Decors</h2>
            <p className="text-gray-400 mb-8">Quality craftsmanship for your space</p>
            <div className="flex justify-center space-x-6 mb-8">
              {Array(5).fill(null).map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 animate-pulse"
                  size={24}
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-400">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .fade-in-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-element.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ModernBusinessPage;
// </antArtifact