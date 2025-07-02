"use client"
import { UpdateUser } from "@/app/components/Admin/User/UpdateUser";
import { getuserById, updateUser } from "@/services/api/admin/user.api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateUserPage(){
     const param = useParams();
        const id=param.id;
          const router = useRouter();
     
       const [User, setUser] = useState<any>(null);
       
        useEffect(() => {
        const fetchUser = async () => {
          try {
             const res = await getuserById(id as string);
            setUser(res.data);
           console.log(res)
          } catch (error) {
            console.error( error);
            alert("Không tìm thấy người dùng");
            router.push("/Admin/User");
          } 
        };
     
        if (id) {
          fetchUser();
        }
      }, [id]);
         const handleSubmit = async (data: any) => {
        try {
          await updateUser(id as string,data); 
          alert("Sửa người dùng thành công!");
          router.push("/Admin/User");
        } catch (error:any) {
          console.error( error);
          alert("Sửa người dùng thất bại.");
         
        }
      };
    return(
        <>
        {User && (
        <UpdateUser UserData={User} onSubmit={handleSubmit} />
      )}
        </>
    )
}