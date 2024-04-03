import * as React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ListCardMain() {
  return (
    <div>
      <ul className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <li className="w-full group/item cursor-pointer relative h-[250px] lg:h-[280px]  rounded-md overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 hover:duration-300 translate duration-300 object-cover"
            src="https://hoathinh3d.io/wp-content/uploads/2024/02/IMG_0349-300x450.jpeg"
            alt=""
          />
          <span className="absolute bg-gradient-to-t from-black  w-full bottom-0 p-2 left-0">
            <span className="pt-10"></span>
            <p className="font-medium w-full truncate">Nhất Thế Chi Tôn </p>
            <p className="font-extralight text-[10px]">Tên tác giả </p>
          </span>
          <FaRegCirclePlay
            size={60}
            className="absolute top-[40%] left-1/2 opacity-50 font-thin hidden hover:opacity-100 group-hover/item:block   -translate-x-1/2 -translate-y-1/2"
          />
          <span className="absolute bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 text-[10px] font-semibold from-red-600 to-orange-500  w-max  p-1 top-0 left-0">
            Tập 46
          </span>
        </li>
      </ul>
      <tr className="flex items-center justify-center font-bold text-sm my-8 gap-2">
        <td className="bg-[#396792] hover:bg-[#4c87be]  cursor-pointer h-8 w-12 flex justify-center items-center rounded-md">
          <IoIosArrowBack size={20} />
        </td>
        <td className="bg-[#396792] hover:bg-[#4c87be] cursor-pointer  h-8 w-10 flex justify-center items-center rounded-md">
          1
        </td>
        <td className="bg-[#396792] hover:bg-[#4c87be] cursor-pointer h-8 w-12 flex justify-center items-center rounded-md">
          <IoIosArrowForward size={20} />
        </td>
      </tr>
    </div>
  );
}
