"use client";
import Link from "next/link";
import * as React from "react";
import { BsFillBookmarksFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdStars } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

export default function HeaderMobile() {
  return (
    <header className=" lg:w-[1140px] w-full   mx-auto pt-5 px-4 text-white  ">
      <div className="lg:flex  lg:justify-between pt-5 items-center w-full">
        <Link
          href={"/"}
          className="text-3xl  font-extrabold lg:w-max flex w-full justify-center bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 from-red-600 to-orange-500 bg-clip-text text-transparent"
        >
          {/* <img src="https://picsum.photos/200" alt="" /> */}
          HoatHinhOnline
        </Link>
        <section className="hidden lg:flex text-xs lg:text-base p-[6px] gap-2 items-center h-max w-[400px]  px-4 rounded-2xl  bg-[#12171b]">
          <IoSearch size={20} />
          <input
            className="outline-none text-sm bg-transparent"
            placeholder="Tìm kiếm ..."
            type="text"
          />
        </section>
        <ul className="flex gap-2 justify-center pt-3 items-center lg:col-span-1 ">
          <Link
            href={"/lich-su"}
            className="border-[0.1px] bg-[#12171b] border-gray-500 px-4 py-2 cursor-pointer "
          >
            <RxCountdownTimer size={20} />
          </Link>
          <Link
            href={"/theo-doi"}
            className="border-[0.1px] bg-[#12171b] border-gray-500 px-4 py-2 cursor-pointer "
          >
            <BsFillBookmarksFill size={20} />
          </Link>
          <Link
            href={"/bang-xep-hang"}
            className="border-[0.1px] bg-[#12171b] border-gray-500 px-4 py-2 cursor-pointer "
          >
            <MdStars size={20} />
          </Link>
          <Link
            href={"/auth/login"}
            className="border-[0.1px] bg-[#12171b] border-gray-500 px-4 py-2 cursor-pointer "
          >
            <LuLogOut size={20} />
          </Link>
        </ul>
      </div>
      <p className="text-sm py-4 lg:text-base text-center">
        Lưu hoặc nhớ ngay link rút gọn
        <span className="font-bold text-yellow-500 cursor-pointer mx-1">
          nmquang.com
        </span>
        để truy cập khi nhà mạng chặn
      </p>
    </header>
  );
}
