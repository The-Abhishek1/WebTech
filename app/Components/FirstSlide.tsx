import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "@/publicresponsive-design.png";

//Main Function
export default function FirstSlide() {
  return (
    <div className="bg-cyan-50 flex flex-row items-center justify-around p-4 py-8 msm:flex-col-reverse gap-4">
      <div className="flex flex-col items-center justify-around smm:ml-10 gap-4 ">
        <h2 className="text-[40px] font-bold transition ease-in-out duration-700 delay-700 mmd:text-[25px]">
          Welcome
        </h2>
        <p className="text-center msm:pr-4 mmd:text-[12px]">
          We specialize in web development, mobile apps, website management, and
          UI/UX design. Let us ignite your digital journey! 💻📱
        </p>
        <q className="italic">#InnovationUnleashed</q>
        <div className="p-2 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[150px]">
          <button className="">About Us</button>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="flex">
        <Image
          src={image}
          priority={true}
          alt="Start Image"
          className="aspect-square[2/1] max-h-[450px] msm:max-h-[250px] msm:max-w-[250px] msmm:max-h-[200px] msmm:max-w[150px]"
        />
      </div>
    </div>
  );
}
