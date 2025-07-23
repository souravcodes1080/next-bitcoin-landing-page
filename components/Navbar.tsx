"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaGripLines } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [mobileView, setMobileView] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-center h-[7vh] gap-x-4 items-center bg-pink-700">
          <p className="text-white text-base">
            Earn up to 30% on your stablecoins!
          </p>
          <p className="py-1 px-5 bg-white rounded-lg flex items-center gap-x-2 font-semibold cursor-pointer">
            View MSD Vault <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="absolute top-0 md:top-10 left w-full">
        <div className="flex items-center justify-between w-[95%] mx-auto pt-7 pb-7 ">
          <Image
            src={"/images/icon.svg"}
            alt="icon"
            width={100}
            height={100}
            className="w-30"
          />
          <ul className="hidden md:flex items-center gap-x-2 font-semibold text-l">
            <li className="rounded-full px-5 py-3 hover:bg-gray-950 hover:text-white transition-all duration-300 cursor-pointer">
              Mainnet
            </li>
            <li className="rounded-full px-5 py-3 hover:bg-gray-950 hover:text-white transition-all duration-300 cursor-pointer">
              Ecosystem
            </li>
            <li className="rounded-full px-5 py-3 flex items-center gap-x-2 hover:bg-gray-950 hover:text-white transition-all duration-300 cursor-pointer">
              Features <IoIosArrowDown />
            </li>
            <li className="rounded-full px-5 py-3 flex items-center gap-x-2 hover:bg-gray-950 hover:text-white transition-all duration-300 cursor-pointer">
              Build <IoIosArrowDown />
            </li>
            <li className="rounded-full px-5 py-3 flex items-center gap-x-2 hover:bg-gray-950 hover:text-white transition-all duration-300 cursor-pointer">
              Learn <IoIosArrowDown />
            </li>
          </ul>
          <button className="hidden lg:flex items-center bg-gray-950 text-white rounded-full px-7 py-3 gap-x-2 cursor-pointer transition-all duration-200 hover:bg-pink-700 font-semibold">
            <PiSignInBold />
            Sign In
          </button>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMobileView(!mobileView)}
          >
           
              <FaGripLines className="text-4xl" />
            
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          mobileView
            ? "top-0 left-0 pointer-events-auto"
            : "left-[100%] pointer-events-none "
        } absolute`}
      >
        <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </div>
  );
}

export default Navbar;
