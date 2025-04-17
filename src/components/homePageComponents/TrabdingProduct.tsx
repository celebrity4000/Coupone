import React, { useState } from "react";

import movieicon from "../../assets/movieicon.png";
import fashionicon from "../../assets/fashionicon.png";
import travelicon from "../../assets/travelicon.png";
import electronicsicon from "../../assets/electronicsicon.png";
import electronicsicon2 from "../../assets/electronicsicon2.png";
import MONDOframe from "../../assets/MONDOfarm.png";
import SectionHeading from "../shared/SectionHeading";

interface Tab {
  id: number;
  name: string;
  icon: string;
  content: CardData[];
  stores: string;
  storeContent: StoreCard[];
}

interface CardData {
  imgsrc: string;
  description: string;
  discount: string;
  buttonLabel: string;
}
interface StoreCard {
  companyLogoSrc: string;
  storeDescription: string;
}
const TrabdingProduct: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      name: "Movies",
      icon: movieicon,
      content: [
        {
          imgsrc: MONDOframe,
          description: "80% Off on Plants",
          discount: "Logo Upto 15%",
          buttonLabel: "Get Deal",
        },
        {
          imgsrc: MONDOframe,
          description: "80% Off on Plants",
          discount: "Logo Upto 10%",
          buttonLabel: "Get Deal",
        },
        {
          imgsrc: MONDOframe,
          description: "80% Off on Plants",
          discount: "Logo Upto 8%",
          buttonLabel: "Get Deal",
        },
        {
          imgsrc: MONDOframe,
          description: "80% Off on Plants",
          discount: "Logo Upto 8%",
          buttonLabel: "Get Deal",
        },
        {
          imgsrc: MONDOframe,
          description: "80% Off on Plants",
          discount: "Logo Upto 8%",
          buttonLabel: "Get Deal",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
    {
      id: 2,
      name: "Fashion",
      icon: fashionicon,
      content: [
        {
          imgsrc: MONDOframe,
          description: "70% Off on Clothes",
          discount: "Logo Upto 20%",
          buttonLabel: "Grab Now",
        },
        {
          imgsrc: MONDOframe,
          description: "Buy 1 Get 1 Free",
          discount: "Exclusive Offer",
          buttonLabel: "Shop Now",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
    {
      id: 3,
      name: "Travel",
      icon: travelicon,
      content: [
        {
          imgsrc: MONDOframe,
          description: "50% Off on Flights",
          discount: "Summer Special",
          buttonLabel: "Book Now",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
    {
      id: 4,
      name: "Electronics",
      icon: electronicsicon,
      content: [
        {
          imgsrc: MONDOframe,
          description: "50% Off on Flights",
          discount: "Summer Special",
          buttonLabel: "Book Now",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
    {
      id: 5,
      name: "Electronics",
      icon: electronicsicon2,
      content: [
        {
          imgsrc: MONDOframe,
          description: "50% Off on Flights",
          discount: "Summer Special",
          buttonLabel: "Book Now",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
    {
      id: 6,
      name: "Electronics",
      icon: electronicsicon2,
      content: [
        {
          imgsrc: MONDOframe,
          description: "50% Off on Flights",
          discount: "Summer Special",
          buttonLabel: "Book Now",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
        {
          imgsrc: MONDOframe,
          description: "Holiday Packages",
          discount: "Upto 30% Off",
          buttonLabel: "Explore",
        },
      ],
      stores: "Stores",
      storeContent: [
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
        {
          companyLogoSrc: MONDOframe,
          storeDescription: "80% Off on Plants",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeContent =
    tabs.find((tab) => tab.id === activeTabId)?.content || [];
  const [leftSidebarHeight, setleftSidebarHeight] = useState(false);
  const [rightSidebarHeight, setrightSidebarHeight] = useState(false);

  return (
    <div className="mt-10 w-[90%] mx-auto">
      <SectionHeading heading="Trabding Product" />

      <div className="flex gap-5">
        {/* Sidebar */}
        <div className={`w-[280px] shadow-custom`}>
          {(leftSidebarHeight ? tabs : tabs.slice(0, 5)).map((tab) => (
            <button
              key={tab.id}
              className={`block w-full rounded-[4px] py-8 mb-4 transition ${
                tab.id === activeTabId
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

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default TrabdingProduct;
