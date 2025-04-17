import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  address: string;
}

const DeliveryInformation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="deliveryForm:w-full">
      {/* Delivery Information */}
      <div className="p-4 ">
        <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>
        <form
          className="shadow-custom py-10 px-8 font-poppins bg-white "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block my-2 font-normal">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                placeholder="Name"
                className="border p-3 rounded w-full"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="my-2 block font-normal">
                Mobile Number
              </label>
              <input
                {...register("mobileNumber", {
                  required: "Mobile Number is required",
                })}
                type="text"
                id="phone"
                placeholder="Mobile Number"
                className="border p-3 rounded w-full"
              />
              {errors.mobileNumber && (
                <span className="text-red-500">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block my-2 font-normal">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                id="email"
                className="border p-3 rounded w-full"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="city" className="block my-2 font-normal">
                City
              </label>
              <input
                {...register("city", { required: "City is required" })}
                type="text"
                id="city"
                placeholder="City"
                className="border p-3 rounded w-full"
              />
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block my-2 font-normal">
                State
              </label>
              <input
                {...register("state", { required: "State is required" })}
                type="text"
                id="state"
                placeholder="State"
                className="border p-3 rounded w-full"
              />
              {errors.state && (
                <span className="text-red-500">{errors.state.message}</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="zip" className="block my-2 font-normal">
                  ZIP
                </label>
                <input
                  {...register("zip", { required: "ZIP code is required" })}
                  type="text"
                  placeholder="ZIP"
                  id="zip"
                  className="border p-3 rounded w-full"
                />
                {errors.zip && (
                  <span className="text-red-500">{errors.zip.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="country" className="block my-2 font-normal">
                  Country
                </label>
                <input
                  {...register("country", {
                    required: "Country is required",
                  })}
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="border p-3 rounded w-full"
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="block my-2 font-normal">
              Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              id="address"
              className="border p-3 rounded w-full resize-none"
              rows={3}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInformation;
