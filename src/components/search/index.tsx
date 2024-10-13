import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DateSearch from './dateTwoWay';


function SearchForPass() {
    return (<div className="w-[80%] mx-auto text-center">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-l-none" placeholder="مبدا(شهر)" />
        <button className='p-1 px-[6px] bg-white rounded-full border border-zinc-300 absolute right-[432px] bottom-[244px] text-zinc-600'>
            <SyncAltIcon className='w-5 h-5' /></button>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg rounded-r-none ml-2" placeholder="مقصد(شهر)" />
        <DateSearch />
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg mx-2">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600">جستجو</button>
    </div>);
}

export default SearchForPass;