
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 tracking-wide">PODIUM</h3>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase">Contact</Link>
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
