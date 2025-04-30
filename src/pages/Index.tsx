
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../lib/mock-data";

const Index = () => {
  // Filter products by category
  const bookProducts = mockProducts.filter(p => p.category === "books").slice(0, 6);
  const electronicsProducts = mockProducts.filter(p => p.category === "electronics").slice(0, 6);
  const furnitureProducts = mockProducts.filter(p => p.category === "furniture").slice(0, 6);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Featured Books Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Books</h2>
            <Link to="/browse?category=books" className="text-brand-purple hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        {/* Featured Electronics Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Electronics</h2>
            <Link to="/browse?category=electronics" className="text-brand-purple hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {electronicsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Featured Furniture Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dorm Furniture</h2>
            <Link to="/browse?category=furniture" className="text-brand-purple hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {furnitureProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-brand-purple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Buy or Sell?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Join the VIT campus marketplace today and start connecting with other students to buy and sell items easily.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <button className="bg-white text-brand-purple font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                  Sign Up Now
                </button>
              </Link>
              <Link to="/browse">
                <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
                  Browse Listings
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
