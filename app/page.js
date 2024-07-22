import React from "react";
import Link from "next/link";
import WalletCard from "./components/WalletCard";
import TransactionLog from "./components/TransactionLog";
import TopUpCard from "./components/TopUpCard";
import HowItWorks from "./components/HowItWorks";

const Page = () => {
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
    <div className="flex flex-col px-4 md:px-12 lg:px-20 xl:px-[220px] py-8">
      <div className="pt-2 pb-8 border-b">
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
        <div className="w-full flex flex-col gap-y-10   border-[#9a9a9a28] ">
          <TopUpCard></TopUpCard>
          <TransactionLog logs={logs}> </TransactionLog>
          <HowItWorks></HowItWorks>
        </div>
      </div>
    </div>
  );
};

export default Page;
