"use client";
import { useState, useEffect } from "react";

export const CheckoutShipping = (props: {
  onDataChange: (data: any) => void;
  showError: boolean;
}) => {
  const { onDataChange, showError } = props;
  const [shippingMethod, setShippingMethod] = useState("");

  useEffect(() => {
    onDataChange({ shippingMethod });
  }, [shippingMethod]);

  return (
    <>
      <div className="mb-[50px]">
        <p className="text-[20px] font-[700] mb-[17px]">Shipping</p>

        {showError && !shippingMethod && (
          <div className="bg-[#f8d7da] text-[#721c24] border border-[#bee5eb] rounded-[5px] py-[7px] px-[5px] w-full mb-[10px]">
            Vui lòng chọn phương thức giao hàng
          </div>
        )}

        <div className="flex flex-col gap-y-[10px]">
         

          <div
            className={`rounded-lg border px-[10px] py-[10px] cursor-pointer ${
              shippingMethod === "free"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-gray-50"
            }`}
            onClick={() => setShippingMethod("free")}
          >
            <div className="flex items-center">
              <input
                id="free"
                type="radio"
                name="delivery-method"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
                className="h-4 w-4 mt-1 text-blue-600"
              />
              <div className="ml-4 text-[18px]">
                <label htmlFor="free" className="font-medium text-gray-900">
                  Free
                </label>
                <p className="mt-1 text-xs text-gray-500">
                 Nhận hàng trong vòng 3 đến 4 ngày
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg border p-4 cursor-pointer ${
              shippingMethod === "express"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-gray-50"
            }`}
            onClick={() => setShippingMethod("express")}
          >
            <div className="flex items-center">
              <input
                id="express"
                type="radio"
                name="delivery-method"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
                className="h-4 w-4 mt-1 text-blue-600"
              />
              <div className="ml-4 text-[18px]">
                <label htmlFor="express" className="font-medium text-gray-900">
                   Express  - 40.000đ
                </label>
                <p className="mt-1 text-xs text-gray-500">Trong hôm nay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
