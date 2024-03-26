"use client";

//Importing Necessary Files
import Image from "next/image";
import React from "react";
import Logo from "@/public177975028_padded_logo.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
  MdMenu,
} from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

//Main Function
export default function Header() {
  return (
    <div className="bg-blue-300 sticky top-0 z-10 w-full flex flex-row items-center justify-around text-black p-4 mlg:justify-between">
      <div className="flex flex-row items-center gap-3 ">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="rounded-[30px] h-[40px] w-[40px]"
          priority={true}
        />
        <div className="msmm:hidden flex flex-row items-center text-[26px] gap-2">
          <h2 className="font-bold">Ablaze</h2>
          <h2>Nova</h2>
        </div>
      </div>
      <div className="flex flex-row relative items-center gap-4 mlg:hidden justify-center">
        <div className=" hover:text-indigo-500 cursor-pointer">Home</div>
        <div className=" hover:text-indigo-500 cursor-pointer">About Us</div>
        <div className="flex flex-row items-center gap-1  hover:text-indigo-500 cursor-pointer">
          <p>Services</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1  hover:text-indigo-500 cursor-pointer">
          <p>Pages</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className=" hover:text-indigo-500 cursor-pointer">Contact</div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="bg-white p-4 msm:p-3 rounded-full cursor-pointer">
          <IoSearchOutline />
        </div>
        <button className="mxl:hidden flex flex-row items-center gap-3 bg-indigo-500 text-white p-3 rounded-[7px]">
          <h4>Make Appointment</h4>
          <FaArrowRightLong />
        </button>
        <div className="bg-white p-4 msm:p-3  rounded-full cursor-pointer">
          <MdOutlineShoppingCart />
        </div>
        <div className="bg-blue-500 msm:p-2.5  p-3.5 cursor-pointer text-white rounded-[5px] lg:hidden">
          <MdMenu />
        </div>
      </div>
    </div>
  );
}
