"use client"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OnClick from '../../onclick/index';
import { useState } from "react";
import Link from 'next/link';


function ButtonsOnclick() {
    const [showMenuTicket, setShowMenuTicket] = useState(false);
    const [showMenuStay, setShowMenuStay] = useState(false);
    const [showMenuMore, setShowMenuMore] = useState(false);

    const handleClickTicket = () => {
        setShowMenuTicket((prev) => !prev);
        setShowMenuStay(false);
        setShowMenuMore(false);
    };
    const handleClickStay = () => {
        setShowMenuStay((prev) => !prev);
        setShowMenuTicket(false);
        setShowMenuMore(false);
    };
    const handleClickMore = () => {
        setShowMenuMore((prev) => !prev);
        setShowMenuTicket(false);
        setShowMenuStay(false);
    };
    const closeMenuList = () => {
        setShowMenuTicket(false);
        setShowMenuStay(false);
        setShowMenuMore(false);
    }
    return (<>
        <button className="py-[1px] px-6 border-l" onClick={handleClickTicket}>بلیط <ExpandMoreIcon /></button>
        {showMenuTicket && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12" onClick={closeMenuList}>
            <OnClick menuList={[{ name: 'پروازداخلی', link: '/' }, { name: "پروازخارجی", link: '/iranout' }, { name: "قطار", link: '/train-ticket' }, { name: 'اتوبوس', link: '/bus-ticket' }]} />
        </div>}
        <button className="py-[1px] px-6 border-l" onClick={handleClickStay}>اقامت <ExpandMoreIcon /></button>
        {showMenuStay && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12 right-[430px]" onClick={closeMenuList}>
            <OnClick menuList={[{ name: 'هتل', link: '/hotel' }, { name: 'ویلا', link: '/accommodation' }]} />
        </div>}
        <Link href={'/tour'}>
            <button className="py-3 px-6 border-l">تور</button>
        </Link>
        <Link href={'/visa'}>
            <button className="py-3 px-6 border-l">ویزا</button>
        </Link>
        <button className="py-[1px] px-6" onClick={handleClickMore}>بیشتر <ExpandMoreIcon /></button>
        {showMenuMore && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12 right-[670px]" onClick={closeMenuList}>
            <OnClick menuList={[{ name: 'علی باباپلاس', link: '' }, { name: 'مجله علی بابا', link: '' }, { name: 'بیمه مسافرتی', link: '' }]} />
        </div>}

    </>);
}

export default ButtonsOnclick;