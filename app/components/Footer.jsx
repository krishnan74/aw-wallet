import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const supportLinks = [
    "Support",
    "Terms & Conditions",
    "Privacy & Data Protection",
    "Return & Refund",
    "Payment Policy",
    "Shipping & Delivery",
    "Helpdesk",
  ];

  const aboutUsLinks = [
    "About Us",
    "Contact Us",
    "Bulk Orders",
    "Zero Waste Initiative",
    "Social Responsibility",
    "Documents",
    "FAQ",
  ];

  return (
    <div className="flex flex-col  md:px-12 lg:px-20 xl:px-[220px] py-8 mb-10 ">
      <div className="flex flex-wrap items-center h-fit py-8 max-sm:py-3 max-sm:px-0 border-b mb-10 border-t ">
        <div className="flex items-center justify-start gap-4 md:gap-8 w-[50%] max-sm:scale-75">
          <div className="bg-[#444444] w-[64px] h-[64px] max-sm:w-[40px] max-sm:h-[40px] rounded-full"></div>
          <span className="text-lg text-[#444] font-bold ">
            ALIEN <br /> WARDROBE
          </span>
        </div>
        <div className="flex gap-2 md:gap-3 mt-4 md:mt-0 items-center w-[50%] max-sm:scale-[0.60] justify-end">
          <div className="rounded-full bg-black text-white p-3">
            <IoLogoInstagram size={20}></IoLogoInstagram>
          </div>
          <div className="rounded-full bg-black text-white p-3">
            <RiTwitterXLine size={20}></RiTwitterXLine>
          </div>
          <div className="rounded-full bg-black text-white p-3">
            <FaWhatsapp size={20}></FaWhatsapp>
          </div>
          <div className="rounded-full bg-black text-white p-3">
            <RiFacebookFill size={20}></RiFacebookFill>
          </div>
          <div className="rounded-full bg-black text-white p-3">
            <FaLinkedinIn size={20}></FaLinkedinIn>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end">
        <div className="flex flex-row gap-10">
          <FooterLinks links={supportLinks}></FooterLinks>
          <FooterLinks links={aboutUsLinks}></FooterLinks>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-5 mt-8 lg:mt-0">
          <div className="flex gap-8">
            <div className="bg-[#D9D9D9] max-sm:w-[40px] max-sm:h-[40px]  w-[80px] h-[80px] rounded-full"></div>
            <div className="bg-[#D9D9D9] max-sm:w-[40px] max-sm:h-[40px] w-[80px] h-[80px] rounded-full"></div>
          </div>
          <p className="text-sm text-center lg:text-right text-[#444]">
            Designed & Crafted with Love by{" "}
            <span className="font-bold">RECINDUS</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
