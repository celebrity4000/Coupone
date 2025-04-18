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
    <div className="mt-8 w-[95%] mx-auto sm:mt-12 sm:w-[90%]">
      <SectionHeading heading="Frequently Asked Questions" />

      <div className="w-full mt-6 sm:mt-10">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="flex justify-between items-center p-4 sm:p-6 hover:no-underline">
                <div className="font-poppins text-md sm:text-sm md:text-xl font-semibold text-left text-gray-800">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-6 text-base text-gray-600">
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