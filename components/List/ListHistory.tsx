import * as React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ChangePage from "../ChangePage/ChangePage";

export default function ListHistory() {
  return (
    <main className="w-full">
      <div className="border-b-[1px]  flex justify-between items-center pb-1 -mb-[1.55px]  border-gray-800">
        <h1 className=" font-bold bg-gradient-to-r   from-orange-500 to-red-600 bg-clip-text text-transparent">
          Lịch Sử Xem
        </h1>
        <p className="text-xs text-red-400 cursor-pointer hover:text-orange-400 font-light">
          Xoá tất cả lịch sử 
        </p>
      </div>
      <div className="h-[2px] w-[100px]   bg-gradient-to-r from-orange-500 shadow to-red-600 "></div>
      <nav className="bg-[#F2DEDE] leading-5 text-[#aa4644] rounded my-4 p-4 text-xs"><span className="text-[#a94442] text-sm font-bold">Chú ý:</span> Bạn cần <span className="font-bold text-sm cursor-pointer hover:text-[#23527c] mx-1 text-[#38c0ff]">Đăng Nhập</span> tài khoản để có thể lưu lịch sử xem phim vào tài khoản của bạn, nếu không lịch sử này sẽ mất khi bạn xóa lịch sử trình duyệt !!!</nav>
      <ul className="grid grid-cols-1 bg-[#0f171e] my-4 p-3 rounded md:grid-cols-2  gap-x-8 gap-y-3">
        <li className="w-full shadow-md shadow-black border  border-black flex items-center group/item relative cursor-pointer  bg-[#19242e] h-[80px] lg:h-[100px]   rounded-md ">
          <img
            className="w-1/3 lg:w-1/5 scale-105 shadow shadow-slate-600 rounded mr-2 h-full  border-[#0f171e] object-cover"
            src="https://hoathinh3d.io/wp-content/uploads/2024/02/IMG_0349-300x450.jpeg"
            alt=""
          />
          <span className=" pl-2 w-2/3 lg:w-4/5 flex gap-1 flex-col ">
            <p className="font-medium w-[90%] lg:w-[80%] truncate">
              Nhất Thế Chi Tôn duhsadhsdhssdsadsadsaddhsjhdfdsjfhdjhf{" "}
            </p>
            <p className="font-extralight text-sm">Bạn đã xem Tập 46 </p>
            <p className="text-xs text-yellow-500 font-thin italic">
              46 phút trước
            </p>
          </span>
          <IoClose
            size={25}
            className="absolute -right-1 shadow-lg cursor-pointer -top-1 bg-red-600 rounded"
          />
        </li>
      </ul>
     
    </main>
  );
}
