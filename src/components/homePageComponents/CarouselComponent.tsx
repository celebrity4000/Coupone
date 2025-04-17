// import * as React from "react";
import carousel1 from "../../assets/carousel1.png";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent: React.FC = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full md:basis-1/3 lg:basis-1/4 mx-4"
            >
              <div className="p-1">
                <Card className="w-max">
                  <img src={carousel1} alt="Slide 2" className="w-[360px]" />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
