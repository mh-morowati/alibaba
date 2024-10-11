import ImgPage from '@/components/page-img/index';
import HotelSearch from '@/components/search/hotel/index';

export default function Hotel() {
  return (
   <div>
    <ImgPage imgSrc={'/img/hotel.webp'} imgAlt={'hotel'}/>
    <HotelSearch/>
   </div>
  );
}
