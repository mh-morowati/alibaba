import LinkMenu from '@/components/page-img/link-menu';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import SubwayIcon from '@mui/icons-material/Subway';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HikingIcon from '@mui/icons-material/Hiking';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LuggageIcon from '@mui/icons-material/Luggage';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ResponsiveHeader() {
    return (<div className='text-center'>
        <Image className='my-3 inline-block' src={'/img/alibaba-logo.svg'} alt={''} width={50} height={50} />
        <div className='w-[90%] h-48 border rounded-lg bg-white z-5555 mx-auto'>

            <div className='inline-block w-[150px] max-[320px]:w-32'>
                <div className='border border-zinc-300 rounded-tr-md p-1'><LinkMenu linkHref={'/domestic'} linkName={'پرواز'} icon={LanguageIcon} /></div>
                <div className='border border-zinc-300 p-1'><LinkMenu linkHref={'/bus-ticket'} linkName={'اتوبوس'} icon={DirectionsBusIcon} /></div>
                <div className='border border-zinc-300 rounded-br-md p-1'><LinkMenu linkHref={'/tour'} linkName={'تور'} icon={HikingIcon} /></div>
            </div>

            <div className='inline-block w-[150px] max-[320px]:w-32'>
                <div className='border border-zinc-300 rounded-tl-md p-1'><LinkMenu linkHref={'/train-ticket'} linkName={'قطار'} icon={SubwayIcon} /></div>
                <div className='border border-zinc-300 p-1'><LinkMenu linkHref={'/hotel'} linkName={'هتل'} icon={ApartmentIcon} /></div>
                <div className='border border-zinc-300 rounded-bl-md p-1'><LinkMenu linkHref={'/accommodation'} linkName={'ویلاواقامتگاه'} icon={HouseIcon} /></div>
            </div>

        </div>

        <div className="h-14 opacity-80 z-[6000000000] flex fixed bg-white bottom-[0px] w-full border-t border-zinc-400">
            <div className='basis-1/5'>
                <Link href={'/'}> <HomeIcon className='h-7 w-6' />
                    <p><small>خانه</small></p></Link>
            </div>
            <div className='basis-1/5'>
                <Link href={''}> <AddToPhotosIcon className='h-7 w-6' />
                    <p><small>پلاس</small></p></Link>
            </div>
            <div className='basis-1/5'>
                <Link href={'/'}> <LuggageIcon className='h-7 w-6' />
                    <p><small>سفرهای من</small></p></Link>
            </div>
            <div className='basis-1/5'>
                <Link href={'/'}> <NotificationsNoneIcon className='h-7 w-6' />
                    <p><small>اعلان ها</small></p></Link>
            </div>
            <div className='basis-1/5'>
                <Link href={''}>
                    <AccountCircleIcon className='h-7 w-6' />
                    <p><small>حساب کاربری</small></p></Link>
            </div>
        </div>
    </div>);
}

export default ResponsiveHeader;