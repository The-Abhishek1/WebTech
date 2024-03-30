import React from "react";
import photo from "@/publictech3.jpg";
import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";

//Main Function
export default function ServiceFirst() {
  return (
    <div className="relative bg-indigo-950 flex flex-row h-[300px] msmm:h-[200px] justify-center items-center">
      {/* <Image src={photo} alt="photo" className="w-full blur-[1px] h-[300px]" /> */}
      <div className="text-white flex flex-col items-center gap-2 justify-center">
        <h1 className="text-[30px] mmd:text-[25px] font-bold">Services</h1>
        <div className="flex flex-row mmd:text[16px] md:text-[20px] items-center gap-2 justify-center">
          <h3>Home</h3>
          <FaAnglesRight />
          <h3>Services</h3>
        </div>
      </div>
    </div>
  );
}
