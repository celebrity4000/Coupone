import React from "react";
import amazonpage from "../../assets/amazonpage.png";
import percentageImage from "../../assets/percentage.png";
const AmazonPageHeader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={amazonpage} alt="Amazon" />
      </div>

      <div className="flex flex-wrap-reverse gap-5 p-4 items-start justify-center ">
        {/* Left Section */}
        <div className=" w-full lg:w-[40%]">
          <h1 className="font-poppins font-semibold text-[2em] sm:text-[3em] leading-[40px] tracking-[0.02em] mb-8 md:mb-24">
            Description
          </h1>

          <p className="font-poppins font-normal text-[1.3em] sm:text-[1.5em] leading-[40px] tracking-[0.02em] mb-16">
            Get an exclusive deal with our special coupon code.{" "}
            <span className="font-bold text-[1.4em] sm:text-[1.6em]">
              Enjoy 20% off
            </span>{" "}
            your next purchase. Offer valid for a limited time only. Watch a
            product video to collect a free coupon and maximize your savings.
          </p>

          <button className="bg-[#4A4A4A] rounded-[15px] text-white py-3 px-6 sm:py-5 sm:px-10 font-poppins font-semibold text-[1.3em] sm:text-[1.875em] leading-[48px] shadow-custom">
            ADD TO CART
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%] max-h-[500px] flex justify-center items-center">
          <img
            src={percentageImage}
            alt="Coupon Icon"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AmazonPageHeader;
