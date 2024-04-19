import React from "react";
import Image from "next/image";
import { BsMotherboard } from "react-icons/bs";
import projects from "@/publicproject-management.png";
import happy from "@/publictestimonials.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import photo from "@/publictech1.jpg";
//Main Function
export default function SecondSlide() {
  return (
    <div className="bg-slate-200 grid mlg:grid-cols-1 grid-cols-2 justify-center items-center px-5 py-10 gap-5">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <Image alt="" src={photo} className="h-[100%]" />
        <div className="p-2 bottom-[-40px] right-8 h-[100px] bg-gray-100 w-[100px] absolute rounded-full">
          <div className="text-white flex items-center justify-center flex-col flex-1 bg-blue-600 w-full h-full rounded-full">
            <h1 className="font-bold">25</h1>
            <p className="text-[10px] text-center">Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 msmm:mt-10">
        <div className="flex flex-row gap-3 items-center justify-center text-blue-600">
          <BsMotherboard size={30} />
          <h1 className="text-[18px]">ABOUT US</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[30px] mxl:text-[20px] text-center ">
            We Are Increasing Business Success With
            <p className="text-blue-600 inline"> IT Solution</p>
          </div>
          <p className="mxl:text-[13px] text-center">
            Collaboratively envisioneer user friendly supply chains and cross
            unit imperative. Authoritativel fabricate competitive resource and
            holistic synergy. Uniquely generate efficient schemas before future.
          </p>
        </div>
        <div className="flex  mlg:ml-5 mmd:flex-col justify-center gap-10 flex-row mmd:gap-3">
          <div className="flex flex-row items-center gap-3">
            <Image alt="" src={projects} height={30} />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[15px]">Certified Company</h1>
              <p className="text-[13px]">Provides Best Services</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Image alt="" src={happy} height={30} />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[15px]">Expert Team</h1>
              <p className="text-[13px]">100% Best</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-around msm:flex-col msm:items-center">
          <div className="w-[150px] flex flex-row p-2 items-center gap-2 cursor-pointer shadow-lg shadow-blue-400 bg-blue-500 text-white h-[45px] rounded-md">
            <button className="uppercase font-bold text-[13px]">
              Discover More
            </button>
            <FaArrowRightLong />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="text-[30px] cursor-pointer  flex p-1 justify-center items-center w-[50px] h-[50px] relative bg-blue-600 text-white rounded-full">
              <div className="w-[80%] absolute animate-ping rounded-full h-[80%] bg-indigo-600"></div>
              <IoCallOutline size={24} />
            </div>
            <div>
              <p className="text-[13px]">Call Us On:</p>
              <h1 className="font-bold ">91+ 6366652685</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
