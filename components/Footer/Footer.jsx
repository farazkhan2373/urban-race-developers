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

const Footer = () => {
  return (
    <footer className="bg-[#1b2638] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="ml-3 text-2xl font-bold">RealEstate</span>
            </div>
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
              <li><a href="/projects/current" className="text-gray-300 hover:text-white transition-colors">Current Projects</a></li>
              <li><a href="/projects/completed" className="text-gray-300 hover:text-white transition-colors">Completed Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services/promoters-builders" className="text-gray-300 hover:text-white transition-colors">Promoters & Builders</a></li>
              <li><a href="/services/developers" className="text-gray-300 hover:text-white transition-colors">Developers</a></li>
              <li><a href="/services/contractors" className="text-gray-300 hover:text-white transition-colors">Contractors</a></li>
              <li><a href="/services/consultants" className="text-gray-300 hover:text-white transition-colors">Consultants</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Business District</p>
                  <p className="text-gray-300">Hyderabad, Telangana 500001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <p className="text-gray-300">info@realestate.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RealEstate. All rights reserved.
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
