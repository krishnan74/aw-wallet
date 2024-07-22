"use client";
import React, { useState, useEffect } from "react";
import WalletCard from "./WalletCard";
import Link from "next/link";

const WalletComponent = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const styles = {
    rippleOverlay: {
      backgroundImage: "url('/rippleTexture.png')",
      opacity: 0.6,
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative flex flex-col lg:flex-row gap-x-20 ${
        isMobileScreen ? "" : "rounded-md shadow-md"
      }   border p-6   lg:p-12 `}
    >
      <div
        className="absolute inset-0 z-0"
        style={isMobileScreen ? styles.rippleOverlay : null}
      ></div>
      <WalletCard balanceAmount={1499} className=" max-sm:scale-50 z-10 " />
      <div className="flex flex-col items-center justify-center p-5 z-10">
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center gap-1">
            <div className="bg-[#184A2C] w-[20px] h-[20px] rounded-full"></div>
            <span className="text-lg font-bold tracking-widest text-[#184A2C]">
              AW
            </span>
          </div>
          <span className="text-lg font-bold tracking-widest text-[#184A2C]">
            Wallet
          </span>
        </div>
        <p className="text-center text-sm w-[200px] text-[#444]">
          A Fast and Easy Way to Pay and Get Refunds!!
        </p>
        <Link
          href={"/topup"}
          className="border-[#184A2C] border-2 duration-200 text-[#184A2C] hover:bg-[#184A2C] hover:text-white px-10 py-2 rounded-full mt-5"
        >
          Top Up
        </Link>
      </div>
    </div>
  );
};

export default WalletComponent;
