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
        <div className=" absolute bottom-[-60px] right-[35px] shadow-lg rounded-[5px] bg-white px-[12px] py-[12px] text-[18px] ">
          <ul>
            
            <ChangePassword/>
            <li className="flex items-center cursor-pointer gap-[5px] mb-[7px] hover:text-orange-500">
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
