"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { More } from "../More/More";
import { Navigator } from "../Navigator/Navigator";
import { getProducts } from "@/services/api/client/product.api";



const items_per_page = 12;

export const ProductList = (props: {
  filterType: string;
  href: string;
  className: string;
  sortOption: string;
  showMore: boolean;
  categoryId?: any;
}) => {
  const { filterType, href, className, sortOption, showMore, categoryId } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        let data = res.data;

        if (filterType === "new") {
          const now = new Date();
          data = data.filter((p: any) => {
            const createdAt = new Date(p.createdAt);
            const days = (now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24);
            return days <= 30;
          });
        }

        if (categoryId) {
          data = data.filter((p:any) => {
            const cate = p.category;
            const cateId = typeof cate === "string" ? cate : cate?._id;
            return cateId?.toString().trim() === categoryId.toString().trim();
          });
        }

        if (filterType === "best") {
          data = data.filter((p: any) => p.rating.count >= 1000);
        }

        if (sortOption === "asc") {
          data = data.sort((a:any, b:any) => a.price - b.price);
        }
        if (sortOption === "desc") {
          data = data.sort((a:any, b:any) => b.price - a.price);
        }

        setProducts(data);
        setCurrentPage(1);
      } catch (err: any) {
        console.error("Lỗi khi gọi API sản phẩm:", err);
        alert(err?.response?.data?.message || "Lỗi khi tải danh sách sản phẩm.");
      }
    };

    fetchData();
  }, [filterType, sortOption, categoryId]);

  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / items_per_page);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px] mt-[15px]">
          {currentProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
        <Navigator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className={className}
        />
      </div>

      {showMore && <More href={href} title="Xem thêm" />}
    </>
  );
};
