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
    <div className="bg-slate-200 grid grid-cols-2 justify-center items-center px-5 py-10 gap-5">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <Image src={photo} className="h-[70%]" />
        <div className="p-2 bottom-7 right-2 h-[100px] bg-gray-100 w-[100px] absolute rounded-full">
          <div className="text-white flex items-center justify-center flex-col flex-1 bg-blue-600 w-full h-full rounded-full">
            <h1 className="font-bold">25</h1>
            <p className="text-[10px] text-center">Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3 items-center justify-center text-blue-600">
          <BsMotherboard size={30} />
          <h1 className="text-[18px]">ABOUT US</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[19px] text-center ">
            We Are Increasing Business Success With
            <p className="text-blue-600 inline"> IT Solution</p>
          </div>
          <p>
            Collaboratively envisioneer user friendly supply chains and cross
            unit imperative. Authoritativel fabricate competitive resource and
            holistic synergy. Uniquely generate efficient schemas before future.
          </p>
        </div>
        <div>
          <div>
            <Image src={projects} height={30} />
            <div>
              <h1>Certified Company</h1>
              <p>Provides Best Services</p>
            </div>
          </div>
          <div>
            <Image src={happy} height={30} />
            <div>
              <h1>Expert Team</h1>
              <p>100% Best</p>
            </div>
          </div>
        </div>
        <div>
          <div className="p-2 cursor-pointer shadow-lg shadow-blue-400 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[150px]">
            <button className="uppercase font-bold text-[13px]">
              Discover More
            </button>
            <FaArrowRightLong />
          </div>
          <div>
            <div>
              <div>
                <IoCallOutline />
              </div>
            </div>
            <div>
              <p>Call Us On:</p>
              <h1>91+ 6366652685</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
