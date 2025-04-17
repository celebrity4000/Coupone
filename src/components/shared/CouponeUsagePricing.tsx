import React from "react";

interface CouponeType {
  imagesrc: string;
}
const CouponeUsagePricing: React.FC<CouponeType> = ({ imagesrc }) => {
  return (
    <div className="mt-20">
      <div className="bg-[#248D50D4] py-10 px-5">
        <div className="grid mx-auto items-center grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl">
          {/* Usage Card */}
          <div className="bg-white rounded-[20px] shadow-custom shadow-[#00000040] p-6 h-auto md:h-[700px]">
            <h2 className="text-[1.5em]  sm:text-[2em] leading-[40px] font-semibold mb-4">
              Usage
            </h2>
            <div className="w-full !h-[90%] my-auto flex items-center justify-center ">
              <div className="bg-pricingCardGradient  h-[238px] rounded-[20px] p-4  shadow-custom shadow-[#00000040] w-full flex justify-center items-center object-contain overflow-hidden ">
                <img src={imagesrc} alt="Amazon" className="object-contain" />
              </div>
            </div>
          </div>

          {/* Pricing Details Card */}
          <div className="bg-white rounded-[20px] shadow-custom shadow-[#00000040] p-6 h-auto md:h-[700px]">
            <h2 className=" text-[1.5em]  sm:text-[2em] leading-[40px] block font-semibold mb-4">
              Pricing Details
            </h2>
            <div className="w-full !h-[90%] flex items-center justify-center ">
              <div className="bg-pricingCardGradient rounded-[20px] p-5  shadow-custom shadow-[#00000040] w-full ">
                <div className=" text-[1.1em] sm:text-[1.5em] font-normal font-poppins tracking-[0.02em] leading-[60px] md:leading-[100px]">
                  <p>Original Price: $100.00</p>
                  <p className="!leading-8">
                    Discount: 20% Off <br />
                    <span className="!font-extralight">
                      (with coupon code SAVE20 )
                    </span>
                  </p>
                  <p>Discounted Price: $80.00</p>
                  <p>Savings: $20.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponeUsagePricing;
