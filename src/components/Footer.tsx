
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/6da874c1-d4f8-4efb-8712-c328e0d4ceba.png" 
              alt="Podium Logo" 
              className="h-8 w-auto mx-auto md:mx-0 mb-2"
            />
            <p className="text-gray-900 font-medium">Podium</p>
            <p className="text-gray-600 text-sm">Premium Beauty & Wellness</p>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-900 font-medium mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">info@podium.com</p>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            <p className="text-gray-600 text-sm">123 Beauty Street, Wellness City</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">© 2024 Podium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
