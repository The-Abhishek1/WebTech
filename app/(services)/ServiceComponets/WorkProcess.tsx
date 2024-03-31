import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import promote from "@/publicpromote.png";
import design from "@/publicillustration.png";
import website from "@/publicapp-development.png";
import business from "@/publicdata-analysis.png";
import services from "@/publicsoftwareservice.png";
import app from "@/publiccoding.png";
import Image from "next/image";
import { BsMotherboard } from "react-icons/bs";

//Main Function
export default function WorkProcess() {
  const Services = [
    {
      id: "01",
      image: business,
      workName: "Select a Project",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      id: "02",
      image: services,
      workName: "Project analysis",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      id: "03",
      image: design,
      workName: "Plan Execute",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
    {
      id: "04",
      image: app,
      workName: "Deliver result",
      description:
        "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.",
    },
  ];
  return (
    <div className="flex cursor-pointer flex-col gap-5 bg-slate-200 lg:p-10 mlg:p-3 mlg:py-4 rounded-md">
      <div
        data-aos="fade-up"
        className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-center"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] text-center uppercase mlg:text-[14px]">
              Work Process
            </h3>
          </div>
          <h1 className="text-[20px] font-bold mlg:text-[20px] text-center">
            How To Work It!
          </h1>
        </div>

        <div className="p-2 lg:absolute right-20 cursor-pointer rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 shadow-lg shadow-blue-400 text-white w-[200px]">
          <button className="uppercase font-bold text-[13px]">
            View all services
          </button>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="flex bg-slate-200 flex-row flex-wrap lg:mx-20 items-center justify-center gap-10 p-4 py-14 ">
        {Services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-md"
          >
            <div className="text-[30px]  flex p-1 justify-center items-center w-[70px] h-[70px] absolute top-[-15px] left-[-15px] bg-blue-600 text-white rounded-full">
              {service.id}
              <div className="w-[80%] absolute animate-ping rounded-full h-[80%] bg-indigo-600"></div>
            </div>
            <Image alt="" src={service.image} className="w-[80px]" />
            <div className="flex flex-col rounded-md items-center p-2 gap-2 transition delay-150 duration-500 ease-linear group-hover:bg-indigo-600 group-hover:text-white w-full">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-[18px] font-bold mlg:text-[15px]">
                    {service.workName}
                  </h1>
                  <p className="text-[15px] text-center mlg:text-[13px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
