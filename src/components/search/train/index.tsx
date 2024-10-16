import SearchForPass from '@/components/search';
import { Ticket } from '../Ticket';


function TrainTicket() {
    const ticketList: Ticket[] = [
        { id: 1, origin: 'تهران', destination: 'مشهد', date: '2024-10-16', price: 500000 },
        { id: 2, origin: 'اصفهان', destination: 'تهران', date: '2024-10-16', price: 350000 },
        { id: 3, origin: 'یزد', destination: 'مشهد', date: '2024-10-17', price: 450000 },
        { id: 4, origin: 'کیش', destination: 'تهران', date: '2024-10-15', price: 250000 },
        { id: 4, origin: 'تهران', destination: 'تبریز', date: '2024-10-15', price: 250000 },
      ];
    return ( <>
    <SearchForPass ticketList={ticketList}/>
    </> );
}

export default TrainTicket;