'use client';
import { useState } from 'react';
import { HotelTicket } from '../HotelTicket';
import Image from 'next/image';

interface SearchForPassProps {
    roomlist: HotelTicket[];
}
function HotelSearch({roomlist}: SearchForPassProps) {
    const [destination, setDestination] = useState('');
    const [rooms, setRooms] = useState<HotelTicket[]>([]);

    const handleSearch =  () => {
        // Filter the ticketList based on user inputs for origin, destination, and date
        const filteredTickets = roomlist.filter(room =>
            room.destination === destination
        );
    
        // Set the filtered tickets in state to display the results
        setRooms(filteredTickets);
      };
    return ( <div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-96 border-zinc-300 rounded-lg ml-2
        max-md:w-[94%] max-md:mt-11" placeholder="مقصد(شهر)" value={destination}
        onChange={(e) => setDestination(e.target.value)}/>
        <label className="absolute left-[820px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 max-md:hidden" htmlFor="date1">تاریخ رفت</label>
        <input type="date" name="date1" id="date1" className="border p-3 border-zinc-300 rounded-lg rounded-l-none
         max-md:w-[47%] max-md:my-4" />
        <label className="absolute left-[650px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 max-md:hidden" htmlFor="date2">تاریخ برگشت</label>
        <input type="date" name="date2" id="date2" className="border p-3 border-zinc-300 rounded-lg rounded-r-none
         max-md:w-[47%] max-md:my-4"/>
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 max-md:hidden" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg 
        md:mx-2 max-md:w-[94%]  max-md:mt-2">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600
        max-md:w-[94%] max-md:mt-5" onClick={handleSearch}>جستجو</button>

<div className="mt-5">
        {rooms.length > 0 ? (
          <ul>
            {rooms.map(room => (
              <li key={room.id} className='w-[450px] mx-auto h-[180px] border border-zinc-400 p-2 max-md:w-[100%]'>
                   {room.price} تومان {room.name}  <Image className='inline-block mt-2' src={room.imgSrc} alt={room.name} width={170} height={150}/>
                  <button className='bg-blue-600 mr-2
                p-2 rounded-md text-white hover:bg-blue-700'>انتخاب</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rooms found</p>
        )}
      </div>
    </div> );
}

export default HotelSearch;