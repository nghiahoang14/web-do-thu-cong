import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Category {
  _id: string;
  name: string;
}

export const CategoryMenu = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get<{ data: Category[] }>("http://localhost:3001/category")
      .then((res) => setCategory(res.data.data))
      .catch((err) => {
        console.error("Lỗi khi gọi API danh mục:", err);
      });
  }, []);

  return (
    <div className="w-[20%]">
      <ul>
        {category.map((item, index) => (
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
