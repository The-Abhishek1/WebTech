import Image from "next/image";
import React from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import photo1 from "@/publicdesign.png";
import photo2 from "@/publicapi.png";
import photo3 from "@/publicweb-maintenance.png";
import { auto } from "openai/_shims/registry.mjs";
//Main Function
export default function SecondSlide() {
  return (
    <div className="relative w-full flex flex-row gap-4 justify-around p-10">
      <div className="relative">
        <Image
          alt="First"
          height={auto}
          src={photo1}
          className="animate-bounce"
        />
      </div>
      <div></div>
      <div className="flex flex-col w-[400px]">
        <div>
          <BsMotherboard />
          <h3>About WebTech IT Solutions</h3>
        </div>
        <div>Preparing for your business provide best IT Solution</div>
        <div className="">
          Quickly re-engineer intuitive e-services whereas complelling.
          Professionally syndicate startegic e-commerce without covalent
          leadership skills. Globally customize equity invested imperatives.
        </div>
        <div>
          <div>
            <input type="checkbox" name="checked" checked disabled />
            <p>Dramatically re-engineer value added IT systems via mission</p>
          </div>
          <div>
            <input type="checkbox" name="checked" checked disabled />
            <p>Website & Mobile application design & Development</p>
          </div>
          <div>
            <input type="checkbox" name="checked" checked disabled />
            <p>professional User Experience & Interface researching</p>
          </div>
          <div>
            <button>Discover More</button>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
}
