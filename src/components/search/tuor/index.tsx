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
    { id: 1,  destination: 'تهران', origin: 'کیش' ,price: 7600000, name:'آپارتمان اقامتگاه شیرین دوخوابه برلین کیش', imgSrc: '/img/tour-img/111aaa.jfif'},
    { id: 2,  destination: 'تهران',origin: 'کیش' ,price: 7000000, name:'آپارتمان سه خوابه دنج 7 کیش', imgSrc: '/img/tour-img/222222bbbbb.jpg'},
    { id: 3,  destination: 'تهران',origin: 'کیش' ,price: 8000000, name:'آپارتمان دو خوابه بهرام ۱ کیش', imgSrc: '/img/tour-img/33333ccccc.jfif'},
    { id: 4,  destination: 'تهران',origin: 'دبی' ,price: 21000000, name:'City Seasons Towers', imgSrc: '/img/tour-img/Barsha.jpg'},
    { id: 5,  destination: 'تهران',origin: 'دبی' ,price: 24000000, name:'Rose Rayhaan by Rotana', imgSrc: '/img/tour-img/towers.jpg'},
    { id: 6,  destination: 'تهران',origin: 'دبی' ,price: 22000000, name:'Millennium Al Barsha', imgSrc: '/img/tour-img/towers.jpg'},
    
  ];

function TourSearch() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [tours, setRooms] = useState<Tours[]>([]);

    const handleSearch =  () => {
        // Filter the ticketList based on user inputs for origin, destination, and date
        const filteredTickets = toursList.filter(tour =>
            tour.origin === origin &&
            tour.destination === destination
        );
    
        // Set the filtered tickets in state to display the results
        setRooms(filteredTickets);
      };
    return ( <div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-l-none 
        max-md:w-[99%] max-md:rounded-b-none max-md:mt-5" value={destination}
         placeholder="مبدا(شهر)" onChange={(e) => setDestination(e.target.value)}/>
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-r-none md:ml-2
        max-md:w-[99%] max-md:rounded-t-none" value={origin}
         placeholder="مقصد(شهر)" onChange={(e) => setOrigin(e.target.value)}/>
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
          <p>No tour found</p>
        )}
      </div>
    </div> );
}

export default TourSearch;