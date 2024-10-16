import ImgPage from '@/components/page-img/index';
import HotelTickets from '@/components/search/hotel/HotelTickets';

export default function Hotel() {
  return (
   <div>
    <ImgPage imgSrc={'/img/hotel.webp'} imgAlt={'hotel'}/>
    <HotelTickets/>
   </div>
  );
}
