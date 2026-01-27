import Link from "next/link";
import React from "react";

const Dishes = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center gap-8 bg-yellow-400 py-10 px-4">
      {/* Specials */}
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <img
          className="w-full h-64 sm:h-80 object-cover rounded"
          src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/85291IMG_3966_web.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
          alt="Specials"
        />
        <h1 className="font-bold text-3xl sm:text-4xl text-center mt-5">
          SPECIALS
        </h1>
        <p className="font-bold text-center mt-3 px-4 sm:px-10">
          Check out our rotating specialty sandwiches and limited drops,
          including a Limited Time Only Monthly Chef's Special that will leave{" "}
          <span>you craving for more!</span>
        </p>
        <Link href="/menus/specials">
          <button className="mt-5 font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-yellow-400 mx-auto">
            SEE THE SPECIALS
          </button>
        </Link>
      </div>

      {/* Lunch Combos */}
      <div className="w-full sm:w-1/2 flex flex-col items-center mt-10 sm:mt-0">
        <img
          className="w-full h-64 sm:h-80 object-cover rounded"
          src="https://thumbs.dreamstime.com/b/four-juicy-cheeseburgers-cardboard-boxes-carrot-sticks-sauce-372960570.jpg"
          alt="Lunch Combos"
        />
        <h1 className="font-bold text-3xl sm:text-4xl text-center mt-5">
          Lunch Combos
        </h1>
        <p className="font-bold text-center mt-3 px-4 sm:px-10">
          Lunch combos are available Monday-Friday from 11:30am-2pm. Each combo
          includes fries and a house-made 20oz lemonade or sweet tea. Prices
          range from $15 - $17.
        </p>
        <Link href="/menus/lunchcombos">
          <button className="mt-5 font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-yellow-400 mx-auto">
            SEE THE COMBOS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dishes;
