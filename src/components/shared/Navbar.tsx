import React from "react";
// import notficationIcon from "../../assets/notificationIcon.png";
import CountryInfo from "./CountryInfo";
import { CiSearch } from "react-icons/ci";
import { MenubarDemo } from "./NavbarNotification";
import UserInfo from "./UserInfo";
import { NavLink } from "react-router-dom";
import { Notifications } from "./Notifications";



const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-navbarBgColor shadow-custom p-3">
        <div className=" flex justify-between items-center w-full h-[56px]">
          <NavLink to="/HomePage">
            <div className="font-poppins text-[2em] font-semibold leading-[40px]  decoration-skip-ink-none ml-5">
              Logo
            </div>
          </NavLink>

          <div className="searchbar ">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-[16px] pr-[375px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins text-gray-700 placeholder-gray-500 shadow-custom -ml-5  navBarWidth:hidden"
            />
          </div>

          <div className="profilecontainer flex gap-1 items-center justify-center">
            <Notifications />

            <MenubarDemo element={<CountryInfo />} />
            <MenubarDemo element={<UserInfo />} />
          </div>
        </div>
      </div>

      <div className="py-2 bg-gradient-to-r from-p3-gray to-p3-green">
        <ul className="flex justify-evenly items-center gap-10 font-poppins font-medium text-[20px]">
          <NavLink to="/listpage">
            {" "}
            <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition duration-300 ease-in-out">
              Categories
            </li>
          </NavLink>
          <NavLink to="/delivery">
            {" "}
            <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition duration-300 ease-in-out">
              Cart
            </li>
          </NavLink>
          {/* <NavLink to="/kfc">
            {" "}
            <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition duration-300 ease-in-out">
              Categories
            </li>
          </NavLink> */}
        </ul>
      </div>

      <div className="searchbar navBarWidth:flex justify-center items-center gap-2  hidden p-2 mt-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full searchBar:w-[60%] py-5 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins text-gray-700 placeholder-gray-500 shadow-custom "
        />
        <button className="bg-[#006400] py-5 px-4 rounded-md">
          <CiSearch className="w-7 h-7 text-white" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
