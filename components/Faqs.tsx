"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is Mezo?",
    answer:
      "Mezo is a Bitcoin finance app that empowers people to live off their Bitcoin without spending it. Flagship features include Mezo Borrow and MUSD.",
  },
  {
    question: "What can I do with Mezo?",
    answer:
      "Mezo builds products to help bring utility to BTC without the need to spend it. You can set up a loan with Mezo Borrow to mint MUSD which can be spent for a variety of use cases. The vision is to ultimately create and lead the Bitcoin circular economy, where MUSD can be used for larger purchases such as a home, as well as day-to-day purchases, such as groceries or your daily coffee.",
  },
  {
    question:"Why should I use Mezo?",
    answer:"If you want to finally be able to live off your Bitcoin without spending it, Mezo is the place for you. By using your Bitcoin as collateral, you can set up a credit line with Mezo Borrow benefiting from the lowest interest rates in the industry (1-5%) at a fixed rate. This allows you to access BitcoinFi, as well as everyday items that you can find in the Mezo Market."
  },
  {
    question:"How can I use Mezo for my dapp/project?",
    answer:"Passport makes it easy for developers to integrate Bitcoin wallet support into dApps building on Mezo. Built on top of RainbowKit, it supports popular Bitcoin wallets like Unisat, Xverse, and OKX, alongside EVM-compatible wallets like Taho and MetaMask.\n The package includes helper hooks for reading balances, managing wallet connections, and sending both Bitcoin and Mezo transactions. If you have used RainbowKit or wagmi before, setup will feel familiar. You can follow the steps in the Mezo Passport README to get started."
  },
  {
    question:"What wallets can I use with Mezo?",
    answer:"You can use the following Bitcoin- and EVM-compatible wallets on Mezo: Bitcoin-compatible: Unisat, OKX (Ledger not supported), Xverse. EVM-compatible: Taho, MetaMask, Zerion, OKX."
  },
  {
    question:"What token is used for transaction fees?",
    answer:"BTC is used to pay for transaction fees. This includes tBTC."
  },
  {
    question:"How do I invest in Mezo?",
    answer:"If you are interested in becoming and investor, please reach out to IR@thesis.co."
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sm:w-[90%] w-[95%] mx-auto pb-20 mb-10">
      <Image
        src={"/images/faqs.svg"}
        width={250}
        height={250}
        className="w-auto"
        alt="FAQ logo"
      />

      <div className="transition-all duration-300">
        {faqData.map((faq, index) => (
          <div key={index} className="relative">
            <h3
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between sm:text-2xl text-xl font-semibold cursor-pointer sm:py-7 sm:px-7 p-4 bg-white hover:bg-gray-100 transition-all duration-200"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </h3>
            <p
              className={`overflow-hidden transition-all duration-300 ease-in-out sm:px-7 p-4 text-base sm:text-xl border-b-2 border-gray-200 ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100 sm:py-7 p-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
