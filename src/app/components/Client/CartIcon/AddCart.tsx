import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { AddToCart } from "@/services/api/client/cart.api";

export const AddCart = (props: { product: any; quantity?: number }) => {
  const { product, quantity } = props;
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleCart = async () => {
     if (!user) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ.");
      return;
    }
    if (!product || product.stock < 1) return;

    const quantityToAdd = quantity || 1;

    try {
      const res = await AddToCart({
        productId: product._id,
        userId: user!._id ,
        quantity: quantityToAdd,
      });

      dispatch(addToCart({ ...product, quantity: quantityToAdd }));
      alert(res.message );
    } catch (err: any) {
      console.error("❌ Lỗi khi thêm vào giỏ:", err);
      alert(err?.response?.data?.message );
    }
  };

  return <AddShoppingCartIcon onClick={handleCart} className={`cursor-pointer ${
        !user ? " cursor-not-allowed" : "hover:text-orange-500"
      }`} />;
};
