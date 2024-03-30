"use client";
import React, { useEffect } from "react";
import { BsMotherboard } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

//Main Function
export default function Contact() {
  //UseEffect for scroll animation
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="bg-indigo-950">
      <div
        data-aos="fade-up"
        className="flex  text-white  flex-col items-center gap-7 py-10 px-5"
      >
        <div className="flex flex-row items-center gap-3">
          <BsMotherboard size={30} />
          <h3 className="uppercase text-[18px] mxl:text-[15px]">Contact Us</h3>
        </div>
        <div className="flex flex-col gap-1 font-bold text-[30px] mxl:text-[20px]">
          <h1 className="text-center">Need Any kind Of IT Solution For</h1>
          <h1 className="text-center text-blue-600 font-normal">
            Your Business
          </h1>
        </div>
        <div className="p-2 hover:bg-indigo-950 transition-all ease-in-out delay-200 duration-700 hover:shadow-slate-100 hover:shadow-sm cursor-pointer rounded-md flex flex-row shadow-md shadow-blue-400 items-center self-center justify-center gap-2 bg-blue-500 text-white w-[170px]">
          <button className="uppercase font-bold text-[13px]">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
