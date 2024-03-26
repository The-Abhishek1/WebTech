import Image from "next/image";
import React from "react";
import { BsMotherboard } from "react-icons/bs";
import web from "@/publicgraphic-tablet.png";

//Main Function
export default function FourthSlide() {
  return (
    <div className="mlg:flex-col flex flex-row justify-around  px-10 py-5 lg:gap-10 bg-cyan-50 ">
      <div className="flex flex-col justify-center gap-3 lg:w-[600px] ">
        <div className="flex flex-row gap-2 text-blue-600 uppercase">
          <BsMotherboard size={30} />
          <h5>Great IT Skills</h5>
        </div>
        <div className="flex flex-col font-bold text-[30px] mmd:text-[20px]">
          <h1>More Than 20+ Years Experience</h1>
          <h1>
            We Provide
            <p className="inline font-normal text-blue-600"> IT Services</p>
          </h1>
        </div>
        <div>
          <p className="mmd:text-[13px]">
            Collaboratively envisioneer user friendly supply chains and cross
            unit imperative. Authoritativel fabricate competitive resource and
            holistic. Holisticly restore real time resources whereas
            standardized networks.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:w-[500px]">
          <div className="flex flex-col gap-2 justify-center font-bold text-[.8rem]">
            <div className="flex flex-row items-center justify-between">
              <h3>Web Development</h3>
              <h3 className="inline">85%</h3>
            </div>
            <div className="lg:w-[500px] p-1 bg-gray-200 rounded-full dark:bg-gray-300">
              <div className="bg-blue-600  font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center font-bold text-[.8rem]">
            <div className="flex flex-row items-center justify-between">
              <h3>App Development</h3>
              <h3 className="inline">65%</h3>
            </div>
            <div className="lg:w-[500px] p-1 bg-gray-200 rounded-full dark:bg-gray-300">
              <div className="bg-blue-600  font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center font-bold text-[.8rem]">
            <div className="flex flex-row items-center justify-between">
              <h3>UI/UX Design</h3>
              <h3 className="inline">80%</h3>
            </div>
            <div className="lg:w-[500px] p-1 bg-gray-200 rounded-full dark:bg-gray-300">
              <div className="bg-blue-600  font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center font-bold text-[.8rem]">
            <div className="flex flex-row items-center justify-between">
              <h3>Website Management</h3>
              <h3 className="inline">75%</h3>
            </div>
            <div className="lg:w-[500px] p-1 bg-gray-200 rounded-full dark:bg-gray-300">
              <div className="bg-blue-600  font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={web}
          alt=""
          className="w-full h-full lg:w-[500px] msmm:w-[300px] smm:w-[400px]"
        />
      </div>
    </div>
  );
}
