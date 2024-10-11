

function TourSearch() {
    return ( <div className="w-[80%] mx-auto text-center">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-l-none" placeholder="مبدا(شهر)"/>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-r-none ml-2" placeholder="مقصد(شهر)"/>
        <label className="absolute left-[820px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1" htmlFor="date1">تاریخ رفت</label>
        <input type="date" name="date1" id="date1" className="border p-3 border-zinc-300 rounded-lg rounded-l-none" />
        <label className="absolute left-[650px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1" htmlFor="date2">تاریخ برگشت</label>
        <input type="date" name="date2" id="date2" className="border p-3 border-zinc-300 rounded-lg rounded-r-none"/>
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg mx-2">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600">جستجو</button>
    </div> );
}

export default TourSearch;