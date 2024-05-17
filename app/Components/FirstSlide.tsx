"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "@/publicresponsive-design.png";
import { useRouter } from "next/navigation";

//Main Function
export default function FirstSlide() {
  const router = useRouter();
  return (
    <div className="bg-slate-200">
      <div className=" flex flex-row items-center justify-around p-4 py-8 msm:flex-col-reverse gap-4">
        <div className="flex flex-col w-[450px] items-center justify-around smm:ml-10 gap-4 mlg:w-[350px] msmm:w-[250px]">
          <h2 className="text-[40px] font-bold transition ease-in-out duration-700 delay-700 mlg:text-[25px]">
            Welcome
          </h2>
          <p className="text-center mlg:pr-4 mlg:text-[12px]">
            We specialize in web development, mobile apps, website management,
            and UI/UX design. Let us ignite your digital journey! 💻📱
          </p>
          <q className="italic">#InnovationUnleashed</q>
          <div
            onClick={() => {
              router.push("aboutus");
            }}
            className="p-2 cursor-pointer shadow-lg shadow-blue-400 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[150px]"
          >
            <button className="uppercase font-bold text-[13px]">
              About Us
            </button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="flex">
          <Image
            src={image}
            priority={true}
            alt="Start Image"
            className="aspect-square[2/1] max-h-[450px] mlg:max-h-[250px] mlg:max-w-[250px] msmm:max-h-[200px] msmm:max-w[150px] mxl:w-[400px]
          transition ease-in-out delay-200 cursor-progress hover:-translate-y-1 hover:scale-95 duration-500"
          />
        </div>
      </div>
    </div>
  );
}
