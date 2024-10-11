import ImgPage from '@/components/page-img/index';
import SearchForPass from '@/components/search/index';

export default function Home() {
  return (
   <div>
    <ImgPage imgSrc={'/img/air-countries.webp'} imgAlt={'airPlane in iran'}/>
    <SearchForPass/>
   </div>
  );
}
