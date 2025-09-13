import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const NewsletterSubscribe = () => {
  return (
    <section className=" py-10 px-5 md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side: Title and subtitle */}
        <div className="flex flex-col text-left max-w-md">
          <h3 className="font-bold text-base md:text-xl lg:text-3xl mb-3">Subscribe our Newsletter</h3>
          <p className="text-xs text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu massa.
          </p>
        </div>

        <div className="flex flex-col md:flex-row  justify-center items-center gap-3">
          {/* Middle: Email input + button */}
          <form
            className="flex  "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow  px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded-r-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
          {/* Right side: Social icons */}
          <div className="flex space-x-5 text-green-600 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-green-800">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-800">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-green-800">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-800">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
