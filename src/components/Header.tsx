
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b border-gray-200 z-50" style={{ backgroundColor: '#FCFBFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/ddc95419-1919-43fa-8230-a940853d09a1.png" 
                alt="Podium Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/treatments" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out uppercase hover:scale-105">
              {t('nav.treatments')}
            </Link>
            <Link to="/the-5-elements" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out uppercase hover:scale-105">
              {t('nav.elements')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out uppercase hover:scale-105">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out uppercase hover:scale-105">
              {t('nav.contact')}
            </Link>
            <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out uppercase hover:scale-105">
              Future5
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
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
          <div className="md:hidden border-t border-gray-200" style={{ backgroundColor: '#FCFBFA' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/treatments" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center transition-all duration-200 ease-in-out hover:scale-105">
                {t('nav.treatments')}
              </Link>
              <Link to="/the-5-elements" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center transition-all duration-200 ease-in-out hover:scale-105">
                {t('nav.elements')}
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center transition-all duration-200 ease-in-out hover:scale-105">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center transition-all duration-200 ease-in-out hover:scale-105">
                {t('nav.contact')}
              </Link>
              <a href="https://www.futurecosmetics.com/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium uppercase text-center transition-all duration-200 ease-in-out hover:scale-105">
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
