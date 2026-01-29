"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-yellow-400 sticky top-0 z-50 flex flex-col gap-4">
      <div className="relative flex justify-center items-center px-4 pt-4">
        <div className="w-full text-left md:text-center font-extrabold text-3xl sm:text-5xl md:text-6xl">
          <span className="logo-outline">FADERALIST</span>
          <span className="text-black ml-2">PIG</span>
        </div>

        <button
          className="sm:hidden absolute right-4 text-black focus:outline-none ml-2"
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
      <ul
        className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 pb-4 px-2 list-none transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <li>
          <Link href="/menus/specials">
            <button className="font-bold hover:bg-black hover:text-yellow-400 px-2 h-9 w-full sm:w-auto">
              MENUS
            </button>
          </Link>
        </li>

        <li>
          <Link href="/catering">
            <button className="font-bold hover:bg-black hover:text-yellow-400 px-2 h-9 w-full sm:w-auto">
              CATERING
            </button>
          </Link>
        </li>

        <li>
          <Link href="/location">
            <button className="font-bold hover:bg-black hover:text-yellow-400 px-2 h-9 w-full sm:w-auto">
              LOCATION
            </button>
          </Link>
        </li>

        <li>
          <Link href="/profile">
            <button className="font-bold hover:bg-black hover:text-yellow-400 px-2 h-9 w-full sm:w-auto">
              PROFILE
            </button>
          </Link>
        </li>

        <li>
          <Link href="/orderonline">
            <button className="font-bold border-2 border-black px-2 h-9 hover:bg-black hover:text-yellow-400 w-full sm:w-auto">
              ORDER ONLINE
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
