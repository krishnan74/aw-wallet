import React from "react";
import Link from "next/link";
import WalletCard from "./components/WalletCard";

const Page = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 lg:px-20 xl:px-[220px] py-8">
      <div className="py-9 border-b">
        <p className="mb-5 text-sm">
          <span className="opacity-50">Home /</span> Profile
        </p>
        <p className="text-2xl">
          hello, <span className="text-3xl font-semibold">Alien!</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row py-9 gap-10">
        <div className="flex flex-col gap-8 w-full lg:w-[20%] py-6 px-6 rounded-md shadow-md border-[#9a9a9a28] border-t h-fit text-sm">
          <Link href={"#"}>Profile</Link>
          <Link href={"#"}>Orders & Returns</Link>
          <Link href={"#"}>Saved Addresses</Link>
          <Link href={"#"}>Saved Payment Details</Link>
          <Link href={"#"}>Wallet</Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-x-20 p-6 max-sm:p-0  lg:p-12 rounded-md shadow-md border-[#9a9a9a28] border-t   ">
          <WalletCard balanceAmount={1499} className=" max-sm:scale-50" />
          <div className="flex flex-col items-center justify-center p-8 ">
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

            <button className="border-[#184A2C] border-2 duration-200 text-[#184A2C] hover:bg-[#184A2C] hover:text-white px-10 py-2 rounded-full mt-5">
              Top Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
