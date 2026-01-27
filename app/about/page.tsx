import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

const About = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      {/* Heading and Paragraph */}
      <div className="px-4 sm:px-10 mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          ALL THE BBQ. ALL ON ONE PLATE. ALL GOOD.
        </h1>

        <p className="mt-5 text-center font-bold text-base sm:text-lg leading-relaxed">
          In order to form a more perfect BBQ, the Federalist Pig is determined
          to bring all the best flavors together. Our menu is a walk around the
          country — and the world. We’re paying homage to the American Southern
          traditions that first inspired us, and the global traditions that made
          us curious. From fan favorites, ribs, wings, brisket, and sausage to
          creative sandwiches to captivating sides, you can find our inspo du
          jour — international, national, or something in between — front and
          center on our menu.
          <br />
          <br />
          The best way to learn about us is to join us for a plate of BBQ. So
          come on in and get to know our small, passionate, and hardworking crew
          of folks. FedPig is a place where you can feel like a regular, whether
          it’s your first visit or your fiftieth. Start your own BBQ tradition
          with us.
        </p>
      </div>

      {/* Image */}
      <div className="mt-10 px-4 sm:px-10">
        <img
          className="w-full sm:w-4/5 md:w-3/5 mx-auto rounded object-cover"
          src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/41978federalist-pig-pitmaster-rob-sonderman.jpg?w=1000&fit=max&auto=compress,format&h=1000"
          alt="Pitmaster Rob Sonderman"
        />
      </div>

      {/* Consent Link */}
      <div className="mt-10 flex justify-center px-4 sm:px-0">
        <a
          href="#"
          className="text-black text-lg font-bold hover:underline text-center"
        >
          MANAGE CONSENT PREFERENCE
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default About;
