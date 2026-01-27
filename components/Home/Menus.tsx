"use client";
import Link from "next/link";

const Menus = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-yellow-400 gap-8 px-4 py-10">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start">
        <h1 className="font-bold text-3xl sm:text-4xl text-center sm:text-left mb-4">
          MENU
        </h1>
        <p className="font-bold text-center sm:text-left text-base sm:text-lg leading-relaxed mb-4">
          We’re craft American BBQ made in-house (always). Get traditions and
          favorites from all over the world — all on one plate. Federalist Pig
          is a two-time Michelin Bib Gourmand winner serving up DC’s best blend
          of the classic BBQ traditions you’d find at the most elite cookout and
          the elevated flavors you’d find at a true fine dining spot.
          <br />
          <br />
          Everything we serve is house-made and prepared by a staff that cares.
          You could spend a lifetime sampling every flavor combination at
          Federalist Pig, and we hope you do.
        </p>
        <Link href="/menus">
          <button className="mt-4 font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-yellow-400">
            PEEP THE MENU
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          className="w-full h-64 sm:h-130 object-cover rounded"
          src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/58030220826_FedPig_A7_BCRcombo1_0264.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
          alt="Menu Image"
        />
      </div>
    </div>
  );
};

export default Menus;
