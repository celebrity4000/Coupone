import React, { useState } from "react";
import loginFrame from "../assets/loginFrame.png";

import EmailField from "../components/shared/EmailField";
import PasswordField from "../components/shared/PasswordField";

import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "@/api";
import { Loader2 } from "lucide-react";

type Inputs = {
  useremail: string;
  userpassword: string;
  RememberMe: boolean;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/login`, data, {
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
        // alert("Login successful");
        navigate("/homepage", { replace: true });
      } else if (response.status === 203) {
        toast.warn(`Please Verify Your Account!`);
        navigate("/changeverificationmode");
      } else if (response.status === 205) {
        toast.warn("Please Complete Your Account!");
        navigate("/form");
      }
    } catch (error: unknown) {
      // alert("Please Registered yourself first");
      toast.error("Please Enter Correct Email and Password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5  lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-6 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <label
                htmlFor="useremail"
                className="usremail text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                User name / Email
              </label>
              <EmailField
                placeholder="example@gmail.com"
                register={register}
                id="useremail"
                name="useremail"
              />

              <label
                htmlFor="userpassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Password
              </label>
              <PasswordField
                register={register}
                id="userpassword"
                name="userpassword"
                value={undefined}
              />

              <div className=" forgotpassword flex justify-between items-center lg:mb-9 customMax:mb-5">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-5 h-5 rounded-sm"
                    id="checkbox"
                    {...register("RememberMe")}
                  />
                  <span className="text-customLabelColor font-semibold">
                    Remember Me
                  </span>
                </label>

                <NavLink
                  to="/forget-password"
                  className="text-customGreenColor font-semibold"
                >
                  Forgot Password
                </NavLink>
              </div>
              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin text-white mx-auto" />
                ) : (
                  "Log in"
                )}
              </button>
            </div>
          </form>

          <p className="mt-5">
            Don't have an account
            <NavLink
              to="/Sign-up"
              className="text-customGreenColor font-semibold ml-4"
            >
              Sign up Now
            </NavLink>
          </p>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={loginFrame}
            alt="Login Image"
            className="loginpic h-auto customMax:w-[200px] customMax:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
