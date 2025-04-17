import React from "react";

const ListPageHeader: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto my-20">
        <h1 className=" text-center font-[Poppins] font-semibold text-[30px] md:text-[48px] leading-[40px] tracking-[0.07em] decoration-skip-ink-none underline-offset-auto text-[#248D50]">
          Find the Best Deals
        </h1>
        <p className="font-[Poppins] font-normal leading-[20px] md:leading-[40px] text-center tracking-[0.02em] text-[15px] md:text-[20px] mt-4 md:mt-5 ">
          Explore a wide range of deals on various products and services. Save
          money and enjoy great discounts.
        </p>
      </div>
    </div>
  );
};

export default ListPageHeader;
