import { Link } from "react-router-dom";
import { FaUserAlt, FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

import { FiPhoneCall } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import TopBar from "../../Component/TopBar";

const Navbar = () => {
  return (
    <>
    <header>
      <TopBar></TopBar>
    </header>
      <nav className="bg-white  py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Left section (Menu) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-500">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-green-500">
              Shop
            </Link>
            <Link to="/pages" className="text-gray-700 hover:text-green-500">
              Pages
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-500">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500">
              About Us
            </Link>
          </div>

          {/* Center section (Logo) */}
          <div className="flex items-center justify-center flex-1">
            <Link
              to="/"
              className="text-2xl font-bold text-green-500 flex items-center"
            >
              <span className="mr-2">🌱</span> Ecobazar
            </Link>
          </div>

          {/* Right section (Icons & Phone) */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-row items-center  hover:text-green-500">
              <FiPhoneCall className="text-2xl" />
              <span className="ml-2">(219) 555-0114</span>
            </div>
            <GoSearch className=" hover:text-green-500 text-2xl" />
            <FaRegHeart className=" hover:text-green-500 text-2xl" />
            <div className="relative">
              <AiOutlineShopping className="text-2xl hover:text-green-500" />
              <span className="absolute top-0 right-0 bg-green-500 text-white text-sm rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <FaRegUser className=" hover:text-green-500 text-2xl" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between mt-4">
          <div className=" hover:text-green-500">
            <GoSearch />
          </div>
          <div className=" hover:text-green-500">
            <FaRegHeart />
          </div>
          <div className=" hover:text-green-500">
            <AiOutlineShopping />
          </div>
          <div className=" hover:text-green-500 ">
            <CiUser className="text-xl" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
