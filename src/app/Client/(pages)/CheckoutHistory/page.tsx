import { CheckoutHistory } from "@/app/components/Client/Checkout/CheckoutHistory";
import { Title } from "@/app/components/Client/Title/Title";

export default function CheckoutHistoryPage(){
    return(
        <>
        <div className="mt-[30px]">
            <Title title="Lịch sử mua hàng"/>
        </div>
        <div>
            <CheckoutHistory/>
        </div>
        </>
    )
}