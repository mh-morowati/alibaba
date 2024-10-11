import ImgPage from '@/components/page-img/index';
import SearchForPass from '@/components/search/index';


export default function IranOut() {
  return (
   <div>
    <ImgPage imgSrc={'/img/air-foreing.webp'} imgAlt={'airPlane foreing'}/>
    <SearchForPass/>
   </div>
  );
}
