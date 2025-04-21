import Progress from "@/components/shared/Progress";
import CouponeUsagePricing from "@/components/shared/CouponeUsagePricing";
import CouponeValidityDetails from "@/components/shared/CouponeValidityDetails";
import Footer from "@/components/shared/Footer";
import ProductReviewForm from "@/components/shared/ProductReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import PageHeader from "@/components/OfflinePageComponents/PageHeader";
import AddressComponent from "@/components/OfflinePageComponents/AddressComponent";

interface Data {
  headerImage: string;
  title: string;
  richDescription: string;
  offerText: string;
  originalPrice: number;
  discountPercentage: number;
  couponCode: string;
  expirationDate: string;
  terms: string[];
  reviewData: ReviewData[];
}

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  reviewDescription: string;
  firstname: string;
}

const OfflineProducts: React.FC = () => {
  const [data, setData] = React.useState<Data>();
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Sorry Some error Occurs");
  }

  const { kfcReviewData, setKfcReviewData } = context.KfcData;

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      const mockResponse: Data = {
        headerImage:
          "https://www.pngplay.com/wp-content/uploads/9/KFC-Logo-PNG-Free-File-Download.png",
        title: "Special Chicken Bucket Deal",
        richDescription: "Get an exclusive deal with our special coupon code.",
        offerText: "Enjoy 20% off",
        originalPrice: 50,
        discountPercentage: 20,
        couponCode: "KFC20",
        expirationDate: "2023-12-31",
        terms: [
          "Valid for one-time use only.",
          "Cannot be combined with other offers.",
          "Valid at participating locations.",
          "Excludes delivery fees.",
          "No cash value.",
        ],
        reviewData: [
          {
            rating: 5,
            reviewTitle: "Amazing Chicken!",
            recommend: "Yes",
            productReview: "The chicken was juicy and flavorful.",
            reviewDescription: "I will definitely order again.",
            firstname: "Alice",
          },
          {
            rating: 4,
            reviewTitle: "Great Chicken!",
            recommend: "Yes",
            productReview: "The chicken was crispy and delicious.",
            reviewDescription: "I loved the flavor and the sides were great too.",
            firstname: "John",
          },
          {
            rating: 3,
            reviewTitle: "Good but could be better",
            recommend: "Maybe",
            productReview: "The chicken was good, but the service was slow.",
            reviewDescription: "I had to wait a long time for my order.",
            firstname: "Jane",
          }
        ],
      }

      setData(mockResponse);
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        data && <>
          <PageHeader
            image={data?.headerImage}
            title={data?.title}
            description={data?.richDescription}
            offerText={data?.offerText}
            buttonClicked={handleAddToCart}
          />
          <AddressComponent
            heading="Address"
            addressLines={[
              "1234 Elm Street, Suite 567",
              "Springfield, IL 62704",
              "United States",
            ]}
            phone="(555) 123-4567"
            email="contact@dummyaddress.com"
            image="https://cdn.openart.ai/published/CHdDo0IMb9lH7bBfqI8S/pBZ-vbR4_W7qi_1024.webp"
          />

          <CouponeUsagePricing
            imagesrc={data.headerImage}
            originalPrice={data.originalPrice}
            discountPercentage={data.discountPercentage}
            couponCode={data.couponCode}
          />
          <CouponeValidityDetails
            expirationDate={data.expirationDate}
            terms={data.terms}
          />
          <Progress
            reviewData={data.reviewData}
          />
          <ReviewList
            reviewData={data.reviewData}
          />
        </>
      }
      <ProductReviewForm
        reviewData={kfcReviewData}
        setData={setKfcReviewData}
      />

      <Footer />
    </div>
  );
};

export default OfflineProducts;
