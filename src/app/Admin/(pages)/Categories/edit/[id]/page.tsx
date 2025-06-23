"use client";

import { UpdateCategory } from "@/app/components/Admin/Category/UpdateCategory";
import {  getCategoryById, updateCategory } from "@/services/api/admin/category.api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function updateCategoryPage(){
    const param = useParams();
    const id=param.id;
      const router = useRouter();
 
   const [categories, setCategories] = useState<any>(null)
   
    useEffect(() => {
    const fetchCategory = async () => {
      try {
         const res = await getCategoryById(id as string);
        setCategories(res.data);
       console.log(res)
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
        alert("Không tìm thấy danh mục");
        router.push("/Admin/Categories");
      } 
    };
 
    if (id) {
      fetchCategory();
    }
  }, [id]);
     const handleSubmit = async (data: any) => {
    try {
      await updateCategory(id as string,data); 
      alert("Sửa danh mục thành công!");
      router.push("/Admin/Categories");
    } catch (error:any) {
      console.error("Lỗi khi sửa danh mục:", error);
      alert("Sửa danh mục thất bại.");
     
    }
  };

    return(
        <>
   <UpdateCategory onSubmit={handleSubmit} categories={categories}/>
        </>
    )
}