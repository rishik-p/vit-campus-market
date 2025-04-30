
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search page with query
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-purple">Vit<span className="text-brand-coral">ReSell</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <Link to="/browse" className="hover:text-brand-purple transition-colors">
                Browse
              </Link>
              <Link to="/sell" className="hover:text-brand-purple transition-colors">
                Sell
              </Link>
              <Link to="/categories" className="hover:text-brand-purple transition-colors">
                Categories
              </Link>
              <Link to="/profile">
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="default" className="bg-brand-purple hover:bg-brand-purple/90">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <div className="flex flex-col space-y-3">
              <Link to="/browse" className="py-2 hover:text-brand-purple transition-colors" onClick={toggleMenu}>
                Browse
              </Link>
              <Link to="/sell" className="py-2 hover:text-brand-purple transition-colors" onClick={toggleMenu}>
                Sell
              </Link>
              <Link to="/categories" className="py-2 hover:text-brand-purple transition-colors" onClick={toggleMenu}>
                Categories
              </Link>
              <Link to="/profile" className="py-2 hover:text-brand-purple transition-colors" onClick={toggleMenu}>
                Profile
              </Link>
              <Link to="/cart" className="py-2 hover:text-brand-purple transition-colors" onClick={toggleMenu}>
                Cart
              </Link>
              <Link to="/login" className="py-2" onClick={toggleMenu}>
                <Button variant="default" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
