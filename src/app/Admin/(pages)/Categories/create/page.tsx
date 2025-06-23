"use client";

import { CreateCategory } from "@/app/components/Admin/Category/CreateCategory";
import { createCategory } from "@/services/api/admin/category.api";

export default function CreateProductPage(){
 

     const handleSubmit = async (data: any) => {
    try {
      await createCategory(data); 
      console.log(data);
      alert("Tạo danh mục thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo danh mục:", error);
      alert("Tạo danh mục thất bại.");
    }
  };
    return(
        <>
   <CreateCategory onSubmit={handleSubmit} />
        </>
    )
}