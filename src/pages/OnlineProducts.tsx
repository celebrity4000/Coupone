import AmazonPageHeader from "@/components/amazonPageComponents/AmazonPageHeader";
import Progress from "@/components/shared/Progress";

import CouponeUsagePricing from "@/components/shared/CouponeUsagePricing";
import CouponeValidityDetails from "@/components/shared/CouponeValidityDetails";
import Footer from "@/components/shared/Footer";
import ProductReviewForm from "@/components/shared/ProductReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/products/productsSlice";
import { useParams } from "react-router-dom";


interface Data {
  id: string;
  headerImage: string;
  richDescription: string;
  originalPrice: number;
  discountPercentage: number;
  couponCode: string;
  expirationDate: string;
  terms: string[];
  reviewData: ReviewData[];
  couponPrice: number;
}

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  reviewDescription: string;
  firstname: string;
}

const OnlineProducts: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Sorry Some error Occurs");
  }

  const { id } = useParams<{ id: string }>();

  const { reviewData, setReviewData } = context.AmazonData;
  const [data, setData] = useState<Data | null>(null);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
    dispatch(addProduct({
      id: data?.id || "",
      headerImage: data?.headerImage || "",
      discountPercentage: data?.discountPercentage || 0,
      couponPrice: data?.couponPrice || 0,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const mockResponse: Data = {
        id: id || "1",
        headerImage:
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        richDescription: `
          <p>
            Get an exclusive deal with our special coupon code. 
            <strong style="color:#e47911;">Enjoy 20% off</strong> your next purchase. 
            Offer valid for a limited time only.
          </p>
          <p>
            <em>Watch a product video to collect a free coupon and maximize your savings.</em>
          </p>
          <ul>
            <li>Fast delivery</li>
            <li>Easy returns</li>
            <li>Cashback on credit cards</li>
          </ul>
        `,
        originalPrice: 120,
        discountPercentage: 20,
        couponCode: "SAVE20",
        expirationDate: "June 30, 2024",
        terms: [
          "Valid on purchases above $50.",
          "Single-use per customer.",
          "Cannot be combined with other offers.",
          "Applicable on select items only."
        ],
        reviewData: [
          {
            rating: 5,
            reviewTitle: "Awesome!",
            recommend: "Yes",
            productReview: "This was great!",
            reviewDescription: "I loved how smooth the process was and the quality was beyond expectations.",
            firstname: "JohnDoe",
          },
          {
            rating: 4,
            reviewTitle: "Good",
            recommend: "Yes",
            productReview: "Worked well",
            reviewDescription: "Could have been a bit quicker but overall happy with the experience.",
            firstname: "Jane",
          },
          {
            rating: 3,
            reviewTitle: "Average",
            recommend: "Maybe",
            productReview: "It was okay",
            reviewDescription: "Not bad, but not great either. Could use some improvements.",
            firstname: "Sam",
          },
          {
            rating: 4,
            reviewTitle: "Not satisfied",
            recommend: "No",
            productReview: "Did not meet expectations",
            reviewDescription: "I had high hopes but was left disappointed.",
            firstname: "Alex",
          },
          {
            rating: 4,
            reviewTitle: "Terrible experience",
            recommend: "No",
            productReview: "Would not recommend",
            reviewDescription: "The product did not work as advertised and customer service was unhelpful.",
            firstname: "Chris",
          }
        ],
        couponPrice: 100,
      };

      setData(mockResponse);
    };

    fetchData();
  }, []);


  return (
    <div>
      {data && (
        <>
          <AmazonPageHeader
            headerImageUrl={data.headerImage}
            description={data.richDescription}
            onAddToCart={handleAddToCart}
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
      )}

      <ProductReviewForm reviewData={reviewData} setData={setReviewData} />

      <Footer />
    </div>
  );
};

export default OnlineProducts;
