
"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Page2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Aluminum Works", items: ["Windows", "Doors", "Partitions"] },
    { title: "UPVC Solutions", items: ["Windows", "Doors", "Fixtures"] },
    { title: "Glass Works", items: ["Tempered Glass", "Decorative Glass", "Mirrors"] },
    { title: "Interior Solutions", items: ["False Ceiling", "Media Wall", "Wall Panels"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-600 fixed w-full z-50">
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

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-blue-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:bg-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-white hover:bg-blue-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:bg-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Space with
              <span className="text-blue-600"> Premium Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert craftsmanship in aluminum, UPVC, glass work, and modern interior solutions
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight size={16} className="text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-gray-600">123 Business Street, City, Country</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
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
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Aluminum Point & Decors</h2>
            <p className="text-gray-400">Quality craftsmanship for your space</p>
            <p className="text-gray-400 mt-6">&copy; 2025 Aluminum Point & Decors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page2;