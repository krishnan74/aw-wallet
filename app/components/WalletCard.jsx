import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import Image from "next/image";

const WalletCard = ({ balanceAmount }) => {
  return (
    <div className="relative bg-gradient-to-br to-[#184A2C] via-[#295D3D] from-[#6FAB87] flex w-[450px] h-[280px] rounded-xl ">
      <div className="flex items-center gap-[10px] absolute top-[85px] left-8">
        <div className="bg-white w-[20px] h-[20px] rounded-full"></div>
        <span className="text-sm tracking-widest text-white">
          ALIEN WARDROBE
        </span>
      </div>

      <div className="absolute left-8 bottom-8 text-white">
        <p className="text-lg tracking-widest mb-2">AVAILABLE BALANCE</p>
        <p className="flex items-center gap-1">
          <span>
            <FaRupeeSign />
          </span>

          <p className="text-2xl">{balanceAmount.toString()}</p>
        </p>
      </div>
      <Image
        className="absolute right-0 bottom-0"
        src="/walletPic.png"
        alt=""
        height={300}
        width={200}
      />
    </div>
  );
};

export default WalletCard;
