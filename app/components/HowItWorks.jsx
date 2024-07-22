"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const HowItWorks = ({ dynamic }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && dynamic) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const steps = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
    "Excepteur sint occaecat cupidatat non proident.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div
      className={`pt-8 px-8 max-sm:pt-5 ${
        isOpen ? "max-sm:pb-5" : "max-sm:pb-0"
      }  pb-5 rounded-md shadow-md border-[#9a9a9a28] border-t text-[#444]`}
    >
      <div className="flex justify-between text-xl font-semibold mb-4 max-sm:text-lg pb-5 border-b">
        <p>How It Works ? </p>
        <button
          onClick={toggle}
          className={` ${dynamic ? "block sm:hidden" : "hidden"} `}
        >
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </button>
      </div>
      <ol
        className={`list-disc ml-8 py-2 max-sm:text-sm ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        {steps.map((step, index) => (
          <li key={index} className={`${dynamic ? "" : "text-sm"} py-2`}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowItWorks;
