import React from "react";

interface AddressComponentProps {
  heading: string;
  addressLines: string[]; // Array of lines for flexibility
  phone: string;
  email: string;
  image: string;
}

const AddressComponent: React.FC<AddressComponentProps> = ({
  heading,
  addressLines,
  phone,
  email,
  image,
}) => {
  return (
    <div className="my-16">
      <div className="bg-[#248D50D4] px-5 py-20 md:px-10 flex justify-center items-center">
        <div className="rounded-[30px] shadow-custom bg-white grid grid-col-1 md:grid-cols-2 gap-10 p-10">
          {/* Left container */}
          <div className="flex flex-col justify-center items-start">
            <div className="font-poppins font-medium tracking-[0.02em] leading-[40px] text-[3em] sm:text-[4em]">
              {heading}
            </div>
            <div className="font-poppins text-[1em] sm:text-[1.5em] leading-[40px] font-normal tracking-[0.02em] text-wrap mt-16">
              {addressLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <br />
              Phone: {phone}
              <br />
              Email: {email}
            </div>
          </div>

          {/* Right container */}
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt="Shop"
              className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[400px] max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
