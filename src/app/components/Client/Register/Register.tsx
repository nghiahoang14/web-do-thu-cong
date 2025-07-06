"use client";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import {  useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { register } from "@/services/api/client/auth.api";
export const Register =()=>{
    const [showModal, setShowModal] = useState(false);
    const [email,setEmail]= useState("");
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]= useState("");
    const user = useSelector((state: RootState) => state.auth.user);
  

  if (user) return null;
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
const handleSubmit = async (e:any)=>{
e.preventDefault();
if(password!==confirmPassword){
    alert("Mật khẩu không khớp");
    return
}
try{
    const res = await register({
       name,
       email,
       password,
    });
    alert(res.message);
    console.log(res);
    handleCloseModal();
}catch(err:any){
    console.error(err);
    alert(err.response.data.message);
}
}
    return(
        <>
         <button
        className="   hover:font-bold transition-all cursor-pointer"
        onClick={handleShowModal}
      >
        Register
      </button>
      {showModal && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={handleCloseModal} 
        >
          <div className="relative  rounded-[10px] bg-white px-[10px]">
            <button
              className=" cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </button>
            <div
              className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
               
                 <Logo/>
              
                <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Create your account
                </h2>
              </div>

              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6"  onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                     Name
                    </label>
                    <div className="mt-[15px]">
                      <input
                        // id="email"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-[15px]">
                      <input
                        // id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Password
                      </label>
                      
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                 <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="ConfirmPassword"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                     
                    </div>
                    <div className="mt-2">
                      <input
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        type="Password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     
                    >
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    onClick={handleCloseModal}
                  >
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
        </>
    )
}