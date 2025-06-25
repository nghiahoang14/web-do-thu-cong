import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";

import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
export const AddCart = (props: { product: any; quantity?: number }) => {
  const { product, quantity } = props;
  
    const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleCart = async () => {
  if (!product || product.stock < 1) {
   
    return;
  }

  const quantityToAdd = quantity || 1;

  try {
    
    const response = await axios.post(`http://localhost:3001/cart/add`, {
      productId: product._id,
      userId: user?._id,
      quantity: quantityToAdd,
    });

   
    if (response.status === 200 || response.status === 201) {
      dispatch(addToCart({ ...product, quantity: quantityToAdd }));
      alert("✅ Đã thêm vào giỏ hàng thành công!");
    } else {
      alert("❌ Không thể thêm vào giỏ hàng. Vui lòng thử lại!");
    }
  } catch (err: any) {
    console.log("❌ Lỗi axios:", err);

   
    if (err.response?.data?.message) {
      alert(`❌ ${err.response.data.message}`);
    } else {
      alert("❌ Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  }
};


  return (
    <>
      
        <AddShoppingCartIcon  onClick={handleCart}/>
     
    </>
  );
};
