import * as React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChangePage from "../ChangePage/ChangePage";

export default function ListCardMain() {
  return (
    <div className=" w-full  ">
      <h1 className="text-ld font-bold bg-gradient-to-r  pb-1   from-orange-500 to-red-600 bg-clip-text text-transparent">
        MỚI CẬP NHẬT
      </h1>
      <div className="h-[2px] w-[125px]   bg-gradient-to-r from-orange-500 to-red-600 "></div>
      <ul className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <li className="w-full group/item cursor-pointer relative h-[250px] lg:h-[280px]  rounded-md overflow-hidden">
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
          <FaRegCirclePlay
            size={60}
            className="absolute top-[40%] left-1/2 opacity-50 font-thin hidden hover:opacity-100 group-hover/item:block   -translate-x-1/2 -translate-y-1/2"
          />
          <span className="absolute bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 text-sm font-medium from-red-600 to-orange-500  w-max  p-1 top-0 left-0">
            Tập 46
          </span>
        </li>
      </ul>
    </div>
  );
}
