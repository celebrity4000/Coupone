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
import MONDOfarm from "../../assets/smallimage.png";
interface CardData {
  id: number;
  logosrc: string;
  title: string;
  discount: string;
}

const cardsItems: CardData[] = [
  {
    id: 1,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 2,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 3,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 4,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 5,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 6,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 7,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
];

const CashBackOffer: React.FC = () => {
  return (
    <div className="mt-10 w-[99%] sm:w-[90%] mx-auto">
      <SectionHeading heading="High Cashback Offer" />

      <div>
        <Carousel
          // opts={{
          //   align: "center",
          // }}
          className="w-full "
        >
          <CarouselContent className="flex">
            {cardsItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1 w-max">
                  <Card className="w-max">
                    <div
                      key={item.id}
                      className="w-[360px]  rounded-[8px] py-8 px-7 shadow-custom flex flex-col items-start justify-between gap-2 "
                    >
                      <div className="flex justify-between items-center gap-8">
                        <div className="flex items-center justify-center ">
                          <img
                            src={item.logosrc}
                            alt="Company Logo"
                            className="max-w-[120px] max-h-[120px] object-cover"
                          />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-8">
                          <h2 className="font-[Poppins] leading-[36px] text-[24px] font-semibold">
                            {item.title}
                          </h2>
                          <button className="bg-[#68FFA5] rounded-sm text-left py-2 px-8">
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
          <CarouselPrevious className="hidden sm:block" />
          <CarouselNext className="hidden sm:block" />
        </Carousel>
      </div>
    </div>
  );
};

export default CashBackOffer;
