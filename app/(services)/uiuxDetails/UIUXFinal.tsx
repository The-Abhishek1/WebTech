import React from "react";
import ImageSlide from "./Image";
import AboutUIUX from "./AboutUIUX";
import About2 from "../webDetails/About2";
import Benefits from "../../Components/Benefits";
import Contact from "../../Components/Contact";
import UIUXFAQ from "./UIUXFAQ";
import Header from "./Header";

export default function UIUXFinal() {
  return (
    <div className="bg-slate-200">
      <Header />
      <ImageSlide />
      <div className="grid md:grid-cols-3 mmd:flex mmd:flex-col mmd:items-center">
        <div className="col-span-2">
          <AboutUIUX />
        </div>
        <div>
          <About2 />
        </div>
      </div>
      <Benefits />
      <Contact />
      <UIUXFAQ />
    </div>
  );
}
