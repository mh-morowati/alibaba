import ImgPage from '@/components/page-img/index';
import TourSearch from '@/components/search/tuor/index';

export default function Tour() {
  return (
   <div>
    <ImgPage imgSrc={'/img/travel-tur.webp'} imgAlt={'travel-tur'}/>
    <TourSearch/>
   </div>
  );
}
