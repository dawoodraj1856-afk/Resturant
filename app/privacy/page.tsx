"use client";

import React from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const Privacy = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-extrabold text-4xl text-center mb-8">
          PRIVACY POLICY
        </h1>

        <h2 className="font-bold mb-2">Effective: January 12, 2022</h2>

        <p className="mb-6 font-semibold">
          QUE FOR THE PEOPLE, LLC, A DELAWARE CORPORATION ("Federalist Pig,"
          "we," or "us") are committed to informing you about our privacy
          practices. This privacy policy ("Policy") applies to any website or
          application that we own or operate that links to this Policy,
          including any rewards programs, or interactive features or services
          (collectively, the "Site"). This Policy describes the types of
          information we may collect from you or that you may provide when you
          visit our Site and our practices for using, maintaining, protecting
          and disclosing that information.
        </p>

        <h2 className="font-bold mb-2">Acknowledgement of Terms</h2>
        <p className="mb-6 font-semibold">
          By accessing or using our Site, making a transaction with us, or
          otherwise providing information to us, you agree to the terms of the
          most recent version of this Policy then in effect and posted on our
          Site. We reserve the right, at our sole discretion, to change, modify,
          add or remove portions of this Policy at any time...
        </p>

        <h2 className="font-bold mb-2">
          What Information We Collect and How We Use It
        </h2>
        <p className="mb-6 font-semibold">
          Visitors to our Site are not required to register or provide
          information...
        </p>

        <h2 className="font-bold mb-2">Location Information</h2>
        <p className="mb-6 font-semibold">
          When you download or access certain features of the Site, such as our
          mobile application...
        </p>

        <h2 className="font-bold mb-2">Use of Cookies</h2>
        <p className="mb-6 font-semibold">
          Our Site uses cookies and other tracking technology, such as web
          beacons...
        </p>

        <h2 className="font-bold mb-2">Contacting Us</h2>
        <p className="mb-6 font-semibold">
          You may ask questions, submit comments and opt out of receiving
          updates...
        </p>

        <p className="font-semibold">Last Updated: January 12, 2022</p>

        <div className="flex justify-center mt-10">
          <a href="#" className="text-black text-lg font-bold hover:underline">
            MANAGE CONSENT PREFERENCE
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
