"use client";

import { useState } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const Location = () => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location,
  )}&output=embed`;

  const handleSearch = () => {
    if (input.trim() !== "") {
      setLocation(input);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-yellow-400">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Search Box */}
        <div className="md:w-1/3 flex justify-center items-center p-6 md:p-8">
          <div className="w-full max-w-sm bg-yellow-300 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Find Location
            </h2>

            <input
              type="text"
              placeholder="Enter location (e.g. Karachi)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 rounded-lg border border-yellow-500 focus:ring-2 focus:ring-yellow-600 outline-none mb-4 text-black"
            />

            <button
              onClick={handleSearch}
              className="w-full bg-black text-yellow-400 py-3 rounded-lg font-bold hover:bg-gray-900 transition"
            >
              Search Location
            </button>

            <p className="text-sm text-center text-black/70 mt-3">
              Example: Lahore, Karachi, Islamabad
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="md:w-2/3 h-80 md:h-auto relative">
          {location ? (
            <iframe
              src={mapUrl}
              className="w-full h-full rounded-2xl shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-black text-lg md:text-2xl font-bold">
              Enter a location to view map
            </div>
          )}
        </div>
      </div>

      {/* Consent link */}
      <div className="bg-yellow-400 flex justify-center mt-10 mb-10">
        <a href="#" className="text-black text-lg font-bold hover:underline">
          MANAGE CONSENT PREFERENCE
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
