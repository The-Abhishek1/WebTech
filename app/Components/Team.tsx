import React from "react";
import { BsMotherboard } from "react-icons/bs";
import { IoMdAdd, IoLogoLinkedin } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaXTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import abhi from "@/publicabhi.jpg";
import nandi from "@/publicnandi.jpg";
import karthi from "@/publickarthi.jpg";
import bhuvanesh from "@/publicbhuvanesh.jpg";
import sumit from "@/publicsumit.jpg";
import Image from "next/image";

//Main Function
export default function Team() {
  return (
    <div className="flex cursor-pointer flex-col gap-5 items-center bg-cyan-50 border-t-2 lg:p-10 mlg:p-3 mlg:py-4 rounded-md">
      <div className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] uppercase">Great Team</h3>
          </div>
          <h1 className="text-[30px] text-center font-bold msm:text-[20px]">
            See Our Skilled Expert
            <p className="font-normal inline text-blue-600 "> Team</p>
          </h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap lg:mx-20 items-center justify-center gap-4 p-4 mmd:p-2 ">
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  group w-[250px] rounded-sm">
          <Image
            alt=""
            src={abhi}
            className="w-[100%] h-[250px] bg-slate-400"
          />
          <div className="flex relative flex-col items-center gap-10 w-full">
            <div className=" absolute bottom-24 text-white bg-indigo-600 p-2 rounded-full">
              <IoMdAdd />
            </div>
            <div className="hidden group-hover:flex flex-row absolute bottom-24 gap-3">
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaWhatsapp />
              </div>
              <div className=" text-white bg-indigo-600 p-2 rounded-full">
                <IoClose />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaXTwitter />
              </div>
            </div>
            <div className="text-center  border-t-2  flex flex-col gap-3 group-hover:bg-indigo-600 w-full">
              <h1 className="text-[18px] mt-2 group-hover:text-white font-bold msm:text-[15px] uppercase">
                Abhishek N
              </h1>
              <p className="text-[13px] mb-2 group-hover:text-white text-indigo-600 uppercase">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  group w-[250px] rounded-sm">
          <Image
            alt=""
            src={bhuvanesh}
            className="w-[100%] h-[250px] bg-slate-400"
          />
          <div className="flex relative flex-col items-center gap-10 w-full">
            <div className="absolute bottom-24 text-white bg-indigo-600 p-2 rounded-full">
              <IoMdAdd />
            </div>

            <div className="hidden group-hover:flex flex-row absolute bottom-24 gap-3">
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaWhatsapp />
              </div>
              <div className=" text-white bg-indigo-600 p-2 rounded-full">
                <IoClose />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaXTwitter />
              </div>
            </div>
            <div className="text-center  border-t-2  flex flex-col gap-3 group-hover:bg-indigo-600 w-full">
              <h1 className="text-[18px] mt-2 group-hover:text-white font-bold msm:text-[15px] uppercase">
                Bhuvanesh
              </h1>
              <p className="text-[13px] mb-2 group-hover:text-white text-indigo-600 uppercase">
                Project Manager
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  group w-[250px] rounded-sm">
          <Image
            alt=""
            src={nandi}
            className="w-[100%] h-[250px] bg-slate-400"
          />
          <div className="flex relative flex-col items-center gap-10 w-full">
            <div className="absolute bottom-24 text-white bg-indigo-600 p-2 rounded-full">
              <IoMdAdd />
            </div>
            <div className="hidden group-hover:flex flex-row absolute bottom-24 gap-3">
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaWhatsapp />
              </div>
              <div className=" text-white bg-indigo-600 p-2 rounded-full">
                <IoClose />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaXTwitter />
              </div>
            </div>
            <div className="text-center  border-t-2  flex flex-col gap-3 group-hover:bg-indigo-600 w-full">
              <h1 className="text-[18px] mt-2 group-hover:text-white font-bold msm:text-[15px] uppercase">
                Nandish
              </h1>
              <p className="text-[13px] mb-2 group-hover:text-white text-indigo-600 uppercase">
                Chief Expert
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  group w-[250px] rounded-sm">
          <Image
            alt=""
            src={karthi}
            className="w-[100%] h-[250px] bg-slate-400"
          />
          <div className="flex relative flex-col items-center gap-10 w-full">
            <div className="absolute bottom-24 text-white bg-indigo-600 p-2 rounded-full">
              <IoMdAdd />
            </div>
            <div className="hidden group-hover:flex flex-row absolute bottom-24 gap-3">
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaWhatsapp />
              </div>
              <div className=" text-white bg-indigo-600 p-2 rounded-full">
                <IoClose />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaXTwitter />
              </div>
            </div>

            <div className="text-center  border-t-2  flex flex-col gap-3 group-hover:bg-indigo-600 w-full">
              <h1 className="text-[18px] mt-2 group-hover:text-white font-bold msm:text-[15px] uppercase">
                Karthik B.K
              </h1>
              <p className="text-[13px] mb-2 group-hover:text-white text-indigo-600 uppercase">
                Product Manager
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  group w-[250px] rounded-sm">
          <Image
            alt=""
            src={sumit}
            className="w-[100%] h-[250px] bg-slate-400"
          />
          <div className="flex relative flex-col items-center gap-10 w-full">
            <div className="absolute bottom-24 text-white bg-indigo-600 p-2 rounded-full">
              <IoMdAdd />
            </div>
            <div className="hidden group-hover:flex flex-row absolute bottom-24 gap-3">
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaInstagram />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaWhatsapp />
              </div>
              <div className=" text-white bg-indigo-600 p-2 rounded-full">
                <IoClose />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
              <div className=" text-indigo-600 bg-white p-2 rounded-full">
                <FaXTwitter />
              </div>
            </div>
            <div className="text-center  border-t-2  flex flex-col gap-3 group-hover:bg-indigo-600 w-full">
              <h1 className="text-[18px] mt-2 group-hover:text-white font-bold msm:text-[15px] uppercase">
                Sumit Kumar
              </h1>
              <p className="text-[13px] mb-2 group-hover:text-white text-indigo-600 uppercase">
                IT Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
