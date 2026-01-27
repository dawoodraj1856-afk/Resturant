import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";

const Specials = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      {/* Page Title */}
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mt-16 sm:mt-20 px-4">
        MENUS
      </h1>

      {/* Intro Text */}
      <p className="max-w-3xl mx-auto text-center mt-6 px-4">
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

      {/* Specials Grid */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 px-4 mt-10">
        {/* Shares */}
        <div>
          <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">Shares</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                BBQ Jalapeno Popper Wontons
              </h3>
              <p className="font-semibold mt-1">
                5pc - pulled pork, cream cheese, cheddar cheese, chopped
                jalapeños, fresh herbs in a crispy wonton shell. Served with
                sweet chile-garlic sauce.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                Smoked Oxtail Empanadas
              </h3>
              <p className="font-semibold mt-1">
                Smoked and braised oxtail, pimentos, potato, fresh herbs, melty
                cheese in a crispy shell. Served with chimichurri sauce.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">THE FEDRIB</h3>
              <p className="font-semibold mt-1">
                Smoked + glazed deboned baby back ribs topped with pickles,
                onions, and Sticky Garlic sauce on a hoagie roll.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                House Made Chips + Smoky Queso
              </h3>
              <p className="font-semibold mt-1">
                Add brisket chili to queso +$2
              </p>
            </div>
          </div>
        </div>

        {/* Chef's Specials */}
        <div>
          <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">
            Chef's Specials
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                FedPig Pork Belly Ramen
              </h3>
              <p className="font-semibold mt-1">
                Pork broth, marinated egg, scallions, shiitake mushrooms,
                kimchi, nori, togarashi.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                Pizza Specials - THE FEDRIB
              </h3>
              <p className="font-semibold mt-1">
                Smoked + glazed deboned baby back ribs topped with pickles,
                onions, and Sticky Garlic sauce on a hoagie roll.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">
                The KC Mushroompiece
              </h3>
              <p className="font-semibold mt-1">
                Smoked + glazed deboned baby back ribs topped with pickles,
                onions, and Sticky Garlic sauce on a hoagie roll.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">Sides</h3>
              <ul className="font-semibold mt-1 list-disc list-inside space-y-1">
                <li>Candy Yam Mash</li>
                <li>Street Corn Salad</li>
                <li>Smoky Brisket Chili</li>
                <li>Chili Mac</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">Desserts</h3>
              <p className="font-semibold mt-1">
                Smoked + glazed deboned baby back ribs topped with pickles,
                onions, and Sticky Garlic sauce on a hoagie roll.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="flex justify-center mt-10 mb-10">
        <a href="#" className="text-black text-lg font-bold hover:underline">
          MANAGE CONSENT PREFERENCE
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Specials;
