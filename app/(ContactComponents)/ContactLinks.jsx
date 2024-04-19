import React from "react";
import { FaMapLocationDot, FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";

//Main Function
export default function ContactLinks() {
  return (
    <div className="p-10 flex mlg:flex-col gap-10  justify-center">
      <div className="flex flex-row items-center gap-3  bg-slate-200 p-10">
        <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-indigo-600 cursor-pointer">
          <IoCallSharp size={30} />
        </div>
        <div>
          <h4 className="text-[15px] mlg:text-[13px]">Quick Call Us:</h4>
          <h2 className="text-[17px] font-bold mlg:text-[14px]">
            91+ 6366652585
          </h2>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3  bg-slate-200 p-10">
        <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-indigo-600 cursor-pointer">
          <IoMail size={30} />
        </div>
        <div>
          <h4 className="text-[15px] mlg:text-[13px]">Mail Us On:</h4>
          <h2 className="text-[17px] font-bold mlg:text-[14px]">
            idiot63666@gmail.com
          </h2>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3  bg-slate-200 p-10">
        <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-indigo-600 cursor-pointer">
          <FaMapLocationDot size={30} />
        </div>
        <div>
          <h4 className="text-[15px] mlg:text-[13px]">Visit Location:</h4>
          <h2 className="text-[17px] font-bold mlg:text-[14px]">
            17 NJ-12, JP Nagar
          </h2>
        </div>
      </div>
    </div>
  );
}
