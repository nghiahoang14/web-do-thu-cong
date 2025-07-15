import { ProductDetail } from "@/app/components/Client/Products/ProductDetail";
import { getProductById } from "@/services/api/client/product.api";

export default async function ProductDetailPage(
props: { params: { id: string } }
) {
  const { id } =  props.params;
  let data: any = null;

  try {
    const product = await getProductById(id);
    data = product.data;
  } catch (err: any) {
    console.error("Lỗi khi fetch chi tiết sản phẩm:", err);
  }

  return (
    <>
      <ProductDetail product={data} />
    </>
  );
}
