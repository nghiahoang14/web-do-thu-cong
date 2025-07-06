import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/api/client/category.api";

export const CategoryMenu = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories(); 
        setCategory(res.data); 
      } catch (err: any) {
        console.error("Lỗi khi gọi API danh mục:", err.response?.data?.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-[20%]">
      <ul>
        {category.map((item: any, index) => (
          <div key={index}>
            <li className="cursor-pointer hover:text-red-500 py-[10px] text-[18px] font-[500]">
              <Link href={`/Client/Category/${item._id}`}>{item.name}</Link>
            </li>
            {index < category.length - 1 && (
              <div className="h-[1px] bg-[#ddd] w-full"></div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
