import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import axios from "axios";
import { forgotPassword, resetPassword, verifyOtp } from "@/services/api/client/auth.api";

export const ForgotPassword = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"enterEmail" | "enterOtp"|"resetPassword">("enterEmail");
const [newPassword, setNewPassword] = useState("");
const [ConfirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(
        email,
      ) ;
      console.log("Email sent:", res.data);
      alert(res.message);
      setStep("enterOtp"); // Chuyển sang bước nhập OTP
    } catch (err:any) {
      console.error(err);
      alert(err.response.data.message);
    }
  };

  const handleVerifyOtp = async (e: any) => {
    e.preventDefault();
    try {
      const res = await verifyOtp(
        email,
        otp,
      ) ;
      console.log("OTP verified:", res.data);
      alert(res.message);
      setStep("resetPassword");
    } catch (err:any) {
      console.error(err);
      alert(err.response.data.message);
    }
  };


const handleResetPassword = async (e: any) => {
  e.preventDefault();
  if(newPassword!== ConfirmNewPassword){
    alert("Mật khẩu ko khớp!");
    return;
  }
  try {
    const res = await resetPassword( {
      email,
       password: newPassword,
  confirmPassword: ConfirmNewPassword,
    });
    alert(res.message);
    onClose(); // đóng modal
  } catch (err:any) {
    console.error(err);
    alert(err.response.data.message);
  }
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative rounded-[10px] bg-white px-6 py-8 "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Forgot password
          </h2>
        </div>

        <div className="mt-[10px]">
          {step === "enterEmail" && (
            <form onSubmit={handleSendEmail} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-5 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Gửi mã
                </button>
              </div>
            </form>
          )}

          {step === "enterOtp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-900">
                  Nhập mã OTP
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-5 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="cursor-pointer flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Xác thực OTP
                </button>
              </div>
            </form>
          )}
          {step === "resetPassword" && (
  <form onSubmit={handleResetPassword} className="space-y-6">
    <div>
      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-900">
      Mật khẩu mới
      </label>
      <div className="mt-2">
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          className="block w-full rounded-md bg-white px-5 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
    </div>
     <div>
      <label htmlFor="ConfirmNewPassword" className="block text-sm font-medium text-gray-900">
       Xác nhận mật khẩu mới
      </label>
      <div className="mt-2">
        <input
          id="ConfirmNewPassword"
          name="ConfirmNewPassword"
          type="password"
          required
          className="block w-full rounded-md bg-white px-5 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
    </div>
    <button
      type="submit"
      className="cursor-pointer flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Đặt lại mật khẩu
    </button>
  </form>
)}

        </div>
      </div>
    </div>
  );
};
