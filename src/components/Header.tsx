
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-gray-900 tracking-wide">
              BRAND
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors">
              Contact
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
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                Services
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
