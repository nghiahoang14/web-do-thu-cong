import { useEffect, useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentsIcon from "@mui/icons-material/Payments";

export const CheckoutMethod = (props: {
  onDataChange: (data: any) => void;
  showError: boolean;
}) => {
  const { onDataChange, showError } = props;
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    onDataChange({ paymentMethod });
  }, [paymentMethod]);

  return (
    <div className="w-full">
      <p className="text-lg sm:text-xl font-bold mb-4">Phương thức thanh toán</p>

      {showError && !paymentMethod && (
        <div className="mb-4">
          <div className="bg-red-100 text-red-700 border border-red-300 rounded py-2 px-3 text-sm">
            Vui lòng chọn phương thức thanh toán
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {/* Chuyển khoản */}
        <label
          className={`flex items-center justify-between border rounded px-4 py-3 cursor-pointer transition ${
            paymentMethod === "BANK"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="BANK"
              checked={paymentMethod === "BANK"}
              onChange={() => setPaymentMethod("BANK")}
              className="w-4 h-4"
            />
            <span className="text-sm sm:text-base font-medium">Chuyển khoản</span>
          </div>
          <PaymentsIcon fontSize="medium" />
        </label>

        {/* Tiền mặt */}
        <label
          className={`flex items-center justify-between border rounded px-4 py-3 cursor-pointer transition ${
            paymentMethod === "COD"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
              className="w-4 h-4"
            />
            <span className="text-sm sm:text-base font-medium">Thanh toán tiền mặt</span>
          </div>
          <PaidIcon fontSize="medium" />
        </label>
      </div>
    </div>
  );
};
