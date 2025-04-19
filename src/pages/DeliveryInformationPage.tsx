import DeliveryForm from "@/components/DeliveryInformation/DeliveryForm";
import Footer from "@/components/shared/Footer";
import React from "react";

const DeliveryInformationPage: React.FC = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <DeliveryForm />

      <Footer />
    </div>
  );
};

export default DeliveryInformationPage;
