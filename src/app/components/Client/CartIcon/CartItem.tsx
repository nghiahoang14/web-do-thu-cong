"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "@/redux/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import { RootState } from "@/redux/store";
import {
  RemoveFromCart,
  updateCart,
} from "@/services/api/client/cart.api";

export const CartItem = (props: {
  item: any;
  className?: string;
  showRemoveButton?: boolean;
}) => {
  const { item, className, showRemoveButton } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleIncrease = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(item));
    try {
      const response = await updateCart({
        productId: item._id,
        userId: user!._id,
        quantity: item.quantity + 1,
      });
      alert(response.message);
    } catch (err: any) {
      if (err.response?.data?.message) alert(err.response.data.message);
    }
  };

  const handleDecrease = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item._id));
      try {
        const response = await updateCart({
          productId: item._id,
          userId: user!._id,
          quantity: item.quantity - 1,
        });
        alert(response.message);
      } catch (err: any) {
        alert(err.response?.data?.message);
      }
    } else {
      await handleRemove();
    }
  };

  const handleRemove = async () => {
    dispatch(removeFromCart(item._id));
    try {
      const response = await RemoveFromCart({
        productId: item._id,
        userId: user!._id,
      });
      alert(response.message);
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between gap-4 px-4 py-4 rounded-md ${className}`}
    >
     
      <div className="flex flex-1 items-center gap-4 w-full">
        <Link
          href={`/Client/Product/${item._id}`}
          className="flex items-center gap-4 flex-1 min-w-0"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
            <p className="text-red-500 text-sm">
              {(item?.price ?? 0).toLocaleString()} VNĐ
            </p>
          </div>
        </Link>

        
        <div className="ml-auto">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button
              className="w-8 h-8 flex items-center justify-center text-lg border-r border-gray-300"
              onClick={handleDecrease}
            >
              –
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center text-lg border-l border-gray-300"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-4 justify-between sm:justify-end flex-wrap sm:flex-nowrap">
        {showRemoveButton && (
          <div
            className="flex items-center gap-1 text-gray-600 hover:text-red-600 cursor-pointer text-sm"
            onClick={handleRemove}
          >
            <CloseIcon fontSize="small" />
            <span>Xóa</span>
          </div>
        )}
      </div>
    </div>
  );
};
