"use client"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OnClick from '../../onclick/index';
import { useState } from "react";


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
    const closeCityList = () => {
        setShowCityList(false)
    }
    return (<>
        <button className="py-[1px] px-6 border-l" onClick={handleClickTicket}>بلیط <ExpandMoreIcon /></button>
        {showMenuTicket && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12">
            <OnClick menuList={['پروازداخلی',"پروازخارجی","قطار",'اتوبوس']} />
        </div>}
        <button className="py-[1px] px-6 border-l" onClick={handleClickStay}>اقامت <ExpandMoreIcon /></button>
        {showMenuStay && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12 right-[430px]">
            <OnClick menuList={['هتل','ویلا']} />
        </div>}
        <button className="py-[1px] px-6 border-l">تور</button>
        <button className="py-[1px] px-6 border-l">ویزا</button>
        <button className="py-[1px] px-6" onClick={handleClickMore}>بیشتر <ExpandMoreIcon /></button>
        {showMenuMore && <div className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-12 right-[670px]">
            <OnClick menuList={['علی باباپلاس','مجله علی بابا','بیمه مسافرتی']} />
        </div>}

    </>);
}

export default ButtonsOnclick;