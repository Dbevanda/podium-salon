
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AntiAgingTherapy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/treatments" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              <ArrowLeft size={20} className="mr-2" />
              Back to Treatments
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=600"
                  alt="Anti-Aging Therapy Treatment"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Anti-Aging Therapy
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our most advanced anti-aging treatment combines cutting-edge technology with scientifically proven ingredients to combat signs of aging at the cellular level.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This premium treatment targets deep wrinkles, age spots, and loss of firmness, delivering visible results and long-lasting rejuvenation.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">Price</h2>
                  <p className="text-3xl font-semibold text-gray-900">$250</p>
                  <p className="text-gray-600">per session</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AntiAgingTherapy;
