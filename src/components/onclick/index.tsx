'use client';

import Link from "next/link";

interface obj {
  name: string;
  link: string;
}
interface Menues {
  menuList: obj[];
}
function OnClick(props: Menues) {

  return (
    <ul>
      {props.menuList.map((menu) => (

        <li key={menu.name} className="py-2 px-4 hover:bg-gray-200">
          <Link href={menu.link}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default OnClick;