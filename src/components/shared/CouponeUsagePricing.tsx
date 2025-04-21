import React from "react";

interface CouponePricingProps {
  imagesrc: string;
  originalPrice: number;
  discountPercentage: number;
  couponCode: string;
}

const CouponeUsagePricing: React.FC<CouponePricingProps> = ({
  imagesrc,
  originalPrice,
  discountPercentage,
  couponCode,
}) => {
  const savings = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - savings;

  return (
    <div className="mt-10">
      <div className="bg-[#248D50D4] py-8 px-4 rounded-lg md:py-10 md:px-6">
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto md:gap-8 md:grid-cols-2">
          {/* Usage Card */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4 md:text-xl">Usage</h2>
            <div className="flex-grow flex items-center justify-center">
              <div className="bg-pricingCardGradient h-60 rounded-lg p-4 shadow-md w-full flex justify-center items-center overflow-hidden md:h-72">
                <img
                  src={imagesrc}
                  alt="Coupon Usage"
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Pricing Details Card */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4 md:text-xl">Pricing Details</h2>
            <div className="flex-grow flex items-center justify-center">
              <div className="bg-pricingCardGradient rounded-lg p-5 shadow-md w-full">
                <div className="text-base font-medium tracking-wide leading-6 md:text-base md:leading-8">
                  <p>Original Price: ${originalPrice.toFixed(2)}</p>
                  <p className="mt-2">
                    Discount: {discountPercentage}% Off <br />
                    <span className="font-light">(with coupon code {couponCode})</span>
                  </p>
                  <p className="mt-2">Discounted Price: ${discountedPrice.toFixed(2)}</p>
                  <p className="mt-2">Savings: ${savings.toFixed(2)}</p>
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
