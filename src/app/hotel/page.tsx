import ImgPage from '@/components/page-img/index';
import AccommodationTickets from '@/components/search/hotel/AccommodationTickets';

export default function Hotel() {
  return (
   <div>
    <ImgPage imgSrc={'/img/hotel.webp'} imgAlt={'hotel'}/>
    <AccommodationTickets/>
   </div>
  );
}
