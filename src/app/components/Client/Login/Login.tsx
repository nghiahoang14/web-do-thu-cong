"use client";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/authSlice";
import { setUserId, fetchCartFromServer } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";

export const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  if (user) return null;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      const { user } = res.data;
      dispatch(setUserId(user._id));
      dispatch(login(user));

      const cartRes = await axios.get(`http://localhost:3001/cart/${user._id}`);
      const transformedItems = cartRes.data.data.items.map((item: any) => ({
        ...item.productId,
        quantity: item.quantity,
      }));
      dispatch(fetchCartFromServer(transformedItems));

      alert("Đăng nhập thành công");
      handleCloseModal();
    } catch (err: any) {
      console.log(err);
      alert("Đăng nhập thất bại");
    }
  };

  return (
    <>
      <button className="hover:font-bold transition-all cursor-pointer" onClick={handleShowModal}>
        Login
      </button>

      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="relative rounded-[10px] bg-white px-[20px]" onClick={(e) => e.stopPropagation()}>
            <button className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl" onClick={handleCloseModal}>
              <CloseIcon />
            </button>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowForgotModal(true)}
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{" "}
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={handleCloseModal}>
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {showForgotModal && <ForgotPassword onClose={() => setShowForgotModal(false)} />}
    </>
  );
};
