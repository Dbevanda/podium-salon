
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Placeholder */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg shadow-sm flex items-center justify-center">
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
                
                {showMore && (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Our team consists of experienced professionals who are passionate about delivering 
                      exceptional results. We take pride in our personalized approach, ensuring that 
                      each client receives the attention and care they deserve.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With years of experience in the beauty and wellness industry, we have developed 
                      innovative treatments and techniques that set us apart from the competition. 
                      Our commitment to continuous learning and improvement drives us to stay at the 
                      forefront of industry developments.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We believe that true beauty comes from within, and our holistic approach 
                      addresses both the physical and emotional aspects of wellness. Our goal is 
                      to help you feel confident, refreshed, and revitalized.
                    </p>
                  </div>
                )}
                
                <button 
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-900 font-medium text-sm tracking-wide border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
