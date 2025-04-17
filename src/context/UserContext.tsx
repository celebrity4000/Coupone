import { createContext } from "react";

// Define the type for the review data
export interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  nickname: string;
  email: string;
  terms: boolean;
}

// Define the type for the context value
interface UserReviewContextType {
  AmazonData: {
    reviewData: ReviewData[];
    setReviewData: React.Dispatch<React.SetStateAction<ReviewData[]>>;
  };
  KfcData: {
    kfcReviewData: ReviewData[];
    setKfcReviewData: React.Dispatch<React.SetStateAction<ReviewData[]>>;
  };
  // New variables to store two numbers
  numberOfItems1: number;
  setNumberOne: React.Dispatch<React.SetStateAction<number>>;
  numberOfItems2: number;
  setNumberTwo: React.Dispatch<React.SetStateAction<number>>;
}

const defaultContextValue: UserReviewContextType = {
  AmazonData: {
    reviewData: [],
    setReviewData: () => {},
  },
  KfcData: {
    kfcReviewData: [],
    setKfcReviewData: () => {},
  },
  numberOfItems1: 0,
  setNumberOne: () => {},
  numberOfItems2: 0,
  setNumberTwo: () => {},
};

// Create the context
const UserContext = createContext<UserReviewContextType>(defaultContextValue);

export default UserContext;
