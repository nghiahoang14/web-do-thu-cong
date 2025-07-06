import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changePassword } from "@/services/api/client/auth.api";
export const ChangePassword = ()=>{
    const [showModal, setShowModal] = useState(false);
        const [Newpassword,setNewPassword]= useState("");
        const [CurrentPassword, setCurrentPassword] = useState("");

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
if(Newpassword!==confirmPassword){
    alert("Mật khẩu không khớp");
    return
}
try{
    const res =  await changePassword({
         email:user!.email,
        CurrentPassword,
        Newpassword,
        
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
        <li onClick={handleShowModal} className=" py-1 px-3 flex items-center cursor-pointer mb-[7px] gap-[5px] hover:text-orange-500">
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
                          Thay đổi mật khẩu
                        </h2>
                      </div>
        
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form onSubmit={handleSubmit} className="space-y-6">
  {/* Mật khẩu hiện tại */}
  <div>
    <label
      htmlFor="oldPassword"
      className="block text-sm font-medium text-gray-900"
    >
      Mật khẩu hiện tại
    </label>
    <div className="mt-2">
      <input
        id="oldPassword"
        name="oldPassword"
        type="password"
        required
        autoComplete="current-password"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
    </div>
  </div>

  {/* Mật khẩu mới */}
  <div>
    <label
      htmlFor="newPassword"
      className="block text-sm font-medium text-gray-900"
    >
      Mật khẩu mới
    </label>
    <div className="mt-2">
      <input
        id="newPassword"
        name="newPassword"
        type="password"
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        onChange={(e) => setNewPassword(e.target.value)}
      />
    </div>
  </div>

  {/* Xác nhận mật khẩu mới */}
  <div>
    <label
      htmlFor="confirmPassword"
      className="block text-sm font-medium text-gray-900"
    >
      Xác nhận mật khẩu mới
    </label>
    <div className="mt-2">
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        required
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  </div>

  {/* Nút Submit */}
  <div>
    <button
      type="submit"
      className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Gửi
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