import ImgPage from '@/components/page-img/index';
import SearchForPass from '@/components/search/index';

export default function Train() {
  return (
   <div>
    <div className='md:hidden max-md:h-[72px] mt-5'>

    </div>
    <ImgPage imgSrc={'/img/train.webp'} imgAlt={'train ticket'}/>
    <SearchForPass/>
   </div>
  );
}
