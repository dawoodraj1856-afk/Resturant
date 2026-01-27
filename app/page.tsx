import Hero from "@/components/Home/Hero";
import Dishes from "@/components/Home/Dishes";
import Header from "../components/Home/Header";
import Menus from "@/components/Home/Menus";
import Catering from "@/components/Home/Catering";
import Footer from "@/components/Home/Footer";
import Game from "./game/page";

export default function Home() {
  return (
    <div className="bg-yellow-400">
      <Header />
      <Hero />
      <Dishes />
      <Menus />
      <Catering />
      <Game />
      <Footer />
    </div>
  );
}
