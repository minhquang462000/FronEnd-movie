import * as React from "react";

export default function ListCardMain() {
  return (
    <ul className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
      <li className="w-full relative h-[250px] lg:h-[280px]  rounded-md overflow-hidden">
        <img
          className="w-full h-full hover:scale-125 hover:duration-300 translate duration-300 object-cover"
          src="https://hoathinh3d.io/wp-content/uploads/2024/02/IMG_0349-300x450.jpeg"
          alt=""
        />
        <span className="absolute bg-gradient-to-t from-black  w-full bottom-0 p-2 left-0">
          <span className="pt-10"></span>
          <p className="font-medium w-full truncate">Nhất Thế Chi Tôn </p>
          <p className="font-extralight text-[10px]">Tên tác giả </p>
        </span>
        <span className="absolute bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 text-[10px] font-semibold from-red-600 to-orange-500  w-max  p-1 top-0 left-0">
          Tập 46
        </span>
      </li>
    </ul>
  );
}
