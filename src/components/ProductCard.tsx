
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../lib/mock-data";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Format price to have two decimal places
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  // Calculate days remaining
  const daysRemaining = Math.ceil(
    (new Date(product.expiresAt).getTime() - new Date().getTime()) / 
    (1000 * 60 * 60 * 24)
  );

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
          />
          <div className="absolute top-2 right-2 bg-white py-1 px-2 rounded text-xs font-medium">
            {product.condition}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800 group-hover:text-brand-purple transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="font-bold text-brand-purple">{formattedPrice}</span>
          </div>
          
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-gray-500">{product.category}</span>
            <span className="text-gray-500">{daysRemaining > 0 ? `${daysRemaining} days left` : 'Expired'}</span>
          </div>
          
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.hashtags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
