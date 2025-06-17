
import {  useEffect, useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentsIcon from "@mui/icons-material/Payments";
export const CheckoutMethod=(props:{onDataChange: (data: any) => void ,showError:boolean})=>{
  const {onDataChange,showError}=props;
     const [paymentMethod, setPaymentMethod] = useState("");
      useEffect(() => {
    onDataChange({ paymentMethod });
  }, [paymentMethod]);
    return(
        <>
        <div className="mb-[30px]">
                <p className="text-[20px] font-[700] mb-[17px]">Payment</p>
                  {showError && !paymentMethod && (
              <div className="mb-[10px]">
                  
                    <div className=" bg-[#f8d7da] text-[#721c24]  border rounded-[5px] border-[#D9D9D9] py-[7px] px-[5px] w-full">Vui lòng chọn phương thức thanh toán</div>
                </div>)}
                <label
                  className={`flex items-center justify-between border rounded-[5px] px-[10px] py-[10px] w-full cursor-pointer mb-[10px] ${
                    paymentMethod === "bank"
                      ? "border-blue-500 bg-blue-50"
                      : "border-[#D9D9D9] bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <span className="text-[18px] font-[500]">Chuyển khoản</span>
                  </div>
                  <PaymentsIcon />
                </label>

                <label
                  className={`flex items-center justify-between border rounded-[5px] px-[10px] py-[10px] w-full cursor-pointer ${
                    paymentMethod === "cod"
                      ? "border-blue-500 bg-blue-50"
                      : "border-[#D9D9D9] bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <span className="text-[18px] font-[500]">Tiền mặt</span>
                  </div>
                  <PaidIcon />
                </label>
              </div>
        </>
    )
}