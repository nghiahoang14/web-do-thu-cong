import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity } from "@/redux/cartSlice";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { RootState } from "@/redux/store";
export const CartItem = (props: { item: any; className?: string ;showRemoveButton?: boolean,
}) => {
  const { item, className, showRemoveButton} = props;
  const dispatch = useDispatch();
 const user = useSelector((state: RootState) => state.auth.user);
  const handleIncrease = async (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(item));
    try {
      const response = await axios.patch(`http://localhost:3001/cart/update`, {
        productId: item._id,
        userId: user?._id,
        quantity:item.quantity +1
      });
      console.log(response)
       if (response.status === 200 || response.status === 201) {
      console.log( response.data);
      // alert("✅ Đã thêm vào giỏ hàng thành công!");
      
    } else {
      console.log( response.status);
      // alert("❌ Không thể thêm vào giỏ hàng. Vui lòng thử lại!"); 
    }
    } catch (err:any) {
      console.log(err);
       if (err.response && err.response.data && err.response.data.message) {
      alert(`❌ ${err.response.data.message}`);
    } else {
      alert("❌ Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
    }
  };
  const handleDecrease =async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item._id));
       try {
      const response = await axios.patch(`http://localhost:3001/cart/update`, {
        productId: item._id,
        userId: user?._id,
        quantity:item.quantity -1
      });
      console.log(response)
       if (response.status === 200 || response.status === 201) {
      console.log( response.data);
      // alert("✅ Đã thêm vào giỏ hàng thành công!");
      
    } else {
      console.log( response.status);
      // alert("❌ Không thể thêm vào giỏ hàng. Vui lòng thử lại!"); 
    }
    } catch (err:any) {
      console.log(err);
       if (err.response && err.response.data && err.response.data.message) {
      alert(`❌ ${err.response.data.message}`);
    } else {
      alert("❌ Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
    }
    } else {
       await handleRemove();
    }
  };
  const handleRemove = async()=>{
    dispatch(removeFromCart(item._id))
      try {
      const response = await axios.delete(`http://localhost:3001/cart/remove`, {
        data: {
    productId: item._id,
    userId: user?._id,
  }
      });
      console.log(response)
       if (response.status === 200 || response.status === 201) {
      console.log( response.data);
      // alert("✅ Đã thêm vào giỏ hàng thành công!");
      
    } else {
      console.log( response.status);
      // alert("❌ Không thể thêm vào giỏ hàng. Vui lòng thử lại!"); 
    }
    } catch (err:any) {
      console.log(err);
       if (err.response && err.response.data && err.response.data.message) {
      alert(`❌ ${err.response.data.message}`);
    } else {
      alert("❌ Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
    }
  }
  return (
    <>
      <div
        className={`flex items-center justify-between hover:bg-gray-100 px-4 gap-[20px] ${className}`}
      >
      
        <Link
          href={`/Client/Product/${item._id}`}
          className="flex items-center truncate flex-1 min-w-0 aspect-ratio py-5 space-x-4 "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-semibold line-clamp-1">{item.title}</p>
            <p className="text-red-500 text-sm">
              {(item?.price ?? 0).toLocaleString()} VNĐ
            </p>
          </div>
        </Link>
        {item.quantity && (
          <div className="flex  items-center border border-gray-300 rounded w-[100px] shrink-0 justify-cente  overflow-hidden ">
            <button
              className="w-8 h-8 flex items-center justify-center text-lg border-r border-gray-300"
              onClick={handleDecrease}
            >
              -
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
          
        )}
        {showRemoveButton && (
    <div
      className="flex items-center gap-1   hover:text-red-600 cursor-pointer"
      onClick={handleRemove}
    >
      <CloseIcon fontSize="small" />
      <span className="text-[16px]">Xóa</span>
    </div>
  )}
      </div>
    </>
  );
};
