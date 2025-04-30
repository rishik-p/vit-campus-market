
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { mockProducts, Product } from "../lib/mock-data";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter state
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "all",
    priceRange: [0, 2000] as [number, number],
    condition: "all",
    searchTerm: searchParams.get("q") || "",
  });

  // Apply filters
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      let results = [...mockProducts];

      // Filter by category
      if (filters.category !== "all") {
        results = results.filter(
          (product) => product.category === filters.category
        );
      }

      // Filter by price range
      results = results.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      // Filter by condition
      if (filters.condition !== "all") {
        results = results.filter(
          (product) => product.condition === filters.condition
        );
      }

      // Filter by search term
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        results = results.filter(
          (product) =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.hashtags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      }

      setFilteredProducts(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  // Update filters
  const handleFilterChange = (newFilters: {
    category: string;
    priceRange: [number, number];
    condition: string;
    searchTerm: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Browse Listings</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="md:col-span-1">
              <ProductFilter onFilterChange={handleFilterChange} />
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((placeholder) => (
                    <div
                      key={placeholder}
                      className="h-[350px] bg-gray-200 animate-pulse rounded-lg"
                    ></div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-4">
                    Showing {filteredProducts.length} results
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
