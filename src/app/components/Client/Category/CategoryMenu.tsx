"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const CategoryMenu = ({ categories }: { categories: any[] }) => {
  const pathname = usePathname();

  return (
    <div
      className="w-[120px] sm:w-[150px] md:w-[25%] lg:w-[20%] px-2 shrink-0"
    >
      <ul>
        {categories.map((item, index) => {
          const isActive = pathname === `/Client/Category/${item._id}`;

          return (
            <div key={item._id}>
              <li
                className={`py-[10px] text-[14px] sm:text-[16px] font-[500] cursor-pointer hover:text-red-500 ${
                  isActive ? "text-red-500" : ""
                }`}
              >
                <Link href={`/Client/Category/${item._id}`}>{item.name}</Link>
              </li>

              {index < categories.length - 1 && (
                <div className="h-[1px] bg-[#ddd] w-full" />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
