import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const Catering = () => {
  return (
    <>
      <Navbar />
      <div className="bg-amber-400">
        {/* Hero Section */}
        <div className="relative w-full">
          <img
            className="h-96 sm:h-[500px] md:h-[600px] w-full object-cover"
            src="/bgimg.avif"
            alt="Catering Background"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Caterings
            </h1>

            <p className="mt-4 max-w-2xl text-gray-200 text-base sm:text-lg leading-relaxed">
              Our meats are smoked for 12-24 hours, so for any special requests
              or off-site celebrations such as weddings or large parties, we'd
              prefer at least 48 hours' notice, but can usually accommodate
              parties of 75 or less with 24 hours’ notice. All Event Catering is
              available for Takeout & Delivery.
            </p>

            <button className="mt-6 px-6 py-3 font-bold border-yellow-400 border-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition w-full sm:w-auto">
              ORDER CREATING NOW
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 px-4 sm:px-10 md:px-20 py-10 bg-yellow-400">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              className="h-60 sm:h-80 md:h-[400px] w-full object-cover"
              src="/catreringimg.avif"
              alt="Catering Image"
            />
          </div>

          {/* Text & Buttons */}
          <div className="flex-1 flex flex-col">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
              Inquire about Event Catering
            </h1>
            <p className="font-semibold text-base sm:text-lg md:text-lg leading-relaxed mb-6">
              Got a celebration coming up and need a hand—or maybe just a whole
              platter of ribs? No matter the size or style, we got you! Planning
              your big bash has never been this easy (or mouth-watering). Our
              catering crew isn’t just slingin' BBQ; we’re crafting legendary
              moments. From our slow-smoked, scratch-made eats to handpicked
              ingredients, we’ll build a feast as bold as your guest list and as
              flexible as your budget. Have our team (or our catering truck) at
              your next event! For groups smaller than 40-50 people it’s
              typically easier to place the order yourself through our catering
              online ordering page. That way you can add or subtract from your
              cart based on your desired budget and menu requirements and easily
              set up your delivery or pick up order. We are always here for you
              if you have any questions!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="w-full sm:w-auto font-bold border-black border-2 hover:bg-black hover:text-yellow-400 px-4 py-2">
                START YOUR ORDER
              </button>
              <button className="w-full sm:w-auto font-bold border-black border-2 hover:bg-black hover:text-yellow-400 px-4 py-2">
                CATERING DELIVERY INQUIRY
              </button>
              <button className="w-full sm:w-auto font-bold border-black border-2 hover:bg-black hover:text-yellow-400 px-4 py-2">
                CATERING TAKEOUT INQUIRY
              </button>
            </div>
          </div>
        </div>

        {/* Consent Preference */}
        <div className="bg-yellow-400 flex justify-center mt-10 pb-10">
          <a
            href="#"
            className="text-black text-lg font-bold hover:underline text-center"
          >
            MANAGE CONSENT PREFERENCE
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Catering;
