"use client";
import { CreateProduct } from "@/app/components/Admin/Products/CreateProduct"
import { createProduct } from "@/services/api/admin/products.api";
export default function CreateProductPage(){
     const handleSubmit = async (data: any) => {
    try {
      await createProduct(data); 
      alert("Tạo sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
      alert("Tạo sản phẩm thất bại.");
    }
  };
    return(
        <>
   <CreateProduct onSubmit={handleSubmit}/>
        </>
    )
}