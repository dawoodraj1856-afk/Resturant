"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-black sticky top-0 z-50">
      {/* Logo / Title */}
      <div className="relative flex justify-center items-center pt-2 px-4">
        <h1 className="text-center font-extrabold text-4xl sm:text-5xl md:text-6xl">
          <span className="logo-outline text-yellow-400">FADERALIST</span>
          <span className="text-yellow-400 ml-2">PIG</span>
        </h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden absolute right-4 text-yellow-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon when open
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
              }
            />
          </svg>
        </button>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`flex flex-col sm:flex-row flex-wrap justify-center gap-2 px-2 pb-2 mt-5 transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <Link href="/menus">
          <button className="font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black px-2 h-9 w-full sm:w-auto">
            MENUS
          </button>
        </Link>
        <Link href="/catering">
          <button className="font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black px-2 h-9 w-full sm:w-auto">
            CATERING
          </button>
        </Link>
        <Link href="/location">
          <button className="font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black px-2 h-9 w-full sm:w-auto">
            LOCATION
          </button>
        </Link>
        <Link href="/profile">
          <button className="font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black px-2 h-9 w-full sm:w-auto">
            PROFILE
          </button>
        </Link>
        <Link href="/orderonline">
          <button className="font-bold text-yellow-400 border-2 border-yellow-400 px-2 h-9 hover:bg-yellow-400 hover:text-black w-full sm:w-auto">
            ORDER ONLINE
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
