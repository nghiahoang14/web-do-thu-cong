"use client";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartItem } from "./CartItem";
import { More } from "../More/More";
export const CartIcon = () => {
  const [isOpen, setIsopen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const toggleCart = () => {
    setIsopen(!isOpen);
  };
  const rawItems = useSelector((state: RootState) => state.cart.items);
const items = Array.isArray(rawItems) ? rawItems : [];

  const cartCount = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
   useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node)
      ) {
        setIsopen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <div
      ref={cartRef}
        className="relative w-[30px] h-[30px] cursor-pointer "
        onClick={toggleCart}
      >
        <ShoppingCartOutlinedIcon />
        <div className="absolute -top-1 -right-1 bg-red-700 text-white rounded-full w-[15px] h-[15px] flex items-center justify-center text-[12px] font-bold">
          {cartCount}
        </div>
        {isOpen && (
          <div className="absolute rounded-[6px] shadow overflow-hidden  top-full right-[0px] bg-white max-h-[220px] min-w-[350px]  overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* <h3 className="text-[20px] font-[500] px-4 py-4">Giỏ hàng</h3>
            <div className="h-[1px] bg-[#ddd]"></div> */}
            {cartCount <= 0 ? (
                <div className=" flex items-center justify-center truncate aspect-ratio w-[350px] h-[210px] ">
              <img
                src="/demo/CartInfo.webp"
                alt=""
                className="w-[100px] h-[100px] flex items-center justify-center object-cover"
              />
              </div>
            ) : (
              <>
             { items.map((item) => <CartItem key={item._id} item={item} />)}
              <div className="mb-[15px] text-[18px]">
              <More href="/Client/Cart" title="Xem chi tiết "/>
             </div>
             </>
            )}
             
          </div>
        )}
       
      </div>
    </>
  );
};
