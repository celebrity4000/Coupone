import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import avatar from "../../assets/Profile Image.png";
import { BsReply } from "react-icons/bs";

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  reviewDescription: string;
  firstname: string;
}

interface ReviewListProps {
  reviewData: ReviewData[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviewData }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  return (
    <div className="w-[95%] max-w-[90%] mx-auto my-8">
      <div className="rounded-2xl shadow-lg p-5 md:p-8 bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Reviews ({reviewData.length})
          </h2>
          <button
            onClick={toggleReviews}
            className="px-4 py-2 text-white bg-gray-800 rounded-xl text-base md:text-lg hover:bg-gray-700 transition-all"
          >
            {showAllReviews ? "Less" : "More"}
          </button>
        </div>

        <ul className="space-y-10">
          {(showAllReviews ? reviewData : reviewData.slice(0, 2)).map(
            (review, index) => (
              <li key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {review.reviewTitle}
                </h3>

                <p className="text-sm text-gray-700">{review.productReview}</p>

                <p className="text-sm italic text-gray-600">
                  {review.reviewDescription}
                </p>

                <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center text-blue-600 text-sm font-medium gap-2 cursor-pointer">
                    <BsReply className="transform -scale-x-100" />
                    Reply
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-800">
                      {review.firstname}
                    </span>
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover bg-black"
                    />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
