"use client";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";

const menuSections = [
  {
    title: "Barbeque",
    description:
      "Smoked daily, all served with Texas toast & pickles. Sold by the 1/2 lb.",
    image: "/menuimg.avif",
    items: [
      "Brisket",
      "Pork Rib Tips",
      "Pork Spare Ribs",
      "Pulled Pork Shoulder",
      "Pork Belly",
      "Turkey Breast",
      "Chicken",
    ],
  },
  {
    title: "Signature Sandwiches",
    description:
      "Smoked daily, all served with Texas toast & pickles. Sold by the 1/2 lb.",
    image: "/menuimg.avif",
    items: [
      "Caroline in Mind",
      "Pork Rib Tips",
      "Pork Spare Ribs",
      "Pulled Pork Shoulder",
      "Pork Belly",
      "Turkey Breast",
      "Chicken",
    ],
  },
  {
    title: "Catering",
    description: "Perfect for events and large groups.",
    image: "/catreringimg.avif",
    items: [
      "Brisket",
      "Pork Rib Tips",
      "Pork Spare Ribs",
      "Pulled Pork Shoulder",
      "Pork Belly",
      "Turkey Breast",
      "Chicken",
    ],
  },
];

const Menus = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center px-4 mt-20">
        <h1 className="font-extrabold text-4xl">MENUS</h1>
        <p className="mt-6">
          A culinary tour of BBQ traditions from around this great nation and
          this beautiful planet. 1.8 million years ago, humans first began
          cooking meat with fire. For some reason, this hasn’t led to world
          peace, but we’re pretty sure if we fire up enough BBQ, it will.
        </p>

        {/* Menu Links */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
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

        <p className="font-bold mt-10">
          Check out our menu on Toast and follow us on social media to hear
          about weekly specials and rotating "faux que" vegetarian offerings.
        </p>
        <button className="p-2 w-40 mt-4 border-black border-2 font-bold hover:bg-black hover:text-yellow-400">
          ORDER NOW
        </button>
      </div>

      {/* Menu Sections */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10 mt-20 px-4">
        {menuSections.map((section, idx) => (
          <div key={idx} className="text-center">
            <h2 className="font-bold text-3xl">{section.title}</h2>
            <p className="font-semibold mt-2">{section.description}</p>
            <img
              className="w-full h-60 object-cover mt-4 rounded-md"
              src={section.image}
              alt={section.title}
            />
            <ul className="mt-4 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="font-extrabold text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
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

export default Menus;
