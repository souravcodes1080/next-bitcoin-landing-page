import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function MobileNavbar() {
  return (
    <div>
        
      <div className="bg-white fixed h-[100vh] w-[100vw] flex items-center">
        <ul className="flex md:hidden flex-col font-semibold w-[90%] mx-auto ">
          <li className=" py-4 transition-all duration-300 cursor-pointer text-4xl active:underline hover:underline">
            Mainnet
          </li>
          <li className="py-4 transition-all duration-300 cursor-pointer text-4xl active:underline hover:underline">
            Ecosystem
          </li>
          <li className="flex items-center gap-x-1  py-4 transition-all duration-300 cursor-pointer text-4xl active:underline hover:underline">
            Features <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-x-1  py-4 transition-all duration-300 cursor-pointer text-4xl active:underline hover:underline">
            Build <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-x-1  py-4 transition-all duration-300 cursor-pointer text-4xl active:underline hover:underline">
            Learn <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
