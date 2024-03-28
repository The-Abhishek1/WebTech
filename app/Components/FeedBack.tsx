"use client";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { BsMotherboard } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import photo1 from "@/publicapp-development.png";
import photo2 from "@/publicbillboard.png";

export default function ProgressSlider() {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const items = [
    {
      img: photo1,
      desc: "Adithi",
      buttonIcon: photo1,
      position: "CEO at Infosys",
      feed: "Ablaze Nova truly exceeded my expectations! Their web development team created a stunning website for my business, and their attention to detail was impeccable. I highly recommend their services to anyone looking to elevate their online presence",
    },
    {
      img: photo2,
      desc: "Sudeeksh",
      buttonIcon: photo2,
      position: "CEO at Wipro",
      feed: `I couldn't be happier with the mobile app developed by Ablaze Nova. Not only is it user-friendly, but the team also ensured that it perfectly aligned with my vision. Their professionalism and expertise are unmatched!`,
    },
    {
      img: photo1,
      desc: "Bindu",
      buttonIcon: photo1,
      position: "CEO at TCS",
      feed: `Ablaze Nova's website management service has been a game-changer for our company. They handle everything seamlessly, allowing us to focus on growing our business. Their responsiveness and proactive approach are truly commendable.`,
    },
    {
      img: photo2,
      desc: "Akshay",
      buttonIcon: photo2,
      position: "CEO at Birla",
      feed: `Working with Ablaze Nova on UI/UX design was an absolute pleasure! They took the time to understand our brand identity and delivered designs that exceeded our expectations. Their creativity and innovation shine through in every project they undertake.`,
    },
  ];

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="flex flex-col items-center bg-cyan-50 border-2 px-2 py-8 gap-2">
      <div className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] uppercase">Customer FeedBack</h3>
          </div>
          <h1 className="text-[30px] text-center font-bold msm:text-[20px]">
            What Happy Clients Says
          </h1>
          <p className="font-normal inline text-blue-600 text-[30px] text-center  msm:text-[20px]">
            About Us?
          </p>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Item image */}
        <div className="transition-all duration-150 delay-300 ease-in-out">
          <div className="relative flex flex-col items-center" ref={itemsRef}>
            {items.map((item, index) => (
              <Transition
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 scale-105"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-300 absolute"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                beforeEnter={() => heightFix()}
              >
                <div className="flex flex-row msm:flex-col md:mx-20 m-5 p-4 bg-white gap-4  items-center">
                  <div className="relative lg:w-[400px] max-w-[200px] bg-slate-200 rounded-lg p-3 h-[100px] flex flex-col items-center justify-center">
                    <Image
                      className="rounded-xl h-[100px] w-200px"
                      src={item.img}
                      alt={item.desc}
                    />
                    <div className="absolute bottom-[-17px] text-white bg-indigo-600 p-[10px] rounded-full">
                      <ImQuotesLeft size={25} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-2">
                      <p className="text-[13px] text-center">{item.feed}</p>
                    </div>
                    <div className="flex flex-row mmd:flex-col-reverse mmd:items-center border-t-2 p-2 mmd:gap-2 mmd:py-4 items-center justify-between">
                      <div className="flex flex-col md:items-start">
                        <h1 className="font-bold text-[20px] mmd:text-[16px]">
                          {item.desc}
                        </h1>
                        <h3 className="text-[13px]">{item.position}</h3>
                      </div>
                      <div className="flex flex-row items-center gap-2 justify-center text-indigo-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {items.map((item, index) => (
            <button
              key={index}
              className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
              onClick={() => {
                setActive(index);
                setProgress(0);
              }}
            >
              <span
                className={`text-center flex flex-col items-center ${
                  active === index
                    ? ""
                    : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                }`}
              >
                <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                  <Image src={item.buttonIcon} alt={item.desc} />
                </span>
                <span className="block text-sm font-medium text-slate-900 mb-2">
                  {item.desc}
                </span>
                <span
                  className="block relative w-full bg-slate-200 h-1 rounded-full"
                  role="progressbar"
                  aria-valuenow={active === index ? progress : 0}
                >
                  <span
                    className="absolute inset-0 bg-indigo-500 rounded-[inherit]"
                    style={{ width: active === index ? `${progress}%` : "0%" }}
                  ></span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
