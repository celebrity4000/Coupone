import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "../shared/CardComponent";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"

const OfferSection: React.FC = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="mt-10 w-[90%] mx-auto">
      {/* Heading section */}
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        Popular Offer Of The Day
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full">
        <CarouselContent className="flex">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto md:basis-1/2 lg:basis-1/4 mr-10">
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
