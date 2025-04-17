// import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionHeading from "../shared/SectionHeading";
import Rating from "@mui/material/Rating";

const ReviewSection: React.FC = () => {
  const smallCards = [
    {
      id: 1,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 2,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 3,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 4,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 5,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
  ];
  return (
    <div className="mt-10 w-[99%] sm:w-[90%] mx-auto">
      <SectionHeading heading="Hear It From Our Customers" />
      <div>
        <Carousel
          // opts={{
          //   align: "center",
          // }}
          className="w-full "
        >
          <CarouselContent className="flex">
            {smallCards.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <div className="p-1">
                  <Card className="w-max">
                    <div
                      key={item.id}
                      className="w-[360px]  rounded-[8px] py-8 px-7 shadow-custom flex flex-col items-start justify-between gap-2 bg-[#BFFFD9]"
                    >
                      <div>
                        <Rating
                          name="half-rating-read"
                          defaultValue={3.5}
                          precision={0.5}
                          sx={{ marginRight: "2.5rem" }}
                          readOnly
                        />
                      </div>
                      <div className=" w-full font-['Poppins'] text-[16px] leading-[24px] text-left ">
                        {item.description}
                      </div>
                      <div className=" w-full font-['Poppins'] text-pretty   text-[16px] leading-[24px] text-right">
                        {item.name}
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

export default ReviewSection;
