"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const Terms = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 space-y-6">
        <h1 className="font-extrabold text-3xl sm:text-4xl text-center mt-10">
          Terms & Conditions Agreement
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-semibold">
          Effective: January 12, 2022
        </p>

        <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
          PLEASE READ THE TERMS AND CONDITIONS CAREFULLY. THE TERMS AND
          CONDITIONS ("AGREEMENT") CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND
          QUE FOR THE PEOPLE, LLC, A DELAWARE CORPORATION ("FEDERALIST PIG,"
          "WE," "US," "OUR" OR "COMPANY"). SECTION 11 OF THIS AGREEMENT CONTAINS
          PROVISIONS THAT GOVERN HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH
          OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY CLAIMS THAT
          AROSE OR WERE ASSERTED BEFORE THE EFFECTIVE DATE OF THIS AGREEMENT.
          SECTION 12 SETS FORTH OUR ARBITRATION AGREEMENT WHICH WILL, WITH
          LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO
          BINDING AND FINAL ARBITRATION.
        </p>

        <h2 className="font-bold text-xl sm:text-2xl mt-4">
          1. Acceptance of this Agreement
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
          By using our Site, you agree to the terms of this Agreement. Section
          12 sets forth our arbitration agreement, which limits your right to
          file a class action or seek jury trial, except as allowed by law.
        </p>

        <h2 className="font-bold text-xl sm:text-2xl mt-4">2. Modifications</h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
          We may modify these terms at any time by posting an updated version on
          the Site. Continued use constitutes acceptance of the updated terms.
        </p>

        <h2 className="font-bold text-xl sm:text-2xl mt-4">
          3. Additional Terms and Policies
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
          Additional policies and procedures may apply to certain products,
          services, or features on our Site. Please review all applicable
          policies.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-bold mt-6">
          Last Updated: January 12, 2022
        </p>
        

        <div className="flex justify-center mt-6">
          <a href="#" className="text-black text-lg font-bold hover:underline">
            MANAGE CONSENT PREFERENCE
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
