import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";

const Caterings = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      {/* Page Title */}
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mt-16 sm:mt-20 px-4">
        MENUS
      </h1>

      <p className="max-w-3xl mx-auto text-center mt-6 px-4 text-black">
        A culinary tour of BBQ traditions from around this great nation and this
        beautiful planet. 1.8 million years ago, humans first began cooking meat
        with fire. For some reason, this hasn’t led to world peace, but we’re
        pretty sure if we fire up enough BBQ, it will.
      </p>

      {/* Menu Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 px-4">
        <Link href="/menus">
          <button className="text-black font-bold p-2 min-w-[90px] sm:min-w-[120px] border-black border-2 hover:bg-black hover:text-yellow-400">
            MENU
          </button>
        </Link>
        <Link href="/menus/specials">
          <button className="text-black font-bold p-2 min-w-[90px] sm:min-w-[120px] border-black border-2 hover:bg-black hover:text-yellow-400">
            SPECIALS
          </button>
        </Link>
        <Link href="/menus/happyhour">
          <button className="text-black font-bold p-2 min-w-[90px] sm:min-w-[140px] border-black border-2 hover:bg-black hover:text-yellow-400">
            HAPPY HOUR
          </button>
        </Link>
        <Link href="/menus/lunchcombos">
          <button className="text-black font-bold p-2 min-w-[90px] sm:min-w-[150px] border-black border-2 hover:bg-black hover:text-yellow-400">
            LUNCH COMBOS
          </button>
        </Link>
        <Link href="/menus/caterings">
          <button className="p-2 min-w-[90px] sm:min-w-[120px] border-black border-2 font-bold hover:bg-black hover:text-yellow-400">
            CATERINGS
          </button>
        </Link>
      </div>

      {/* Section Title */}
      <h1 className="font-bold text-2xl sm:text-4xl text-center mt-10 px-4">
        CATERINGS NOW
      </h1>

      <div className="flex justify-center mt-6">
        <button className="p-2 min-w-[100px] sm:min-w-[120px] border-black border-2 font-bold hover:bg-black hover:text-yellow-400">
          ORDER NOW
        </button>
      </div>

      {/* Catering Info */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <h1 className="font-extrabold text-3xl sm:text-5xl text-center sm:text-left mt-10">
          Inquire about <br /> Event Catering
        </h1>

        <p className="mt-4 text-black text-base sm:text-lg text-justify">
          Got a celebration coming up and need a hand—or maybe just a whole platter
          of ribs? No matter the size or style, we got you! Planning your big bash
          has never been this easy (or mouth-watering). Our catering crew isn’t just
          slingin' BBQ; we’re out here crafting legendary moments. From our
          slow-smoked, scratch-made eats to handpicked ingredients, we’ll build a
          feast as bold as your guest list and as flexible as your budget. Have our
          team (or our catering truck) at your next event! For groups smaller than
          40-50 people it’s typically easier to place the order yourself through
          our catering online ordering page. That way you can add or subtract from
          your cart based on your desired budget and menu requirements and easily
          set up your delivery or pick up order. We are always here for you if you
          have any questions!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 justify-center">
          <button className="font-bold border-black border-2 hover:bg-black p-2 min-w-[200px] sm:min-w-[220px] hover:text-yellow-400">
            START YOUR ORDER
          </button>
          <button className="font-bold border-black border-2 hover:bg-black p-2 min-w-[200px] sm:min-w-[220px] hover:text-yellow-400">
            CATERING DELIVERY INQUIRY
          </button>
          <button className="font-bold border-black border-2 hover:bg-black p-2 min-w-[200px] sm:min-w-[220px] hover:text-yellow-400">
            CATERING TAKEOUT INQUIRY
          </button>
        </div>
      </div>

      {/* Consent */}
      <div className="bg-yellow-400 flex justify-center mt-10 mb-10">
        <a href="#" className="text-black text-lg font-bold hover:underline">
          MANAGE CONSENT PREFERENCE
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Caterings;
