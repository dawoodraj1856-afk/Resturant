import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

const Careers = () => {
  return (
    <div className="bg-yellow-400">
      <Navbar />

      <div className="px-4 sm:px-10 md:px-20 py-10">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mt-10">
          CAREERS
        </h1>

        <h2 className="font-bold text-lg sm:text-xl mt-8">
          Effective: January 12, 2022
        </h2>

        <p className="mt-4 font-semibold text-base sm:text-lg leading-relaxed">
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

        <h2 className="font-bold text-lg sm:text-xl mt-6">
          Acknowledgement of Terms
        </h2>
        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          By accessing or using our Site, making a transaction with us, or
          otherwise providing information to us, you agree to the terms of the
          most recent version of this Policy then in effect and posted on our
          Site. We reserve the right, at our sole discretion, to change, modify,
          add or remove portions of this Policy at any time. Your continued use
          of our Site, our mobile app, or contacting our guest services center,
          means you acknowledge and understand our current and updated Policy.
        </p>

        <h2 className="font-bold text-lg sm:text-xl mt-6">
          What Information We Collect and How We Use It
        </h2>
        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          Visitors to our Site are not required to register or provide
          information to us in order to view our Site, and visitors under the
          age of 16 are prohibited from registering, making a purchase, or
          otherwise providing personal information through our Site. We do not
          knowingly collect personal information on individuals under the age of
          16 without parental consent. If you believe personal information was
          provided to us by someone under 16, please contact us immediately at
          info@federalistpig.com.
        </p>

        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          If you choose to establish a Federalist Pig account, you will be
          required to provide some information, such as your name, address,
          phone number, email address, username and password, and you will have
          the option to provide additional information and set preferences. We
          use the information you supply for the purpose of providing the
          services you have requested, and as described in this Policy. In
          addition, we may from time to time contact you via email or regular
          mail about new products, services, content, or information that we
          think may be of interest to you.
        </p>

        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          If you shop with us, you will need to provide your name, address,
          phone number(s), email address, billing information (including
          credit/debit card number and expiration date), and, if applicable, the
          names, addresses, and phone numbers of gift recipients. We use this
          information to process and fulfill your order or as otherwise
          described in this Policy.
        </p>

        <h2 className="font-bold text-lg sm:text-xl mt-6">
          Location Information
        </h2>
        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          When you download or access certain features of the Site, such as our
          mobile application, we may collect information about your location.
          You can change when we collect location information about you in your
          device's settings.
        </p>

        <h2 className="font-bold text-lg sm:text-xl mt-6">Use of Cookies</h2>
        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          Our Site uses cookies and other tracking technology to help us
          determine whether a visitor to our Site has visited our Site before or
          if he or she is a new visitor. Most web browsers automatically accept
          cookies, but you can modify your browser settings to reject or disable
          cookies. Please note that if you disable or delete cookies, certain
          aspects of our Site will not function properly, such as ordering.
        </p>

        <h2 className="font-bold text-lg sm:text-xl mt-6">Contacting Us</h2>
        <p className="mt-2 font-semibold text-base sm:text-lg leading-relaxed">
          You may ask questions, submit comments and opt out of receiving
          updates and other mailings from us by contacting us via email at
          info@federalistpig.com or regular mail at Federalist Pig, 4201 Georgia
          Avenue NW, Washington, DC 20011.
        </p>

        <p className="mt-4 font-semibold text-base sm:text-lg">
          Last Updated: January 12, 2022
        </p>

        <div className="bg-yellow-400 flex justify-center mt-10">
          <a
            href="#"
            className="text-black text-lg font-bold hover:underline text-center"
          >
            MANAGE CONSENT PREFERENCE
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
