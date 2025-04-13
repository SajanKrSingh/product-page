"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Shop", "Hello", "Stories", "About", "Contact Us"];

  return (
    <header className="border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-16">
        {/* Logo + Nav */}
        <div className="flex items-center space-x-6">
          <img src="/image.png" alt="Logo" className="w-10 h-10" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <i className="fas fa-search text-gray-700 text-lg"></i>
          <i className="fas fa-user text-gray-700 text-lg"></i>
          <i className="fas fa-shopping-cart text-gray-700 text-lg"></i>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
