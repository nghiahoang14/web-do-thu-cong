import { Title } from "@/app/components/Client/Title/Title";
import { getProducts } from "@/services/api/admin/products.api";
import { getCategories } from "@/services/api/admin/category.api";
import { CategoryDetail } from "@/app/components/Client/Category/CategoryDetail";

export default async function CategoryDetailPage(props: { params: { id: string } }) {
  
  const { id } = await props.params;

  let dataCate: any[] = [];
  let dataProduct: any[] = [];

  try {
    const productsRes = await getProducts();
    const categoriesRes = await getCategories();
    dataCate = categoriesRes.data;

    dataProduct = productsRes.data.filter((product: any) => {
      const cateId = typeof product.category === "string"
        ? product.category
        : product.category?._id;
      return cateId === id;
    });
  } catch (err: any) {
    console.error("Lỗi fetch danh mục hoặc sản phẩm:", err);
  }

  return (
    <div className="">
      <Title title="Sản phẩm" />
      <CategoryDetail
        products={dataProduct}
        categoryId={id}
        categories={dataCate}
      />
    </div>
  );
}
