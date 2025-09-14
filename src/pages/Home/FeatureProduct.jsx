import React from 'react';
import { FaStar, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Apple from "../../assets/Apple.png";
import Cabbage from "../../assets/Cabbage.png"; 
import Capsicum from "../../assets/Capsicum.png"; 
import Finger from "../../assets/Finger.png"; 

const products = [
  {
    id: 1,
    name: 'Green Apple',
    price: 14.99,
    oldPrice: 29.99,
    image: Apple,
    rating: 4,
    isOnSale: true,
    isHighlighted: true,
  },
  {
    id: 2,
    name: 'Chinese Cabbage',
    price: 14.99,
    image: Cabbage,
    rating: 4,
  },
  {
    id: 3,
    name: 'Green Capsicum',
    price: 14.99,
    image: Capsicum,
    rating: 4,
    isSelected: true,
  },
  {
    id: 4,
    name: 'Ladies Finger',
    price: 14.99,
    image: Finger,
    rating: 3,
  },
];

const FeatureProduct = () => {
  return (
    <div className="py-12 px-4 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <Link
          to="/shop"
          className="text-green-600 font-medium hover:underline flex items-center gap-1"
        >
          View All →
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative  rounded-lg p-4 bg-white transition hover:shadow-md `}
          >
            {/* Sale badge */}
            {product.isOnSale && (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                Sale 50%
              </div>
            )}

            {/* Wishlist icon */}
            <div className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer">
              <FaHeart />
            </div>

            {/* Product image */}
            <div className="w-full h-40 flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Product details */}
            <h4 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h4>

            {/* Pricing */}
            <div className="text-sm text-gray-700 mb-1">
              <span className="font-bold text-black">${product.price.toFixed(2)}</span>{' '}
              {product.oldPrice && (
                <span className="line-through text-gray-400 ml-1">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={i < product.rating ? '' : 'text-gray-300'} />
              ))}
            </div>

            {/* Cart Icon */}
            <div className="absolute bottom-4 right-4 w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-green-500 hover:text-white text-gray-600 rounded-full transition">
              <FaShoppingBag size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
