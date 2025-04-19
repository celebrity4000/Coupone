import AmazonPageHeader from "@/components/amazonPageComponents/AmazonPageHeader";
import Progress from "@/components/shared/Progress";

import CouponeUsagePricing from "@/components/shared/CouponeUsagePricing";
import CouponeValidityDetails from "@/components/shared/CouponeValidityDetails";
import Footer from "@/components/shared/Footer";
import ProductReviewForm from "@/components/shared/ProductReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import amazon from "../assets/amazon.png";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const OnlineProducts: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Sorry Some error Occurs");
  }
  console.log(context);
  const { reviewData, setReviewData } = context.AmazonData;

  return (
    <div>
      <AmazonPageHeader />
      <CouponeUsagePricing imagesrc={amazon} />
      <CouponeValidityDetails />
      <Progress reviewData={reviewData} />
      <ReviewList reviewData={reviewData} />
      <ProductReviewForm reviewData={reviewData} setData={setReviewData} />

      <Footer />
    </div>
  );
};

export default OnlineProducts;
