"use client";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { AddCart } from "@/app/components/Client/CartIcon/AddCart";
import { BuyNow } from "@/app/components/Client/Checkout/BuyNow";
import { ReviewProduct } from "@/app/components/Client/Review/ReviewProduct";

export const ProductDetail = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center mt-20 text-gray-500">Đang tải sản phẩm...</div>;
  }

  const isOutOfStock = product.stock < 1;
  const imageSrc = product.image || "/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Hình ảnh */}
      <div>
        <img
          src={imageSrc}
          alt={product.title}
          className="w-full rounded-lg object-contain max-h-[300px] md:max-h-[500px] shadow-lg"
        />
      </div>

      {/* Thông tin */}
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{product.title}</h1>

        <div className="flex items-center space-x-2 mb-6">
          <div className="flex items-center">
            <span>{product.rating?.rate || 0}</span>
            <StarIcon className="text-yellow-400" />
          </div>
          <span className="text-sm text-gray-500">({product.rating?.count || 0} đánh giá)</span>
        </div>

        <p className="text-2xl md:text-3xl font-extrabold text-red-600 mb-6">
          {product.price.toLocaleString()} VNĐ
        </p>

        {/* Hết hàng */}
        {isOutOfStock ? (
          <p className="text-red-600 font-semibold text-lg md:text-2xl mb-6">Hết hàng</p>
        ) : (
          <>
            {/* Số lượng */}
            <div className="mb-6 flex items-center space-x-4">
              <label htmlFor="quantity" className="font-semibold text-lg">
                Số lượng:
              </label>
              <input
                type="number"
                id="quantity"
                min={1}
                max={99}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-20 rounded-md border border-gray-300 text-center py-1 text-lg max-w-[80px]"
              />
            </div>

            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 sm:flex-none sm:w-[150px] bg-[#eeedeb] cursor-pointer py-3 px-4 flex items-center justify-center rounded-md">
                <AddCart product={product} quantity={quantity} />
              </div>
              <div className="flex-1 sm:flex-none sm:w-[200px] py-3 px-4 cursor-pointer flex items-center justify-center border rounded-md text-white bg-black">
                <BuyNow product={product} quantity={quantity} title="Mua ngay" />
              </div>
            </div>
          </>
        )}

        
      </div>
{/* Mô tả sản phẩm */}
        <section className="">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Mô tả sản phẩm</h2>
          <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
        </section>
      {/* Đánh giá */}
      <div className="col-span-1 md:col-span-2 mt-2">
        <ReviewProduct id={product._id} />
      </div>
    </div>
  );
};
