
import Link from "next/link";
import { BuyNow } from "./BuyNow";
import { ReviewForm } from "../Review/ReviewForm";
export const OrderItem = ({
  item,
  id,
  mode,
  isLast,
  orderId
}: {
  item: any;
  id: string;
  mode?: string;
  isLast?: boolean;
  orderId:string
}) => {
  const isDeleted = item.product_id?.deleted;
 
  
  console.log(item);

 

 

  return (
    <>
      <div className="flex items-center gap-2 py-[15px] px-[15px]">
        <div className="relative border border-[#ddd] rounded w-[60px] h-[60px]">
          <img
            src={item.image}
            className="object-cover w-full h-full"
            alt={item.title}
          />
          <div className="absolute -top-1 -right-1 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            {item.quantity}
          </div>
        </div>
        <div className="flex-1">{item.title}</div>
        <div>{item.price.toLocaleString("vi-VN")}₫</div>
      </div>

      {mode === "history" && (
        <>
          
<ReviewForm orderId={orderId} item={item}/>
          {/* View + Buy again */}
          <div className="flex gap-4 px-[15px] pb-2 justify-end">
            <Link
              href={isDeleted ? "#" : `/Client/Product/${item.product_id?._id}`}
              className={`font-semibold border-r pr-4 ${
                isDeleted
                  ? "text-gray-400 cursor-not-allowed pointer-events-none"
                  : "text-blue-600"
              }`}
            >
              Xem sản phẩm
            </Link>

            <div
              className={`font-semibold ${
                isDeleted
                  ? "text-gray-400 cursor-not-allowed pointer-events-none"
                  : "text-blue-600"
              }`}
            >
              <BuyNow title="Mua lại" product={{ ...item.product_id }} />
            </div>
          </div>
        </>
      )}

      {!isLast && <div className="border-b border-gray-200 my-[15px]" />}
    </>
  );
};
