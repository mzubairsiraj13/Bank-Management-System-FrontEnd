import React from "react";
import { useSelector } from "react-redux";
import { getGreeting } from "../../Data/SampleData";
import BalanceCard from "./BalanceCard";
import {
  FaCreditCard,
  FaMoneyCheckAlt,
  FaPiggyBank,
  FaWallet,
} from "react-icons/fa";
import BalanceCharts from "./BalanceCharts";

const DashboardHome = () => {
  const user = useSelector((state) => state.auth.user);
  const sampleCardData = [
    {
      id: 1,
      icon: <FaWallet size={24} />,
      balanceType: "Wallet Balance",
      balance: "1,234.56",
    },
    {
      id: 2,
      icon: <FaCreditCard size={24} />,
      balanceType: "Credit Card Balance",
      balance: "567.89",
    },
    {
      id: 3,
      icon: <FaPiggyBank size={24} />,
      balanceType: "Savings Account",
      balance: "3,456.78",
    },
    {
      id: 4,
      icon: <FaMoneyCheckAlt size={24} />,
      balanceType: "Checking Account",
      balance: "2,890.12",
    },
  ];
  return (
    <main>
      <div className="w-full font-bold text-xl border-b-2 py-2">
        Welcome{" "}
        <span className="text-blue-700">
          {user.firstName} {user.lastName}
        </span>
        <div className="text-sm font-medium text-gray-600">{getGreeting()}</div>
      </div>
      <div className="my-4 flex justify-center items-center flex-wrap gap-4">
        {sampleCardData.map((cardItem) => (
          <div key={cardItem.id} className="">
            <BalanceCard
              icon={cardItem.icon}
              balanceType={cardItem.balanceType}
              balance={cardItem.balance}
            />
          </div>
        ))}
      </div>
      <div>
        <BalanceCharts/>
      </div>
    </main>
  );
};

export default DashboardHome;
