import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <>
      <div className="px-4 py-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          My Shopping Cart
        </h1>

        {/* Cart Items Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-6">
          {/* Left Column: Cart Items */}
          <div className="flex-1 bg-white shadow rounded-lg   overflow-x-auto">
            <table className=" table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-sm font-medium text-gray-500 text-left">
                    Product
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-500 text-left">
                    Price
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-500 text-left">
                    Quantity
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-500 text-left">
                    Subtotal
                  </th>
                  <th className="px-4  py-2 text-sm font-medium text-gray-500 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Green Capsicum */}
                <tr className="border-b">
                  <td className="px-2 md:px-4 py-2 md:py-4 flex items-center space-x-4">
                    <img
                      src="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg"
                      alt="Green Capsicum"
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <h2 className="font-medium text-xs md:text-sm">
                      Green Capsicum
                    </h2>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold">
                    $14.00
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4">
                    <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 w-fit space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 text-xl cursor-default">
                        -
                      </div>
                      <span className="text-xs md:text-sm  font-medium">5</span>
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 text-xl cursor-default">
                        +
                      </div>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm  font-semibold">
                    $70.00
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4">
                    <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
                      <FaTrash />
                    </button>
                  </td>
                </tr>

                {/* Row 2: Red Capsicum */}
                <tr className="border-b">
                  <td className="px-2 md:px-4 py-2 md:py-4 flex items-center space-x-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ387KzP_2pJ3y63IU7-FhZ_cNvljTOsS_ig&s"
                      alt="Red Capsicum"
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <h2 className="font-medium text-xs md:text-sm">
                      Red Capsicum
                    </h2>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold">
                    $14.00
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4">
                    <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 w-fit space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 text-xl cursor-default">
                        -
                      </div>
                      <span className="text-xs md:text-sm font-medium">5</span>
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 text-xl cursor-default">
                        +
                      </div>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm">
                    $14.00
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-4">
                    <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Buttons Below Table */}
            <div className="mt-4 flex flex-row  justify-between gap-4 px-4">
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full sm:w-auto">
                Return to Shop
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full sm:w-auto">
                Update Cart
              </button>
            </div>
          </div>

          {/* Right Column: Cart Summary */}
          <div className="w-full lg:w-60  shadow rounded-lg p-2 md:p-4">
            <h3 className="text-lg font-medium mb-4">Cart Total</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-semibold">$84.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-semibold text-green-500">$84.00</span>
              </div>
              <Link to="/checkout">
                <button className="bg-green-500 text-white px-2 rounded-full py-2  w-full mt-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Coupon Code Section */}
        <div className="mt-6">
          <div className="flex">
            <div className="w-full shadow rounded-lg p-4 sm:p-6">
              <label className="block text-sm font-medium text-gray-700">
                Coupon Code
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-2 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="border border-gray-300 px-4 py-2 w-full sm:w-auto flex-1 rounded-md"
                />
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default ShoppingCart;
