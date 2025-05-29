
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div>
            <img 
              src="/lovable-uploads/6da874c1-d4f8-4efb-8712-c328e0d4ceba.png" 
              alt="Podium Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/treatments" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Treatments</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Products</Link>
            <Link to="/the-5-elements" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">The 5 elements</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">About us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Contact us</Link>
            <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Future5</a>
          </nav>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">© 2024 Podium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
