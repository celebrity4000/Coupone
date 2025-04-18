import React, { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cards, tabs } from "@/constants/Popular";

const PopularOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-6 w-[90%] mx-auto ">
      <SectionHeading heading="Popular Offer" />

      {/* Mobile-first layout */}
      <div className="space-y-4">
        {/* Tabs - Horizontal scroll for mobile */}
        <div className="overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex flex-wrap space-x-4 w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-center font-[Poppins] font-bold text-base sm:text-[20px] whitespace-nowrap ${activeTab === tab.id
                  ? "border-b-2 border-[#248D50] text-[#248D50]"
                  : "text-[#404040]"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-2 sm:mt-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {cards[activeTab]?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="w-full min-w-[180px] max-w-[240px] mx-auto border rounded-[4px] p-3 sm:p-4 shadow-custom flex flex-col items-center">
                        <img
                          src={item.imgsrc}
                          alt="Company Logo"
                          className="w-[120px] sm:w-[160px]"
                        />
                        <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[1.2] text-[16px] sm:text-[20px] sm:leading-[30px] text-center">
                          {item.title}
                        </p>
                        <p className="my-2 sm:my-4 font-semibold text-[14px] sm:text-[18px] leading-[1.3] sm:leading-[27px] font-[Poppins]">
                          {item.subtitle}
                        </p>
                        <button className="bg-[#248D50] font-semibold text-white py-1 px-6 sm:py-2 sm:px-8 rounded-sm hover:bg-green-600 text-sm sm:text-base">
                          {item.buttonText}
                        </button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularOffer;