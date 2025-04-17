import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import mondofarm from "../../assets/MONDOfarm.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import SectionHeading from "../shared/SectionHeading";

const BrandSection: React.FC = () => {
  const smallCards = [
    { id: 1, name: "Radian", discount: "10%", img: brand1 },
    { id: 2, name: "MONDOfarms", discount: "7%", img: brand2 },
    { id: 3, name: "Zikomarket", discount: "20%", img: brand3 },
    { id: 4, name: "Amazon", discount: "12%", img: brand4 },
    { id: 5, name: "Udemy", discount: "30%", img: brand5 },
    { id: 6, name: "Spotify", discount: "8%", img: brand6 },
    { id: 7, name: "Spotify", discount: "8%", img: brand6 },
    { id: 8, name: "Spotify", discount: "8%", img: brand6 },
  ];
  return (
    <div className="mt-10 w-[99%] sm:w-[90%] mx-auto">
      <SectionHeading heading="Popular Brand" />

      <div className="bg-[#DAFFE9] p-6 rounded-[8px] flex flex-wrap gap-6">
        {/* Large Card */}
        <div className="w-[351px] h-[343px] rounded-[4px] p-4 bg-white">
          <div>
            <img src={mondofarm} alt="MONDOfarm" className="mx-auto" />
          </div>
          <div className="text-center mt-6">
            <div className="text-[28px] font-semibold font-['Poppins'] leading-[42px]">
              MONDOfarms
            </div>
            <div className="font-['Poppins'] text-[18px] font-semibold leading-[27px] mt-8">
              Logo Upto 7%
            </div>
          </div>
        </div>

        {/* Grid of Small Cards */}
        <div className=" brandWidth:hidden grid grid-cols-7 gap-4">
          {smallCards.map((card) => (
            <div
              key={card.id}
              className="w-[160px] h-[160px] rounded-[4px] p-4 bg-white shadow-custom flex flex-col justify-between"
            >
              <div>
                <img src={card.img} alt={card.name} className="mx-auto" />
              </div>
              <div className=" font-['Poppins'] text-center text-[18px] leading-[27px] font-semibold ">
                <div className="font-['Poppins'] text-[16px] text-gray-600">
                  Logo Upto {card.discount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Carousel
          // opts={{
          //   align: "center",
          // }}
          className="w-full md:hidden block"
        >
          <CarouselContent className="flex">
            {smallCards.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="w-max">
                    <CardContent
                      key={item.id}
                      className="w-[160px] h-[160px] rounded-[4px] p-4 bg-white shadow-custom flex flex-col justify-between"
                    >
                      <div>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="mx-auto"
                        />
                      </div>
                      <div className=" font-['Poppins'] text-center text-[18px] leading-[27px] font-semibold ">
                        <div className="font-['Poppins'] text-[16px] text-gray-600">
                          Logo Upto {item.discount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block" />
          <CarouselNext className="hidden sm:block" />
        </Carousel>
      </div>
    </div>
  );
};

export default BrandSection;
