import React from "react";
import cardimage from "../../assets/cardimage.png";
const CardComponent: React.FC = () => {
  return (
    <div className="p-2">
      <div className="card w-[360px] bg-[#F0F0F0] shadow-custom p-4 rounded-sm ">
        <div className="image w-full object-cover overflow-hidden">
          <img
            src={cardimage}
            alt="Card Imgae"
            className="h-auto mx-auto  rounded-sm"
          />
        </div>
        <div className="heading flex justify-between items-center my-4">
          <div className="font-['Poppins'] text-[20px] font-medium leading-[30px] text-left">
            African Day Offer
          </div>
          <button className="p-2 bg-[#248D50] py-[6px] px-[10px] rounded-[4px] text-[#ffffff]">
            Exclusive
          </button>
        </div>
        <div className="content font-['Poppins'] text-[16px] font-medium leading-[24px] text-left  ">
          We're celebrating the richness and diversity of African culture with
          amazing discounts on all your favorite products!
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
