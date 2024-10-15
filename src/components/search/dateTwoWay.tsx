"use client"
import { useState } from "react";



function DateSearch() {
    const [buttonName, setButtonName] = useState('یک طرفه');
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    const onclick = () => {
        if (buttonName === 'یک طرفه') {
            setButtonName('رفت و برگشت');
        }
        else setButtonName('یک طرفه');

        setIsRoundTrip((prev) => !prev);
    };

    return (<>
        <button className="absolute md:bottom-[330px] text-zinc-700 border rounded-lg p-1 px-2 border-zinc-400 md:right-64
        max-md:top-14 focus:text-blue-500 max-md:w-[98%] max-md:right-1"
            onClick={onclick}>
            {buttonName}
        </button>
        <label className="absolute left-[820px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 max-md:hidden" htmlFor="date1">تاریخ رفت</label>
        <input type="date" name="date1" id="date1" className="border p-3 border-zinc-300 rounded-lg rounded-l-none
         text-zinc-700 max-md:w-[50%] max-md:my-4" />
        <label className="absolute left-[650px] bottom-[279px] text-[10px] text-zinc-500 z-50 max-md:hidden
         bg-white px-1" htmlFor="date2">تاریخ برگشت</label>
        <input disabled={isRoundTrip} type="date" name="date2" id="date2" className="border p-3 border-zinc-300 rounded-lg 
        rounded-r-none text-zinc-400 max-md:w-[50%] max-md:my-4" />
    </>);
}

export default DateSearch;