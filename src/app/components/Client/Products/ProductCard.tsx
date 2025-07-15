import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { AddCart } from "../CartIcon/AddCart";
import { BuyNow } from "../Checkout/BuyNow";

export const ProductCard = (props: { item: any }) => {
  const { item } = props;
  const isOutOfStock = item.stock < 1;

  return (
    <div
      className="
        px-2 sm:px-3 md:px-4 py-3 
        border border-[#ccc] 
        hover:shadow 
        text-sm sm:text-base
      "
    >
      {/* Hình ảnh */}
      <div className="w-full aspect-[1/1] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tiêu đề */}
      <Link href={`/Client/Product/${item._id}`}>
        <h4
          className="
            font-semibold 
            text-[15px] sm:text-[16px] md:text-[18px] 
            my-[10px] 
            line-clamp-1
          "
        >
          {item.title}
        </h4>
      </Link>

      {/* Giá */}
      <p className="text-[14px] sm:text-[16px]">{item.price}đ</p>

      {/* Đánh giá */}
      <div className="ml-[-2px] my-[10px] flex items-center text-[14px] sm:text-[15px]">
        <span>{item.rating?.rate || 0}</span>
        <StarIcon className="text-yellow-400 text-[18px]" />
      </div>

      {/* Tình trạng kho */}
      <p
        className={`${
          isOutOfStock ? "text-red-600 font-semibold text-[16px] sm:text-[18px]" : "text-[14px] sm:text-[15px] min-h-[42px]"
        }`}
      >
        {isOutOfStock ? "Hết hàng" : `Còn ${item.stock} sản phẩm`}
      </p>

      {/* Nút hành động */}
      {!isOutOfStock && (
        <div className="my-[10px] flex items-center h-[35px]">
          <div
            className="
              cursor-pointer 
              px-4 sm:px-5 py-[8px] 
              h-full 
              flex items-center justify-center 
              bg-[#eeedeb]
            "
          >
            <AddCart product={item} />
          </div>
          <div
            className="
              w-full 
              h-full 
              flex items-center justify-center 
              bg-black text-white 
              text-[13px] sm:text-[14px]
              font-medium
            "
          >
            <BuyNow product={item} title="Mua ngay" />
          </div>
        </div>
      )}
    </div>
  );
};
