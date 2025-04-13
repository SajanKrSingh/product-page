"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === selectedCategory) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/?${params.toString()}`);
    setShowDropdown(false);
  };

  return (
    <aside className="w-full lg:w-1/4 px-6 mb-12 lg:mb-0">
      <h2 className="text-xl font-bold text-black mb-4">Sort Items</h2>
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-gray-100 px-4 py-2 rounded-md w-full text-black text-left font-medium"
        >
          {selectedCategory || "Select Category"}
        </button>
        {showDropdown && (
          <ul className="bg-white border rounded-md mt-2 shadow">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-black ${
                    selectedCategory === cat ? "font-bold" : ""
                  }`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden lg:block">
        <h3 className="text-lg font-semibold text-black mb-2">Categories</h3>
        <ul className="space-y-2 text-black">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`text-left w-full text-black hover:font-semibold ${
                  selectedCategory === cat ? "font-bold underline" : ""
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
