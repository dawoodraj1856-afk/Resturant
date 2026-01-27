import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";

const LunchCombos = () => {
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

      {/* Lunch Combo Info */}
      <div className="max-w-3xl mx-auto px-4 mt-10 text-center sm:text-left text-black">
        <p className="mb-4">
          Lunch combos are available Monday - Friday from 11:30am - 2pm. Each
          combo includes fries and a house-made 20oz lemonade or sweet tea.
          Prices range from $15 - $17.
        </p>

        <h2 className="font-bold text-2xl sm:text-3xl mt-6">Lunch Combos</h2>
        <p className="mt-1 font-semibold">
          Includes fries and a house-made 20oz lemonade or sweet tea.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl">One Step Combo</h3>
            <p className="font-semibold">
              Pick one smoked meat (1/3 lb). Served with Texas toast.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">Fed Wings Combo</h3>
            <p className="font-semibold">6 smoked wings</p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Build Your Own Salad Combo
            </h3>
            <p className="font-semibold">
              Includes protein. Does not include fries.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Big Cheese Sandwich Combo
            </h3>
            <p className="font-semibold">
              Chopped pork or brisket, melted cheese, crispy onions, BBQ sauce,
              sesame bun.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Carolina On My Mind Sandwich Combo
            </h3>
            <p className="font-semibold">
              Pulled pork, crispy skin, coleslaw, spicy vinegar sauce, sesame
              bun.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Jive Turkey Sandwich Combo
            </h3>
            <p className="font-semibold">
              Smoked turkey, melted cheese, grilled tomato, crispy onions,
              ranch, BBQ sauce, Texas toast.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Texas Flood Sandwich Combo
            </h3>
            <p className="font-semibold">
              Chopped brisket, jalapeño cheese sausage, spicy pickles, crispy
              onions, BBQ sauce, sesame bun.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              Music City Sandwich Combo
            </h3>
            <p className="font-semibold">
              Spicy fried chicken breast, greens, pickles, buttermilk ranch,
              sesame bun.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              The Tofu Banh Mi Sandwich Combo
            </h3>
            <p className="font-semibold">
              Crispy tofu burnt ends, pickled veggies, fresh herbs, crispy
              onions, sticky garlic, aioli, hoagie roll (vegetarian).
            </p>
          </div>
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

export default LunchCombos;
