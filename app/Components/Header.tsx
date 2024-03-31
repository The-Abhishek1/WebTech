"use client";
//Importing Necessary Files
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

//Main Function
export default function Header() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  });
  //State to show menu bar
  const [showMenu, setShowMenu] = useState(false);
  //State to show searchBar
  const [showSearch, setSearch] = useState(false);
  //State to show searchBar
  const [showCart, setCart] = useState(false);
  return (
    <div className="sticky top-0 z-10 w-full flex flex-row items-center text-black p-4 justify-between">
      <div className=" w-full h-full overflow-hidden absolute left-0 -z-10">
        <div className="blur-3xl bg-slate-400 w-full h-full"></div>
      </div>
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
          <h2 className="font-bold text-red-600">Ablaze</h2>
          <h2>Nova</h2>
        </div>
      </div>
      <div className="flex text-blue-500 flex-row relative items-center gap-4 mlg:hidden justify-center">
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
            setCart(false);
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
        <div
          onClick={() => {
            setSearch(false);
            setShowMenu(false);
            setCart(true);
          }}
          className="bg-white flex flex-col items-center overflow-hidden relative  p-4 msm:p-3  rounded-full cursor-pointer"
        >
          <MdOutlineShoppingCart />
        </div>

        <div
          onClick={() => {
            setSearch(false);
            setCart(false);
            setShowMenu(!showMenu);
          }}
          className="bg-blue-500 msm:p-2.5  p-3.5 cursor-pointer text-white rounded-[5px] lg:hidden"
        >
          {showMenu ? <IoMdClose /> : <MdMenu />}
        </div>
      </div>
      {showMenu ? (
        <div className="items-center text-white lg:hidden justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 gap-2 mt-4 font-medium rounded-lg  rtl:space-x-reverse  bg-gray-800 ">
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                href="/"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                href="aboutus"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                href="services"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3  rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                href="pages"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3  rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                href="contact"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3  rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      {showSearch ? (
        <div className="items-center text-white justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex cursor-pointer flex-col p-4 gap-2 mt-4 font-medium rounded-lg  rtl:space-x-reverse  bg-gray-800 ">
            <li>
              <Link
                href="webdevelopment"
                className="block cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700 text-[15px] msm:text-[13px] py-2 px-3 text-white rounded "
                aria-current="page"
              >
                Web development
              </Link>
            </li>
            <li>
              <Link
                href="softwareservices"
                className="block cursor-pointer hover:text-gray-900 text-[15px] msm:text-[13px] py-2 px-3  rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
              >
                Software Services
              </Link>
            </li>
            <li>
              <Link
                href="businessanalysis"
                className="block text-[15px] cursor-pointer hover:text-gray-900 msm:text-[13px] py-2 px-3 rounded  hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700"
              >
                Bussiness Analysis
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      {showCart ? (
        <div className="flex flex-col gap-6 p-4 sm:top-24 rounded-md text-white absolute top-20 right-4  bg-gray-800">
          <div className="flex flex-col gap-10">
            <div className="flex gap-24 flex-row items-center justify-between">
              <h1 className="uppercase text-[15px] font-bold">Shopping cart</h1>
              <div
                onClick={() => {
                  setCart(false);
                }}
                className="bg-white p-2 msm:p-1 rounded-sm cursor-pointer"
              >
                <IoMdClose color="blue" />
              </div>
            </div>
            <div className="flex  flex-col gap-6 justify-center">
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row items-center gap-3">
              <h1 className="font-bold">Subtotal:</h1>
              <h1>$4398.00</h1>
            </div>
            <div className="flex flex-row items-center justify-between gap-3">
              <div className="p-2 flex items-center justify-center cursor-pointer rounded-md  bg-blue-500 text-white w-[120px]">
                <button className="uppercase font-bold text-[12px]">
                  View cart
                </button>
              </div>
              <div className="p-2  flex items-center justify-center cursor-pointer  rounded-md  bg-blue-500 text-white w-[120px]">
                <button className="uppercase font-bold text-[12px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
{
  <div className="absolute bg-gray-400 -z-10 border-2 left-0 blur-2xl w-full h-[90%]"></div>;
}
