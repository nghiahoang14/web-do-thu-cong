import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { CartItem } from "@/app/components/Client/CartIcon/CartItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
export const CheckoutSummary = (props:{onOrder:()=>void,shippingMethod:string, onTotalChange: (total: number) => void,orderItems:any})=>{
  const {onOrder,shippingMethod,orderItems,onTotalChange}=props;
     const items = useSelector((state: RootState) => state.cart.items);

 

const shippingFee = shippingMethod === "free" ? 0 : 40000;
  const total = orderItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  const totalFinal = total + shippingFee;

  
  useEffect(() => {
    onTotalChange(totalFinal);
  }, [totalFinal, onTotalChange]);

    return(
        <>
        <div className="h-screen border-l border-[#D9D9D9] flex-1">
                  <div className="border-b border-[#D9D9D9] w-full">
                    <h3 className="text-[20px] font-[700] px-[20px] py-[10px] ">{`Đơn hàng (${orderItems.length} sản phẩm)`}</h3>
                  </div>
        
                  <div className=" border-b border-[#D9D9D9]  w-full">
                    {orderItems.map((item:any) => (
                      <CartItem
                        key={item._id}
                        item={item}
                        className=" cart-item-large  rounded-[5px]  mb-[10px] hover:bg-white"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-[20px] py-[20px]">
                    <span>Tạm tính</span>
                    <span> {total.toLocaleString()}₫</span>
                  </div>
                  <div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#D9D9D9]">
                    <span>Phí vận chuyển</span>
                    <span>{shippingFee.toLocaleString()}₫</span>
                  
                  </div>
                  <div className="flex items-center justify-between px-[20px] py-[20px] ">
                    <span>Tổng cộng</span>
                    <span className="text-red-600 font-[700] text-[22px]">
                      {totalFinal.toLocaleString()}₫{" "}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-[20px] py-[20px] ">
                    <Link href="/Client/Cart" className="hover:text-red-600">
                      <NavigateBeforeIcon /> <span> Quay lại giỏ hàng</span>
                    </Link>
                    <button
                      type="submit"
                      className="rounded-[5px] border px-[15px] py-[10px] cursor-pointer bg-black text-white"
                      onClick={onOrder}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
        </>
    )
}