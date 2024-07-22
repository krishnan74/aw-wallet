import Link from "next/link";
import React from "react";

const FooterLinks = ({ links }) => {
  return (
    <div className="flex flex-col gap-3 text-[#444]">
      {links.map((link, index) => {
        if (index === 0) {
          return (
            <p key={index} className="text-lg font-bold mb-3 ">
              {link}
            </p>
          );
        } else {
          return (
            <Link key={index} href="#" className="text-sm">
              {link}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default FooterLinks;
