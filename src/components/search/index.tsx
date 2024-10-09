

function SearchForPass() {
    return (<div className="w-[80%] mx-auto text-center">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-l-none"/>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-r-none" />
        <input type="date" name="" id="" className="border p-3 border-zinc-300 rounded-lg rounded-l-none" />
        <input type="date" name="" id="" className="border p-3 border-zinc-300 rounded-lg rounded-r-none" />
        <label className="relative right-[52px] bottom-7 text-[10px] text-zinc-500 z-50 bg-white px-1" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600">جستجو</button>
    </div>);
}

export default SearchForPass;