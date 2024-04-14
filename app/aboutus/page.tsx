import React from "react";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import ThirdSlide from "../Components/ThirdSlide";
import ProgressSlider from "../Components/FeedBack";
import Contact from "../Components/Contact";
import FirstSlide from "./AboutComponents/FirstSlide";
import SecondSlide from "./AboutComponents/SecondSlide";

//Main Function
export default function page() {
  return (
    <div>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <Team />
      <Contact />
      <ProgressSlider />
      <Footer />
    </div>
  );
}
