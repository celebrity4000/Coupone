import React, { useState } from "react";

import otpverification from "../../../assets/otpverification.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Inputotp from "../../shared/Inputotp";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { API_URL } from "@/api";
type Inputs = {
  emailotpfield: string; // Updated type to reflect array structure
};

const EmailOtpVerification: React.FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  // const location = useLocation();
  // console.log("state value", location.state);
  // useEffect(() => {
  //   if (!location.state) {
  //     navigate("/Sign-up", { replace: true });
  //   }
  // }, [location.state, navigate]);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log("Form Data:", data);
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/users/verifyOTP`,
        { userOTP: data.emailotpfield },

        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
        navigate("/form", { replace: true });
      } else if (response.status === 203) {
        toast.warn(`Please Resend OTP again!`);

        navigate("/changeverificationmode", { replace: true });
      } else if (response.status === 205) {
        toast.warn(`Please Enter Correct OTP!`);
      }
    } catch (error: unknown) {
      toast.error(`Some Internal Error occured`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            OTP Verification
          </h2>
          <p className="welcomeparagraph mb-6 max-w-[524.067px] text-customGray">
            Enter the One-Time Password (OTP) sent to your registered email
            address Example@gmail.com.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <Inputotp register={register} name="emailotpfield" />

              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                {isLoading ? (
                  <CircularProgress size={30} thickness={4} value={100} />
                ) : (
                  "Verify OTP"
                )}
              </button>

              <p className="w-full flex items-center flex-wrap gap-4 justify-center mt-5">
                <span className="text-customgraydark font-semibold">
                  Prefer to verify with your phone number?
                </span>
                <NavLink
                  to="/changeverificationmode"
                  className="text-customGreenColor font-semibold"
                >
                  Verify with Phone Number
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            OTP Verification
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            Enter the One-Time Password (OTP) sent to your registered email
            address Example@gmail.com.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={otpverification}
            alt="Login Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[240px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailOtpVerification;
