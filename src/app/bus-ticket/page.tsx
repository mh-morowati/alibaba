import ImgPage from '@/components/page-img/index';
import BusTicketSearch from '@/components/search/bus/index';

export default function Bus() {
  return (
   <div>
    <ImgPage imgSrc={'/img/bus.webp'} imgAlt={'bus ticket'}/>
    <BusTicketSearch/>
   </div>
  );
}
