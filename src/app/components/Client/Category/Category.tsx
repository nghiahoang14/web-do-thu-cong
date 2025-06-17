export const Category =(props:{item:any})=>{
    const {item}=props;
    return (
        <>
        <div className="border shadow-lg pb-[10px] border-[#f6f6f6] cursor-pointer group rounded-[5px]  overflow-hidden">
            <div className="h-[193px] truncate aspect-ratio ">
                <img src={item.image} alt="" className="w-full h-full object-cover"/>
            </div>
            <h3  className="text-center text-[18px] font-[500] my-[12px] line-clamp-1">{item.name}</h3>
            <p className="text-center group-hover:text-[#c4123f] line-clamp-2">{item.description}</p>
        </div>
        </>
    )
}