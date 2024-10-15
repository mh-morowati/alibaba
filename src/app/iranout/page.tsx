import ImgPage from '@/components/page-img/index';
import SearchForPass from '@/components/search/index';
import Link from "next/link";


export default function IranOut() {
  return (
   <div>
    <div className='md:hidden'>
    <Link  href={'/domestic'}>
        <button className="w-[50%] p-2 border mt-3 rounded-lg mb-10 text-zinc-700 focus:bg-blue-500 focus:text-white">پروازداخلی</button>
        </Link>
        <Link  href={'/iranout'}>
        <button className="w-[50%] p-2 border mt-3 rounded-lg mb-10 text-zinc-700 focus:bg-blue-500 focus:text-white">پروازخارجی</button>
        </Link>
    </div>
    <ImgPage imgSrc={'/img/air-foreing.webp'} imgAlt={'airPlane foreing'}/>
    <SearchForPass/>
   </div>
  );
}
