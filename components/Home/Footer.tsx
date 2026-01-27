"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col md:flex-row items-center md:items-start justify-between px-6 sm:px-10 py-6 gap-6">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-lg font-bold">RESTAURANT WEBSITE</h2>
        <h2 className="text-lg font-bold mt-1">TRUST US!</h2>
      </div>

      <div className="flex-1 text-center mb-2 md:mb-0">
        <a href="#" className="text-yellow-500 text-sm hover:underline">
          POWERED BY BANTOBOX
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/awards">AWARDS</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/careers">CAREERS</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/terms">TERMS</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/privacy">PRIVACY</Link>
          </li>
        </ul>

        <Link href={"/signup"}>
          <button className="font-bold text-yellow-400 border-2 border-yellow-400 px-4 py-2 hover:bg-yellow-400 hover:text-black mt-2 md:mt-0">
            EMAIL SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
