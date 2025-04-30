
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About VitReSell</h3>
            <p className="text-gray-600 mb-4">
              VitReSell is a marketplace for college students to buy and sell 
              items within their campus community. Save money, reduce waste, 
              and connect with fellow students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">
              Email: support@vitresell.com
            </p>
            <p className="text-gray-600">
              Campus: VIT University
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-brand-purple hover:text-brand-purple/80 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-brand-purple hover:text-brand-purple/80 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-brand-purple hover:text-brand-purple/80 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VitReSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
