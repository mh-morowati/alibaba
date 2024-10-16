'use client';
import { useState } from 'react';

interface Tours{
    id: number;
    destination: string;
    name: string;
    price: number;
    imgSrc:string;
    origin:string
};

const toursList: Tours[] = [
    { id: 1,  destination: 'مشهد', origin: '' ,price: 500000, name:'', imgSrc: ''},
    { id: 2,  destination: 'شیراز',origin: '' ,price: 350000, name:'', imgSrc: ''},
    { id: 3,  destination: 'شیراز',origin: '' ,price: 450000, name:'', imgSrc: ''},
    { id: 4,  destination: 'همدان',origin: '' ,price: 250000, name:'', imgSrc: ''},
  ];

function TourSearch() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [tours, setRooms] = useState<Tours[]>([]);

    const handleSearch = async () => {
        // Filter the ticketList based on user inputs for origin, destination, and date
        const filteredTickets = toursList.filter(tour =>
            tour.origin.toLowerCase() === origin.toLowerCase() &&
            tour.destination.toLowerCase() === destination.toLowerCase()
        );
    
        // Set the filtered tickets in state to display the results
        setRooms(filteredTickets);
      };
    return ( <div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-l-none 
        max-md:w-[99%] max-md:rounded-b-none max-md:mt-5" value={origin}
        onChange={(e) => setOrigin(e.target.value)} placeholder="مبدا(شهر)"/>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-r-none md:ml-2
        max-md:w-[99%] max-md:rounded-t-none" value={destination}
        onChange={(e) => setDestination(e.target.value)} placeholder="مقصد(شهر)"/>
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
         max-md:w-[99%] max-md:mt-5" onClick={handleSearch}>جستجوی تور</button>

<div className="mt-5">
        {tours.length > 0 ? (
          <ul>
            {tours.map(tour => (
              <li key={tour.id}>
                 {tour.destination} - {tour.price} تومان {tour.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No rooms found</p>
        )}
      </div>
    </div> );
}

export default TourSearch;