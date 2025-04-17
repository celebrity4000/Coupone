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

const ProductReviewForm: React.FC<ReviewListProps> = ({
  reviewData,
  setData,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
    const newReview = {
      email: data.email,
      nickname: data.nickname,
      productReview: data.productReview,
      rating: data.rating,
      recommend: data.recommend,
      reviewTitle: data.reviewTitle,
      terms: data.terms,
    };

    // Push the new review into the reviewData array
    setData([...reviewData, newReview]);

    reset();
  };

  const [hoveredRating, setHoveredRating] = useState(0);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative my-10 z-50">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        aria-label="Close"
      >
        ✕
      </button>

      <h2 className="text-2xl font-semibold mb-4">Overall rating</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Rating */}
        <div>
          <Controller
            name="rating"
            control={control}
            defaultValue={0}
            rules={{ required: "Please provide a rating." }}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-3xl border ${
                      hoveredRating > index || field.value > index
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHoveredRating(index + 1)} // Set hovered rating
                    onMouseLeave={() => setHoveredRating(0)} // Reset hovered rating
                    onClick={() => field.onChange(index + 1)} // Update the value on click
                  >
                    ★
                  </span>
                ))}
              </div>
            )}
          />
          <span className="my-1 text-sm">Click to rate</span>
          {errors.rating && (
            <p className="text-red-500 text-sm mt-2">
              Please provide a rating.
            </p>
          )}
        </div>

        {/* Review Title */}
        <div>
          <label
            htmlFor="reviewTitle"
            className="block text-sm font-bold text-gray-700"
          >
            Review title
          </label>
          <input
            id="reviewTitle"
            type="text"
            placeholder="Example: Easy to use"
            {...register("reviewTitle", {
              required: "Review title is required.",
            })}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.reviewTitle && (
            <p className="text-red-500 text-sm mt-2">
              {errors.reviewTitle.message}
            </p>
          )}
        </div>

        {/* Recommendation */}
        <div>
          <p className="text-sm font-bold text-gray-700">
            Would you recommend this product to a friend?
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Yes"
                {...register("recommend", {
                  required: "Please select an option.",
                })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
                {...register("recommend", {
                  required: "Please select an option.",
                })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.recommend && (
            <p className="text-red-500 text-sm mt-2">
              {errors.recommend.message}
            </p>
          )}
        </div>

        {/* Product Review */}
        <div>
          <label
            htmlFor="productReview"
            className="block text-sm font-bold text-gray-700"
          >
            Product review
          </label>
          <input
            id="productReview"
            placeholder="Example: Since I bought this product..."
            {...register("productReview", {
              required: "Product review is required.",
            })}
            className="mt-1 block w-full p-2 border  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-16"
            // rows={4}
          />
          {errors.productReview && (
            <p className="text-red-500 text-sm mt-2">
              {errors.productReview.message}
            </p>
          )}
        </div>

        {/* Nickname */}
        <div>
          <label
            htmlFor="nickname"
            className="block text-sm font-bold text-gray-700 "
          >
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="Example: bob27"
            {...register("nickname", { required: "Nickname is required." })}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.nickname && (
            <p className="text-red-500 text-sm mt-2">
              {errors.nickname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm  text-gray-700 font-bold"
          >
            Email address (will not be published)
          </label>
          <input
            id="email"
            type="email"
            placeholder="Example: your@email.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address.",
              },
            })}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="termsandconditioncheck"
            {...register("terms", {
              required: "You must accept the terms and conditions.",
            })}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            className="ml-2 text-sm text-gray-700 font-bold"
            htmlFor="termsandconditioncheck"
          >
            I accept the{" "}
            <span className=" underline">terms and conditions</span>.
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-2">{errors.terms.message}</p>
        )}

        <div>
          You will be able to receive emails in connection with this review (eg if others comment on your review)
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-black text-white py-2 px-4 rounded-md hover:bg-black-700 "
        >
          Submit product review
        </button>
      </form>
    </div>
  );
};

export default ProductReviewForm;
