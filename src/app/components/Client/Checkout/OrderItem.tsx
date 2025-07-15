import Link from "next/link";
import { BuyNow } from "./BuyNow";
import { ReviewForm } from "../Review/ReviewForm";

export const OrderItem = ({
  item,
  id,
  mode,
  isLast,
  orderId,
}: {
  item: any;
  id: string;
  mode?: string;
  isLast?: boolean;
  orderId: string;
}) => {
  const isDeleted = item.product_id?.deleted;

  return (
    <>
     
      <div className="flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6 py-4 px-4">
        
        <div className="relative border border-[#ddd] rounded w-[60px] h-[60px] shrink-0">
          <img
            src={item.image}
            className="object-cover w-full h-full"
            alt={item.title}
          />
          <div className="absolute -top-1 -right-1 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            {item.quantity}
          </div>
        </div>

      
        <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-[18px] font-[600] text-gray-800 mb-1 sm:mb-0">
            {item.title}
          </div>
          <div className="text-[16px] text-red-500 font-semibold">
            {item.price.toLocaleString("vi-VN")}₫
          </div>
        </div>
        
      </div>

     
      {mode === "history" && (
        <>
          <div className="px-4">
            <ReviewForm orderId={orderId} item={item} />
          </div>

          <div className="flex  sm:flex-row gap-2 sm:gap-4 px-4 pb-2 justify-end">
            <Link
              href={isDeleted ? "#" : `/Client/Product/${item.product_id?._id}`}
              className={`font-semibold border-r pr-[8px] sm:border-0 sm:border-r sm:pr-4 ${
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
              <BuyNow
                title="Mua lại"
                className="!text-blue-600"
                product={{ ...item.product_id }}
              />
            </div>
          </div>
        </>
      )}

      
      {!isLast && <div className="border-b border-gray-200 my-3" />}
    </>
  );
};
