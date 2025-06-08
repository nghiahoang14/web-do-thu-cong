import { More } from "../More/More"
import { Title } from "../Title/Title"
import { Category } from "./Category"

export const CategoryList = ()=>{
   
    return (
        <>
        <div className="">
            <Title title="Danh mục"/>
            <div className="grid grid-cols-5  gap-x-[25px] gap-y-[20px] mt-[15px]">
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
            <More href="/Category"/>
        </div>
        </>
    )
}