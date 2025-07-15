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
    <div className="w-full">
      <p className="text-lg sm:text-xl font-bold mb-4">Phương thức giao hàng</p>

      {showError && !shippingMethod && (
        <div className="bg-red-100 text-red-700 border border-red-300 rounded py-2 px-3 mb-4 text-sm">
          Vui lòng chọn phương thức giao hàng
        </div>
      )}

      <div className="flex flex-col gap-4">
        
        <div
          className={`rounded-md border px-4 py-3 cursor-pointer transition ${
            shippingMethod === "free"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50"
          }`}
          onClick={() => setShippingMethod("free")}
        >
          <div className="flex items-start gap-3">
            <input
              id="free"
              type="radio"
              name="delivery-method"
              checked={shippingMethod === "free"}
              onChange={() => setShippingMethod("free")}
              className="h-4 w-4 mt-1 text-blue-600"
            />
            <div>
              <label htmlFor="free" className="font-medium text-sm sm:text-base text-gray-900">
                Miễn phí
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Nhận hàng trong 3 - 4 ngày
              </p>
            </div>
          </div>
        </div>

       
        <div
          className={`rounded-md border px-4 py-3 cursor-pointer transition ${
            shippingMethod === "express"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50"
          }`}
          onClick={() => setShippingMethod("express")}
        >
          <div className="flex items-start gap-3">
            <input
              id="express"
              type="radio"
              name="delivery-method"
              checked={shippingMethod === "express"}
              onChange={() => setShippingMethod("express")}
              className="h-4 w-4 mt-1 text-blue-600"
            />
            <div>
              <label htmlFor="express" className="font-medium text-sm sm:text-base text-gray-900">
                Giao nhanh – 40.000đ
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Giao trong hôm nay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
