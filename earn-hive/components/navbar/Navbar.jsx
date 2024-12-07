"use client"
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';
import './navbarStyle.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  
  const handleLogout = () => {
    console.log("Logging out...");
   
  };

  return (
    <nav>
      <ul>
        <li>Shop</li>
        <li>Affiliates</li>
        <li>Leaderboards</li>
        <li>Support</li>
      </ul>

      <div className="details">
        <div className="balance">
          <div className="bee-balance flex flex-row items-center gap-2">
            0.00
            <Image
              src="https://res.cloudinary.com/dwedz2laa/image/upload/v1733558513/image_1_1_qtrtfe.png"
              width={28}
              height={28}
              className="ml-2"
              alt="Bee Balance"
            />
          </div>
          <div className="usd-balance">0.00 USD</div>
        </div>

        <div className="user flex flex-row items-center gap-2 justify-center relative" onClick={toggleDropdown}>
          <span className="user-icon">
            <FaUser />
          </span>

          <h4>Thomas Christ</h4>
          <span  className="cursor-pointer">
            <FaChevronDown />
          </span>

          {isDropdownOpen && (
            <div className="dropdown absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-40 z-10">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
