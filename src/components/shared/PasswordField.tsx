import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiMiniEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";
import { UseFormRegister, FieldError } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  id: string;
  name: string;
  error?: FieldError;
  validate?: any;
  value: any;
}

const PasswordField: React.FC<PasswordInputProps> = ({
  register,
  id,
  name,
  validate,
}) => {
  const [passwordType, setPasswordType] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setPasswordType((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-customFieldColor rounded-lg mb-5 ">
      {/* Icon */}
      <div className="">
        <RiLockPasswordFill className="w-6 h-6" />
      </div>

      <input
        type={passwordType ? "text" : "password"}
        id={id}
        className="outline-none hover:outline-none border-none p-3 bg-customFieldColor text-sm lg:text-lg w-full customMax:p-2"
        {...register(`${name}`, { required: "Password is required", validate })}
        required
      />
      {/* Icon */}
      <div className="cursor-pointer" onClick={togglePasswordVisibility}>
        {passwordType ? (
          <HiMiniEye className="w-6 h-6 cursor-pointer" />
        ) : (
          <HiEyeSlash className="w-6 h-6 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
