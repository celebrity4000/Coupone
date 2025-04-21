import React from "react";
import progressimage from "../../assets/progressimage.png";

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  reviewDescription: string;
  firstname: string;
}

interface ProgressProps {
  reviewData: ReviewData[];
}

const Progress: React.FC<ProgressProps> = ({ reviewData }) => {
  // Calculate breakdown
  const ratingCount = [0, 0, 0, 0, 0];
  let totalStars = 0;

  reviewData.forEach((review) => {
    const rating = review.rating;
    if (rating >= 1 && rating <= 5) {
      ratingCount[rating - 1] += 1;
      totalStars += rating;
    }
  });

  const totalReviews = reviewData.length;
  const averageRating = totalReviews > 0 ? totalStars / totalReviews : 0;

  const ratings = [5, 4, 3, 2, 1].map((star) => {
    const count = ratingCount[star - 1];
    return {
      stars: star,
      count,
      color:
        star === 5
          ? "bg-green-500"
          : star === 4
            ? "bg-blue-500"
            : star === 3
              ? "bg-sky-500"
              : star === 2
                ? "bg-yellow-500"
                : "bg-red-500",
    };
  });

  const maxCount = Math.max(...ratings.map((r) => r.count)) || 1;
  //@ts-ignore
  const getImageByAverageRating = (avg: number): string => {
    return progressimage;
  };

  return (
    <div className="w-[90%] mx-auto my-16 space-y-10">
      <div className="grid gap-6 justify-center md:grid-cols-2 grid-cols-1 bg-white md:p-6 rounded-lg">
        {/* Left: Average Rating */}
        <div className="flex flex-col justify-center items-center rounded-[25px] shadow-custom p-4">
          <img src={getImageByAverageRating(averageRating)} alt="Rating visual" />
          <div className="text-center mt-4 font-poppins font-semibold text-lg">
            Average Rating: {averageRating.toFixed(1)} / 5
          </div>
          <div className="text-center text-sm text-gray-500">
            Based on {totalReviews} review{totalReviews !== 1 && "s"}
          </div>
        </div>

        {/* Right: Rating Breakdown */}
        <div className="rounded-[25px] shadow-custom p-4">
          <h2 className="text-[1.6em] sm:text-[2em] font-semibold font-poppins leading-[48px] mb-5">
            Rating Breakdown
          </h2>
          <div className="flex flex-col gap-6">
            {ratings.map((rating) => (
              <div className="flex items-center" key={rating.stars}>
                <div className="flex items-center gap-1 text-sm font-medium mr-2 w-[60px]">
                  {rating.stars} ⭐
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full relative">
                  <div
                    className={`h-full ${rating.color} rounded-full`}
                    style={{
                      width: `${(rating.count / maxCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="ml-2 text-sm font-poppins">{rating.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
