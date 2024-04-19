"use client";

import React from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";

//Main Function
export default function MessagePage() {
  return (
    <div className="bg-slate-200 p-10 flex flex-col gap-7">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex  text-blue-700 items-center justify-center gap-3">
          <BsMotherboard size={27} />
          <h1 className="uppercase font-semibold text-blue-700 text-[17px]">
            Contact With US!
          </h1>
        </div>
        <h1 className="font-bold text-[19px]">Have Any Questions?</h1>
      </div>
      <div className="text-center text-gray-500 text-[15px]">
        Enthusiastically disintermediate one-to-one leadership via business
        e-commerce. Dramatically reintermediate compelling process improvements
        rather than empowered relationships.
      </div>
      <div className="sm:grid  grid-cols-2 gap-5 flex flex-col">
        <div className=" rounded-md flex relative items-center justify-center">
          <input
            className="p-2.5 rounded-md w-full"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <RiAccountCircleFill
            size={20}
            className="absolute text-blue-600 right-3"
          />
        </div>
        <div className=" rounded-md flex relative items-center justify-center">
          <input
            className="p-2.5 rounded-md w-full"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <MdOutlineMailOutline
            size={20}
            className="absolute text-blue-600 right-3"
          />
        </div>
        <div className=" rounded-md flex bg-white relative items-center justify-center">
          <select
            name="service"
            id=""
            className="p-2.5 pr-4 bg-white rounded-md w-full cursor-pointer"
          >
            <option value="" className="text-gray-300">
              Select Subject
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Designing">UI/UX Designing</option>
            <option value="Business Analysis">Business Analysis</option>
            <option value="App Development">App Development</option>
          </select>
        </div>
        <div className=" rounded-md flex relative items-center justify-center">
          <input
            className="p-2.5 rounded-md w-full"
            type="tel"
            name="number"
            placeholder="Your Number"
          />
          <IoCallOutline
            size={20}
            className="absolute text-blue-600 right-3 "
          />
        </div>
        <div className="col-span-2 rounded-md flex relative  justify-center">
          <textarea
            name="message"
            id=""
            rows={5}
            className="w-full p-2.5"
            placeholder="Your Message"
          ></textarea>
          <LuMessageCircle
            size={20}
            className="absolute text-blue-600 right-3 top-3"
          />
        </div>
        <div
          onClick={() => {
            console.log("Clicked");
          }}
          className="p-3  self-center sm:col-span-2 w-full cursor-pointer shadow-lg shadow-blue-400 rounded-md flex flex-row items-center justify-center gap-4 bg-blue-500 text-white "
        >
          <button className="uppercase font-bold text-[13px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
