import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Heart,
  CheckCircle2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ShoppingCart,
} from "lucide-react";
import NewsletterSubscribe from "../../Components/NewsletterSubscribe ";
import { FaStar, FaHeart, FaShoppingBag } from 'react-icons/fa';

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

const product = {
  id: 1,
  name: "Chinese Cabbage",
  price: 17.28,
  oldPrice: 48.0,
  discount: 64,
  status: "In Stock",
  sku: "254964",
  reviews: 4,
  brand: "Fresh Farm",
  image:
    "https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/133/di133_kv_okinawan-island-vegetables.webp",
  description:
    "Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.",
  tags: ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
  related: [
    {
      id: 2,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 19.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItdunKKrV-8fQutsMrMnVLuRdWpUOuA7-g&s",
      discount: 50,
    },
    {
      id: 3,
      name: "Cauliflower",
      price: 14.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMsreLavs85BsvcYp7ctra4eumvdwSBckzg&s",
    },
    {
      id: 4,
      name: "Green Capsicum",
      price: 14.99,
      image:
        "https://images.everydayhealth.com/images/diet-nutrition/surprising-side-effects-of-eating-vegetables-1440x810.jpg?sfvrsn=7746adb5_5",
    },
    {
      id: 5,
      name: "Ladies Finger",
      price: 14.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZYREBYWTkXV9DlKltR7FznU975XiBFW8pA&s",
    },
  ],
};

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-[350px] h-[280px] object-contain"
            />
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={product.image}
                  alt="thumb"
                  className="w-20 h-20 border rounded-lg object-cover cursor-pointer hover:border-green-500"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-500">
                {product.reviews} Reviews
              </span>
              <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              <span className="text-sm text-green-600 font-medium">
                {product.status}
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="line-through text-gray-400">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                {product.discount}% Off
              </span>
            </div>

            {/* Brand & Share */}
            <div className="mt-4 flex items-center gap-5">
              <p className="text-sm">
                Brand: <span className="font-medium">{product.brand}</span>
              </p>
              <div className="flex items-center gap-2">
                <Share2 size={16} className="text-gray-500" />
                <Facebook size={16} className="cursor-pointer text-blue-600" />
                <Twitter size={16} className="cursor-pointer text-sky-500" />
                <Linkedin size={16} className="cursor-pointer text-blue-800" />
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4 mt-6">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 border rounded-lg text-center py-2"
              />
              <Link to="/shoppingCart">
                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </Link>
              <button className="p-3 border rounded-lg hover:bg-gray-100">
                <Heart size={18} />
              </button>
            </div>

            {/* Category & Tags */}
            <div className="mt-6 text-sm text-gray-600">
              <p>
                Category: <span className="font-medium">Vegetables</span>
              </p>
              <p className="mt-2">Tags: {product.tags.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12  pt-8">
          <div className="flex gap-6  pb-2 mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`font-medium text-sm md:text-xl border-b-2 pb-1 ${
                activeTab === "description"
                  ? "text-green-600 border-green-600"
                  : "text-gray-500 border-transparent hover:text-green-600"
              }`}
            >
              Descriptions
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`font-medium text-sm md:text-xl border-b-2 pb-1 ${
                activeTab === "additional"
                  ? "text-green-600 border-green-600"
                  : "text-gray-500 border-transparent hover:text-green-600"
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab("feedback")}
              className={`font-medium text-sm md:text-xl border-b-2 pb-1 ${
                activeTab === "feedback"
                  ? "text-green-600 border-green-600"
                  : "text-gray-500 border-transparent hover:text-green-600"
              }`}
            >
              Customer Feedback
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {activeTab === "description" && (
              <>
                <div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" size={18} /> 100 g of fresh leaves provides.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" size={18} /> Aliquam ac est at augue volutpat elementum.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" size={18} /> Quisque nec enim eget sapien molestie.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" size={18} /> Proin convallis odio volutpat finibus posuere.
                    </li>
                  </ul>
                  <span className="text-base text-gray-700 ">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dFqcE7NP9RQ?si=9kepjETdzIS8RBoE"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="  text-center relative shadow  rounded-lg p-4 bg-white transition hover:shadow-md ">
                      <p className="font-bold text-green-600">69% Discount</p>
                      <p className="text-xs text-gray-500">Save your money</p>
                    </div>
                    <div className="  text-center relative shadow  rounded-lg p-4 bg-white transition hover:shadow-md ">
                      <p className="font-bold text-green-600">100% Organic</p>
                      <p className="text-xs text-gray-500">
                        Fresh organic veggies
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "additional" && (
              <div className="col-span-2 text-gray-700">
                <h4 className="text-lg font-semibold mb-3">
                  Additional Information
                </h4>
                <ul className="space-y-2">
                  <li>
                    <strong>Weight:</strong> 500g
                  </li>
                  <li>
                    <strong>Dimensions:</strong> 20cm x 10cm x 5cm
                  </li>
                  <li>
                    <strong>Country of Origin:</strong> Japan
                  </li>
                  <li>
                    <strong>Storage:</strong> Keep refrigerated
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="col-span-2 text-gray-700">
                <h4 className="text-lg font-semibold mb-3">
                  Customer Feedback
                </h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-medium">🌟🌟🌟🌟🌟</p>
                    <p className="text-sm mt-2">
                      "Very fresh and good quality!"
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-medium">🌟🌟🌟🌟</p>
                    <p className="text-sm mt-2">
                      "Nice taste, arrived quickly."
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-medium">🌟🌟🌟</p>
                    <p className="text-sm mt-2">
                      "Good, but packaging could be better."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <div className="py-12 px-4 lg:px-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Related Products</h2>
             
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`relative shadow  rounded-lg p-4 bg-white transition hover:shadow-md `}
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
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h4>

                  {/* Pricing */}
                  <div className="text-sm text-gray-700 mb-1">
                    <span className="font-bold text-black">
                      ${product.price.toFixed(2)}
                    </span>{" "}
                    {product.oldPrice && (
                      <span className="line-through text-gray-400 ml-1">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={i < product.rating ? "" : "text-gray-300"}
                      />
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
        </div>
      </div>
      <NewsletterSubscribe></NewsletterSubscribe>
    </>
  );
};
export default ProductDetails;
