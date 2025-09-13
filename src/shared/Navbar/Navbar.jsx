
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import TopBar from "../../Component/TopBar";

const Navbar = () => {
  return (
    <>
      <header>
        <TopBar />
      </header>

      {/* ==== Mobile & Tablet Navbar ==== */}
      <div className="navbar bg-white shadow-sm px-4 py-2 lg:hidden flex justify-between items-center">
        {/* Logo Center */}
        <div className="flex-1 flex  ">
          <Link to="/" className="text-2xl font-bold text-green-500 flex items-center">
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
           <li>
            <details>
              <summary>Home</summary>
              <ul className="p-2 bg-white shadow rounded-box">
                   <li><Link to="#">Category 1</Link></li>
                <li><Link to="#">Category 2</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Shop</summary>
              <ul className="p-2 bg-white shadow rounded-box">
                <li><Link to="/shop">Shopping</Link></li>
                
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2 bg-white shadow rounded-box">
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Register</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Blog</summary>
              <ul className="p-2 bg-white shadow rounded-box">
                 <li><Link to="#">Category 1</Link></li>
                <li><Link to="#">Category 2</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
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
      <div className="hidden lg:flex justify-between items-center bg-white shadow-sm px-6 py-3">
        {/* Left: Navigation Menu */}
        <ul className="menu menu-horizontal space-x-4 text-gray-700">
          <li>
            <details>
              <summary><Link to='/'>Home</Link></summary>
              <ul className="p-2 bg-white shadow rounded-box">
                   <li><Link to="#">Category 1</Link></li>
                <li><Link to="#">Category 2</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary> <li><Link to="/shop">Shopping</Link></li></summary>
              <ul className="p-2 bg-white shadow rounded-box">
                 
               
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2 bg-white shadow rounded-box">
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Register</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary> <li><Link to="/Blog">Blog</Link></li></summary>
              <ul className="p-2 bg-white shadow rounded-box">
                  <li><Link to="#">Category 1</Link></li>
                <li><Link to="#">Category 2</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Center: Logo */}
        <div className="text-2xl font-bold text-green-500 flex items-center">
         <Link to={'/'}> <span className="mr-2">🌱</span> Ecobazar</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center hover:text-green-500">
            <FiPhoneCall className="text-2xl" />
            <span className="ml-2 hidden xl:inline">(219) 555-0114</span>
          </div>
          <GoSearch className="text-2xl hover:text-green-500" />
          <FaRegHeart className="text-2xl hover:text-green-500" />
          <div className="relative">
            <AiOutlineShopping className="text-2xl hover:text-green-500" />
            <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <FaRegUser className="text-2xl hover:text-green-500" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
