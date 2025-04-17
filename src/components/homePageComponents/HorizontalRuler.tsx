import React from "react";

const HorizontalRuler: React.FC = () => {
  return (
    <div className="mt-10 hidden md:block w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[19%] h-[1px] bg-[#888888] inline-block"></div>
        <div className="w-[60%] mx-3 text-center border-2 py-4 rounded-full text-[#888888] text-sm md:text-lg border-[#888888] inline-block">
          African's Leading Coupons & Deals Marketplace
        </div>
        <div className="w-[19%] h-[1px] bg-[#888888] inline-block"></div>
      </div>
    </div>
  );
};

export default HorizontalRuler;
