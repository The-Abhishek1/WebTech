"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

//Main Function
export default function FirstSlide() {
  const router = useRouter();

  return (
    <div className="relative bg-indigo-950 flex flex-row h-[300px] msmm:h-[200px] justify-center items-center">
      <div className="text-white flex flex-col items-center gap-2 justify-center">
        <h1 className="text-[30px] mmd:text-[25px] font-bold">About Us</h1>
        <div className="flex flex-row mmd:text[16px] md:text-[20px] items-center gap-2 justify-center">
          <h3 onClick={() => router.back()} className="cursor-pointer">
            Home
          </h3>
          <FaAnglesRight />
          <h3>About Us</h3>
        </div>
      </div>
    </div>
  );
}
