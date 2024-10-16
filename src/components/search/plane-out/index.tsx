import SearchForPass from '@/components/search';
import { Ticket } from '../Ticket';


function AirPlaneForeignTicket() {
    const ticketList: Ticket[] = [
        { id: 1, origin: 'تهران', destination: 'استانبول', date: '2024-10-16', price: 5000000 },
        { id: 2, origin: 'تهران', destination: 'دبی', date: '2024-10-16', price: 8500000 },
        { id: 3, origin: 'تهران', destination: 'تورنتو', date: '2024-10-17', price: 11500000 },
        { id: 4, origin: 'تهران', destination: 'فرانکفورت', date: '2024-10-15', price: 9000000 },
        { id: 4, origin: 'تهران', destination: 'پاریس', date: '2024-10-15', price: 8500000 },
        { id: 4, origin: 'تهران', destination: 'رم', date: '2024-10-15', price: 8500000 },

      ];
    return ( <><SearchForPass ticketList={ticketList}/></> );
}

export default AirPlaneForeignTicket;