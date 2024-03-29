import Image from "next/image";
import React from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import photo1 from "@/publicdesign.png";
import photo2 from "@/publicapi.png";
import photo3 from "@/publicweb-maintenance.png";

//Main Function
export default function SecondSlide() {
  return (
    <div className="relative transition-all delay-500 ease-linear duration-700 bg-cyan-50 border-t-[1px] border-gray-200 w-full flex lg:flex-row flex-col items-center gap-4 justify-around p-4 py-8">
      <div className="relative top-[40px]">
        <Image
          alt="First"
          src={photo1}
          className="animate-bounce h-auto cursor-progress msm:max-h-[250px] msm:max-w-[250px] msmm:max-h-[200px] msmm:max-w[120px] mxl:w-[400px] msmm:mt-[-20px]"
        />
      </div>
      <div className="flex flex-col sm:w-[500px] msm:px-3 gap-5">
        <div className="flex flex-row items-center justify-center gap-3  text-blue-600">
          <BsMotherboard size={30} />
          <h3 className="text-[18px] mmd:text-[15px]">
            About WebTech IT Solutions
          </h3>
        </div>
        <div className="text-[30px] mmd:text-[20px] font-bold text-center">
          Preparing for your business provide best
          <p className="inline text-blue-600"> IT Solution</p>
        </div>
        <div>
          <p className="text-center text-[14px] mmd:text-[13px]">
            Quickly re-engineer intuitive e-services whereas complelling.
            Professionally syndicate startegic e-commerce without covalent
            leadership skills. Globally customize equity invested imperatives.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5 mxl:self-center">
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mmd:text-[12px]">
              Dramatically re-engineer value added IT systems via mission
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mmd:text-[12px]">
              Website & Mobile application design & Development
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mmd:text-[12px]">
              Professional User Experience & Interface researching
            </p>
          </div>
          <div className="p-2 cursor-pointer rounded-md flex flex-row shadow-lg shadow-blue-400 items-center self-center justify-center gap-2 bg-blue-500 text-white w-[170px]">
            <button className="uppercase font-bold text-[15px]">
              Discover More
            </button>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
}
