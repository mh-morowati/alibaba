

function TourSearch() {
    return ( <div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-l-none 
        max-md:w-[99%] max-md:rounded-b-none max-md:mt-5" placeholder="مبدا(شهر)"/>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-r-none md:ml-2
        max-md:w-[99%] max-md:rounded-t-none" placeholder="مقصد(شهر)"/>
        <label className="absolute left-[820px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1
        max-md:hidden" htmlFor="date1">تاریخ رفت</label>
        <input type="date" name="date1" id="date1" className="border p-3 border-zinc-300 rounded-lg rounded-l-none
        max-md:w-[50%] max-md:my-4" />
        <label className="absolute left-[650px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 
        max-md:hidden" htmlFor="date2">تاریخ برگشت</label>
        <input type="date" name="date2" id="date2" className="border p-3 border-zinc-300 rounded-lg rounded-r-none
        max-md:w-[50%] max-md:my-4"/>
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1
        max-md:hidden" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg md:mx-2
         max-md:w-[99%]  max-md:mt-5">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600
         max-md:w-[99%] max-md:mt-5">جستجوی تور</button>
    </div> );
}

export default TourSearch;