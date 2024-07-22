import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import Image from "next/image";

const WalletCard = ({ balanceAmount }) => {
  return (
    <div className="relative bg-gradient-to-br to-[#184A2C] via-[#295D3D] from-[#6FAB87] flex w-full max-w-[450px] h-[280px] max-sm:h-[200px]  rounded-xl p-4 md:p-8">
      <div className="flex items-center gap-[10px] absolute top-[85px] left-8  max-sm:left-5 max-sm:top-[55px]">
        <div className="bg-white w-[20px] h-[20px] rounded-full"></div>
        <span className="text-sm tracking-widest text-white max-sm:text-xs">
          ALIEN WARDROBE
        </span>
      </div>

      <div className="absolute left-8 bottom-8 text-white max-sm:bottom-6 max-sm:left-5">
        <p className="text-sm md:text-lg tracking-widest mb-2">
          AVAILABLE BALANCE
        </p>
        <p className="flex items-center gap-1">
          <span>
            <FaRupeeSign />
          </span>
          <span className="text-xl md:text-2xl">
            {balanceAmount.toString()}
          </span>
        </p>
      </div>
      <Image
        className="absolute right-0 bottom-0 max-sm:h-[215px] max-sm:w-[145px]"
        src="/walletPic.png"
        alt="Wallet"
        height={200}
        width={150}
        md-height={300}
        md-width={200}
      />
    </div>
  );
};

export default WalletCard;
