import React from "react";
import progressimage from "../../assets/progressimage.png";

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  nickname: string;
  email: string;
  terms: boolean;
}
interface ReviewListProps {
  reviewData: ReviewData[];
}

const Progress: React.FC<ReviewListProps> = ({ reviewData }) => {
  // const context = useContext(UserContext);
  const count = [0, 0, 0, 0, 0];

  if (reviewData) {
    reviewData.map((item: any) => {
      count[item.rating - 1] += 1; // Update count based on item rating
    });
  }

  const ratings = [
    { stars: 5, percentage: count[4], color: "bg-green-500" },
    { stars: 4, percentage: count[3], color: "bg-blue-500" },
    { stars: 3, percentage: count[2], color: "bg-sky-500" },
    { stars: 2, percentage: count[1], color: "bg-yellow-500" },
    { stars: 1, percentage: count[0], color: "bg-red-500" },
  ];
  const maxPercentage = Math.max(...ratings.map((rating) => rating.percentage));
  return (
    <div className="w-[90%] mx-auto my-16">
      <div className="grid gap-6 justify-center md:grid-cols-2 grid-cols-1 bg-white md:p-6 rounded-lg  ">
        {/* Left Section */}
        <div className="flex justify-center items-center  rounded-[25px] shadow-custom p-4">
          <img src={progressimage} alt="Smiley Design" className="" />
        </div>

        {/* Right Section */}
        <div className="rounded-[25px] shadow-custom p-4">
          <h2 className="text-[1.6em] sm:text-[2em]  font-semibold font-poppins leading-[48px] mb-5">
            Rating Breakdown
          </h2>
          <div className="flex flex-col gap-10">
            {ratings.map((rating) => (
              <div className="flex items-center" key={rating.stars}>
                <div className=" flex items-center gap-1 text-sm font-medium mr-2">
                  {rating.stars}
                  <span>⭐</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full relative">
                  <div
                    className={` h-full ${rating.color} rounded-full`}
                    style={{
                      width: `${(rating.percentage / maxPercentage) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
