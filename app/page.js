"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import WalletCard from "./components/WalletCard";
import TransactionLog from "./components/TransactionLog";
import WalletComponent from "./components/WalletComponent";
import HowItWorks from "./components/HowItWorks";

const Page = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

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

  const logs = [
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Order Placed",
      Id: "118546418288053492501",
      money: "- ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Order Placed",
      Id: "118546418288053492501",
      money: "- ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Order Placed",
      Id: "118546418288053492501",
      money: "- ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
    {
      title: "Refund",
      Id: "4205824989",
      money: "+ ₹ 1,499.00",
      date: "Jun 18, 2024",
    },
  ];

  return (
    <div className="flex flex-col  py-8">
      <div className="pt-2 text-[#444] pb-8 border-b px-4 md:px-12 lg:px-20 xl:px-[220px]">
        <p className="mb-5 text-sm">
          <span className="opacity-50">Home /</span> Profile
        </p>
        <p className="text-2xl">
          hello, <span className="text-3xl font-semibold">Alien!</span>
        </p>
      </div>

      <div
        className={`flex flex-col lg:flex-row py-9 max-sm:py-0 gap-10  max-sm:gap-0
           md:px-12 lg:px-20 xl:px-[220px]
        `}
      >
        <div className="border-[#9a9a9a28] max-sm:px-4 border-t h-fit rounded-md shadow-md  py-6 px-6 w-full lg:w-[20%]  ">
          <div
            className={` ${
              isMobileScreen
                ? "flex  overflow-x-scroll gap-8 px-4"
                : "flex flex-col  gap-8  text-sm text-[#444]"
            }`}
          >
            <Link href={"#"} className="flex-shrink-0">
              Profile
            </Link>
            <Link href={"#"} className="flex-shrink-0">
              Orders & Returns
            </Link>
            <Link href={"#"} className="flex-shrink-0">
              Saved Addresses
            </Link>
            <Link href={"#"} className="flex-shrink-0">
              Saved Payment Details
            </Link>
            <Link
              href={"#"}
              className="flex-shrink-0 font-semibold text-[16px] text-[#3D7654]"
            >
              Wallet
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-5   border-[#9a9a9a28] ">
          <div>
            <WalletComponent></WalletComponent>
          </div>
          <div
            className="
              max-sm:px-4 "
          >
            <TransactionLog logs={logs}> </TransactionLog>
          </div>

          <div className="max-sm:px-4 ">
            <HowItWorks dynamic={true}></HowItWorks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
