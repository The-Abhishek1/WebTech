"use client";
import React from "react";
import Footer from "../Components/Footer";

import ContactFirstSlide from "../(ContactComponents)/ContactFirstSlide";
import ContactLinks from "../(ContactComponents)/ContactLinks";
import MessagePage from "../(ContactComponents)/MessagePage";
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
