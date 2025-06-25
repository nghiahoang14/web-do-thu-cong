import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { AddCart } from "../CartIcon/AddCart";
import { BuyNow } from "../Checkout/BuyNow";

export const ProductCard = (props: { item: any }) => {
  const { item } = props;

  const isOutOfStock = item.stock < 1;

  return (
    <div className="px-[10px] py-[10px] border border-[#ccc] hover:shadow">
      
      <div className="w-full aspect-[1/1] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

     
      <Link href={`/Client/Product/${item._id}`}>
        <h4 className="font-[600] text-[18px] my-[10px] line-clamp-1">{item.title}</h4>
      </Link>

    
      <p className="">{item.price}đ</p>
      <div className="ml-[-2px] my-[10px] flex items-center">
        <span>{item.rating?.rate || 0}</span>
        <StarIcon className="text-yellow-400" />
      </div>

    
       <p className={isOutOfStock ? "text-red-600 font-semibold text-[20px]" : ""}>
        {isOutOfStock ? "Hết hàng" : `Còn ${item.stock} sản phẩm`}
      </p>

     
      {!isOutOfStock && (
        <div className="my-[10px] flex items-center h-[35px]">
          <div className="cursor-pointer px-[30px] py-[10px] h-full flex items-center justify-center bg-[#eeedeb]">
            <AddCart product={item} />
          </div>
          <div className="w-[70%] h-full flex items-center justify-center bg-[#000000] text-white">
            <BuyNow product={item} />
          </div>
        </div>
      )}
    </div>
  );
};
