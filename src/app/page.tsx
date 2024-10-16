import ImgPage from '@/components/page-img/index';
import ResponsiveHeader from '@/components/responsive/header/index';
import AirPlaneTicket from '@/components/search/plane-in/index';

export default function Home() {
  return (
    <>
    <div className="md:hidden bg-yellow-500 h-44">
    <ResponsiveHeader/>
    </div>
    <div className='max-md:hidden'>
    <ImgPage imgSrc={'/img/air-countries.webp'} imgAlt={'airPlane in iran'}/>
    <AirPlaneTicket/>
   </div>
   </>
  );
}
