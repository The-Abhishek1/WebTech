import Image from "next/image";
import React from "react";
import photo from "@/publictech3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

//Main Function
export default function AboutDigital() {
  return (
    <div className="flex flex-col gap-5 pt-2 p-6 mlg:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-[27px] text-blue-600 font-bold mlg:text-[20px]">
          Digital Marketing
        </h1>
        <div className="mlg:max-w-[400px] flex flex-col gap-6 text-[13px]">
          <p>
            Globally optimize highly efficient solution whereas open-source
            application. Completely strategize quality internal or "organic"
            sources for virtual e-business. Phosfluorescently re-engineer
            enterprise markets via value-added networks. Seamlessly restore
            inexpensive e-markets vis-a-vis corporate intellectual capital.
            Holisticly reinvent compelling niche markets via scalable strategic.
          </p>
          <p>
            Authoritatively scale business meta-services before client-based
            technologies. Collaboratively strategize synergistic scenarios
            rather than flexible action items. Continually deliver market
            positioning convergence and mission-critical infrastructures.
          </p>
        </div>
      </div>
      <div className="flex flex-row mlg:items-center gap-7 mlg:flex-col-reverse">
        <Image src={photo} alt="" className="w-[250px]" />

        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-center text-blue-600 font-bold mlg:text-[16px] text-[18px]">
              We Serve The Best Work
            </h1>
          </div>
          <div className="flex flex-col  gap-2">
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Up am intention on dependent questions
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Surrounded affronting favourable
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Sed ut perspiciatis unde omnis iste natus
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Special Careness Risk Free
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Bibend auctor nisi elit volume are beguiled
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] mlg:max-w-[400px] mlg:text-center">
        Credibly brand accurate data after user friendly ROI. Professionally
        negotiate inexpensive markets and team driven scenarios. Interactively
        seize wireless e-tailers after resource maximizing content.
        Collaboratively leverage existing.
      </div>
    </div>
  );
}
