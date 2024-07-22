import React from "react";

const TopUpCard = ({ topUpMoneySuggestions, handleClick, money }) => {
  return (
    <div className="flex flex-col justify-center p-6 rounded-md shadow-md border-[#9a9a9a28] border-t">
      <div className="flex justify-between text-xl font-semibold mb-5 max-sm:text-lg pb-5 border-b">
        <p>Wallet Top Up</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {topUpMoneySuggestions.map((suggestion, index) => (
          <button
            key={index}
            className="bg-[#F5F5F5] rounded-full text-xs  px-5 text-[#444] py-2"
            onClick={() => handleClick(suggestion)}
          >
            {`₹ ${suggestion.toString()}`}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={money}
        className="border-b py-2 mt-10 text-sm w-full"
        placeholder="₹ Enter an Amount (eg: 1000)"
        onChange={(e) => handleClick(e.target.value)}
      />

      <button className="text-white mt-10 py-3 rounded-full mb-5  bg-gradient-to-b from-[#184A2CCC] to-[#599872CC]">
        Top Up
      </button>
    </div>
  );
};

export default TopUpCard;
