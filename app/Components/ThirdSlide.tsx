import Image from "next/image";
import React from "react";
import certificate from "@/publiccertificate.png";
import projects from "@/publicproject-management.png";
import help from "@/publiccustomer-service.png";
import happy from "@/publictestimonials.png";

//Main Function
export default function ThirdSlide() {
  return (
    <div className="msm:grid bg-cyan-50 border-gray-300 border-t-[1px] msm:grid-cols-2  flex flex-row flex-wrap items-center justify-around p-5 py-10 gap-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src={projects} alt="" className="w-[100px] msmm:w-[60px]" />
        <h1 className="text-lg text-blue-600 font-bold">986+</h1>
        <h5 className="msmm:text-[.8rem] text-[1rem] text-gray-600">
          Finished Project
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src={happy} alt="" className="w-[100px] msmm:w-[60px]" />
        <h1 className="text-lg text-blue-600 font-bold">854+</h1>
        <h5 className="msmm:text-[.8rem] text-[1rem] text-gray-600">
          Happy Clients
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src={help} alt="" className="w-[100px] msmm:w-[60px]" />
        <h1 className="text-lg text-blue-600 font-bold">396+</h1>
        <h5 className="msmm:text-[.8rem] text-[1rem] text-gray-600">
          Skilled Experts
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src={certificate} alt="" className="w-[100px] msmm:w-[60px]" />
        <h1 className="text-lg text-blue-600 font-bold">986+</h1>
        <h5 className="msmm:text-[.8rem] text-[1rem] text-gray-600">
          Honorable Awards
        </h5>
      </div>
    </div>
  );
}
