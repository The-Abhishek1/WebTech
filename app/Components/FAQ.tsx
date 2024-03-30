"use client";

import React, { useEffect, useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

//Main Function
export default function FAQ() {
  //UseEffect for scroll animation
  useEffect(() => {
    AOS.init();
  });
  const [firstshow, setfFirstShow] = useState(false);
  const [secondtshow, setfSecondShow] = useState(false);
  const [thirdhow, setThirdShow] = useState(false);

  return (
    <div className="p-6 bg-slate-200 flex flex-col items-center gap-5">
      <div data-aos="fade-up" className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-3 text-indigo-600 ">
          <BsMotherboard size={30} />
          <h3 className="uppercase text-[18px] mxl:text-[15px]">
            frequently ask question
          </h3>
        </div>
        <div className="flex flex-col gap-1 font-bold text-[30px] mxl:text-[20px]">
          <h1 className="text-center">Talk To About Any</h1>
          <h1 className="text-center text-blue-600 font-normal">Question?</h1>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col  items-center w-full gap-3"
      >
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Where can I get analytics help?
            </h1>
            {firstshow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setfFirstShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setfFirstShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {firstshow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px] ">
              Dramatically disseminate real-time portals rather than top-line
              action items. Uniquely provide access to low-risk high-yield
              products without dynamic products. Progressively re-engineer
              low-risk high-yield ideas rather than emerging alignments.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Where can I get analytics help?
            </h1>
            {secondtshow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setfSecondShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setfSecondShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {secondtshow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px]">
              Dramatically disseminate real-time portals rather than top-line
              action items. Uniquely provide access to low-risk high-yield
              products without dynamic products. Progressively re-engineer
              low-risk high-yield ideas rather than emerging alignments.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Where can I get analytics help?
            </h1>
            {thirdhow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setThirdShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setThirdShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {thirdhow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px]">
              Dramatically disseminate real-time portals rather than top-line
              action items. Uniquely provide access to low-risk high-yield
              products without dynamic products. Progressively re-engineer
              low-risk high-yield ideas rather than emerging alignments.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
