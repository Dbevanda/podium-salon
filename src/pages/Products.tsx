
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 font-avenir">
                Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-avenir">
                Premium skincare products crafted with the finest ingredients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-400 text-sm font-avenir">Product Image</p>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 font-avenir">Cleansers</h3>
                <p className="text-gray-600 font-avenir">Gentle cleansing solutions</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-400 text-sm font-avenir">Product Image</p>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 font-avenir">Serums</h3>
                <p className="text-gray-600 font-avenir">Concentrated treatments</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-400 text-sm font-avenir">Product Image</p>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 font-avenir">Moisturizers</h3>
                <p className="text-gray-600 font-avenir">Hydrating formulations</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-400 text-sm font-avenir">Product Image</p>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 font-avenir">Sun Protection</h3>
                <p className="text-gray-600 font-avenir">Advanced UV defense</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
