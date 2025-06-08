export const Category =()=>{
    return (
        <>
        <div className="border shadow-lg pb-[10px] border-[#f6f6f6] cursor-pointer group rounded-[5px]  overflow-hidden">
            <div className="h-[193px] truncate aspect-ratio ">
                <img src="/demo/img-10.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3  className="text-center text-[18px] font-[500] my-[12px] line-clamp-1">tạp hóa đồ dùng may vá</h3>
            <p className="text-center group-hover:text-[#c4123f]">1 sản phẩm</p>
        </div>
        </>
    )
}