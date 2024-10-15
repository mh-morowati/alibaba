import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DateSearch from './dateTwoWay';


function SearchForPass() {
    return (<div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-l-none max-md:w-[99%]
       max-md:rounded-b-none max-md:mt-2" placeholder="مبدا(شهر)" />
        <button className='p-1 px-[6px] bg-white rounded-full border border-zinc-300 absolute md:right-[432px] md:bottom-[244px]
         text-zinc-600 max-md:right-32 max-md:top-[135px]'>
            <SyncAltIcon className='w-5 h-5' /></button>
        <input type="search" className="border max-md:w-[99%] p-3 w-48 border-zinc-300 rounded-lg rounded-r-none md:ml-2
        max-md:rounded-t-none" placeholder="مقصد(شهر)" />
        <DateSearch />
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white max-md:hidden px-1" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg md:mx-2 max-md:w-[98%]
        max-md:mb-4">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600
        max-md:w-[98%]">جستجو</button>
    </div>);
}

export default SearchForPass;