"use client";
import {  posts } from "@/app/components/Client/Blog/Blog";
import { BlogItem } from "@/app/components/Client/Blog/BlogItem";
import { BlogItemNew } from "@/app/components/Client/Blog/BlogItemNew";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const post = posts.find((item) => item.id === id);

  if (!post) return <div className="p-4">Không tìm thấy bài viết.</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 mt-6">
      {/* Nội dung chi tiết bài viết */}
      <div className="flex-1">
        <BlogItem post={post} isDetail />
      </div>

      {/* Bài viết mới nhất */}
      <div className="w-full lg:w-[300px]">
        <h3 className="font-semibold text-xl mb-4">Bài viết mới nhất</h3>
        {posts.slice(0, 2).map((post) => (
          <BlogItemNew key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
