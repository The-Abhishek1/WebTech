import React from "react";
import ServiceFirst from "../(services)/ServiceComponets/ServiceFirst";
import Services from "../(services)/ServiceComponets/Services";
import Contact from "../Components/Contact";
import FeedBack from "../Components/FeedBack";
import WorkProcess from "../(services)/ServiceComponets/WorkProcess";

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
