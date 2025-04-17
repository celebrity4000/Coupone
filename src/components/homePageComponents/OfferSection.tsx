// import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "../shared/CardComponent";
import { Card } from "@/components/ui/card";

const OfferSection: React.FC = () => {
  return (
    <div className="mt-10 w-[99%] sm:w-[90%] mx-auto">
      {/* Heading section */}
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        Popular Offer Of The Day
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
              <div className="p-1">
                <Card className="w-max">
                  <CardComponent />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
};

export default OfferSection;
