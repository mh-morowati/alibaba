import Image from "next/image";
import Link from "next/link";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LuggageIcon from '@mui/icons-material/Luggage';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ButtonsOnclick from './buttons/index';


function Header() {
    return (<div className="overflow-hidden">
        
        <nav className="bg-white py-2 px-14 border-b flex h-[64px] text-[#5e6368] max-md:hidden">
            <div className="basis-1/6">
                <Link href={'/'}><Image src={"/img/alibaba-logo.svg"} alt={"alibaba-logo"} width={140} height={40} /></Link>
            </div>
            <div className="flex basis-3/6">
            <ButtonsOnclick/>
            </div>
            <div className="basis-2/6 flex">
                <p className="py-[10px]"><HelpOutlineIcon/>مرکز پشتیبانی آنلاین</p>
                <p className="py-[10px] mr-7"><LuggageIcon/>سفرهای من</p>
                <button className="py-[1px] px-6"><PersonOutlineIcon/><span>ورود یا ثبت‌نام</span></button>

            </div>
        </nav>

    </div>);
}

export default Header;