import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";

const Happyhour = () => {
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

      {/* Happy Hour Info */}
      <div className="max-w-3xl mx-auto px-4 mt-10 text-center sm:text-left text-black">
        <h2 className="font-bold text-2xl sm:text-3xl">Dine-in Only</h2>
        <p className="mt-2">Monday-Friday 2:00PM - 6:00PM</p>

        <div className="mt-6 space-y-4">
          <h3 className="font-bold text-xl sm:text-2xl">$15 Draft Pitcher</h3>
          <h4 className="font-bold text-lg sm:text-xl mt-2">Zadie's Lager</h4>
          <p>Union Craft Brewing</p>

          <h4 className="font-bold text-lg sm:text-xl mt-4">Hazy IPA</h4>
          <p>Denizens Brewing</p>

          <h3 className="font-bold text-xl sm:text-2xl mt-6">
            Platter Special
          </h3>
          <h4 className="font-bold text-lg sm:text-xl mt-2">"One-Step"</h4>
          <p>Pick one smoked meat (1/3 lb) + one small side</p>

          <h3 className="font-bold text-xl sm:text-2xl mt-6">
            Half-priced Shares
          </h3>

          <h4 className="font-bold text-lg sm:text-xl mt-2">
            BBQ Jalapeno Popper Wontons
          </h4>
          <p>
            5pc - pulled pork, cream cheese, cheddar cheese, chopped jalapeños,
            fresh herbs stuffed into a crispy wonton shell. Served with sweet
            chile-garlic sauce.
          </p>

          <h4 className="font-bold text-lg sm:text-xl mt-2">
            Smoked Oxtail Empanadas
          </h4>
          <p>
            Smoked and braised oxtail, pimentos, potato, fresh herbs, and melty
            cheese in a crispy shell. Served with chimichurri sauce.
          </p>

          <h4 className="font-bold text-lg sm:text-xl mt-2">
            House Made Chips + Smoky Queso
          </h4>
          <p>Add brisket chili to queso +$2</p>

          <h4 className="font-bold text-lg sm:text-xl mt-2">Loaded Fries</h4>
          <p>
            Seasoned fries topped with pulled pork, melted cheese, ranch, and
            BBQ sauce.
          </p>
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

export default Happyhour;
