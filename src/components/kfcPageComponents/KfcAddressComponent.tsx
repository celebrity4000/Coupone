import React from "react";
import kfcshop from "../../assets/kfcshop.png";
const KfcAddressComponent: React.FC = () => {
  return (
    <div className="my-16">
      <div className="bg-[#248D50D4] px-5 py-20 md:px-10 flex justify-center items-center">
        <div className="rounded-[30px] shadow-custom bg-white grid grid-col-1  md:grid-cols-2 gap-10 p-10 ">
          {/* Left container */}
          <div className="flex flex-col justify-center items-start">
            <div className="font-poppins font-medium tracking-[0.02em] leading-[40px] text-[3em] sm:text-[4em]">
              Address
            </div>
            <div className="font-poppins text-[1em] sm:text-[1.5em] leading-[40px] font-normal tracking-[0.02em] text-wrap mt-16">
              1234 Elm Street, Suite 567
              <br />
              Springfield, IL 62704
              <br />
              United States
              <br />
              Phone: (555) 123-4567
              <br />
              Email: contact@dummyaddress.com
            </div>
          </div>

          {/* Right Container */}
          <div className="flex justify-center items-center ">
            <img
              src={kfcshop}
              alt="KFC SHOP"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KfcAddressComponent;
