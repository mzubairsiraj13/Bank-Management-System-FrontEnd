import React from "react";

const BalanceCard = ({ icon = "H", balanceType = "Current Balace", balance= 568568 }) => {
  return (
    <div className='h-40 w-52 flex-grow bg-gradient-to-r from-blue-600 to-blue-500 text-white border p-5 rounded-lg'>
      <div>{icon}</div>
      <span className="font-semibold mt-4 block">{balanceType}</span>
      <span className="text-sm text-gray-300 font-medium">${balance}</span>
    </div>
  );
};

export default BalanceCard;
