
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { mockProducts, mockUsers } from "../lib/mock-data";
import { Heart, Share, MessageSquare } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeImage, setActiveImage] = useState(0);

  // Find the product with the matching ID
  const product = mockProducts.find((p) => p.id === productId);

  // Find the seller
  const seller = product ? mockUsers.find((u) => u.id === product.userId) : null;

  if (!product || !seller) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/browse">
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const daysRemaining = Math.ceil(
    (new Date(product.expiresAt).getTime() - new Date().getTime()) / 
    (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/browse" className="text-brand-purple hover:underline">
            ← Back to Browse
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 rounded-lg overflow-hidden border">
              <img
                src={product.images[activeImage] || product.images[0]}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded overflow-hidden ${
                      index === activeImage ? 'ring-2 ring-brand-purple' : 'opacity-70'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <span className="text-2xl font-bold text-brand-purple">{formattedPrice}</span>
            </div>
            
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded">
                {product.condition}
              </span>
              <span className="text-gray-500">
                {daysRemaining > 0 ? `${daysRemaining} days left` : 'Expired'}
              </span>
              <span className="text-gray-500">
                {product.location}
              </span>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
            </div>
            
            {/* Tags */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {product.hashtags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Seller Information */}
            <div className="mt-6 border-t pt-6">
              <h2 className="text-xl font-semibold mb-2">Seller Information</h2>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  {seller.profileImage ? (
                    <img 
                      src={seller.profileImage} 
                      alt={seller.name} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brand-purple text-white">
                      {seller.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{seller.name}</h3>
                  <p className="text-gray-600 text-sm">Member since {new Date().getFullYear()}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-brand-purple hover:bg-brand-purple/90 flex-1">
                <MessageSquare className="mr-2 h-4 w-4" /> Contact Seller
              </Button>
              <Button variant="outline" className="flex-1">
                <Heart className="mr-2 h-4 w-4" /> Save
              </Button>
              <Button variant="outline" className="flex-1">
                <Share className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => 
                p.id !== product.id && 
                (p.category === product.category || 
                p.hashtags.some(tag => product.hashtags.includes(tag)))
              )
              .slice(0, 4)
              .map(relatedProduct => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-800 group-hover:text-brand-purple transition-colors truncate">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-brand-purple font-semibold text-sm">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          }).format(relatedProduct.price)}
                        </span>
                        <span className="text-xs text-gray-500">{relatedProduct.condition}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
