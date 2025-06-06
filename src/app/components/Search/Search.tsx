export const Search = ()=>{
    return (
        <>
        <form className="bg-white  w-[75%]  mx-auto py-[15px] my-[30px] flex items-center relative" >
           
           <input type="text" name="keyword" placeholder="Tìm kiếm..." className="flex-1 rounded-[50px] font-[600] text-[16px]  px-[16px] py-[10px] border border-black bg-transparent flex-1 text-black" ></input>
           <button type="submit" className="text-white text-[22px] absolute right-[15px] cursor-pointer ">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" className="text-gray-400"           
                height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                
           </button>
        </form>
        </>
    )
}