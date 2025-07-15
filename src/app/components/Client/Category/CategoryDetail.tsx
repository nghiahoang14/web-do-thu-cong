"use client";

import { useState } from "react";
import { Filter } from "@/app/components/Client/Filter/Filter";
import { CategoryMenu } from "@/app/components/Client/Category/CategoryMenu";
import { ProductList } from "@/app/components/Client/Products/ProductList";

export const CategoryDetail = ({
  products,
  categoryId,
  categories,
}: {
  products: any[];
  categoryId: string;
  categories: any[];
}) => {
  const [sortOption, setSortOption] = useState("default");

  return (
    <div className="flex items-start gap-[50px]">
      <CategoryMenu categories={categories} />
      <div className="flex-1 w-full">
        <div className="flex justify-end">
          <Filter onSortChange={setSortOption} />
        </div>
        <ProductList
          data={products}
          sortOption={sortOption}
          showMore={false}
          href=""
          className=""
       
       
        />
      </div>
    </div>
  );
};
