import HotelSearch from '@/components/search/hotel/index';
import { HotelTicket } from '../HotelTicket';


function HotelTickets() {
  const hotelList: HotelTicket[] = [
    { id: 1,  destination: 'تهران',  price: 6000000, name:'هتل اسپیناس بلوار تهران', imgSrc: '/img/hotel-pic/spinas.webp'},
    { id: 2,  destination: 'تهران', price: 5100000, name:'هتل پارسیان آزادی تهران', imgSrc: '/img/hotel-pic/azadi.webp'},
    { id: 3,  destination: 'تهران', price: 2900000, name:'هتل رامتین تهران', imgSrc: '/img/hotel-pic/ramtin.webp'},
    { id: 4,  destination: 'تهران', price: 4100000, name:'هتل پارسیان انقلاب تهران', imgSrc: '/img/hotel-pic/parsi-enghelab.webp'},
    { id: 5,  destination: 'مشهد', price: 3500000, name:'هتل گلدن پالاس (قصر طلایی) مشهد', imgSrc: '/img/hotel-pic/goldenplus.webp'},
    { id: 6,  destination: 'مشهد', price: 3000000, name:'هتل بین المللی قصر مشهد', imgSrc: '/img/hotel-pic/ghasr.webp'},
    { id: 7,  destination: 'همدان', price: 1500000, name:'هتل بین المللی امیران 2 همدان', imgSrc: '/img/hotel-pic/amiran.webp'},
  ];
  
    return ( <><HotelSearch roomlist={hotelList}/></> );
}

export default HotelTickets;