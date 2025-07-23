import React from "react";
import { BsCheckLg } from "react-icons/bs";
import FeatureSection from "./FeatureSection";

function SecondSection() {
  return (
    <div>
      <div className="bg-gray-100">
        <h1 className="md:text-5xl sm:text-4xl text-3xl text-center font-semibold pt-20 text-gray-600">
          Ready for the Bitcoin Age
        </h1>
        <ul className="flex flex-wrap justify-center gap-y-5 sm:gap-x-20 gap-x-10 py-10">
          <li className="flex items-center gap-3 sm:text-xl text-lg">
            <BsCheckLg className="text-green-800" /> PERMISSIONLESS
          </li>
          <li className="flex items-center gap-3 sm:text-xl text-lg">
            <BsCheckLg className="text-green-800" /> BANK-FREE
          </li>
          <li className="flex items-center gap-3 sm:text-xl text-lg">
            <BsCheckLg className="text-green-800" /> INTUITIVE
          </li>
          <li className="flex items-center gap-3 sm:text-xl text-lg">
            <BsCheckLg className="text-green-800" /> SECURE
          </li>
          <li className="flex items-center gap-3 sm:text-xl text-lg">
            <BsCheckLg className="text-green-800" /> DECENTRALIZED
          </li>
        </ul>
        <div className="flex justify-center">
          <button className=" sm:px-9 sm:py-4 px-5 py-3 bg-black rounded-3xl text-white text-xl font-semibold cursor-pointer hover:bg-pink-700 transition-all duration-200 ">
            Explore Mezo
          </button>
        </div>

        <FeatureSection />
      </div>
    </div>
  );
}

export default SecondSection;
