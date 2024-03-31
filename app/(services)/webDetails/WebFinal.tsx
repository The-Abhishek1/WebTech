import React from "react";
import FirstSlide from "./FirstSlide";
import ImageSlide from "./Image";
import AboutWeb from "./AboutWeb";
import About2 from "./About2";
import Contact from "../../Components/Contact";
import WebFAQ from "./WebFAQ";
import Benefits from "../../Components/Benefits";

export default function WebFinal() {
  return (
    <div className="bg-slate-200">
      <FirstSlide />
      <ImageSlide />
      <div className="grid md:grid-cols-3 mmd:flex mmd:flex-col mmd:items-center">
        <div className="col-span-2">
          <AboutWeb />
        </div>
        <div>
          <About2 />
        </div>
      </div>
      <Benefits />
      <Contact />
      <WebFAQ />
    </div>
  );
}
