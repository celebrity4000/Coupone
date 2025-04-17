import React, { useState } from "react";
import signupFrame from "../assets/signup.png";
import axios from "axios";
import EmailField from "../components/shared/EmailField";
import PasswordField from "../components/shared/PasswordField";
import PhoneNumberField from "../components/shared/PhoneNumberField";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { API_URL } from "@/api";
type Inputs = {
  usercountrycode: string;
  userphone: number;
  useremail: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  });
  const password = watch("password");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);

    setLoading(true);
    try {
      // Send data to the backend using axios
      const response = await axios.post(
        `${API_URL}/users/sign-up`,
        {
          usercountrycode: data.usercountrycode,
          userphone: data.userphone,
          useremail: data.useremail,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        { withCredentials: true }
      );

      // console.log("Response", response);

      // console.log("response data", response.data);
      // console.log("Response from server", response.data.user);
      if (response.status === 200) {
        toast.success(`${response.data.message}`);
        navigate("/changeverificationmode");
      } else if (response.status === 205) {
        toast.warn("User with this email or phone already exists!");
      } else if (response.status === 208) {
        toast.warn("Passowrd and Confirm Password should be same");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Error occured while submitting the form. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-4xl mb-1">
            Get’s Started Now
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            Join us today! Fill in the details below to get started.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={signupFrame}
            alt="SignUp Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[180px]"
          />
        </div>
      </div>

      <div className="loginform customMax:w-full customMax:p-5  lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Get’s Started Now
          </h2>
          <p className="welcomeparagraph  mb-6 text-customGray">
            Join us today! Fill in the details below to get started.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <div className="formoptions w-full">
              <label
                htmlFor="userphone"
                className="userphone text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Phone Number
              </label>
              <PhoneNumberField
                placeholder="Enter Your Phone Number"
                register={register}
                id="userphone"
                name="userphone"
              />

              <label
                htmlFor="userRegisteremail"
                className="usremail text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Email
              </label>
              <EmailField
                placeholder="example@gmail.com"
                register={register}
                id="userRegisteremail"
                name="useremail"
              />

              <label
                htmlFor="userRegisterpassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Password
              </label>
              <PasswordField
                register={register}
                id="userRegisterpassword"
                name="password"
                error={errors.password}
                value={undefined}
              />

              <label
                htmlFor="confirmpassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Confirm Password
              </label>
              <PasswordField
                register={register}
                id="confirmpassword"
                name="confirmPassword"
                error={errors.confirmPassword}
                validate={{
                  // Custom validation to check if passwords match
                  validate: (value: string) =>
                    value === password || "Passwords do not match",
                }}
                value={undefined}
              />

              {/* Display error if passwords don't match */}
              {errors.confirmPassword && (
                <span className="text-red-500 ml-5">
                  {errors.confirmPassword.message}
                </span>
              )}

              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold lg:mt-9 customMax:mt-5"
                disabled={isSubmitting}
              >
                {isLoading ? (
                  <CircularProgress size={30} thickness={4} value={100} />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          <p className="mt-5">
            Already Have and Account?
            <NavLink
              to="/"
              className="text-customGreenColor font-semibold ml-4"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
