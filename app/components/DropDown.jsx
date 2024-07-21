import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({ links, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        <button
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
          id="menu-button"
        >
          {links[0]}
          <FaChevronDown />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 p-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          tabIndex="-1"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {links.slice(1).map(
            (
              link,
              index // Use slice(1) to skip the first element which is already rendered
            ) => (
              <a
                key={index} // Add key prop here
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {link}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
