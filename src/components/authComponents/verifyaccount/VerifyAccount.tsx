import React, { useState } from "react";
import axios from "axios";
import verify_account from "../../../assets/verify_account.png";
import { useForm, SubmitHandler } from "react-hook-form";
import VerifyField from "../../shared/VerifyField";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { API_URL } from "@/api";
type Inputs = {
  useremail: boolean;
  userphone: boolean;
  emailcheck: boolean;
  phonecheck: boolean;
};
// interface propState {
//   email: string;
// }

const VerifyAccount: React.FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  // const obj = localStorage.getItem("userDetails");
  // useEffect(() => {
  //   if (!obj) {
  //     navigate("/Sign-up", { replace: true });
  //   }
  // }, [obj, navigate]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log("verify mode");
    if (data.emailcheck) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${API_URL}/users/send-otp`,
          {},
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          toast.success(`${response.data.message}`);

          navigate("/emailverification", { replace: true });
        }
      } catch (error: unknown) {
        toast.error(`Failed to send OTP`);
        navigate("/", { replace: true });
      } finally {
        setLoading(false);
      }
    } else if (data.phonecheck) {
      navigate("/phoneverification");
    }

    // console.log(data);
  };

  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Verify Your Account
          </h2>
          <p className="welcomeparagraph mb-6 max-w-[524.067px] text-customGray">
            To continue, please provide your email address where we can send the
            One-Time Password (OTP).
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form className="w-full">
            <div className="formoptions w-full">
              <VerifyField
                register={register}
                id="checkemail"
                name="emailcheck"
                content="Continue With Email"
              />

              <VerifyField
                register={register}
                id="checkphone"
                name="phonecheck"
                content="Continue With Phone Number"
              />

              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                {isLoading ? (
                  <CircularProgress size={30} thickness={4} value={100} />
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Verify Your Account
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            To continue, please provide your email address where we can send the
            One-Time Password (OTP).
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={verify_account}
            alt="Login Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[240px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
