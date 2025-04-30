
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

interface ProductFilterProps {
  onFilterChange: (filters: {
    category: string;
    priceRange: [number, number];
    condition: string;
    searchTerm: string;
  }) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [condition, setCondition] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      category,
      priceRange,
      condition,
      searchTerm,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Search */}
        <div className="mb-4">
          <label htmlFor="search" className="text-sm font-medium text-gray-700 block mb-1">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 block mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Condition */}
        <div className="mb-4">
          <label htmlFor="condition" className="text-sm font-medium text-gray-700 block mb-1">
            Condition
          </label>
          <select
            id="condition"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="all">All Conditions</option>
            <option value="new">New</option>
            <option value="like new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        {/* Apply Button */}
        <Button 
          type="submit" 
          className="w-full bg-brand-purple hover:bg-brand-purple/90"
        >
          Apply Filters
        </Button>
      </form>
    </div>
  );
};

export default ProductFilter;
