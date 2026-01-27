"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = ["/2148308806.jpg", "/2151910280.jpg", "/3341.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="hero image"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black/40 px-4 sm:px-6">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          NEW WINTER ITEM HAVE <br />
          ARRIVED!
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg mt-2 mb-4">
          We create amazing experiences in our limiting time.
        </p>
        <Link href="/catering">
          <button className="font-bold text-yellow-400 border-2 border-amber-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base">
            EXPLORE EVENT CATERINGS
          </button>
        </Link>
      </div>

      <button
        onClick={prevSlide}
        className="absolute z-20 left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-lg sm:text-xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-lg sm:text-xl"
      >
        ❯
      </button>
    </div>
  );
}
