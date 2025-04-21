import React from "react";

interface PageHeaderProps {
  image: string;
  title: string;
  description: string;
  offerText: string;
  buttonClicked: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  image,
  title,
  description,
  offerText,
  buttonClicked = () => { },
}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="product-banner"
          className="w-full max-w-[300px] sm:max-w-[400px]"
        />
      </div>

      <div className="w-[90%] mx-auto my-10">
        <div className="w-full">
          <h1 className="font-poppins font-bold text-[1.8em] sm:text-[2.5em] leading-[1.2] tracking-[0.02em] mb-6 text-center sm:text-left">
            {title}
          </h1>

          <p className="font-poppins font-medium text-[1.1em] sm:text-[1.3em] leading-[1.6] tracking-[0.02em] mb-12 text-center sm:text-left">
            {description}{" "}
            <span className="font-semibold text-[1.2em] sm:text-[1.4em]">
              {offerText}
            </span>
          </p>

          <button className="bg-[#4A4A4A] hover:bg-[#6A4B4B] rounded-[15px] text-white py-4 px-8 font-poppins font-medium text-[1.1em] sm:text-[1.5em] leading-[1.5] shadow-custom block mx-auto sm:mx-0"
            onClick={buttonClicked}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
