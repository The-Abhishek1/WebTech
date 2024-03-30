import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import promote from "@/publicpromote.png";
import design from "@/publicillustration.png";
import website from "@/publicapp-development.png";
import business from "@/publicdata-analysis.png";
import services from "@/publicsoftwareservice.png";
import app from "@/publiccoding.png";
import Image from "next/image";

//Main Function
export default function Services() {
  const Services = [
    {
      image: app,
      serviceName: "App Development",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      image: business,
      serviceName: "Business Analysis",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      image: services,
      serviceName: "Software Services",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      image: design,
      serviceName: "UI/UX Design",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      image: promote,
      serviceName: "Digital Marketing",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      image: website,
      serviceName: "App Development",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
  ];

  return (
    <div className="flex bg-slate-200 flex-row flex-wrap lg:mx-20 items-center justify-center gap-14 p-4 py-14 ">
      {Services.map((service, index) => (
        <div
          key={index}
          className="flex transition delay-150 duration-300 ease-linear flex-col gap-2 relative items-center justify-center  p-4 bg-white group  hover:bg-indigo-600 rounded-md hover:text-white w-[250px]"
        >
          <Image alt="" src={service.image} className="w-[70%] h-[150px]" />
          <div className="flex flex-col items-center gap-2  w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={service.image}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2 p-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[15px] font-bold uppercase">
                  {service.serviceName}
                </h1>
                <p className=" text-center text-[13px]">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-row items-center transition delay-150 duration-500 ease-linear group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px] group-hover:text-white">
                  Read More
                </p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
