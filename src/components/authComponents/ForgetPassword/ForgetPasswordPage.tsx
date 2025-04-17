import React from "react";
import forgetpasswordImage from "../../../assets/bro.png";

import { useForm, SubmitHandler } from "react-hook-form";

import EmailField from "../../shared/EmailField";
import { useNavigate } from "react-router-dom";

type Inputs = {
  useremail: string;
};

const ForgetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (data.useremail === "abc@gmail.com") {
      navigate("/");
    } else {
      navigate("/checkemail");
    }
  };
  // LOGIN PAGE , wrong check page
  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10">
      <div className="loginform customMax:w-full customMax:p-5  lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Forgot Your Password?
          </h2>
          <p className="welcomeparagraph mb-6 max-w-[524.067px] text-customGray">
            No worries! Enter your registered email address, and we’ll send you
            instructions to reset your password.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <label
                htmlFor="forgotUseremail"
                className="usremail text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Email
              </label>
              <EmailField
                placeholder="Enter Your Email"
                register={register}
                id="forgotUseremail"
                name="useremail"
              />

              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Forgot Your Password?
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            No worries! Enter your registered email address, and we’ll send you
            instructions to reset your password.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={forgetpasswordImage}
            alt="ForgetPassword Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[216px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
