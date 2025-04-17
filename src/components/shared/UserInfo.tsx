import React from "react";

import avatar from "../../assets/Profile Image.png";
const UserInfo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mr-5">
      <img
        className="rounded-full w-8 h-8 navBarWidth:w-6 navBarWidth:h-6"
        src={avatar}
        alt="user-profile"
      />
      <p>
        <span className=" text-14">Hi,</span>{" "}
        <span className="ml-1 text-14">Michael</span>
      </p>
    </div>
  );
};

export default UserInfo;
