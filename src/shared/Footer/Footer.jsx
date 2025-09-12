import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaCcVisa,
  FaCcApplePay,
  FaLock,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import footerLogo from "../../assets/footerLogo.png";
import masterCardLogo from "../../assets/Mastercard.png";
import footerBg from "../../assets/FooterBg.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#111111] text-gray-300 relative overflow-hidden mt-8 bg-no-repeat bg-cover  "
  style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Main Footer Wrapper */}
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-center  gap-10 relative z-10">
        {/* ==== Left Section ==== */}
        <div className="md:w-1/4">
          <h2 className="flex items-center gap-2 text-white text-2xl font-bold mb-4">
            <img src={footerLogo} alt="Logo" className="h-8 w-8" />
            Ecobazar
          </h2>
          <p className="text-sm leading-relaxed mb-6 px-10">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magn.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg text-white">
            <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-500">
              <FaPinterestP />
            </a>
            <a href="#" className="hover:text-green-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ==== Middle Section (3 columns) ==== */}
        <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* My Account */}
          <div>
            <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
              My Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
              Helps
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
              Proxy
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
        </div>

        {/* ==== Right Section (App Download) ==== */}
        <div className="md:w-1/3">
          <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
            Download Mobile App
          </h3>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* App Store */}
            <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
              <FaApple className="text-2xl text-white" />
              <div>
                <span className="text-xs text-gray-300">Download on the</span>
                <h2 className="text-sm text-white font-bold">App Store</h2>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
              <FaGooglePlay className="text-2xl text-white" />
              <div>
                <span className="text-xs text-gray-300">Download on the</span>
                <h2 className="text-sm text-white font-bold">Google Play</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <div className="border-t border-gray-700 px-6 py-4 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>

          {/* Payments */}
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <FaCcApplePay className="text-2xl" />
              <FaCcVisa className="text-2xl" />
              <img src={masterCardLogo} alt="Mastercard" className="h-6 w-auto" />
            </div>

            {/* Secure Label */}
            <div className="flex items-center gap-1 border border-gray-400 rounded px-2 py-1 text-xs bg-gray-800">
              <FaLock className="text-green-500 text-sm" />
              <span className="font-medium text-gray-200">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
