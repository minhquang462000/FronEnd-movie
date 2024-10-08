import Image from "next/image";
import * as React from "react";
import { FaRegCalendarCheck, FaStar } from "react-icons/fa6";
import Link from "next/link";

export function CardItem() {
  return (
    <nav className=" grid grid-cols-3 lg:grid-cols-4 bg-[#0f171e] cursor-pointer px-2 items-center text-gray-300 gap-3">
      <div className="col-span-1 w-full md:w-[180px] m-auto md:h-[250px] lg:w-[230px] lg:h-[330px] border-[6px] overflow-hidden border-black h-[150px]">
        <Image
          className="w-full h-full object-cover"
          src={require("@/public/images/img_test/Nhat-The-Doc-Ton-300x449_1.png")}
          alt=""
          priority={true}
        />
      </div>
      <ul className="flex flex-col col-span-2 lg:col-span-3 py-4 w-full">
        <li className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tên</p>
          <p className=" text-xl  font-bold text-yellow-600  truncate">
            Nhât Thế Chí Tôn
          </p>
        </li>
        <li className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tên Tác Giả</p>
          <p className="  font-thin">Tên Tác Giả</p>
        </li>
        <li className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Thể Loại</p>
          <ul className="  flex flex-wrap lg:text-sm text-[12px] font-semibold gap-1">
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              <Link href={"/the-loai"}> CN Animation</Link>
            </li>
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              <Link href={"/the-loai"}>   HH KungFu</Link>
            </li>
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              <Link href={"/the-loai"}> Huyền Huyễn</Link>
            </li>
          </ul>
        </li>
        <li className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tập Mới Nhất</p>
          <Link href={"/phim/ten-phim/tap-8"}>
            <button className=" text-sm   bg-gradient-to-r  w-max text-white rounded-md  from-[#52839e] px-2 py-[2px] to-blue-500 ">
              Tập 8
            </button>
          </Link>
        </li>
        <li className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Thông Tin Khác</p>
          <span className="  flex items-center gap-2">
            <FaRegCalendarCheck size={20} />
            <button className="font-light hover:text-[#20495d] text-[#26b9fe]  text-sm">
              2024
            </button>
          </span>
        </li>
        <li className="py-4 lg:py-8  h-max lg:flex items-center gap-5">
          <p className="w-[150px] hidden lg:block font-bold">Đánh Giá</p>
          <span className="flex gap-1 items-end mb-3 text-yellow-500 text-xs font-light">
            <FaStar size={25} />
            <p className="flex text-gray-200 items-end">
              <span>
                {" "}
                <b className="text-xl font-light leading-[5px] ">2.46</b>
              </span>
              <span>
                /{"5"} ({"190 lượt"})
              </span>
            </p>
          </span>
          <span className="text-[#26b9fe] flex  gap-1">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
          </span>
        </li>
      </ul>
    </nav>
  );
}
