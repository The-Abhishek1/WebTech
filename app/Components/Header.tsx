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
    <div className="bg-sky-100 sticky w-full flex flex-row items-center justify-around text-black p-4">
      <div className="flex flex-row items-center gap-3 ">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="rounded-[30px] h-[40px] w-[40px]"
          priority={true}
        />
        <div className="flex flex-row items-center text-[26px] gap-2">
          <h2 className="font-bold">Ablaze</h2>
          <h2>Nova</h2>
        </div>
      </div>
      <div className="flex flex-row relative items-center gap-4 mlg:hidden justify-center">
        <div className="group flex flex-col">
          <div className="flex p-2 flex-row items-center gap-1 hover:text-indigo-500 cursor-pointer">
            <p>Home</p>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="hidden top-10 group-hover:block absolute pt-8 cursor-pointer">
            <div className="gap-2 flex flex-col border-none shadow-md shadow-slate-100 p-3 py-5 bg-sky-100 rounded-md ">
              <div className="flex flex-row items-center gap-2 bg">
                <GoGoal color="blue" />
                <p className="text-[13px] hover:text-blue-700">
                  Digital Agency
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 bg">
                <GoGoal color="blue" />
                <p className="text-[13px]  hover:text-blue-700">
                  Web Development
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 bg">
                <GoGoal color="blue" />
                <p className="text-[13px]  hover:text-blue-700">
                  Software Company
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <p>About Us</p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <p>Services</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1">
          <p>Pages</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1">
          <p>Blog</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1">
          <p>Contact</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="bg-white p-4 rounded-full">
          <IoSearchOutline />
        </div>
        <div className="bg-white p-4 rounded-full">
          <MdOutlineShoppingCart />
        </div>
        <div className="bg-indigo-500 p-3.5  text-white rounded-[5px] lg:hidden">
          <MdMenu />
        </div>
        <button className="mxl:hidden flex flex-row items-center gap-3 bg-indigo-500 text-white p-3 rounded-[7px]">
          <h4>Make Appointment</h4>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
