import React from "react";
import sanitize from "dompurify"; // Import the sanitizer
import percentageImage from "../../assets/percentage.png";

// Define types for the props
interface AmazonPageHeaderProps {
  headerImageUrl: string;
  description: string;
  onAddToCart: () => void;
}

const AmazonPageHeader: React.FC<AmazonPageHeaderProps> = ({ headerImageUrl, description, onAddToCart }) => {
  const sanitizedDescription = sanitize.sanitize(description);

  return (
    <div className="px-20 pt-10">
      {/* Header Image */}
      <div className="flex justify-center items-center mb-6">
        <img
          src={headerImageUrl} // Dynamically set the image URL
          alt="Amazon"
          className="w-full max-w-[300px] sm:max-w-[400px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h1 className="font-poppins font-semibold text-[1.5em] sm:text-[2em] lg:text-[2.5em] leading-[1.2] tracking-[0.02em] mb-6">
            Description
          </h1>

          <div
            className="font-poppins font-normal text-[1em] sm:text-[1.2em] lg:text-[1.3em] leading-[1.6] tracking-[0.02em] mb-8"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }} // Render sanitized rich text
          />

          <button
            onClick={onAddToCart} // Pass the function from props
            className="bg-[#4A4A4A] rounded-[10px] text-white py-3 px-6 sm:py-4 sm:px-8 font-poppins font-semibold text-[1em] sm:text-[1.2em] lg:text-[1.3em] leading-[1.5] shadow-custom"
          >
            ADD TO CART
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <img
            src={percentageImage}
            alt="Coupon Icon"
            className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AmazonPageHeader;
