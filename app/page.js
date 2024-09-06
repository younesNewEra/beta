import Image from "next/image";
import Nav from "@/components/Nav";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";

export default function Page() {
  return (
    <div className="bg-black flex flex-col items-center">
      <Nav />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
