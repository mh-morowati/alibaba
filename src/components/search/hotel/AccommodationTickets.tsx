import HotelSearch from '@/components/search/hotel/index';
import { HotelTicket } from '../HotelTicket';


function AccommodationTickets() {
    const hotelList: HotelTicket[] = [
        { id: 1,  destination: 'رامسر',  price: 600000, name:'اجاره بوم گردی کوکه - کلبه وِشِم', imgSrc: '/img/village-img/coke.jpeg' },
        { id: 2,  destination: 'رامسر', price: 700000, name:'رزرو سوئیت فلت کلبه طلایی 2', imgSrc: '/img/village-img/flat.jfif' },
        { id: 3,  destination: 'رامسر', price: 900000, name:'مجتمع اقامتگاهی یک خوابه دلمون - واحد 3', imgSrc: '/img/village-img/delemon.jfif' },
        { id: 4,  destination: 'رامسر', price: 1500000, name:'رزرو کلبه دوخوابه سوئیسی تیرم', imgSrc: '/img/village-img/swiss.jpeg' },
      ];
    return ( <><HotelSearch roomlist={hotelList}/></> );
}

export default AccommodationTickets;