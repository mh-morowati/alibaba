import ImgPage from '@/components/page-img/index';
import HotelSearch from '@/components/search/hotel/index';

export default function Accommodation() {
  return (
   <div>
    <ImgPage imgSrc={'/img/village.webp'} imgAlt={'village rent'}/>
    <HotelSearch/>
   </div>
  );
}
