import React from "react";
import About2 from "../webDetails/About2";
import Benefits from "../../Components/Benefits";
import Contact from "../../Components/Contact";
import FirstSlide from "../webDetails/FirstSlide";
import ImageSlide from "./Image";
import AboutBusiness from "./AboutBusiness";
import BusinessFAQ from "./BusinessFAQ";

export default function BusinessFinal() {
  return (
    <div className="bg-slate-200">
      <FirstSlide />
      <ImageSlide />
      <div className="grid md:grid-cols-3 mmd:flex mmd:flex-col mmd:items-center">
        <div className="col-span-2">
          <AboutBusiness />
        </div>
        <div>
          <About2 />
        </div>
      </div>
      <Benefits />
      <Contact />
      <BusinessFAQ />
    </div>
  );
}
