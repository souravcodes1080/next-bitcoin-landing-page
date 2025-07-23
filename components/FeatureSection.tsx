import Image from "next/image";
import React from "react";

function FeatureSection() {
  return (
    <div className="py-20 w-[80%] mx-auto">
      <div className="flex md:flex-row flex-col items-center gap-x-20 sm:gap-y-10 gap-y-5">
        <div className="flex-2/3">
          <Image
            src={"/images/blog1.png"}
            alt="post1"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="flex-1/3">
          <h2 className="sm:text-4xl text-3xl md:pb-5 pb-2 font-semibold text-gray-700">
            Borrow securely, spend confidently.
          </h2>
          <p className="sm:text-lg text-base text-gray-700">
            Unlock liquidity in minutes without selling your Bitcoin. View your
            loan status, track your collateral ratio, and manage risk, all
            directly in the Mezo app. Stay in control with real-time insight
            into your position.
          </p>
        </div>
      </div>
      <div className="md:mt-20 mt-10 flex md:flex-row flex-col items-center gap-x-20 sm:gap-y-10 gap-y-5">
        <div className="flex-1/3">
          <h2 className="sm:text-4xl text-3xl md:pb-5 pb-2 font-semibold text-gray-700">
            Know yourself, know your wealth.
          </h2>
          <p className="sm:text-lg text-base text-gray-700">
            Your Mezo wallet gives you a complete view of your Bitcoin-powered
            portfolio—BTC, MUSD, mats, NFTs, and more—all in one place. No
            complexity, no confusion. Just a clear, seamless portal to your
            onchain wealth.
          </p>
        </div>
        <div className="flex-2/3">
          <Image
            src={"/images/blog2.png"}
            alt="post2"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <h2 className="md:text-center sm:text-4xl text-3xl md:pb-5 pb-2 font-semibold text-gray-700">
          Explore to your Bitcoin's desire.
        </h2>
        <p className="md:w-180 md:text-center md:mx-auto">
          This is where your Bitcoin gets busy. Earn yield, vote on Mezo's
          future, add liquidity, and much more, all from one place. It's your
          home base for using Bitcoin, not just holding it.
        </p>
         <Image
            src={"/images/blog3.png"}
            alt="post3"
            width={800}
            height={800}
            className="md:w-[80%] w-full mx-auto mt-10"
          />
      </div>
    </div>
  );
}

export default FeatureSection;
