import React from "react";
import kfc from "../../assets/kfc.png";

const KfcPageHeader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={kfc} alt="Amazon" />
      </div>

      <div className="w-[90%] mx-auto my-10 ">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[2em] sm:text-[3em] leading-[40px] tracking-[0.02em] mb-8 md:mb-15">
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

          <button className="bg-[#4A4A4A] rounded-[15px] text-white py-5 px-10 font-poppins font-semibold text-[1.3em] sm:text-[1.875em] leading-[48px] shadow-custom block mx-auto">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default KfcPageHeader;
