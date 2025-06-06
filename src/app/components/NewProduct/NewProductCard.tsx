import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export const NewProductCard = (props:{item: any})=>{
    const {item}=props;
    return(
        <>
        <div className="px-[10px] py-[10px] border border-[#ccc]">   
         <div className="w-[280px] h-[250px] truncate aspect-ratio ">
            <img src={item.image} alt=""  className="w-full h-full object-cover"/>
         </div>
         <h4 className="font-[600] text-[18px] mx-[10px] my-[10px]">{item.title}</h4>
         <p className="">{item.price}đ</p>
         <div className="ml-[-2px] my-[10px]">
            <StarIcon  className="text-yellow-400"/>
            <StarIcon  className="text-yellow-400"/>
            <StarIcon  className="text-yellow-400"/>
            <StarIcon  className="text-yellow-400"/>
            <StarIcon  className="text-yellow-400"/>

         </div>
         <p>Đã bán {item.stock}</p>
         <div className='my-[10px] flex items-center h-[35px]'>
            <div className="w-[30%] h-full flex items-center justify-center bg-[#eeedeb]">
              <AddShoppingCartIcon/>
            </div>
            <div className="w-[70%] h-full flex items-center justify-center bg-[#000000] text-white">
              <p>Buy now</p>
            </div>
         </div>
        </div>
        </>
    )
}