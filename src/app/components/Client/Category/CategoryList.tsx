import { More } from "../More/More";
import { Title } from "../Title/Title";
import { Category } from "./Category";

export const CategoryList = ({
  limit,
  categories,
}: {
  limit?: number;
  categories: any[];
}) => {
  const displayedCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <div className="my-[40px] sm:px-6 md:px-8 lg:px-0">
      <Title title="Danh mục" />
      <div className="grid 
          grid-cols-2 
          sm:grid-cols-3 px-2 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-x-4 gap-y-5 
          mt-[15px]">
        {displayedCategories.map((item, index) => (
          <Category key={index} item={item} />
        ))}
      </div>
      {categories.length > (limit || 0) && (
        <More href="/Client/Product" title="Xem thêm" />
      )}
    </div>
  );
};
