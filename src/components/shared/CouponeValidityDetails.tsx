import React from "react";
import couponevalidityImage from "../../assets/couponevalidityImage.png";
const CouponeValidityDetails: React.FC = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="font-semibold font-poppins text-[2em] md:text-[4em] tracking-[0.02em] leading-[40px] md:leading-[80px] p-5 lg:px-[87px] text-[#404040] mb-10">
          Validity & <br />
          Details
        </div>

        <div className=" h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:w-[800px] md:h-[800px] mx-auto bg-[#D9D9D94D] rounded-full flex flex-col items-center gap-5 md:gap-10">
          <div className="bg-custom-radial-gradient p-5 rounded-full h-[200px] w-[200px] sm:h-[330px] sm:w-[330px]  md:h-[500px] md:w-[500px] flex flex-col justify-center items-center">
            <div>
              <img src={couponevalidityImage} alt="VALIDITY" />
            </div>
            <div className=" font-poppins text-[0.5em] sm:text-[0.7em] md:text-[1.3em] font-semibold leading-[40px]">
              Expiration Date: June 30, 2024
            </div>
          </div>
          <div>
            <div className="font-poppins font-semibold text-[0.5em] sm:text-[0.7em] md:text-[1.3em] my-0 md:my-5">
              Terms & Conditions:
            </div>
            <ul className="list-disc ml-7 text-[0.5em] sm:text-[0.6em] md:text-[1em]">
              <li>Valid on purchases above $50.</li>
              <li>Single-use per customer.</li>
              <li>Cannot be combined with other offers.</li>
              <li>Applicable on select items only.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponeValidityDetails;
