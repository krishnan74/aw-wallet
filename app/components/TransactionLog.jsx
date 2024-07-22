import React from "react";

const TransactionLog = ({ logs }) => {
  return (
    <div className="p-3 rounded-md shadow-md">
      Transaction Log
      <div>
        {logs.map((log) => (
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <p>{log.title}</p>
              <p className="text-[#444444] opacity-60">{`${log.title} Id : ${log.Id}`}</p>
            </div>
            <div className="flex flex-col ">
              <p
                className={`${
                  log.money[0] == "+" ? "text-[#3D7654]" : "text-[#E1525A]"
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
