'use client';


interface Menues{
  menuList: string[];
}
function OnClick(props:Menues) {

  return (
        <ul>
          {props.menuList.map((menu) => (
            <li key={menu} className="py-2 px-4 hover:bg-gray-200">
              {menu}
            </li>
          ))}
        </ul>
      )}

export default OnClick;