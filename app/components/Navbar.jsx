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
    <div className="flex flex-wrap justify-center items-center h-fit py-5 border-b px-4 md:justify-between gap-x-10  md:px-8 lg:px-16 gap-y-5">
      <div className="flex items-center gap-[16px] ">
        <div className="bg-[#184A2C] w-[50px] h-[50px] rounded-full"></div>
        <span className="text-sm font-semibold text-[#184A2C]">
          ALIEN <br /> WARDROBE
        </span>
      </div>
      <div className="hidden md:flex gap-6 lg:gap-1 border-3 font-semibold">
        {links.map((link, index) => {
          if (index === 2) {
            return (
              <div>
                <DropDown key={index} links={link}></DropDown>{" "}
                <Link
                  href={"#"}
                  className="text-sm text-gray-900 hover:bg-gray-50 px-3 py-2"
                >
                  Limited Edition
                </Link>
              </div>
            );
          }
          return <DropDown key={index} links={link}></DropDown>;
        })}
      </div>
      <div className="flex gap-4 md:gap-6 justify-center max-xl:w-full items-center">
        <div className="relative w-full md:w-auto text-[#444]">
          <IoSearchOutline
            className="absolute top-[7px] left-3"
            size={15}
          ></IoSearchOutline>
          <input
            type="text"
            className="border border-[#444444] w-full md:w-[280px] h-[30px] rounded-[24px] pl-8 pr-4 py-2 text-xs"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-2 md:gap-3">
          <Link
            href={"/"}
            className="rounded-full border border-black h-[30px] w-[30px] flex justify-center items-center "
          >
            <RiUserLine size={13}></RiUserLine>
          </Link>
          <Link
            href={"#"}
            className="rounded-full border border-black  h-[30px] w-[30px] flex justify-center items-center  "
          >
            <RiHeart3Line size={13}></RiHeart3Line>
          </Link>
          <Link
            href={"#"}
            className="rounded-full border border-black   h-[30px] w-[30px] flex justify-center items-center  "
          >
            <RiShoppingBag4Line size={13}></RiShoppingBag4Line>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
