"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const HowItWorks = () => {
  // Initialize state for managing open/closed state
  const [isOpen, setIsOpen] = useState(true); // Default open for larger screens

  // Hook to update the state based on screen size
  useEffect(() => {
    // Function to handle window resize events
    const handleResize = () => {
      // Check if the window width is smaller than 640px (Tailwind's sm breakpoint)
      if (window.innerWidth < 640) {
        setIsOpen(false); // Closed on smaller screens
      } else {
        setIsOpen(true); // Open on larger screens
      }
    };

    // Set initial state based on current window size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle the open/closed state
  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // List of steps
  const steps = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
    "Excepteur sint occaecat cupidatat non proident.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div className="p-8 rounded-md shadow-md border-[#9a9a9a28] border-t">
      <div className="flex justify-between text-xl font-semibold mb-4 max-sm:text-lg pb-5 border-b">
        <p>How It Works</p>
        <button onClick={toggle} className="block sm:hidden">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </button>
      </div>
      <ol
        className={`list-disc ml-8 py-2 max-sm:text-sm ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        {steps.map((step, index) => (
          <li key={index} className="py-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowItWorks;
