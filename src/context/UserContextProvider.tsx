import React, { useState, ReactNode } from "react";
import UserReviewContext, { ReviewData } from "./UserContext";

interface UserReviewProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserReviewProviderProps> = ({
  children,
}) => {
  // Dummy data
  const dummyData: ReviewData[] = [
    {
      email: "user1@example.com",
      nickname: "user1",
      productReview:
        "Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is. Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is...vSince i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is... Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is....",
      rating: 5,
      recommend: "Yes",
      reviewTitle: "Amazing!",
      terms: true,
    },
    {
      email: "user2@example.com",
      nickname: "user2",
      productReview: "Good quality.",
      rating: 4,
      recommend: "Yes",
      reviewTitle: "Satisfactory",
      terms: true,
    },
  ];

  const [reviewData, setReviewData] = useState<ReviewData[]>(dummyData);
  const [kfcReviewData, setKfcReviewData] = useState<ReviewData[]>(dummyData);
  const [numberOfItems1, setNumberOne] = useState<number>(0);
  const [numberOfItems2, setNumberTwo] = useState<number>(0);

  const AmazonData = {
    reviewData,
    setReviewData,
  };
  const KfcData = {
    kfcReviewData,
    setKfcReviewData,
  };
  return (
    <UserReviewContext.Provider
      value={{
        AmazonData,
        KfcData,
        numberOfItems1,
        setNumberOne,
        numberOfItems2,
        setNumberTwo,
      }}
    >
      {children}
    </UserReviewContext.Provider>
  );
};

export default UserContextProvider;
