import { BlogItem } from "./BlogItem";
import { BlogItemNew } from "./BlogItemNew";

export const posts = [
  {
    id: 1,
    title:
      "Khai trương tổ hợp Showroom – Workshop – Handmade Club đầu tiên tại Hà Nội – Điểm đến thú vị ngày cuối tuần",
    image: "/demo/blog-img-1.jpg",
    description: `...`,
  },
  {
    id: 2,
    title:
      "Tomato Handmade Store – Xuất hiện trên Tạp chí Diễn đàn Doanh Nghiệp Việt Nam ngày 11/12/2022",
    image: "/demo/blog-img-3.jpg",
    description: `...`,
  },
];

export const Blog = () => {
  return (
    <>
      <div className="mt-[50px] flex flex-col lg:flex-row gap-y-10 lg:gap-x-[50px] px-2">
        
        <div className="flex-1">
          {posts.map((post) => (
            <BlogItem key={post.id} post={post} isDetail={false} />
          ))}
        </div>

        
        <div className="w-full lg:w-[350px]">
          <h3 className="font-[600] text-[20px] mb-[25px]">Bài viết mới nhất</h3>
          {posts.slice(0, 2).map((post) => (
            <BlogItemNew key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};
