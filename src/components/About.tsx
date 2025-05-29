
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-white rounded-lg shadow-sm flex items-center justify-center">
              <p className="text-gray-400 text-sm">About Image Here</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of simplicity and elegance. Our approach combines 
              minimalist design principles with functional excellence to create 
              experiences that are both beautiful and meaningful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every project is an opportunity to push boundaries and explore new 
              possibilities while maintaining the highest standards of quality and attention to detail.
            </p>
            <button className="text-gray-900 font-medium text-sm tracking-wide border-b border-gray-300 hover:border-gray-900 transition-colors pb-1">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
