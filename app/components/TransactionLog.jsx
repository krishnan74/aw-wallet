"use client";
import React, { useState } from "react";

const TransactionLog = ({ logs }) => {
  const [displayCount, setDisplayCount] = useState(3);

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const logsToDisplay = logs.slice(0, displayCount);

  return (
    <div className="px-8 pt-8 pb-5 rounded-md shadow-md border-[#9a9a9a28] border-t">
      <h2 className="text-xl font-semibold mb-4 max-sm:text-lg pb-5 border-b">
        Transaction Log
      </h2>
      <div className="flex flex-col gap-y-3 max-sm:text-sm">
        {logsToDisplay.map((log, index) => (
          <div
            key={index}
            className={`flex justify-between py-2 ${
              index == logs.length - 1 ? "" : "border-b"
            }  pb-5 `}
          >
            <div className="flex flex-col w-[60%]">
              <p className="font-medium">{log.title}</p>
              <p className="text-[#444444] opacity-60">{`${log.title} Id: ${log.Id}`}</p>
            </div>
            <div className="flex flex-col items-end w-[40%]">
              <p
                className={`${
                  log.money[0] === "+" ? "text-[#3D7654]" : "text-[#E1525A]"
                }`}
              >
                {log.money}
              </p>
              <p className="text-[#444444] opacity-60">{log.date}</p>
            </div>
          </div>
        ))}
      </div>

      {displayCount < logs.length && (
        <div className="flex justify-center mt-5">
          <button onClick={handleViewMore} className="text-[#3D7654]">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionLog;
