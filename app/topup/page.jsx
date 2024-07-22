"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import WalletCard from "../components/WalletCard";
import { FaArrowLeft } from "react-icons/fa";

import HowItWorks from "../components/HowItWorks";
import TopUpCard from "../components/TopUpCard";

const Page = () => {
  const [topUpMoney, setTopUpMoney] = useState();

  const handleClickOptionMoney = (money) => {
    setTopUpMoney(money);
  };

  const topUpMoneySuggestions = [500, 1000, 1500, 2000, 2500, 3000];

  return (
    <div className="flex flex-wrap gap-10 justify-center py-9 max-sm:py-0 md:px-12 lg:px-20 xl:px-[220px]">
      <Link
        href={"/"}
        className="text-[#184A2C]  max-sm:flex items-center gap-3 hidden mb-4 py-3 px-6 border-b w-full"
      >
        <FaArrowLeft></FaArrowLeft>
        <p className="">Wallet</p>
      </Link>

      <div className="w-[40%] max-sm:w-full max-sm:px-4">
        <WalletCard balanceAmount={1499}></WalletCard>
      </div>

      <div className="w-[50%] flex flex-col gap-y-10 max-sm:w-full max-sm:px-4  ">
        <div>
          <TopUpCard
            handleClick={handleClickOptionMoney}
            money={topUpMoney}
            topUpMoneySuggestions={topUpMoneySuggestions}
          ></TopUpCard>
        </div>
        <div className="   border-[#9a9a9a28]">
          <HowItWorks dynamic={false}></HowItWorks>
        </div>
      </div>
    </div>
  );
};

export default Page;
