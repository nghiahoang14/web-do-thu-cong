import Link from "next/link";

export const Category =(props:{item:any})=>{
    const {item}=props;
    return (
        <>
        <Link href={`/Client/Category/${item._id}`}>
            <div className="border shadow-lg pb-[10px] border-[#f6f6f6] cursor-pointer group rounded-[5px]  overflow-hidden">
                <div className="h-[160px] sm:h-[180px] md:h-[193px] overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover"/>
                </div>
                <h3  className="text-center text-[18px] font-[500] my-[12px] sm:text-[17px] md:text-[18px]  line-clamp-1">{item.name}</h3>
                <p className="text-center group-hover:text-[#c4123f] line-clamp-2 sm:text-[15px] min-h-[50px]" >{item.description}</p>
            </div>
        </Link >
        </>
    )
}