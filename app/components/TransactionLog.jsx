import React from "react";

const TransactionLog = ({ logs }) => {
  return (
    <div className="p-3 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Transaction Log</h2>
      <div>
        {logs.map((log, index) => (
          <div key={index} className="flex justify-between py-2">
            <div className="flex flex-col">
              <p className="font-medium">{log.title}</p>
              <p className="text-[#444444] opacity-60">{`${log.title} Id: ${log.Id}`}</p>
            </div>
            <div className="flex flex-col items-end">
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
    </div>
  );
};

export default TransactionLog;
