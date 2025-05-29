
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-light text-gray-900 tracking-wide">BRAND</h3>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">© 2024 Brand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
