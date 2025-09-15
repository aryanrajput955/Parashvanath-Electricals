'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Clock, Users, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import Image from 'next/image';
import LogoSlider from './components/slider';
import LogoScroller from './components/slider';

export default function ElectricalLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 sm:left-8 w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 bg-blue-400 rounded-full mix-blend-multiply filter blur-lg animate-blob"></div>
            <div className="absolute top-6 sm:top-8 right-4 sm:right-12 w-28 sm:w-36 lg:w-40 h-28 sm:h-36 lg:h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-4 left-1/4 sm:left-1/3 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000"></div>
          </div>
          {/* Electric Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 200" fill="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0 40h15v-15h15v15h15v-15h15v15h20" stroke="currentColor" strokeWidth="1" fill="none" className="text-white animate-pulse"/>
                  <circle cx="40" cy="40" r="2" fill="currentColor" className="text-yellow-300"/>
                  <path d="M40 0v15m0 15v15m0 15v25" stroke="currentColor" strokeWidth="1" className="text-white animate-pulse"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center mb-4 sm:mb-6 lg:mb-8">
              <div className="p-1 sm:p-2.5 lg:p-3 bg-yellow-400 rounded-lg mb-2 sm:mb-3">
                <Image
                  src="/logo2.png"
                  priority
                  alt="PARASHVANATH ELECTRICALS logo"
                  width={100}
                  height={100}
                  className="  sm:h-8 lg:h-10  sm:w-18 lg:w-20 object-cover"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-bold text-white tracking-tight">
                Parashvanath Electricals
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-lg sm:max-w-xl mx-auto">
              Your one-stop shop for all your electrical needs
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-lg mx-auto">
              <a
                href="tel:+91 8148489383"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <Phone className="h-5 sm:h-6 w-5 sm:w-6" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/+918148489383"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="h-5 sm:h-6 w-5 sm:w-6 object-contain"
                />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:parasvanathele@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <Mail className="h-5 sm:h-6 w-5 sm:w-6" />
                <span>Email Us</span>
              </a>
              <a
                href="https://maps.app.goo.gl/se8GxvPidWm3JHeZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
<LogoScroller />
      {/* About Us Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
              <Image
                src="/about-us.png"
                alt="PARASHVANATH ELECTRICALS Logo"
                
                width={24}
                height={24}
                className="h-9 w-9 object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Parashvanath Electricals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to your trusted destination for premium electronics. We specialize in offering a wide range of high-quality products, including the latest gadgets, home appliances, and essential accessories. With a commitment to innovation, reliability, and customer satisfaction, we provide solutions that meet the needs of both households and businesses. Discover competitive prices, expert guidance, and exceptional service—all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-6">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our electrical experts. We're here to help with all your electrical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bhavesh</h3>
                <p className="text-gray-600 mb-6">Senior Electrical Technician</p>
                <a 
                  href="tel:8148489383" 
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  8148489383
                </a>
                <a 
                  href="https://wa.me/918148489383" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mt-3 cursor-pointer"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2 object-contain"
                  />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hitesh</h3>
                <p className="text-gray-600 mb-6">Lead Electrician</p>
                <a 
                  href="tel:8056529213" 
                  className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  8056529213
                </a>
                <a 
                  href="https://wa.me/918056529213" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mt-3 cursor-pointer"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2 object-contain"
                  />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <p className="text-gray-600 mb-6">
                  Parashvanath Electricals<br />
                  110, Rs complex kadlakara lane no:1<br />
                  Avinashi road Coimbatore-641018
                </p>
                <a 
                  href="https://maps.app.goo.gl/se8GxvPidWm3JHeZ7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:8148489383" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span>Call Bhavesh</span>
              </a>
              <a 
                href="tel:8056529213" 
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span>Call Hitesh</span>
              </a>
              <a 
                href="mailto:parasvanathele@gmail.com" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your electrical project? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Tell us about your electrical project, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-6">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Follow us for electrical tips, safety updates, project showcases, and exclusive offers
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 mb-12">
            <a
              href="#"
              className="group bg-white/10 hover:bg-blue-600 backdrop-blur-sm text-white p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20 cursor-pointer"
            >
              <Facebook className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 hover:bg-blue-500 backdrop-blur-sm text-white p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20 cursor-pointer"
            >
              <Twitter className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 hover:bg-yellow-600 backdrop-blur-sm text-white p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20 cursor-pointer"
            >
              <Instagram className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 hover:bg-blue-700 backdrop-blur-sm text-white p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20 cursor-pointer"
            >
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="p-1 bg-yellow-400 rounded-lg mb-2">
                <Image
                  src="/logo2.png"
                  alt="PARASHVANATH ELECTRICALS Logo"
                  width={104}
                  height={124}
                  className="sm:h-8 lg:h-10  sm:w-18 lg:w-20 object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">PARASHVANATH ELECTRICALS</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Your trusted electrical professionals - Licensed, Insured, and Ready to Serve
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 PARASHVANATH ELECTRICALS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 15px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}