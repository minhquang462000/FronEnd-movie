import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ChangePage from "../ChangePage/ChangePage";

export default function ListFollow() {
  return (
    <main className="w-full">
      <div className="border-b-[1px] lg:px-2 flex justify-between items-center pb-1 -mb-[1.55px]  border-gray-800">
        <h1 className="text-ld font-bold bg-gradient-to-r   from-orange-500 to-red-600 bg-clip-text text-transparent">
         Tủ Phim Theo Dõi
        </h1>
        <p className="text-xs text-red-400 cursor-pointer hover:text-orange-400 font-light">
          Xoá tất cả phim theo dõi 
        </p>
      </div>
      <div className="h-[2px] w-[140px]   bg-gradient-to-r from-orange-500 to-red-600 "></div>
      <ul className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <li className="w-full group/item cursor-pointer relative h-[220px] lg:h-[250px] rounded-md overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 hover:duration-300 translate duration-300 object-cover"
            src="https://hoathinh3d.io/wp-content/uploads/2024/02/IMG_0349-300x450.jpeg"
            alt=""
          />
          <span className="absolute bg-gradient-to-t from-black  w-full bottom-0 p-2 left-0">
            <span className="pt-10"></span>
            <p className="font-medium text-lg w-full truncate">Nhất Thế Chi Tôn </p>
            <p className="font-thin ">Tên tác giả </p>
          </span>
          <span className="absolute bg-gradient-to-r mx-auto lg:m-0 text-sm lg:col-span-2 text-[10px] font-medium from-red-600 to-orange-500  w-max  py-[2px] p-1 top-0 left-0">
            Tập 46
          </span>
         <span className="absolute -right-0 p-1 shadow-lg  cursor-pointer -top-0 hover:bg-black bg-red-700 rounded">
         <IoClose
            size={20}
            color="white"
            className="font-bold"
          />
         </span>
        </li>
      </ul>
    </main>
  );
}
