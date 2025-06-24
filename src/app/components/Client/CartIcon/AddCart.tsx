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
    if (product && product.stock!==0) {
    


  const quantityToAdd = quantity || 1;
    try {
      dispatch(addToCart({ ...product, quantity: quantityToAdd }));
      console.log("Đã thêm vào giỏ:", product);
      const response = await axios.post(`http://localhost:3001/cart/add`, {
        productId: product._id,
        userId: user?._id,
        quantity
      });
      console.log(response)
       if (response.status === 200 || response.status === 201) {
      console.log("✅ Đã gửi lên server thành công!", response.data);
      alert("✅ Đã thêm vào giỏ hàng thành công!");
      
    } else {
      console.log("⚠️ Gửi không thành công. Mã:", response.status);
      alert("❌ Không thể thêm vào giỏ hàng. Vui lòng thử lại!"); 
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
  };

  return (
    <>
      
        <AddShoppingCartIcon  onClick={handleCart}/>
     
    </>
  );
};
