"use client";

import Link from "next/link";

const Catering = () => {
  return (
    <>
      {/* Main Catering Section */}
      <div className="w-full flex flex-col sm:flex-row bg-yellow-400 gap-8 px-4 py-10">
        {/* Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            className="w-full h-64 sm:h-96 object-cover rounded"
            src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/36463220826_FedPig_A6_FavFootball_0219.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            alt="Catering"
          />
        </div>

        {/* Text */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start mt-6 sm:mt-0">
          <h1 className="font-bold text-3xl sm:text-4xl text-center sm:text-left mb-4">
            CATERINGS
          </h1>
          <p className="font-bold text-center sm:text-left text-base sm:text-lg leading-relaxed mb-4 px-4 sm:px-0">
            We'll bring the 'que to you! From backyard BBQs, holiday
            celebrations or hundred-person events, our Barbecrew and catering
            truck can do it all. Serving thoughtfully crafted sides, vegan and
            vegetarian options, to the BBQ classics from all the regions of
            America, and all the corners of the globe — it’s all here.
          </p>
          <Link href="/catering">
            <button className="mt-4 font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-yellow-400 mx-auto sm:mx-0">
              EXPLORE CATERING
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-black text-yellow-400 text-2xl sm:text-4xl flex flex-wrap sm:flex-nowrap justify-around gap-4 sm:gap-10 py-4 px-2">
        <h1 className="text-center flex-1 sm:flex-none">Cataloge</h1>
        <h1 className="text-center flex-1 sm:flex-none">HONEYMOON</h1>
        <h1 className="text-center flex-1 sm:flex-none">KRAMERS</h1>
        <h1 className="text-center flex-1 sm:flex-none">SIDEKICK</h1>
      </div>
    </>
  );
};

export default Catering;
