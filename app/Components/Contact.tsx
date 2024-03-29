import React from "react";
import { BsMotherboard } from "react-icons/bs";

//Main Function
export default function Contact() {
  return (
    <div className="flex  text-white bg-indigo-950 flex-col items-center gap-7 py-10 px-5">
      <div className="flex flex-row items-center gap-3">
        <BsMotherboard size={30} />
        <h3 className="uppercase text-[18px] msm:text-[15px]">Contact Us</h3>
      </div>
      <div className="flex flex-col gap-1 font-bold text-[30px] msm:text-[20px]">
        <h1 className="text-center">Need Any kind Of IT Solution For</h1>
        <h1 className="text-center text-blue-600 font-normal">Your Business</h1>
      </div>
      <div className="p-2 cursor-pointer rounded-md flex flex-row shadow-md shadow-blue-400 items-center self-center justify-center gap-2 bg-blue-500 text-white w-[170px]">
        <button className="uppercase font-bold text-[15px]">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
