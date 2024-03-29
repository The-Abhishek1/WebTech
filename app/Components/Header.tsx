"use client";
//Importing Necessary Files
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public177975028_padded_logo.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
  MdMenu,
} from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
//Main Function
export default function Header() {
  //State to show menu bar
  const [showMenu, setShowMenu] = useState(false);
  //State to show searchBar
  const [showSearch, setSearch] = useState(false);
  return (
    <div className="bg-blue-300 sticky top-0 z-10 w-full flex flex-row items-center text-black p-4 justify-between">
      <div className="flex flex-row items-center gap-3 ">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="rounded-[30px] h-[40px] w-[40px]"
          priority={true}
        />
        <div className="msmm:hidden flex flex-row items-center text-[26px] gap-2 ">
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
        <div
          onClick={() => {
            setShowMenu(false);
            setSearch(!showSearch);
          }}
          className="bg-white p-4 msm:p-3 rounded-full cursor-pointer"
        >
          <IoSearchOutline />
        </div>
        <button className="mxl:hidden flex flex-row items-center gap-3 bg-indigo-500 text-white p-3 rounded-[7px]">
          <h4>Make Appointment</h4>
          <FaArrowRightLong />
        </button>
        <div className="bg-white p-4 msm:p-3  rounded-full cursor-pointer">
          <MdOutlineShoppingCart />
        </div>

        <div
          onClick={() => {
            setSearch(false);
            setShowMenu(!showMenu);
          }}
          className="bg-blue-500 msm:p-2.5  p-3.5 cursor-pointer text-white rounded-[5px] lg:hidden"
        >
          {showMenu ? <IoMdClose /> : <MdMenu />}
        </div>
      </div>
      {showMenu ? (
        <div className="items-center lg:hidden justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 gap-2 mt-4 font-medium border border-gray-100 rounded-lg  rtl:space-x-reverse  bg-gray-800 ">
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-white bg-blue-700 rounded "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
      {showSearch ? (
        <div className="items-center lg:hidden justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 gap-2 mt-4 font-medium border border-gray-100 rounded-lg  rtl:space-x-reverse  bg-gray-800 ">
            <li>
              <a
                href="#"
                className="block  hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700 text-[15px] msm:text-[13px] py-2 px-3 text-white rounded "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[15px] msm:text-[13px] py-2 px-3 text-gray-900 rounded  hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
