import Image from "next/image";
import React from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import promote from "@/publicpromote.png";
import design from "@/publicillustration.png";
import website from "@/publicapp-development.png";
import business from "@/publicdata-analysis.png";
import services from "@/publicsoftwareservice.png";
import app from "@/publiccoding.png";

//Main Function
export default function Services() {
  return (
    <div className="flex cursor-pointer flex-col gap-5 bg-cyan-50 border-t-2 lg:p-10 mlg:p-3 mlg:py-4 rounded-md">
      <div className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] text-center uppercase">What we do</h3>
          </div>
          <h1 className="text-[30px] font-bold msm:text-[20px]">
            We Provide Exclusive
          </h1>
          <h1 className="text-[30px] text-center font-bold msm:text-[20px]">
            Service For{" "}
            <p className="font-normal inline text-blue-600 ">Your Business</p>
          </h1>
        </div>

        <div className="p-2 lg:absolute right-20 cursor-pointer rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 shadow-lg shadow-blue-400 text-white w-[200px]">
          <button className="uppercase font-bold text-[15px]">
            View all services
          </button>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="flex flex-row flex-wrap lg:mx-20 items-center justify-center gap-4 p-4 mmd:p-2 ">
        <div className="flex flex-col gap-2 relative items-center bg-white justify-center  p-4 group w-[250px] rounded-sm">
          <Image alt="" src={app} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={app}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  Web Developement
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-sm">
          <Image alt="" src={business} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={business}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  Bussiness Analysis
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center justify-center  p-4 bg-white group  w-[250px] rounded-sm">
          <Image alt="" src={services} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={services}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  Software Services
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-sm">
          <Image alt="" src={design} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={design}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  UI/UX Design
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-sm">
          <Image alt="" src={promote} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={promote}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  Digital Marketing
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-sm">
          <Image alt="" src={website} className="w-[90%]" />
          <div className="flex flex-col items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white w-full">
            <div className="mt-[-50px]">
              <Image
                alt=""
                src={website}
                className="w-[70px]  rounded-full bg-white p-3"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[18px] font-bold msmm:text-[15px] uppercase">
                  App Development
                </h1>
                <p className="text-[15px] msmm:text-[13px]">Some Dummy Data</p>
              </div>
              <div className="flex flex-row items-center group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                <p className="msmm:text-[13px]">Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
