
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          {/* Brand Name */}
          <div className="mb-3">
            <Link to="/">
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-wide font-avenir">
                PODIUM
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/treatments" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              Treatments
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              Products
            </Link>
            <Link to="/the-5-elements" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              The 5 elements
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              About us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              Contact us
            </Link>
            <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors uppercase font-avenir">
              Future5
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-4">
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
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/treatments" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
                Treatments
              </Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
                Products
              </Link>
              <Link to="/the-5-elements" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
                The 5 elements
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
                About us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
                Contact us
              </Link>
              <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center font-avenir">
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
