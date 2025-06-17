import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export const ChangePassword = ()=>{
    const [showModal, setShowModal] = useState(false);
        const [password,setPassword]= useState("");
        const [confirmPassword,setConfirmPassword]= useState("");
         const user = useSelector((state: RootState) => state.auth.user);
const handleShowModal=()=>{
    setShowModal(!showModal);
}
const handleCloseModal=()=>{
    setShowModal(false);
}
const handleSubmit = async (e:any)=>{
e.preventDefault();
if(password!==confirmPassword){
    alert("Mật khẩu không khớp");
    return
}
try{
    const res = await axios.patch("http://localhost:3001/auth/change-password",{
         userId:user?._id,
  password
    });
    alert("Đổi mật khẩu thành công");
    console.log(res);
    handleCloseModal();
}catch(err:any){
    console.error(err);
    alert("Đổi mật khẩu thất bại")
}
}
    return(
        <>
        <li onClick={handleShowModal} className="flex items-center cursor-pointer mb-[7px] gap-[5px] hover:text-orange-500">
                      <KeyOutlinedIcon />
                      <a className="text-[16px]"> Thay đối mật khẩu </a>
        </li>
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
                      
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                          Change your password
                        </h2>
                      </div>
        
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6"  onSubmit={handleSubmit}>
                          
        
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
                              Submit
                            </button>
                          </div>
                        </form>
        
                       
                      </div>
                    </div>{" "}
                  </div>
                </div>
              )}
        </>
    )
}