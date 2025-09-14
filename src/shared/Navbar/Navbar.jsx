import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import TopBar from "../../Components/TopBar";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shopping</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  return (
    <>
      <header>
        <TopBar />
      </header>

      <div className="bg-transparent backdrop-blur-3xl sticky top-0 !z-50 border-b border-gray-100 ">
        <div className="container mx-auto  ">
          {/* ==== Mobile & Tablet Navbar ==== */}
          <div className="navbar  px-4 py-2 lg:hidden flex justify-between items-center">
            {/* Logo Center */}
            <div className="flex-1 flex  ">
              <Link
                to="/"
                className="text-2xl font-bold text-green-500 flex items-center"
              >
                <span className="mr-2">🌱</span> Ecobazar
              </Link>
            </div>

            {/* Hamburger Menu (Right Side) */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60"
              >
                {/* Menu Items */}
                {link}

                {/* Icons in Dropdown */}
                <div className="flex justify-around pt-4 border-t mt-2">
                  <FiPhoneCall className="text-xl hover:text-green-500" />
                  <GoSearch className="text-xl hover:text-green-500" />
                  <FaRegHeart className="text-xl hover:text-green-500" />
                  <AiOutlineShopping className="text-xl hover:text-green-500" />
                  <FaRegUser className="text-xl hover:text-green-500" />
                </div>
              </ul>
            </div>
          </div>

          {/* ==== Desktop Navbar Layout ==== */}
          <div className="hidden lg:flex justify-between items-center  py-3">
            {/* Left: Navigation Menu */}
            <ul className="menu menu-horizontal space-x-4 text-gray-700">
              {link}
            </ul>

            {/* Center: Logo */}
            <div className="text-2xl font-bold text-green-500 flex items-center">
              <Link to={"/"}>
                {" "}
                <span className="mr-2">🌱</span> Ecobazar
              </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-green-500">
                <FiPhoneCall className="text-2xl" />
                <span className="ml-2 hidden xl:inline">(219) 555-0114</span>
              </div>
              <GoSearch className="text-2xl hover:text-green-500" />
              <Link to={"/wishlist"}>
                <FaRegHeart className="text-2xl hover:text-green-500" />
              </Link>

              <div className="relative">
                <Link to={"/shoppingCart"}>
                  <AiOutlineShopping className="text-2xl hover:text-green-500" />
                </Link>
                <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
              <Link to={"/signIn"}>
                <FaRegUser className="text-2xl hover:text-green-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
