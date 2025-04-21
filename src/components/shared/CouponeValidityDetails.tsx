import React from "react";
import couponevalidityImage from "../../assets/couponevalidityImage.png";

interface CouponeValidityDetailsProps {
  expirationDate: string;
  terms: string[];
}

const CouponeValidityDetails: React.FC<CouponeValidityDetailsProps> = ({
  expirationDate,
  terms,
}) => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="text-start w-full font-poppins font-semibold text-[1.5em] md:text-[2em] lg:text-[4em] tracking-[0.02em] leading-[1.2] p-5 lg:px-[87px] text-[#404040]">
        Validity & Details
      </div>

      <div className="flex flex-col items-center justify-center h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:w-[800px] lg:h-[800px] bg-[#D9D9D94D] rounded-full">
        <div className="bg-custom-radial-gradient p-5 rounded-full h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px] flex flex-col justify-center items-center">
          <img src={couponevalidityImage} alt="VALIDITY" className="mb-4" />
          <div className="font-poppins text-center text-[0.7em] md:text-[1em] lg:text-[1.3em] font-semibold">
            Expiration Date: {expirationDate}
          </div>
        </div>

        <div className="mt-5 lg:mt-10 text-center">
          <div className="font-poppins font-semibold text-[0.7em] md:text-[1em] lg:text-[1.3em] mb-2">
            Terms & Conditions:
          </div>
          <ul className="list-disc text-left ml-5 text-[0.6em] md:text-[0.9em] lg:text-[1em]">
            {terms.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CouponeValidityDetails;
