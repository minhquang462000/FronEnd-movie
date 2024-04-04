"use client";
import Link from "next/link";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLike } from "react-icons/ai";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { IoHomeOutline, IoReorderThreeSharp } from "react-icons/io5";
import { MdMovieEdit, MdOutlineMovieCreation } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { SiThemoviedatabase } from "react-icons/si";

export default function HeaderSelect() {
  const [showSelect, setShowSelect] = React.useState<boolean>(false);
  const [showCategories, setShowcategories] = React.useState<boolean>(false);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const { t, i18n } = useTranslation("header");
  return (
    <div className="text-white w-full sticky   z-50  top-0  bg-[#12171b]">
      <nav className="flex justify-between items-center lg:hidden">
        <button
          onClick={() => setShowSelect(!showSelect)}
          className="font-thin pl-3"
        >
          {" "}
          <IoReorderThreeSharp size={35} />
        </button>
        <button onClick={() => setShowSearch(!showSearch)} className="pr-3">
          {" "}
          <IoIosSearch size={18} />
        </button>
      </nav>
      <ul
        className={`font-light border-t-[1px] border-gray-600 text-gray-300 lg:w-[1140px]  lg:flex items-center m-auto lg:border-none text-xs lg:text-sm lg:font-medium   w-screen  bg-[#12171b]  ${
          !showSelect && "hidden"
        }`}
      >
        <Link href={"/"}>
          <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
            <IoHomeOutline />
            <p> {t("home")}</p>
          </li>
        </Link>
        <li className="flex flex-col lg:relative group cursor-pointer  gap-1 hover:text-yellow-500  hover:bg-black ">
          <span
            onClick={() => setShowcategories(!showCategories)}
            className="flex gap-1 p-3  items-center"
          >
            <p>{t("categories")}</p>
            <IoMdArrowDropdown />
          </span>
          <span className="w-5 h-5 top-9 hidden lg:group-hover:block absolute rotate-45 right-2 bg-[#213342]" />
          <ul
            className={`text-white lg:group-hover:block lg:absolute z-50 lg:top-10 lg:w-max  text-xs lg:text-sm  bg-[#213342] w-screen ${
              !showCategories && "hidden"
            }`}
          >
            <Link href={"/the-loai"}>
              <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
                Huyễn Huyền
              </li>
            </Link>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Xuyên Không
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Trùng Sinh
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Tiên Hiệp
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Cổ Trang
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Hài Hước
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Kiếm Hiệp
            </li>
            <li className="px-8 py-2 cursor-pointer hover:text-[#26b9fe]">
              Hiện Đại
            </li>
          </ul>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <RiMovie2Line />
          <p> {t("singleMovie")}</p>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <BiMoviePlay />
          <p> {t("movieShowing")}</p>
        </li>
        <Link
          href="/lich-chieu"
          className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3"
        >
          <MdMovieEdit />
          <p> {t("showTimes")}</p>
        </Link>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <BiCameraMovie />
          <p>{t("complated")}</p>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <MdOutlineMovieCreation />
          <p> {t("comingSoon")}</p>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <SiThemoviedatabase />
          <p>{t("top")}</p>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 px-3 hover:bg-black py-3">
          <AiOutlineLike />
          <p> {t("liked")}</p>
        </li>
      </ul>
      <section
        className={`p-3 border-t-[1px] border-gray-600 bg-[#212c37] ${
          !showSearch && "hidden"
        }`}
      >
        <span className=" lg:hidden flex border rounded-2xl border-gray-600 gap-2 items-center h-max  py-1 px-4    bg-[#12171b]">
          <IoIosSearch size={20} />
          <input
            className="outline-none bg-transparent"
            placeholder={t("search")}
            type="text"
          />
        </span>
      </section>
    </div>
  );
}
