import ImgPage from '@/components/page-img/index';
import AccommodationTickets from '@/components/search/hotel/AccommodationTickets';

export default function Accommodation() {
  return (
   <div>
    <ImgPage imgSrc={'/img/village.webp'} imgAlt={'village rent'}/>
    <AccommodationTickets/>
   </div>
  );
}
