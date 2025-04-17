import React from "react";
import { UseFormRegister } from "react-hook-form";
interface EmailInputProps {
  register: UseFormRegister<any>;
  id: string;
  name: string;
  content: string;
}

const VerifyField: React.FC<EmailInputProps> = ({
  register,
  id,
  name,
  content,
}) => {
  return (
    <div className="flex items-center gap-2   bg-customFieldColor rounded-lg mb-6  ">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer ml-4"
        {...register(`${name}`)}
      />
      <label
        className="text-black font-medium w-full py-5 customMax:py-4 cursor-pointer"
        htmlFor={id}
      >
        {content}
      </label>
      {/* </button> */}
    </div>
  );
};

export default VerifyField;
