"use client";
import { CreateProduct } from "@/app/components/Admin/Products/CreateProduct"
import { getCategories } from "@/services/api/admin/category.api";
import { createProduct } from "@/services/api/admin/products.api";
import { useEffect, useState } from "react";
export default function CreateProductPage(){
  const [categories, setCategories] = useState<any[]>([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data); 
      } catch (err) {
        console.error("Không thể lấy danh mục", err);
      }
    };
    fetchCategories();
  }, []);

     const handleSubmit = async (data: any) => {
    try {
      await createProduct(data); 
      console.log(data);
      alert("Tạo sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
      alert("Tạo sản phẩm thất bại.");
    }
  };
    return(
        <>
   <CreateProduct onSubmit={handleSubmit} categories={categories}/>
        </>
    )
}