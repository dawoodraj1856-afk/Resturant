import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const Awards = () => {
  return (
    <>
      <Navbar />

      <div className="bg-yellow-400">
        {/* Hero Image */}
        <div className="relative w-full">
          <img
            src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/50809federalist-pig-gma-ultimate-pitmaster-rob-sonderman.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            alt="Ultimate Pitmaster"
            className="w-full h-80 sm:h-96 md:h-screen object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-black text-3xl sm:text-4xl md:text-5xl font-extrabold">
            AWARD
          </h1>
        </div>

        {/* Fed Bib Section */}
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center mt-10 px-4 sm:px-10">
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl sm:text-3xl mb-2">Fed Bib</h2>
            <p className="font-semibold mb-2">
              BBQ is a humble art, but we can't always be so modest...
            </p>
            <p className="font-semibold">
              We're proud to be a 3x Michelin Guide Bib Gourmand winner, an
              esteemed rating that recognizes friendly establishments that serve
              good food at moderate prices. After all, food doesn't get much
              friendlier than ribs and mac & cheese.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/31782federalist-pig-awards-bib-gourmand-logo-03.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
              alt="Fed Bib Logo"
              className="w-3/4 md:w-full h-auto"
            />
          </div>
        </div>

        {/* Ultimate Pitmaster Section */}
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center mt-10 px-4 sm:px-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/50809federalist-pig-gma-ultimate-pitmaster-rob-sonderman.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
              alt="Ultimate Pitmaster"
              className="w-3/4 md:w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl sm:text-3xl mb-2">
              Ultimate Pitmaster
            </h2>
            <p className="font-semibold mb-2">
              Pitmaster Robert Sonderman isn't one to showboat, but we have to
              let you know about his win on the GMA United States of BBQ
              competition. Pitmaster Rob competed against some of the best BBQ
              pitmasters in the country on Good Morning America and brought home
              the golden grill as Ultimate Pitmaster! You can watch the segment
              on GMA to see how it all went down.
            </p>
            <button className="p-2 text-black font-bold hover:bg-black hover:text-yellow-400 border-2 border-black mt-4">
              SEE THE VIDEO
            </button>
          </div>
        </div>

        {/* D.C. Lamb Jam Section */}
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center mt-10 px-4 sm:px-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-bold text-3xl sm:text-4xl mb-2">
              D.C. Lamb Jam Winner
            </h2>
            <p className="font-bold">
              Winner of the D.C. Lamb Jam BBQ Bash, Best in Show and People's
              Choice for 2017 and 2018 Lamb Jam Award.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/1925Rob__Lamb_Jam.jpeg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.48&fp-y=0.3"
              alt="D.C. Lamb Jam"
              className="w-3/4 md:w-full h-auto"
            />
          </div>
        </div>

        {/* Consent Link */}
        <div className="bg-yellow-400 flex justify-center mt-10 px-4 sm:px-0">
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

export default Awards;
