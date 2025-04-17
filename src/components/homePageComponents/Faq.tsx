// import React from "react";
import SectionHeading from "../shared/SectionHeading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase.",
    },
    {
      id: 2,
      question: "Do you offer technical support?",
      answer: "Yes, we offer 24/7 technical support for all our products.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Shipping typically takes 5-7 business days.",
    },
    {
      id: 4,
      question: "Can I cancel my order?",
      answer: "Orders can be canceled within 24 hours of placing them.",
    },
  ];

  return (
    <div className="mt-10 w-[99%] sm:w-[90%] mx-auto">
      <SectionHeading heading="Frequently Asked Questions" />
      <div className="w-full  mt-10">
        <Accordion type="single" collapsible>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="border border-gray-400"
            >
              <AccordionTrigger className="flex justify-between items-center p-8">
                <div className="font-[Poppins] text-[24px] leading-[36px] text-left font-semibold ">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 border-b border-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
