import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function FirstSection() {
  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="bg-white rounded-t-4xl mb-50 ">
          <h1 className="text-center md:w-200 w-[92%] mx-auto md:py-20 md:text-3xl text-xl py-10">
            Mezo is the Bitcoin finance app that empowers you to live off of
            Bitcoin, without selling it.
          </h1>
          <div className="2xl:w-[1400px] w-[90%] mx-auto flex flex-row gap-10 lg:flex-nowrap flex-wrap">
            <div className="flex flex-col flex-2/3 gap-10 ">
              <div className="flex md:flex-row flex-col bg-amber-100 md:rounded-3xl rounded-2xl overflow-hidden md:flex-1/2">
                <div className="flex-1/2">
                  <div className="mx-10 md:py-0 py-10 flex flex-col justify-center h-full gap-y-5">
                    <h2 className="sm:text-5xl text-2xl font-semibold">
                      Borrow with Bitcoin
                    </h2>
                    <p className="sm:text-lg text-amber-800">
                      Get a line of credit using your Bitcoin as collateral.
                      Decentralized, flexible, and intuitive.
                    </p>
                    <button className="flex items-center font-semibold gap-2 sm:text-lg cursor-pointer hover:text-green-800 transition-all duration-200">
                      Unlock Credit
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="flex-1/2" >
                  <Image
                    src={"/images/grid1.png"}
                    alt="bitcoin"
                    width={300}
                    height={300}
                    className="w-full md:h-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col-reverse bg-amber-100 md:rounded-3xl rounded-2xl overflow-hidden flex-1/2">
                <div className="flex-1/2">
                  <Image
                    src={"/images/grid2.png"}
                    alt="bitcoin"
                    width={300}
                    height={300}
                    className="w-full md:h-full h-[200px] object-cover"
                  />
                </div>
                <div className="flex-1/2">
                  <div className="mx-10 md:py-15 py-10 flex flex-col justify-center h-full gap-y-5">
                    <h2 className="sm:text-5xl text-2xl font-semibold">
                      Grow your Bitcoin
                    </h2>
                    <p className="sm:text-lg text-amber-800">
                      Grow your Bitcoin stack with vaults powered by Upshift
                      Finance. Simple yield strategies managed by experts, so
                      you can relax while earning.
                    </p>
                    <button className="flex items-center font-semibold gap-2 sm:text-lg cursor-pointer hover:text-green-800 transition-all duration-200">
                      Start Earning
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1/3 bg-gray-200 flex lg:flex-col md:flex-row flex-col md:rounded-3xl rounded-2xl overflow-hidden">
              <div className="flex-1/2">
                <div className="mx-10 md:py-0 py-10 flex flex-col justify-center h-full gap-y-5">
                  <h2 className="sm:text-5xl text-2xl font-semibold">
                    Stability backed by Bitcoin
                  </h2>
                  <p className="sm:text-lg text-gray-800">
                    Mezo&apos;s native stablecoin, MUSD, is 100% backed by Bitcoin
                    reserves and designed to maintain a 1:1 value with the U.S.
                    dollar.
                  </p>
                  <button className="flex items-center font-semibold gap-2 sm:text-lg cursor-pointer hover:text-gray-800 transition-all duration-200">
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="flex-1/2">
                <Image
                  src={"/images/grid3.png"}
                  alt="bitcoin"
                  width={300}
                  height={300}
                  className="w-full md:h-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
