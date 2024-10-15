import SyncAltIcon from '@mui/icons-material/SyncAlt';


function BusTicketSearch() {
    return (<div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-80 border-zinc-300 rounded-lg md:rounded-l-none max-md:w-[94%]
       max-md:rounded-b-none max-md:mt-9" placeholder="مبدا(شهر)" />
        <button className='p-1 px-[6px] bg-white rounded-full border border-zinc-300 absolute md:right-[487px] 
        md:bottom-[244px] text-zinc-600 max-md:right-32 max-md:top-[70px]'>
            <SyncAltIcon className='w-5 h-5' /></button>
        <input type="search" className="border p-3 w-80 border-zinc-300 rounded-lg md:rounded-r-none max-md:w-[94%]
       max-md:rounded-t-none md:ml-2" placeholder="مقصد(شهر)" />
        <label className="absolute left-[620px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1
        max-md:hidden" htmlFor="dateBus">تاریخ حرکت</label>
        <input type="date" name="dateBus" id="dateBus" className="border w-80 p-3 border-zinc-300 rounded-lg md:ml-2
        max-md:w-[94%] max-md:my-5" />
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600
        max-md:w-[94%]">جستجو</button>
    </div>);
}

export default BusTicketSearch;