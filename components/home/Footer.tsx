import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-gray-700/30">
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              InvestFirm
            </h3>
            <p className="text-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity">
              Your trusted partner in building financial prosperity through smart investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-gray-700/30">
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="group flex items-center text-sm hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/investments" 
                  className="group flex items-center text-sm hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Trading Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-gray-700/30">
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700/30 text-center text-sm opacity-60">
          <p>© {currentYear} InvestFirm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;