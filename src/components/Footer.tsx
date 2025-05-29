
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 tracking-wide font-avenir">PODIUM</h3>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/treatments" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">Treatments</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">Products</Link>
            <Link to="/the-5-elements" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">The 5 elements</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">About us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">Contact us</Link>
            <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors uppercase font-avenir">Future5</a>
          </nav>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm font-avenir">© 2024 Podium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
