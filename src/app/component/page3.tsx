
"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Page3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Aluminum Works",
      description: "Premium quality aluminum solutions",
      items: ["Windows", "Doors", "Partitions", "Custom Solutions"]
    },
    {
      title: "UPVC Solutions",
      description: "Weather-resistant and efficient",
      items: ["Windows", "Doors", "Frames", "Fixtures"]
    },
    {
      title: "Glass Works",
      description: "Elegant glass installations",
      items: ["Tempered Glass", "Decorative Glass", "Mirrors", "Partitions"]
    },
    {
      title: "Interior Solutions",
      description: "Modern interior designs",
      items: ["False Ceiling", "Media Walls", "Wall Panels", "Mirror Work"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Aluminum Point & Decors</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-200">Home</a>
              <a href="#services" className="text-white hover:text-blue-200">Services</a>
              <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/api/placeholder/1920/1080" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Space with
              <span className="text-blue-400"> Premium Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Expert craftsmanship in aluminum, UPVC, glass work, and modern interior solutions
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight size={16} className="text-blue-600 mr-2" />
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

      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 234 567 8900</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@aluminumpoint.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Business Street, City</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Aluminum Point & Decors</h2>
            <p className="text-gray-400">Quality craftsmanship for your space</p>
            <p className="text-gray-400 mt-4">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page3;