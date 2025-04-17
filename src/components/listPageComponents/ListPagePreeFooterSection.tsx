import React from "react";
import giftpic from "../../assets/giftpic.png";
const ListPagePreeFooterSection: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center  items-center w-full  bg-white mt-20 mb-96 p-5">
        <div className="flex flex-row gap-10 flex-wrap-reverse justify-center items-center  w-full lg:px-6">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start gap-8 max-w-lg">
            <h1 className="font-poppins text-[30px] md:text-[40px] leading-[60px] font-semibold text-black">
              Discover the Power of Our Products
            </h1>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button className="bg-[#68FFA5] rounded-[15px] text-[24px] leading-[36px] font-bold text-[#025725] py-4 px-10 shadow-md hover:shadow-lg hover:bg-[#56e694]">
              ACTION
            </button>
          </div>
          {/* backGroundGradient */}
          {/* Right Content */}

          <div className="bg-backGroundGradient  rounded-full w-[300px] h-[300px] sm:w-[330px] sm:h-[330px] md:w-[500px] md:h-[500px] flex justify-center items-center">
            <img
              src={giftpic}
              alt="Gift Picture"
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPagePreeFooterSection;
