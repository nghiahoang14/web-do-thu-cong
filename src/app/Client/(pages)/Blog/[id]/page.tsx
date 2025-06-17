"use client"
import { Blog, posts } from "@/app/components/Client/Blog/Blog";
import { BlogItem } from "@/app/components/Client/Blog/BlogItem";
import { BlogItemNew } from "@/app/components/Client/Blog/BlogItemNew";
import { useParams } from "next/navigation"

 const BlogDetail = ()=>{
    const params = useParams();
    const id=Number(params.id);
    const post =posts.find((item)=>item.id===id);

    return(
        <>
        <div className="flex  gap-[35px]">
            <BlogItem post={post} isDetail/>
            <div className="">
                <h3 className="font-[600] text-[20px] mb-[25px]">Bài viết mới nhất</h3>
                {posts.slice(0,2).map((post)=>(
                    <BlogItemNew key={post.id} post={post}/>
                ))}
               
               
            </div>
        </div>
        </>
    )
}
export default BlogDetail;