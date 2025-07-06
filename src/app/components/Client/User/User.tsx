"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { setUserId,clearCart } from "@/redux/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { ChangePassword } from "../ChangePassword/ChangePassword";
export const User = () => {
 
  const [isOpen, setIsopen] = useState(false);
    const user = useSelector((state: RootState) => state.auth.user);
const dispatch = useDispatch();
  const toggle = () => {
    setIsopen(!isOpen);
  };
  if (!user) return null;
  return (
    <>
      <div
        className=" relative w-[30px] h-[30px] cursor-pointer  "
        onClick={toggle}
      >
        <AccountCircleIcon  className="text-gray-600"/>
      </div>
      {isOpen && (
        <div className=" absolute right-[2%] top-[70%] shadow-lg rounded-[5px] bg-white  text-[18px] ">
          <ul>
            <li className="text-center font-semibold text-blue-600 py-2 px-3 border-b border-gray-200 bg-blue-50 rounded-t-md">
        {user.name}
      </li>
            <ChangePassword/>
            <li className="flex items-center cursor-pointer gap-[5px] py-1 px-3 mb-[7px] hover:text-orange-500">
              <LogoutOutlinedIcon />
              <a onClick={() => {
                dispatch(clearCart());
  dispatch(logout());
  dispatch(setUserId(""));
}}
 className="text-[16px]">
                
                Log out
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
