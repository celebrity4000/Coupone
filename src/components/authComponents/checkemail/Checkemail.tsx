import React from "react";
import checkemail from "../../../assets/checkemail.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {};

const Checkemail: React.FC = () => {
  const { handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log("Form submitted successfully!");
    navigate("/createnewpassword");
  };
  return (
    <div className="logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Check Your Email
          </h2>
          <p className="welcomeparagraph mb-6 max-w-[524.067px] text-customGray">
            We’ve sent a password reset link to your example@gmail.com. Please
            check your inbox to continue.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                // disabled={}
              >
                Go To Email
              </button>
            </div>
          </form>

          <p className="mt-5 text-customgraydark font-semibold">
            Didn’t receive the email?
            <NavLink
              to="/forget-password"
              className="text-customGreenColor font-semibold ml-4"
            >
              Resend Email
            </NavLink>
          </p>
          <p className="text-customgraydark font-semibold">
            Enter wrong email address?
            <NavLink
              to="/forget-password"
              className="text-customGreenColor font-semibold ml-4"
            >
              Forget Password
            </NavLink>
          </p>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Check Your Email
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            We’ve sent a password reset link to your example@gmail.com. Please
            check your inbox to continue.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={checkemail}
            alt="CheckEmail Image"
            className="loginpic h-[560px] w-[560px] customMax:w-[240px] customMax:h-[240px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkemail;
