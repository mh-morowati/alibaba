import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LuggageIcon from '@mui/icons-material/Luggage';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function UserAccount() {
    return ( <div className="">
        <div className="h-[450px] w-72 border bg-white border-zinc-400 rounded-md my-11 md:mx-44 text-zinc-700 p-5 max-md:mx-auto">
            <h1 className='border-b border-zinc-300 py-4'><AccountCircleIcon/>حساب کاربری</h1>
            <h1 className='border-b border-zinc-300 py-4'><LuggageIcon/>سفرهای من</h1>
            <h1 className='border-b border-zinc-300 py-4'><GroupIcon/>لیست مسافران</h1>
            <h1 className='border-b border-zinc-300 py-4'><StarIcon/>علاقه مندی ها</h1>
            <h1 className='border-b border-zinc-300 py-4'><HeadsetMicIcon/>درخواست پشتیبانی</h1>
            <h1 className='py-4'><AttachMoneyIcon/>موجودی واعتبارمن</h1>
        </div>
    </div> );
}

export default UserAccount;