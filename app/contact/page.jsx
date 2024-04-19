import React from "react";
import Footer from "../Components/Footer";
import ContactFirstSlide from "./(contactComponents)/ContactFirstSlide";
import ContactLinks from "./(contactComponents)/ContactLinks";
import MessagePage from "./(contactComponents)/MessagePage";

//Main Function
export default function page() {
  return (
    <>
      <ContactFirstSlide />
      <ContactLinks />
      <MessagePage />
      <Footer />
    </>
  );
}
