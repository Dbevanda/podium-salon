
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/6da874c1-d4f8-4efb-8712-c328e0d4ceba.png" 
                alt="Podium Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/treatments" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              Treatments
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              Products
            </Link>
            <Link to="/the-5-elements" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              The 5 elements
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              About us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              Contact us
            </Link>
            <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase">
              Future5
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/treatments" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                Treatments
              </Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                Products
              </Link>
              <Link to="/the-5-elements" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                The 5 elements
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                About us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                Contact us
              </Link>
              <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center">
                Future5
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
