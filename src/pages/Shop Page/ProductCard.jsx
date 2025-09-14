
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <div className="group relative   rounded-lg p-4 bg-white transition hover:shadow-md overflow-hidden">
      {/* badges */}
      {product.status === "out-of-stock" && (
        <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-2 py-1 rounded">Out of Stock</div>
      )}
      {product.oldPrice && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</div>
      )}

      {/* image container */}
      <div className="h-40 flex items-center justify-center mb-3">
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>

      <h3 className="font-semibold text-gray-800">{product.name}</h3>

      <div className="flex items-center justify-between mt-2">
        <div>
          <div className="text-green-600 font-bold">${product.price.toFixed(2)}</div>
          {product.oldPrice && <div className="text-sm line-through text-gray-400">${product.oldPrice.toFixed(2)}</div>}
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">{product.rating}</span>
          <Star size={14} className="text-yellow-400" />
        </div>
      </div>

      {/* hover overlay */}
      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 rounded-2xl">
       <Link to="/productDetails">
        <button className="p-3 bg-green-600 text-white rounded-full shadow"><ShoppingCart size={18} /></button>
       </Link>
       <Link to="/wishlist">
        <button className="p-3 bg-white border rounded-full"><Heart size={18} /></button>
       </Link>
      </div>
    </div>
  );
}
export default ProductCart
