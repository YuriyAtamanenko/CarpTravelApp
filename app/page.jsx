// import Image from "next/image";
import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Career from "./Career/page";
import Gallery from "./Gallery/page";
import Contacts from "./Contacts/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
