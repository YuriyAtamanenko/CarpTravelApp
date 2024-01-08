"use client";
import ScrollToTop from "react-scroll-to-top";
import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Career from "./Career/page";
import Gallery from "./Gallery/page";
import Contacts from "./Contacts/page";

export default function Home() {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          right: "25px",
          backgroundColor: "#0a2503",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        component={<p style={{ color: "green" }}>UP</p>}
      />
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
