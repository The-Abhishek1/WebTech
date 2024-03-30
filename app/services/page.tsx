import React from "react";
import ServiceFirst from "../ServiceComponets/ServiceFirst";
import Services from "../ServiceComponets/Services";
import Contact from "../Components/Contact";
import FeedBack from "../Components/FeedBack";
import WorkProcess from "../ServiceComponets/WorkProcess";

//Main Function
export default function page() {
  return (
    <>
      <ServiceFirst />
      <Services />
      <Contact />
      <WorkProcess />
      <FeedBack />
    </>
  );
}
