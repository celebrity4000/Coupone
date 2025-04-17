import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FaUser } from "react-icons/fa"; // Import black user icon
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { API_URL } from "@/api";
type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  houseNo: number;
  city: string;
  district: string;
  state: string;
  country: string;
};

const AddressForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Form data", data);
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/updateuser`, data, {
        withCredentials: true,
      });
      console.log(response);
      navigate("/homepage", { replace: true });
      if (response.status === 200) {
        toast.success(`User data save successfully`);
      } else if (response.status == 205) {
        // alert("");
        toast.warn(`User Information already exist`);
        navigate("/homePage", { replace: true });
      }
    } catch (error: unknown) {
      toast.error(`An error occurred while creating the user.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-full lg:max-w-6xl mx-auto p-6 bg-[#F0F0F0] rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </p>
              )}
            </div>

            {/* Middle Name */}
            <div>
              <label
                htmlFor="middle-name"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                Middle Name
              </label>
              <Controller
                name="middleName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    id="middle-name"
                    type="text"
                    placeholder="Enter Your Middle Name"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.middleName && (
                <p className="text-red-500 text-sm">
                  {errors.middleName?.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">Gender</label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <div className="flex space-x-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <button
                      key={gender}
                      type="button"
                      className={`px-5 py-2 bg-[#D9D9D9] border rounded-md hover:bg-gray-400 focus:bg-gray-400 flex items-center space-x-2 ${field.value === gender ? "bg-gray-400" : ""
                        }`}
                      onClick={() => field.onChange(gender)} // Update value
                    >
                      <span>{gender}</span>
                      <FaUser className="text-black" />
                    </button>
                  ))}
                </div>
              )}
            />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender?.message}</p>
            )}
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {/* House Number */}
            <div>
              <label
                htmlFor="house-no"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                House No
              </label>
              <Controller
                name="houseNo"
                control={control}
                rules={{ required: "House number is required" }}
                render={({ field }) => (
                  <input
                    id="house-no"
                    type="number"
                    placeholder="Enter Your House No"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.houseNo && (
                <p className="text-red-500 text-sm">
                  {errors.houseNo?.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                City/Town/Village
              </label>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter Your City/Town/Village"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city?.message}</p>
              )}
            </div>

            {/* District */}
            <div>
              <label
                htmlFor="district"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                District
              </label>
              <Controller
                name="district"
                control={control}
                defaultValue=""
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <input
                    id="district"
                    type="text"
                    placeholder="Enter Your District"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.district && (
                <p className="text-red-500 text-sm">
                  {errors.district?.message}
                </p>
              )}
            </div>
          </div>

          {/* State and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="state"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                State
              </label>
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <input
                    id="state"
                    type="text"
                    placeholder="Enter Your State"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-1 text-sm font-semibold cursor-pointer"
              >
                Country
              </label>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                  <input
                    id="country"
                    type="text"
                    placeholder="Enter Your Country"
                    className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                    {...field}
                  />
                )}
              />
              {errors.country && (
                <p className="text-red-500 text-sm">
                  {errors.country?.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              disabled={isSubmitting}
            >
              {isLoading ? (
                <CircularProgress size={30} thickness={4} value={100} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
