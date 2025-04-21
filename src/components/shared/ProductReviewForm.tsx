import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  nickname: string;
  email: string;
  terms: boolean;
};

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
  setData: React.Dispatch<React.SetStateAction<ReviewData[]>>;
}

const ProductReviewForm: React.FC<ReviewListProps> = ({ reviewData, setData }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const [hoveredRating, setHoveredRating] = useState(0);

  const onSubmit = (data: FormData) => {
    const newReview: ReviewData = {
      ...data,
    };
    setData([...reviewData, newReview]);
    reset();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto my-6 relative lg:max-w-xl">


      <h2 className="text-xl font-semibold mb-4 text-center md:text-2xl">Submit Your Review</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-base">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Overall rating</label>
          <Controller
            name="rating"
            control={control}
            defaultValue={0}
            rules={{ required: "Please provide a rating." }}
            render={({ field }) => (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-2xl ${hoveredRating > index || field.value > index
                      ? "text-yellow-500"
                      : "text-gray-300"
                      }`}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => field.onChange(index + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
            )}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Review Title */}
        <div>
          <label htmlFor="reviewTitle" className="block font-medium text-gray-700 mb-1">
            Review Title
          </label>
          <input
            id="reviewTitle"
            type="text"
            placeholder="Example: Easy to use"
            {...register("reviewTitle", { required: "Review title is required." })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.reviewTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.reviewTitle.message}</p>
          )}
        </div>

        {/* Recommend */}
        <div>
          <p className="font-medium text-gray-700 mb-1">Would you recommend this product?</p>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Yes"
                {...register("recommend", { required: "Select an option." })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
                {...register("recommend", { required: "Select an option." })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.recommend && (
            <p className="text-red-500 text-sm mt-1">{errors.recommend.message}</p>
          )}
        </div>

        {/* Product Review */}
        <div>
          <label htmlFor="productReview" className="block font-medium text-gray-700 mb-1">
            Product Review
          </label>
          <textarea
            id="productReview"
            placeholder="Example: Since I bought this product..."
            {...register("productReview", { required: "Product review is required." })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-24"
          />
          {errors.productReview && (
            <p className="text-red-500 text-sm mt-1">{errors.productReview.message}</p>
          )}
        </div>

        {/* Nickname */}
        <div>
          <label htmlFor="nickname" className="block font-medium text-gray-700 mb-1">
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="Example: bob27"
            {...register("nickname", { required: "Nickname is required." })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.nickname && (
            <p className="text-red-500 text-sm mt-1">{errors.nickname.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
            Email (not published)
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format.",
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: "You must accept the terms." })}
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            I accept the <span className="underline">terms and conditions</span>.
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
        )}

        {/* Info Note */}
        <div className="text-xs text-gray-600">
          You may receive email notifications related to this review (e.g., replies).
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Submit Product Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductReviewForm;
