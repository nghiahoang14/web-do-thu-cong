export const BlogItemNew = (props:{post:any})=>{
    const {post}=props;
    return(
        <>
           <div className="flex gap-[20px] cursor-pointer mb-[20px] group">
                <div className="w-[150px] h-[50px] truncate aspect-ratio">
                  <img src={post.image} alt=""  className="w-full h-full object-contain"/>
              </div>
               <h4 className=" text-[16px] font-[400] group-hover:text-[#c4123f]">
             {post.title}
            </h4>
            
        </div>
        </>
    )
}