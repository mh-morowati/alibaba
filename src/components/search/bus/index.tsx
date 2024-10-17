'use client';
import { useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Ticket } from '../Ticket';

// Sample ticket data (you can replace this with actual data or an API call)
const ticketList: Ticket[] = [
  { id: 1, origin: 'تهران', destination: 'مشهد', date: '2024-10-16', price: 500000 },
  { id: 2, origin: 'اصفهان', destination: 'شیراز', date: '2024-10-16', price: 350000 },
  { id: 3, origin: 'تهران', destination: 'شیراز', date: '2024-10-17', price: 450000 },
  { id: 4, origin: 'تهران', destination: 'همدان', date: '2024-10-15', price: 250000 },
];

function BusTicketSearch() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [tickets, setTickets] = useState<Ticket[]>([]); // Use Ticket[] to define an array of Ticket

  const handleSearch = () => {
    // Filter the ticketList based on user inputs for origin, destination, and date
    const filteredTickets = ticketList.filter(ticket =>
      ticket.origin === origin &&
      ticket.destination === destination
    );

    // Set the filtered tickets in state to display the results
    setTickets(filteredTickets);
  };
  const onclick = () =>{
    setDestination(origin);
    setOrigin(destination);
  }

  return (
    <div className="w-[83%] mx-auto text-center max-md:w-[100%]">
      <input
        type="search"
        className="border p-3 w-[300px] border-zinc-300 rounded-lg md:rounded-l-none max-md:w-[94%] max-md:rounded-b-none max-md:mt-9"
        placeholder="مبدا(شهر)"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <button className="p-1 px-[6px] bg-white rounded-full border border-zinc-300 absolute md:right-[453px] md:bottom-[244px]
       text-zinc-600 max-md:right-32 max-md:top-[70px]" onClick={onclick}>
        <SyncAltIcon className="w-5 h-5"  />
      </button>
      <input
        type="search"
        className="border p-3 w-[300px] border-zinc-300 rounded-lg md:rounded-r-none max-md:w-[94%] max-md:rounded-t-none md:ml-2"
        placeholder="مقصد(شهر)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <label
        className="absolute left-[620px] bottom-[279px] text-[10px] text-zinc-500 z-50 bg-white px-1 max-md:hidden"
        htmlFor="dateBus"
      >
        تاریخ حرکت
      </label>
      <input
        type="date"
        name="dateBus"
        id="dateBus"
        className="border w-80 p-3 border-zinc-300 rounded-lg md:ml-2 max-md:w-[94%] max-md:my-5"
        value={date}
        onChange={(e) => setDate(e.target.value.toString())}
      />
      <button
        onClick={handleSearch}
        className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600 max-md:w-[94%]"
      >
        جستجوی اتوبوس
      </button>

      {/* Display search results */}
      <div className="mt-5">
        {tickets.length > 0 ? (
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id} className='border border-zinc-300 w-[480px] mx-auto p-2 py-4'>
                {ticket.origin}  ___________________  {ticket.destination} &nbsp;&nbsp; {ticket.price} تومان <button className='bg-blue-600
                p-2 rounded-md text-white hover:bg-blue-700'>انتخاب</button></li>
            ))}
          </ul>
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </div>
  );
}

export default BusTicketSearch;

