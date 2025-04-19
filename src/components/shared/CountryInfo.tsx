// import React from "react";
import CountryRounded from "../../assets/CountryRounded.png";
// import { MdKeyboardArrowDown } from "react-icons/md";

const CountryInfo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
      <img
        className="rounded-full w-8 h-8 navBarWidth:w-6 navBarWidth:h-6"
        src={CountryRounded}
        alt="user-profile"
      />
      <p>
        <span className=" text-14">Zw</span>{" "}
      </p>
      {/* <MdKeyboardArrowDown className="text-14" /> */}
    </div>
  );
};

export default CountryInfo;
