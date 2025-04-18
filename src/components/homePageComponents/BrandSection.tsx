import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeading from "../shared/SectionHeading";

// Import your images
import mondofarm from "../../assets/MONDOfarm.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";

const BrandSection: React.FC = () => {
  const brands = [
    { id: 1, name: "Radian", discount: "10%", img: brand1 },
    { id: 2, name: "MONDOfarms", discount: "7%", img: brand2 },
    { id: 3, name: "Zikomarket", discount: "20%", img: brand3 },
    { id: 4, name: "Amazon", discount: "12%", img: brand4 },
    { id: 5, name: "Udemy", discount: "30%", img: brand5 },
    { id: 6, name: "Spotify", discount: "8%", img: brand6 },
  ];

  return (
    <div className="mt-8 w-[95%] mx-auto sm:mt-10 sm:w-[90%]">
      <SectionHeading heading="Popular Brands" />

      <div className="bg-[#DAFFE9] p-4 sm:p-6 rounded-lg">
        {/* Main Brand Card - Stack on mobile, side-by-side on larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6">
          {/* Featured Brand Card */}
          <div className="w-full lg:w-[351px] h-auto sm:h-[343px] rounded-md p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="h-full flex flex-col justify-between">
              <img
                src={mondofarm}
                alt="MONDOfarm"
                className="mx-auto w-[200px] sm:w-auto max-h-[180px] object-contain"
              />
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold font-poppins leading-tight">
                  MONDOfarms
                </h3>
                <p className="font-poppins text-base sm:text-lg md:text-[18px] font-semibold mt-4 sm:mt-6">
                  Up to 7% Cashback
                </p>
              </div>
            </div>
          </div>

          {/* Brand Grid - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-full h-[160px] rounded-md p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="mx-auto max-h-[80px] object-contain"
                />
                <div className="text-center">
                  <p className="font-poppins text-sm text-gray-600">
                    Up to {brand.discount} Cashback
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Shown only on mobile */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="w-full h-[160px] rounded-md p-4 bg-white shadow-sm flex flex-col justify-between">
                        <img
                          src={brand.img}
                          alt={brand.name}
                          className="mx-auto max-h-[80px] object-contain"
                        />
                        <div className="text-center">
                          <p className="font-poppins text-sm text-gray-600">
                            Up to {brand.discount} Cashback
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex size-8" />
            <CarouselNext className="hidden sm:flex size-8" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;