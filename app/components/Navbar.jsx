import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

import { RiUserLine } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

const Navbar = () => {
  const menLinks = ["Men", "T-Shirts", "Hoodies", "Jackets", "Pants", "Shorts"];
  const womenLinks = [
    "Women",
    "T-Shirts",
    "Hoodies",
    "Jackets",
    "Pants",
    "Shorts",
  ];
  const kidsLinks = [
    "Kids",
    "T-Shirts",
    "Hoodies",
    "Jackets",
    "Pants",
    "Shorts",
  ];
  const moreLinks = [
    "More",
    "Accessories",
    "Collections",
    "Gift Cards",
    "Sale",
    "Blog",
  ];
  const links = [menLinks, womenLinks, kidsLinks, moreLinks];

  return (
    <div className="flex flex-wrap justify-center items-center h-fit py-5 border-b px-4 md:justify-between md:px-8 lg:px-16 gap-y-5">
      <div className="flex items-center gap-[16px]">
        <div className="bg-[#184A2C] w-[64px] h-[64px] rounded-full"></div>
        <span className="text-lg font-bold">
          ALIEN <br /> WARDROBE
        </span>
      </div>
      <div className="hidden md:flex gap-6 lg:gap-10">
        {links.map((link, index) => (
          <DropDown key={index} links={link}></DropDown>
        ))}
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="relative w-full md:w-auto">
          <IoSearchOutline
            className="absolute top-[10px] left-4"
            size={20}
          ></IoSearchOutline>
          <input
            type="text"
            className="border border-[#444444] w-full md:w-[344px] h-[40px] rounded-[24px] pl-11 pr-4 py-2 text-md"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-2 md:gap-3">
          <div className="rounded-full border border-black p-3">
            <RiUserLine></RiUserLine>
          </div>
          <div className="rounded-full border border-black p-3">
            <RiHeart3Line></RiHeart3Line>
          </div>
          <div className="rounded-full border border-black p-3">
            <RiShoppingBag4Line></RiShoppingBag4Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
