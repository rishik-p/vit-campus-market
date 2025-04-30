
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../lib/mock-data";

const featuredSlides = [
  {
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    title: "Buy & Sell Textbooks",
    description: "Save money on your textbooks by buying used or sell your old ones to fellow students.",
    link: "/browse?category=books",
  },
  {
    image: "https://images.unsplash.com/photo-1526657782461-9fe13402a841",
    title: "Electronics Marketplace",
    description: "Find deals on laptops, headphones, and other electronics or sell your tech gadgets.",
    link: "/browse?category=electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1595620529320-1e7b86b81081",
    title: "Dorm Essentials",
    description: "Furnish your dorm room with affordable furniture and accessories from fellow students.",
    link: "/browse?category=furniture",
  },
];

const Index = () => {
  // Get the most recent 3 products from each category
  const bookProducts = mockProducts.filter(p => p.category === "books").slice(0, 3);
  const electronicsProducts = mockProducts.filter(p => p.category === "electronics").slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="container mx-auto px-4 py-6 md:py-8">
          <FeaturedCarousel slides={featuredSlides} />
        </section>
        
        {/* How It Works Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">How VitReSell Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
                <p className="text-gray-600">Create an account using your college email to gain access to the marketplace.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-teal">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Browse or List</h3>
                <p className="text-gray-600">Find what you need or list items you want to sell in just a few clicks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-brand-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-coral">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & Exchange</h3>
                <p className="text-gray-600">Message other students and meet up on campus to complete the transaction.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Books Section */}
        <section className="container mx-auto px-4 py-12">
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
        <section className="container mx-auto px-4 py-12">
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
