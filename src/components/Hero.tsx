
const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
              Elegant
              <br />
              <span className="font-normal">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Create something beautiful with our minimalist approach to design and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                Learn More
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium tracking-wide hover:border-gray-400 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Your Image Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
