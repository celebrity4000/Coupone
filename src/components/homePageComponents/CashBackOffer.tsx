import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeading from "../shared/SectionHeading";
import { cardsItems } from "@/constants/CashBack";

const CashBackOffer: React.FC = () => {
  return (
    <div className="mt-6 w-[95%] mx-auto sm:mt-10 sm:w-[90%]">
      <SectionHeading heading="High Cashback Offer" />

      <div className="mt-4">
        <Carousel
          opts={{
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {cardsItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-1 h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full min-w-[220px] max-w-[380px] mx-auto rounded-lg p-4 sm:p-6 shadow-custom flex flex-col gap-4 sm:gap-6 bg-white">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src={item.logosrc}
                            alt="Company Logo"
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                          <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                            {item.title}
                          </h2>
                          <button className="bg-[#68FFA5] hover:bg-[#54e891] rounded-md py-2 px-5 sm:py-2 sm:px-6 text-sm sm:text-base font-medium transition-colors">
                            {item.discount}
                          </button>
                        </div>
                      </div>
                    </div>
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
  );
};

export default CashBackOffer;