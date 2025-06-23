import { RootState } from '@/redux/store';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';

export const CheckoutConfirm = ()=>{
      const users = useSelector((state: RootState) => state.auth.user);
    return(
        <>
        <div className="flex items-center gap-[30px]">
           <div className="rounded-full border-2 border-green-400 p-3">
        <CheckIcon className="text-green-500 " fontSize='large' />
      </div>
      <div>
        <p className='text-[20px] font-[700]'>Cảm ơn bạn đã đặt hàng</p>
        <p>{`Một email xác nhận đã được gửi tới ${users?.email}.Xin vui lòng kiểm tra email của bạn`}</p>
      </div>
        </div>
        </>
    )
}