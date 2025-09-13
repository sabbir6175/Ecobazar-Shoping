import React, { useEffect, useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

// ধরলাম তুমি products.json ও categories.json public ফোল্ডারে রাখছো
// products.json হলো আগের বড় JSON যেটা তুমি দিয়েছিলে

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set()); // multiple select possible
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    fetch("/ProductCategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        // ডিফল্ট সিলেক্ট প্রথম ক্যাটেগরি
        if (data.categories.length > 0) {
          setSelectedCategories(new Set([data.categories[0].name]));
        }
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // Fetch products
  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Update filteredProducts on selectedCategories or products change
  useEffect(() => {
    if (selectedCategories.size === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => selectedCategories.has(p.category))
      );
    }
  }, [selectedCategories, products]);

  // Toggle category selection (checkbox)
  const toggleCategory = (categoryName) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(categoryName)) {
      newSelected.delete(categoryName);
    } else {
      newSelected.add(categoryName);
    }
    setSelectedCategories(newSelected);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar Filters */}
      <aside className="space-y-6 md:col-span-1">
        {/* Filter Button (Optional) */}
        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
          Filter
        </button>

        {/* Category */}
        <div>
          <h4 className="font-semibold mb-2">All Categories</h4>
          <ul className="space-y-1 text-sm max-h-48 overflow-y-auto">
            {categories.map((cat) => (
              <li key={cat.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.has(cat.name)}
                  onChange={() => toggleCategory(cat.name)}
                  id={`cat-${cat.id}`}
                  className="cursor-pointer"
                />
                <label htmlFor={`cat-${cat.id}`} className="cursor-pointer">
                  {cat.name} ({cat.products_count})
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Slider */}
        <div>
          <h4 className="font-semibold mb-2">Price</h4>
          <input type="range" min="0" max="100" className="w-full" />
          <p className="text-sm mt-1">Price: $20 – $150</p>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-semibold mb-2">Rating</h4>
          <ul className="text-sm space-y-1">
            <li>
              <input type="checkbox" checked /> ⭐⭐⭐⭐⭐
            </li>
            <li>
              <input type="checkbox" /> ⭐⭐⭐⭐ & up
            </li>
            <li>
              <input type="checkbox" /> ⭐⭐⭐ & up
            </li>
            <li>
              <input type="checkbox" /> ⭐⭐ & up
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div>
          <h4 className="font-semibold mb-2">Popular Tag</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 border rounded">Healthy</span>
            <span className="px-2 py-1 border rounded">Low Fat</span>
            <span className="px-2 py-1 border rounded">Vegetarian</span>
            <span className="px-2 py-1 border rounded">Vitamins</span>
            <span className="px-2 py-1 border rounded">Fresh</span>
          </div>
        </div>

        {/* Offer Box */}
        <div className="bg-orange-100 p-4 rounded text-center">
          <h4 className="text-sm font-semibold mb-2">79% Discount</h4>
          <p className="text-xs mb-3">On your first order</p>
          <button className="bg-green-500 text-white text-xs px-3 py-1 rounded">
            Shop Now
          </button>
          <img
            src="/images/discount.png"
            alt="Discount"
            className="mt-3 mx-auto max-h-20 object-contain"
          />
        </div>

        {/* Sale Products */}
        <div>
          <h4 className="font-semibold mb-2">Sale Products</h4>
          <ul className="space-y-3 text-sm">
            {/* সেল প্রোডাক্টস ডাইনামিক করলে ভালো হয়, এখানে স্ট্যাটিক */}
            <li className="flex items-center justify-between">
              <span>Red Capsicum</span>
              <span className="text-red-500 line-through">$20.00</span>
              <span>$14.99</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Chinese Cabbage</span>
              <span className="text-red-500 line-through">$22.00</span>
              <span>$14.99</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="md:col-span-3">
        {/* Sort bar */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            {filteredProducts.length} Results Found
          </p>
          <select className="border rounded px-3 py-1 text-sm">
            <option>Sort by: Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p>No products found in selected categories.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-green-300 rounded-md p-4 w-full max-w-xs relative group shadow-sm hover:shadow-md transition"
              >
                {/* Icons top right */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 text-gray-400 text-sm">
                  <button className="hover:text-red-500">
                    <FaHeart />
                  </button>
                  <button className="hover:text-green-500">
                    <FaEye />
                  </button>
                </div>

                {/* Product Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="mx-auto h-28 object-contain"
                />

                {/* Product Info */}
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h3 className="text-sm mt-3 text-green-700 font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold mt-1">
                      {product.price.discounted_price}
                    </p>

                    {/* Rating (dummy here, as no rating data) */}
                    <div className="flex mt-1 text-yellow-400 text-sm">
                      <span>⭐⭐⭐⭐☆</span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/src/assets/Add To Cart.png"
                      alt="Add To Cart"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
