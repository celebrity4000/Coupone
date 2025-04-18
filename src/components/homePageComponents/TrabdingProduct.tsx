import React, { useState, useEffect } from "react";
import SectionHeading from "../shared/SectionHeading";
import { tabs } from "@/constants/Catagory";

const TrabdingProduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTabId)?.content || [];
  const [leftSidebarHeight, setleftSidebarHeight] = useState(false);
  const [rightSidebarHeight, setrightSidebarHeight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-10 w-[90%] mx-auto">
      <SectionHeading heading="Trabding Product" />

      {isMobile ? (
        // Mobile View
        <div>
          {/* Mobile Tabs */}
          <div className="mb-6 flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full space-x-2 pb-2 gap-2 flex-wrap">
              {(leftSidebarHeight ? tabs : tabs.slice(0, 5)).map((tab) => (
                <button
                  key={tab.id}
                  className={`flex-shrink-0 border border-lime-500 rounded-[4px] px-4 py-3 transition ${tab.id === activeTabId
                    ? "bg-[#E5FFF0]"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  onClick={() => {
                    setActiveTab(tab.name);
                    setActiveTabId(tab.id);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <img src={tab.icon} alt="" className="w-4 h-4" />
                    {tab.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Tab Content */}
          <div className="p-4 rounded-[8px] shadow-custom">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{activeTab} Offers</h2>
              <div
                className="text-center text-[#248D50] cursor-pointer"
                onClick={() => setrightSidebarHeight((prev) => !prev)}
              >
                {rightSidebarHeight ? "Show Less" : "Show More"}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {activeContent
                .slice(0, rightSidebarHeight ? activeContent.length : 3)
                .map((card, index) => (
                  <div
                    key={index}
                    className="w-full border rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                  >
                    <img
                      src={card.imgsrc}
                      alt="Company Logo"
                      className="w-[120px]"
                    />
                    <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[24px] text-[16px] text-center">
                      {card.description}
                    </p>
                    <p className="my-3 font-semibold text-[16px] leading-[24px] font-[Poppins]">
                      {card.discount}
                    </p>
                    <button className="bg-[#248D50] font-semibold text-white py-1 px-6 rounded-sm hover:bg-green-600 text-sm">
                      {card.buttonLabel}
                    </button>
                  </div>
                ))}
            </div>

            {/* Stores Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Stores</h2>
              <div className="grid grid-cols-1 gap-4">
                {activeContent
                  .slice(0, rightSidebarHeight ? activeContent.length : 3)
                  .map((card, index) => (
                    <div
                      key={index}
                      className="w-full border bg-[#F0F0F0] rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                    >
                      <img
                        src={card.imgsrc}
                        alt="Company Logo"
                        className="w-[120px]"
                      />
                      <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[24px] text-[16px] text-center">
                        {card.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop View 
        <div className="flex gap-5">
          {/* Sidebar */}
          <div className={`w-[280px] shadow-custom`}>
            {(leftSidebarHeight ? tabs : tabs.slice(0, 5)).map((tab) => (
              <button
                key={tab.id}
                className={`block w-full rounded-[4px] py-8 mb-4 transition ${tab.id === activeTabId
                  ? "bg-[#E5FFF0]"
                  : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                onClick={() => {
                  setActiveTab(tab.name);
                  setActiveTabId(tab.id);
                }}
              >
                <span className="flex items-center gap-2 justify-center">
                  <img src={tab.icon} alt="" />
                  {tab.name}
                </span>
              </button>
            ))}

            {/* Show More/Less button */}
            <div
              className="text-center text-[#248D50] cursor-pointer mb-1 md:mb-3"
              onClick={() => setleftSidebarHeight((prev) => !prev)}
            >
              {leftSidebarHeight ? "Show Less" : "Show More"}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full p-4 py-5 rounded-[8px] shadow-custom">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-4">{activeTab} Offers</h2>

              {/* Show More/Less button */}
              <div
                className="text-center text-[#248D50] cursor-pointer"
                onClick={() => setrightSidebarHeight((prev) => !prev)}
              >
                {rightSidebarHeight ? "Show Less" : "Show More"}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeContent
                .slice(0, rightSidebarHeight ? activeContent.length : 3)
                .map((card, index) => (
                  <div
                    key={index}
                    className=" w-[240px] border  rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                  >
                    <img
                      src={card.imgsrc}
                      alt="Company Logo"
                      className="w-[160px]"
                    />
                    <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[30px] text-[20px]">
                      {card.description}
                    </p>
                    <p className=" my-4  font-semibold text-[18px] leading-[27px] font-[Poppins]">
                      {card.discount}
                    </p>
                    <button className="bg-[#248D50] font-semibold text-white py-2 px-8 rounded-sm hover:bg-green-600">
                      {card.buttonLabel}
                    </button>
                  </div>
                ))}
            </div>

            {/*  */}
            <div>
              <h2 className="text-2xl font-bold mt-10 mb-5">Stores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeContent
                  .slice(0, rightSidebarHeight ? activeContent.length : 3)
                  .map((card, index) => (
                    <div
                      key={index}
                      className=" w-[240px] border bg-[#F0F0F0]  rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                    >
                      <img
                        src={card.imgsrc}
                        alt="Company Logo"
                        className="w-[160px]"
                      />
                      <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[30px] text-[20px]">
                        {card.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrabdingProduct;