import HotelSearch from '@/components/search/hotel/index';
import { HotelTicket } from '../HotelTicket';


function HotelTickets() {
    const hotelList: HotelTicket[] = [
        { id: 1,  destination: 'مشهد',  price: 500000, name:'', imgSrc: ''},
        { id: 2,  destination: 'شیراز', price: 350000, name:'', imgSrc: ''},
        { id: 3,  destination: 'شیراز', price: 450000, name:'', imgSrc: ''},
        { id: 4,  destination: 'همدان', price: 250000, name:'', imgSrc: ''},
      ];
    return ( <><HotelSearch roomlist={hotelList}/></> );
}

export default HotelTickets;