import React from "react";
import WalletCard from "./WalletCard";

const TopUpCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-20 rounded-md shadow-md  border p-6 max-sm:p-0  lg:p-12 ">
      <WalletCard balanceAmount={1499} className=" max-sm:scale-50 " />
      <div className="flex flex-col items-center justify-center ">
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
  );
};

export default TopUpCard;
