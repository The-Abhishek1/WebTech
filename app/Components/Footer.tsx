"use client";
import React, { useEffect } from "react";
import { IoCallSharp, IoMail } from "react-icons/io5";
import {
  FaAngleRight,
  FaCalendarAlt,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import {
  FaXTwitter,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaMapLocationDot,
  FaLocationDot,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/publiclogo.png";
import post from "@/publiccustomer-service.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

//Main Function
export default function Footer() {
  //UseEffect for scroll animation
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col bg-indigo-900 p-6 text-white gap-10">
      <div
        data-aos="fade-up"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <Image src={logo} alt="logo" className="h-[40px] w-[40px] rounded-md" />
        <h1 className="text-[30px] font-bold mxl:text-[20px]">Ablaze Nova</h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex gap-10 md:gap-4 msm:grid-cols-1 mmd:flex-col mmd:grid mmd:grid-cols-2 flex-row flex-wrap items-center justify-around"
      >
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <IoCallSharp size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Quick Call Us:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
              91+ 6366652585
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <IoMail size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Mail Us On:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
              idiot63666@gmail.com
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <FaMapLocationDot size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Visit Location:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
              17 NJ-12, JP Nagar
            </h2>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-evenly gap-4 msm:gap-8"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            About Company
          </h1>
          <p className="text-center text-[15px] mxl:text-[13px]">
            We specialize in web development, mobile apps, website management,
            and UI/UX design. Let us ignite your digital journey! 💻📱
          </p>
          <div className="flex flex-row items-center justify-center gap-5">
            <div className="border-2 p-2 border-slate-400 rounded-full cursor-pointer">
              <FaFacebookSquare size={20} />
            </div>
            <div className="border-2 p-2 border-slate-400 rounded-full cursor-pointer">
              <FaWhatsapp size={20} />
            </div>
            <div className="border-2 p-2 border-slate-400 rounded-full cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="border-2 p-2 border-slate-400 rounded-full cursor-pointer">
              <FaDiscord size={20} />
            </div>
            <div className="border-2 p-2 border-slate-400 rounded-full cursor-pointer">
              <FaYoutube size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            Quick Links
          </h1>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-row items-center  gap-2 ">
              <FaAngleRight size={20} />
              <Link href="aboutus" className="mlg:text-[13px]">
                About Us
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="team" className="mlg:text-[13px]">
                Meet Our Team
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="projects" className="mlg:text-[13px]">
                Our Projects
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="helpandfaq" className="mlg:text-[13px]">
                Help & FAQ's
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="contactus" className="mlg:text-[13px]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            IT SERVices
          </h1>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="services/webdevelopment" className="mlg:text-[13px]">
                Web Development
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="services/appdevelopment" className="mlg:text-[13px]">
                App Development
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="services/uiuxdesign" className="mlg:text-[13px]">
                UI/UX Design
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="services/businessanalysis"
                className="mlg:text-[13px]"
              >
                Bussiness Analysis
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="services/digitalmarketing"
                className="mlg:text-[13px]"
              >
                Digital Marketing
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="services/softwareservices"
                className="mlg:text-[13px]"
              >
                Software Services
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-center uppercase font-bold text-[20px] mlg:text-[15px]">
            Recent Posts
          </h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row xl:gap-4 gap-2 bg-slate-300 text-blue-500 p-4 rounded-md cursor-progress">
              <Image src={post} alt="post" className="xl:w-[100px] w-[70px]" />
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-[14px] text-center mlg:text-[13px]">
                  Unsatiable Entreaties May Collecting Power.
                </h3>
                <div className="flex flex-row items-center justify-between gap-3">
                  <FaCalendarAlt />
                  <p className="text-[13px] text-center mlg:text-[12px]">
                    21 March, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row xl:gap-4 gap-2 bg-slate-300 text-blue-500 p-4 rounded-md cursor-progress">
              <Image src={post} alt="post" className="xl:w-[100px] w-[70px]" />
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-[14px] text-center mlg:text-[13px]">
                  Unsatiable Entreaties May Collecting Power.
                </h3>
                <div className="flex flex-row items-center justify-between gap-3">
                  <FaCalendarAlt />
                  <p className="text-[13px] text-center mlg:text-[12px]">
                    21 March, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col mlg:items-center justify-around bg-indigo-950 p-4 py-6 gap-2">
        <div className="flex flex-row gap-2 msmm:flex-col items-center mlg:text-[13px] msmm:text-[11px]">
          <div className="flex flex-row items-center gap-2 ">
            <h4>Copyright</h4>
            <MdCopyright size={20} />
            <h4>2024</h4>
            <h4 className="text-indigo-600">Abalze Nova.</h4>
          </div>
          <h4>All Rights Reserved.</h4>
        </div>
        <div className="flex flex-row gap-3 msmm:gap-1 items-center mlg:text-[13px]  msmm:text-[11px]">
          <h4 className="border-r-2 pr-2">Terms & Condition</h4>
          <h4 className="border-r-2 pr-2">Careers</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
}
