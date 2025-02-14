import Link from "next/link";
import React from "react";

const FooterLinks = ({ links }) => {
  return (
    <div className="flex flex-col gap-3 text-[#444]">
      {links.map((link, index) => {
        if (index === 0) {
          return (
            <p key={index} className="text-lg max-sm:text-sm font-bold mb-3 ">
              {link}
            </p>
          );
        } else {
          return (
            <Link key={index} href="#" className="text-sm max-sm:text-xs">
              {link}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default FooterLinks;
