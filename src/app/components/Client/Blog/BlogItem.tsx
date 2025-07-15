import Link from "next/link";

export const BlogItem = (props: { post: any; isDetail: boolean }) => {
  const { post, isDetail } = props;

  if (isDetail) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-snug">
          {post.title}
        </h1>
        <div className="w-full h-[400px] mb-6 rounded overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded shadow"
          />
        </div>
        <div className="text-gray-800 leading-relaxed whitespace-pre-line text-[17px]">
          {post.description}
        </div>
      </div>
    );
  }

  return (
    <Link href={`/Client/Blog/${post.id}`}>
      <div className="mb-[35px] flex flex-col sm:flex-row gap-4 sm:gap-[20px] cursor-pointer group relative">
        {/* Ảnh bài viết */}
        <div className="sm:w-[300px] w-full aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Ngày tháng */}
        <div className="absolute top-[10px] left-[-7px] border-2 px-[9px] border-[#c0c95c] group-hover:bg-[#c0c95c] bg-white">
          <span className="text-[20px] font-[700] text-[#c0c95c] group-hover:text-white">07</span>
          <br />
          <span className="text-[#c0c95c] font-[500] group-hover:text-white">Th5</span>
        </div>

        {/* Nội dung */}
        <div className="flex-1">
          <h4 className="font-[600] text-[18px] sm:text-[20px] mb-[10px]">
            {post.title}
          </h4>
          <div className="h-[2px] bg-[#ddd] w-[10px] mb-[10px]"></div>
          <p className="line-clamp-2 text-sm sm:text-base group-hover:text-[#c4123f]">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
