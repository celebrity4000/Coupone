import React, { useEffect } from "react";

import avatar from "../../assets/Profile Image.png";
import userInfoApi from "@/api/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setUser } from "@/store/user/userSlice";
const UserInfo: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userInfoApi.getUserInfo();
        dispatch(setUser(response));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mr-5">
      <img
        className="rounded-full w-8 h-8 navBarWidth:w-6 navBarWidth:h-6"
        src={avatar}
        alt="user-profile"
      />
      <p>
        <span className=" text-14">Hi,</span>{" "}
        <span className="ml-1 text-14">{user.firstName}</span>
      </p>
    </div>
  );
};

export default UserInfo;
