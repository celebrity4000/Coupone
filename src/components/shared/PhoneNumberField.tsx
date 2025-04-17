import React from "react";
import { countryCodes } from "../../utils/countryCodes";

import { UseFormRegister } from "react-hook-form";

interface PhoneNumberInputProps {
  register: UseFormRegister<any>;
  id: string;
  placeholder: string;
  name: string;
}

const PhoneNumberField: React.FC<PhoneNumberInputProps> = ({
  register,
  id,
  placeholder,
  name,
}) => {
  return (
    <div className="flex items-center gap-2 rounded-lg mb-5 ">
      {/* Country Code Dropdown */}
      <div className="bg-customFieldColor p-2 m-0 h-full">
        <select
          className="outline-none hover:outline-none border-none h-full p-3 bg-customFieldColor text-sm lg:text-lg customMax:p-2"
          {...register("usercountrycode", { required: true })}
        >
          {countryCodes.map((country) => (
            <option key={country.id} value={country.code}>
              {country.code}
            </option>
          ))}
        </select>
      </div>

      {/* Phone Number Input */}
      <div className="bg-customFieldColor w-full p-2">
        <input
          type="number"
          placeholder={placeholder}
          id={id}
          className="outline-none hover:outline-none border-none p-3 bg-customFieldColor text-sm lg:text-lg w-full customMax:p-2"
          {...register(`${name}`, { required: true })}
          required
        />
      </div>
    </div>
  );
};

export default PhoneNumberField;
