'use client';
import { useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DateSearch from './dateTwoWay';
import { Ticket } from './Ticket';

interface SearchForPassProps {
    ticketList: Ticket[];
}
function SearchForPass({ticketList}: SearchForPassProps) {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [tickets, setTickets] = useState<Ticket[]>([]);

    const handleSearch = async () => {
        // Filter the ticketList based on user inputs for origin, destination, and date
        const filteredTickets = ticketList.filter(ticket =>
          ticket.origin.toLowerCase() === origin.toLowerCase() &&
          ticket.destination.toLowerCase() === destination.toLowerCase()
        );
    
        // Set the filtered tickets in state to display the results
        setTickets(filteredTickets);
      };
    return (<div className="w-[80%] mx-auto text-center max-md:w-[100%]">
        <input type="search" className="border p-3 w-48 border-zinc-300 rounded-lg md:rounded-l-none max-md:w-[99%]
       max-md:rounded-b-none max-md:mt-2" placeholder="مبدا(شهر)"  value={origin}
       onChange={(e) => setOrigin(e.target.value)} />
        <button className='p-1 px-[6px] bg-white rounded-full border border-zinc-300 absolute md:right-[432px] md:bottom-[244px]
         text-zinc-600 max-md:right-32 max-md:top-[135px]'>
            <SyncAltIcon className='w-5 h-5' /></button>
        <input type="search" className="border max-md:w-[99%] p-3 w-48 border-zinc-300 rounded-lg rounded-r-none md:ml-2
        max-md:rounded-t-none" placeholder="مقصد(شهر)"   value={destination}
        onChange={(e) => setDestination(e.target.value)}/>
        <DateSearch />
        <label className="absolute left-[500px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white max-md:hidden px-1" htmlFor="passenger">مسافران</label>
        <select name="passenger" id="passenger" className="border p-3 border-zinc-300 rounded-lg md:mx-2 max-md:w-[98%]
        max-md:mb-4">
            <option value="adult">بزرگسال</option>
            <option value="kid">کودک</option>
            <option value="child">نوزاد</option>
        </select>
        <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600
        max-md:w-[98%]"  onClick={handleSearch}>جستجو</button>

<div className="mt-5">
        {tickets.length > 0 ? (
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id}>
                {ticket.origin} to {ticket.destination} on {ticket.date} - {ticket.price} تومان
              </li>
            ))}
          </ul>
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </div>);
}

export default SearchForPass;