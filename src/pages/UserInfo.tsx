import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Country, State } from "country-state-city";
import Select from "react-select";
import userInfoApi from "@/api/userInfo";
import { setUser } from "@/store/user/userSlice";
import { toast } from "react-toastify";


type FormData = {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    houseNo: number;
    citytownvillage: string;
    district: string;
    state: string;
    country: string;
};

const UserInfo: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    const countries = Country.getAllCountries().map((c) => ({
        label: c.name,
        value: c.isoCode,
    }));

    const initialCountry = countries.find(c => c.label === user.country) || null;
    const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string } | null>(initialCountry);
    const [states, setStates] = useState<{ label: string; value: string }[]>([]);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch
    } = useForm<FormData>({
        defaultValues: {
            firstName: user.firstName || "",
            middleName: user.middleName || "",
            lastName: user.lastName || "",
            gender: user.gender || "",
            houseNo: user.houseNo || 0,
            citytownvillage: user.citytownvillage || "",
            district: user.district || "",
            state: user.state || "",
            country: user.country || "",
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const isChanged = Object.keys(data).some(
            (key) => data[key as keyof FormData] !== user[key as keyof FormData]
        );

        if (!isChanged) {
            toast.error("No changes detected. Please update at least one field.");
            return;
        }

        try {
            const response = await userInfoApi.updateUserInfo(data);
            if (response) {
                dispatch(setUser(response));
                toast.success("User info updated successfully!");
            }
        } catch (error: any) {
            toast.error("Failed to update user info. Please try again.");
        }
    };

    // Watch country value to update states
    const currentCountry = watch("country");

    useEffect(() => {
        if (currentCountry) {
            const countryObj = countries.find(c => c.label === currentCountry);
            setSelectedCountry(countryObj || null);

            if (countryObj) {
                const fetchedStates = State.getStatesOfCountry(countryObj.value).map((s) => ({
                    label: s.name,
                    value: s.isoCode,
                }));
                setStates(fetchedStates);
            } else {
                setStates([]);
            }
        } else {
            setStates([]);
        }
    }, [currentCountry]);

    // Set initial values from Redux
    useEffect(() => {
        setValue("firstName", user.firstName || "");
        setValue("middleName", user.middleName || "");
        setValue("lastName", user.lastName || "");
        setValue("gender", user.gender || "");
        setValue("houseNo", user.houseNo || 0);
        setValue("citytownvillage", user.citytownvillage || "");
        setValue("district", user.district || "");
        setValue("state", user.state || "");
        setValue("country", user.country || "");
    }, [user, setValue]);

    return (
        <div className="pb-10 flex items-center justify-center">
            <div className="w-full lg:max-w-6xl mx-auto p-6 bg-[#F0F0F0] rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block mb-1 text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                value={user.userEmail}
                                readOnly
                                className="w-full px-5 py-4 bg-gray-300 border rounded-md shadow-sm outline-none cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-semibold">Phone Number</label>
                            <input
                                type="text"
                                value={`${user.userCountrycode} ${user.userPhone}`}
                                readOnly
                                className="w-full px-5 py-4 bg-gray-300 border rounded-md shadow-sm outline-none cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {[
                            { name: "firstName", label: "First Name", required: true },
                            { name: "middleName", label: "Middle Name", required: false },
                            { name: "lastName", label: "Last Name", required: true },
                        ].map(({ name, label, required }) => (
                            <div key={name}>
                                <label className="block mb-1 text-sm font-semibold">{label}</label>
                                <Controller
                                    name={name as keyof FormData}
                                    control={control}
                                    rules={required ? { required: `${label} is required` } : {}}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            placeholder={`Enter your ${label}`}
                                            className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors[name as keyof FormData] && (
                                    <p className="text-red-500 text-sm">
                                        {(errors[name as keyof FormData] as any)?.message}
                                    </p>
                                )}
                            </div>
                        ))}
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
                                    {["Male", "Female", "Other"].map((genderOption) => (
                                        <button
                                            key={genderOption}
                                            type="button"
                                            className={`px-5 py-2 bg-[#D9D9D9] border rounded-md hover:bg-gray-400 focus:bg-gray-400 flex items-center space-x-2 ${field.value === genderOption ? "bg-gray-400" : ""
                                                }`}
                                            onClick={() => field.onChange(genderOption)}
                                        >
                                            <span>{genderOption}</span>
                                            <FaUser className="text-black" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        />
                        {errors.gender && (
                            <p className="text-red-500 text-sm">{errors.gender.message}</p>
                        )}
                    </div>

                    {/* Address Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {[
                            { name: "houseNo", label: "House No", type: "number", required: true },
                            { name: "citytownvillage", label: "City/Town/Village", type: "text", required: true },
                            { name: "district", label: "District", type: "text", required: true },
                        ].map(({ name, label, type, required }) => (
                            <div key={name}>
                                <label className="block mb-1 text-sm font-semibold">{label}</label>
                                <Controller
                                    name={name as keyof FormData}
                                    control={control}
                                    rules={required ? { required: `${label} is required` } : undefined}
                                    render={({ field }) => (
                                        <input
                                            type={type}
                                            placeholder={`Enter your ${label}`}
                                            className="w-full px-5 py-4 bg-[#D9D9D9] border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors[name as keyof FormData] && (
                                    <p className="text-red-500 text-sm">
                                        {(errors[name as keyof FormData] as any)?.message}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Country Dropdown */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-semibold">Country</label>
                        <Controller
                            name="country"
                            control={control}
                            rules={{ required: "Country is required" }}
                            render={({ field }) => (
                                <Select
                                    options={countries}
                                    value={countries.find((c) => c.label === field.value)}
                                    onChange={(val) => {
                                        field.onChange(val?.label);
                                        setSelectedCountry(val);
                                        // Reset state when country changes
                                        setValue("state", "");
                                    }}
                                    placeholder="Select Country"
                                />
                            )}
                        />
                        {errors.country && (
                            <p className="text-red-500 text-sm">{errors.country.message}</p>
                        )}
                    </div>

                    {/* State Dropdown */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-semibold">State</label>
                        <Controller
                            name="state"
                            control={control}
                            rules={{ required: "State is required" }}
                            render={({ field }) => (
                                <Select
                                    options={states}
                                    value={states.find((s) => s.label === field.value)}
                                    onChange={(val) => field.onChange(val?.label)}
                                    isDisabled={!selectedCountry}
                                    placeholder={selectedCountry ? "Select State" : "Select Country First"}
                                />
                            )}
                        />
                        {errors.state && (
                            <p className="text-red-500 text-sm">{errors.state.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <Loader2 className="animate-spin text-white" />
                            ) : (
                                "Update"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;