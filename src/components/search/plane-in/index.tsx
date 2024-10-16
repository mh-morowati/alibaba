import SearchForPass from '@/components/search';
import { Ticket } from '../Ticket';


function AirPlaneTicket() {
    const ticketList: Ticket[] = [
        { id: 1, origin: 'تهران', destination: 'مشهد', date: '2024-10-16', price: 2500000 },
        { id: 2, origin: 'اصفهان', destination: 'اهواز', date: '2024-10-16', price: 1500000 },
        { id: 3, origin: 'تهران', destination: 'شیراز', date: '2024-10-17', price: 1800000 },
        { id: 4, origin: 'تهران', destination: 'کیش', date: '2024-10-15', price: 2900000 },
      ];
    return ( <><SearchForPass ticketList={ticketList}/></> );
}

export default AirPlaneTicket;