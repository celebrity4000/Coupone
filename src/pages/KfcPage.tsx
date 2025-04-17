import KfcPageHeader from "@/components/kfcPageComponents/KfcPageHeader";
import Progress from "@/components/shared/Progress";
import CouponeUsagePricing from "@/components/shared/CouponeUsagePricing";
import CouponeValidityDetails from "@/components/shared/CouponeValidityDetails";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ProductReviewForm from "@/components/shared/ProductReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import kfc from "../assets/kfc.png";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import KfcAddressComponent from "@/components/kfcPageComponents/KfcAddressComponent";
const KfcPage: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Sorry Some error Occurs");
  }
  console.log(context);
  const { kfcReviewData, setKfcReviewData } = context.KfcData;

  return (
    <div>
      <Navbar />
      <KfcPageHeader />
      <KfcAddressComponent />
      <CouponeUsagePricing imagesrc={kfc} />
      <CouponeValidityDetails />
      <Progress reviewData={kfcReviewData} />
      <ReviewList reviewData={kfcReviewData} />
      <ProductReviewForm
        reviewData={kfcReviewData}
        setData={setKfcReviewData}
      />

      <Footer />
    </div>
  );
};

export default KfcPage;
