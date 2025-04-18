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
import Rating from "@mui/material/Rating";

const ReviewSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      img: "brand1",
      name: "Amina Okafor, Lagos",
      description: "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
      rating: 4.5
    },
    {
      id: 2,
      img: "brand1",
      name: "Kwame Mensah, Accra",
      description: "Excellent cashback offers and easy to use interface. Saved a lot on my online shopping!",
      rating: 5
    },
    {
      id: 3,
      img: "brand1",
      name: "Zuri Ndlovu, Johannesburg",
      description: "The best rewards app I've used. Customer support is responsive and helpful.",
      rating: 4
    },
    {
      id: 4,
      img: "brand1",
      name: "Tunde Adebayo, Abuja",
      description: "Regularly get great deals that aren't available elsewhere. Highly recommended!",
      rating: 4.5
    },
    {
      id: 5,
      img: "brand1",
      name: "Fatima Diallo, Dakar",
      description: "Simple to use and the cashback actually works. No hidden terms or conditions.",
      rating: 5
    },
  ];

  return (
    <div className="mt-8 w-[95%] mx-auto sm:mt-12 sm:w-[90%]">
      <SectionHeading heading="Hear It From Our Customers" />

      <div className="mt-6">
        <Carousel
          opts={{
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-1 basis-11/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full min-w-[280px] max-w-[380px] mx-auto rounded-xl p-5 sm:p-6 shadow-sm flex flex-col gap-4 bg-[#F0FFF5]">
                      <div className="flex justify-start">
                        <Rating
                          name="read-only"
                          value={review.rating}
                          precision={0.5}
                          readOnly
                          size="medium"
                          sx={{
                            '& .MuiRating-iconFilled': {
                              color: '#248D50',
                            },
                            '& .MuiRating-iconHover': {
                              color: '#1a7a41',
                            },
                          }}
                        />
                      </div>

                      <div className="font-poppins text-sm sm:text-base leading-relaxed text-gray-700">
                        "{review.description}"
                      </div>

                      <div className="mt-auto font-poppins text-sm sm:text-base font-medium text-gray-900 text-right">
                        - {review.name}
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex size-8 bg-white border-gray-300 hover:bg-gray-50" />
          <CarouselNext className="hidden sm:flex size-8 bg-white border-gray-300 hover:bg-gray-50" />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;