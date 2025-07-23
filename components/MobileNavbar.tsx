
import React from "react";
import {  FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  mobileView: boolean;
  setMobileView: (value: boolean) => void;
};
function MobileNavbar({ mobileView, setMobileView }: Props) {
  return (
    <div>
     
      

      <div className="bg-white fixed h-[100vh] w-[100vw] flex  flex-col items-end">
        <div
          className="mr-7 mt-9"
          onClick={() => {
            setMobileView(false);
            console.log(false);
          }}
        >
          <FaArrowRight className="text-2xl" />
        </div>
        <ul className="flex md:hidden flex-col font-semibold w-[90%] mx-auto mt-20 ">
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
