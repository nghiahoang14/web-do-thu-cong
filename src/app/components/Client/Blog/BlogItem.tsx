import Link from "next/link";

export const BlogItem = (props:{post:any,isDetail:boolean}) => {
  const {post,isDetail}=props;
  
  if (isDetail) {
    // Giao diện khi ở trang chi tiết
    return (
     <div className="max-w-3xl mx-auto  px-4">
  {/* Tiêu đề */}
  <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-snug">
    {post.title}
  </h1>

  {/* Ảnh lớn */}
  <div className="w-full h-[400px] mb-6 rounded overflow-hidden">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover rounded shadow"
    />
  </div>

  {/* Nội dung mô tả */}
  <div className="text-gray-800 leading-relaxed whitespace-pre-line text-[17px]">
    {post.description}
  </div>
</div>

    
    );
  }
  return (
    <>
      
        <Link href={`/Client/Blog/${post.id}`}>
          <div className=" mb-[35px] flex items-center gap-[20px] cursor-pointer group relative border-right">
            <div className="">
                <div className="w-[300px] h-[162px] truncate aspect-ratio">
                    <img src={post.image} alt=""  className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className=" absolute top-[10px] left-[-7px] border border-[2px] px-[9px]  border-[#c0c95c]  group-hover:bg-[#c0c95c] bg-white">
                <span className="text-[20px] font-[700] text-[#c0c95c] group-hover:text-white">07</span>
                <br />
                <span className="text-[#c0c95c] font-[500] group-hover:text-white ">Th5</span>
            </div>
            <div  className="">
              <h4 className="font-[600] text-[20px] mb-[10px]">
               {post.title}
              </h4>
              <div className="h-[2px] bg-[#ddd] w-[10px] mb-[10px]"></div>
              <p className="line-clamp-2 group-hover:text-[#c4123f]">
               {post.description}
              </p>
            </div>
          </div>
        </Link >
      
     
         
      
    </>
  );
};
