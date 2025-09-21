// Footer Component
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1b2638] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <a href="/">
            <div className="flex items-center mb-6">
              <Image
                src="/img/logo.jpeg"
                alt="Urban Race Developers Logo"
                height={100}
                width={70}
                className="object-cover"
              />
              <span className="ml-3 text-2xl font-bold">Urban Race Developers</span>
            </div>
            </a>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building dreams and creating lasting value through innovative real estate solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="border border-white p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="border border-white p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="border border-white p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="border border-white p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/apartments" className="text-gray-300 hover:text-white transition-colors">Apartments</a></li>
              {/* <li><a href="/projects/current" className="text-gray-300 hover:text-white transition-colors">Current Projects</a></li>
              <li><a href="/projects/completed" className="text-gray-300 hover:text-white transition-colors">Completed Projects</a></li> */}
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services/promoters-builders" className="text-gray-300 hover:text-white transition-colors">Promoters & Builders</a></li>
              <li><a href="/services/developers" className="text-gray-300 hover:text-white transition-colors">Developers</a></li>
              <li><a href="/services/contractors" className="text-gray-300 hover:text-white transition-colors">Contractors</a></li>
              <li><a href="/services/consultants" className="text-gray-300 hover:text-white transition-colors">Consultants</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300"> 1-24/172/A, (Plot no 172) Snehita Hills, Phase 1, Appa Junction, Hyderabad, Telangana 500091.</p>
                  {/* <p className="text-gray-300"></p> */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p className="text-gray-300">+91 90307 49957</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <p className="text-gray-300">info@urbanracedevelopers.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Urban Race Developers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
