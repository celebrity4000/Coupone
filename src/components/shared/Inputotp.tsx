import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { UseFormRegister } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { NavLink } from "react-router-dom";

interface PhoneNumberInputProps {
  register: UseFormRegister<any>;
  name: string;
}

const Inputotp: React.FC<PhoneNumberInputProps> = ({ register, name }) => {
  const {
    onChange,
    onBlur,
    ref,
    name: inputName,
  } = register(name, { required: true });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-2 rounded-lg mb-5">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          required
          onChange={(newValue: string) =>
            onChange({ target: { value: newValue } })
          }
          onBlur={(event) => onBlur(event)}
          ref={ref}
          name={inputName}
        >
          <InputOTPGroup className="flex gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="bg-customFieldColor p-6 rounded-lg"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="w-full flex items-center flex-wrap gap-4 justify-center mb-5">
        <span className="text-customgraydark font-semibold lg:ml-16">
          Didn’t receive the OTP?
        </span>
        <NavLink
          to="/changeverificationmode"
          className="text-customGreenColor font-semibold"
        >
          Resend OTP
        </NavLink>
      </p>
    </div>
  );
};

export default Inputotp;
