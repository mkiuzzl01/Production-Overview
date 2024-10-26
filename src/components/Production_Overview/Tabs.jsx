import React, { useState } from "react";
import OrderList from "../OrderList/OrderList";
import ActivityLog from "../ActivityLog/ActivityLog";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ActivityLog");

  const tabs = [
    { name: "OrderList", icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }, // Example icon path
    { name: "ActivityLog", icon: "M12 12m-10,0a10,10 0 1,1 20,0a10,10 0 1,1 -20,0" } // Example icon path
  ];

  return (
    <div className="flex flex-col bg-gray-500">
      <div className="flex items-center justify-center bg-gray-800 text-gray-100">
        {tabs.map((tab, idx) => (
          <a
            key={idx}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 ${
              activeTab === tab.name
                ? "border-gray-400 text-gray-50"
                : "border-transparent text-red-200"
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={() => setActiveTab(tab.name)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d={tab.icon}></path>
            </svg>
            <span>{tab.name}</span>
          </a>
        ))}
      </div>

      <div className="p-5">
        {activeTab === "OrderList" && <OrderList />}
        {activeTab === "ActivityLog" && <ActivityLog />}
      </div>
    </div>
  );
};

export default Tabs;
