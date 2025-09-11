import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // For the location pin icon
import { IoIosArrowDown } from "react-icons/io"; // For the dropdown arrow icon

const TopBar = () => {
  return (
    <div className="bg[#EDF2EE] py-2 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Store Location */}
        <div className="flex items-center space-x-2 text-gray-700">
          <FaMapMarkerAlt className="text-lg text-green-500" />
          <span className="text-sm">
            Store Location: Lincoln - 344, Illinois, Chicago, USA
          </span>
        </div>

        {/* Language Dropdown */}

        {/* Currency Dropdown */}
        <div className="flex items-center space-x-4 text-gray-700">
          <div className="flex items-center space-x-4 text-gray-700">
            <span className="text-sm">Eng</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <span className="text-sm">USD</span>
          <IoIosArrowDown className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
