import Link from "next/link";
import React from "react";

const FooterLinks = ({ links }) => {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link, index) => {
        if (index === 0)
          return <p className="text-md font-bold mb-3">{link}</p>;
        return (
          <Link href={"#"} className="text-sm">
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
