import React, { useState, ChangeEvent, FocusEvent } from "react";
import { useForm } from "react-hook-form";
import { countryCodes } from "../../utils/countryCodes";

const CountryCodeSelector: React.FC = () => {
  const { register, setValue } = useForm();
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true); // Show dropdown when user types
  };

  // Handle option select
  const handleOptionSelect = (countryCode: string) => {
    setSearchQuery(countryCode); // Set selected country code in the input
    setValue("usercountrycode", countryCode); // Update form value in react-hook-form
    setShowDropdown(false); // Close dropdown
  };

  // Filter countries based on search query
  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  // Hide dropdown on blur
  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative" onBlur={handleBlur} tabIndex={-1}>
      {/* Editable Input Field */}
      <input
        type="text"
        placeholder="Search or select country code..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full p-3  bg-customFieldColor rounded focus:outline-none"
        onFocus={() => setShowDropdown(true)} // Show dropdown on focus
      />

      {/* Dropdown Menu */}
      {showDropdown && filteredCountries.length > 0 && (
        <ul className="absolute z-10 w-full bg-white rounded max-h-48 overflow-y-auto">
          {filteredCountries.map((country) => (
            <li
              key={country.code}
              onClick={() => handleOptionSelect(country.code)}
              className="p-2 cursor-pointer bg-customFieldColor"
            >
              {country.name} ({country.code})
            </li>
          ))}
        </ul>
      )}

      {/* Hidden Input for react-hook-form */}
      <input
        type="hidden"
        {...register("usercountrycode", { required: true })}
        value={searchQuery}
        className="bg-white"
      />
    </div>
  );
};

export default CountryCodeSelector;
