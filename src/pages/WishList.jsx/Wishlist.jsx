import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Wishlist = () => {
  return (
    <>
     <Helmet>
        <title>EcoBazar Shopping | Wishlist </title>
      </Helmet>
      <div className=" p-2">
        <h1 className="text-3xl font-semibold mb-6 text-center">My Wishlist</h1>

        {/* Table Structure */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 font-normal text-gray-500 text-sm">
                  ORDER ID
                </th>
                <th className="p-4 font-normal text-gray-500 text-sm">DATE</th>
                <th className="p-4 font-normal text-gray-500 text-sm">TOTAL</th>
                <th className="p-4 font-normal text-gray-500 text-sm">
                  STATUS
                </th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Green Capsicum */}
              <tr className="border-b">
                <td className="px-4 md:px-6 py-4 flex items-center space-x-4 text-left">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg"
                    alt="Green Capsicum"
                    className="w-8 h-8 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-medium text-base">Green Capsicum</h2>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4  text-left text-base font-semibold">
                  $14.99
                </td>
                <td className="px-4 md:px-6 py-4 text-left">
                  <span className="text-green-500 font-medium">In Stock</span>
                </td>
                <td className="px-4 md:px-6 py-4 flex justify-start items-center space-x-4">
                  <button className="bg-green-500 text-white px-2 py-2 rounded-md">
                    Add to Cart
                  </button>
                  <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-400">
                    <IoMdCloseCircle className="text-red-400 text-xl" />
                  </button>
                </td>
              </tr>

              {/* Row 2: Chinese Cabbage */}
              <tr className="border-b">
                <td className="px-4 md:px-6 py-4 flex items-center space-x-4 text-left">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ387KzP_2pJ3y63IU7-FhZ_cNvljTOsS_ig&s"
                    alt="Chinese Cabbage"
                    className="w-8 h-8  object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-medium text-base">Chinese Cabbage</h2>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 text-left text-base font-semibold">
                  $45.00
                </td>
                <td className="px-4 md:px-6 py-4 text-left">
                  <span className="text-green-500 font-medium">In Stock</span>
                </td>
                <td className="px-4 md:px-6 py-4 flex justify-start items-center space-x-4">
                  <button className="bg-green-500 text-white px-2 py-2 rounded-md">
                    Add to Cart
                  </button>
                  <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-400">
                    <IoMdCloseCircle className="text-red-400 text-xl" />
                  </button>
                </td>
              </tr>

              {/* Row 3: Fresh Sujpuri Mango */}
              <tr className="">
                <td className="px-4 md:px-6 py-4 flex items-center space-x-4 text-left">
                  <img
                    src="https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg"
                    alt="Fresh Sujpuri Mango"
                    className="w-8 h-8  object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-medium text-base">
                      Fresh Sujpuri Mango
                    </h2>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 text-left text-base font-semibold">
                  $9.00
                </td>
                <td className="px-4 md:px-6 py-4 text-left">
                  <span className="text-red-500 font-medium">Out of Stock</span>
                </td>
                <td className="px-4 md:px-6 py-4 flex justify-start items-center space-x-4">
                  <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-md cursor-not-allowed">
                    Out of Stock
                  </button>
                  <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full cursor-not-allowed">
                    <IoMdCloseCircle className="text-red-400 text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Social Share Section */}
        <div className="flex justify-center space-x-4 mt-6">
          <h2 className="text-base font-medium">Share : </h2>
          <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
            <FaFacebookF />
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-full hover:bg-green-600">
            <FaTwitter />
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-full hover:bg-green-600">
            <FaPinterest />
          </button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
