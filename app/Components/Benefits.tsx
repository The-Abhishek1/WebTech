import React from "react";
import help from "@/publiccustomer-service.png";
import flexible from "@/publicflexible.jpg";
import Image from "next/image";

//main Function
export default function Benefits() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-blue-600 text-center font-bold text-[20px]">
        Benefits With Our Service
      </h1>
      <div className="flex flex-row items-center gap-10 justify-center mmd:flex-col mmd:gap-4">
        <div className="flex flex-col justify-between items-center gap-2  w-[250px] bg-white p-3 h-[280px] rounded-md">
          <Image src={flexible} alt="" className="w-[100px] rounded-full" />

          <div className="flex flex-col gap-2 bg-indigo-950 p-4 rounded-md text-white">
            <h3 className="font-bold text-center">Flexible Solutions</h3>
            <p className="text-[13px] text-center">
              Completely grow multimedia based content before global scenarios
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-2 w-[250px] bg-white p-3 h-[280px] rounded-md">
          <Image src={help} alt="" className="w-[100px] rounded-full" />

          <div className="flex flex-col gap-2 bg-indigo-950 p-4 rounded-md text-white">
            <h3 className="font-bold text-center">24/7 Unlimited Support</h3>
            <p className="text-[13px] text-center">
              Completely grow multimedia based content before global scenarios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
