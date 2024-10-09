import Image from 'next/image';
import LinkMenu from './link-menu';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LanguageIcon from '@mui/icons-material/Language';
import SubwayIcon from '@mui/icons-material/Subway';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HikingIcon from '@mui/icons-material/Hiking';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';

interface ImgProps {
    imgSrc: string;
    imgAlt: string;
}

function ImgPage(props: ImgProps) {
    return (<div>
        <Image className='mx-auto' src={props.imgSrc} alt={props.imgAlt} width={1390} height={150} />
        <nav className='relative mx-auto bottom-[80px] flex bg-white w-[70%] h-20 z-50 py-4 px-14'>
            <LinkMenu linkHref={'/'} linkName={'پروازداخلی'} icon={AirplanemodeActiveIcon}/>
            <LinkMenu linkHref={'/iranout'} linkName={'پروازخارجی'} icon={LanguageIcon}/>
            <LinkMenu linkHref={'/train-ticket'} linkName={'قطار'} icon={SubwayIcon}/>
            <LinkMenu linkHref={'/bus-ticket'} linkName={'اتوبوس'} icon={DirectionsBusIcon}/>
            <LinkMenu linkHref={'/tour'} linkName={'تور'} icon={HikingIcon}/>
            <LinkMenu linkHref={'/hotel'} linkName={'هتل'} icon={ApartmentIcon}/>
            <LinkMenu linkHref={'/accommodation'} linkName={'ویلاواقامتگاه'} icon={HouseIcon}/>
        </nav>
    </div>);
}

export default ImgPage;