import Image from "next/image";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="w-[80%] mx-auto pt-20 items-start flex flex-wrap gap-x-20 gap-y-10">
        <div className="sm:w-100 w-80">
          <div className="flex items-center">
            <Image
              src={"/images/footer-icon.svg"}
              alt="mezo dark"
              width={200}
              height={200}
              className="w-auto"
            />
          </div>
          <p className="mt-4 text-gray-400 font-medium sm:w-100 w-80">
            Mezo is built by Thesis, a team that has dedicated 10+ years to
            expanding Bitcoin with security as top priority. Creators of tBTC,
            Fold, Taho, and more.
          </p>
          <div className="mt-6 flex items-center space-x-8">
            <div className="flex items-center justify-center flex-col  text-white rounded-full text-3xl">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center flex-col text-white rounded-full text-3xl">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center flex-col text-white rounded-full text-3xl">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center flex-col  text-white rounded-full text-3xl">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-lg font-bold  text-white">Company</h1>
          <p className="footer__link text-gray-400">Thesis</p>
          <p className="footer__link text-gray-400">Careers</p>
          <p className="footer__link text-gray-400">Contact</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold  text-white">Resources</h1>
          <p className="footer__link text-gray-400">Mezo Explorer</p>
          <p className="footer__link text-gray-400">Docs</p>
          <p className="footer__link text-gray-400">FAQs</p>
          <p className="footer__link text-gray-400">Blog</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold  text-white">Feedback</h1>
          <p className="footer__link text-gray-400">Report an Issue</p>
          
        </div>
        <div className="space-y-5 md:block hidden">
          <h1 className="text-lg font-bold  text-white">Legal</h1>
          <p className="footer__link text-gray-400">Privacy Policy</p>
          <p className="footer__link text-gray-400">Terms & Service</p>
          
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="text-center text-gray-500 md:text-left">
          Copyright &copy; 2025 Sourav. All rights reserved.
        </p>
        <div className="flex items-center text-gray-500  space-x-4 mt-4 md:mt-0 mb-2">
          <p>Clone website for educational purpose only.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
