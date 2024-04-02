"use client";

import FindFast from "@/components/Cards/FindFast";
import Showtime from "@/components/Cards/Showtime";
import ListComments from "@/components/List/ListComments";
import ListEpisodes from "@/components/List/ListEpisodes";
import { FaLightbulb, FaStar, FaThumbsUp } from "react-icons/fa6";
import { IoBookmark, IoInformationCircleSharp } from "react-icons/io5";
import imgLogoBg from "@/public/images/bg_logo.jpg";
import imgLogoAvt from "@/public/images/avatrlogo.jpg";
import { IoIosShareAlt, IoLogoFacebook } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdRunningWithErrors,
} from "react-icons/md";
import CardVideo from "@/components/Cards/CardVideo";
import CardError from "@/components/Cards/CardError";
import { useState } from "react";
import MainLayout from "@/layouts/main";
export default function page() {
  const [showFormError, setShowFormError] = useState<boolean>(false);
  return (
    <MainLayout>
      <main className="w-screen text-gray-300 h-max  bg-[#151d25] lg:w-[1140px] px-3  lg:px-5 mx-auto">
        <nav className={`fixed top-5  lg:top-10 z-50 left-0 right-0 lg:left-[20%] lg:right-[20%] ${!showFormError && "hidden"}`}>
          {" "}
          <CardError
            showFormError={showFormError}
            setShowFormError={setShowFormError}
          />
        </nav>
        <div className="py-2">
          <CardVideo />
        </div>
        <ul className="flex justify-center items-center text-xs lg:text-sm pt-2  gap-2 lg:gap-3 ">
          <li className="bg-[#25354c] flex items-center gap-1  cursor-pointer rounded hover:bg-gray-500  lg:py-1  py-[2px] px-1 lg:px-3">
            <MdKeyboardDoubleArrowLeft className="lg:text-xl" />
            <p>Tập trước</p>
          </li>
          <li className="bg-[#25354c] flex items-center gap-[2px]  cursor-pointer rounded hover:bg-gray-500  lg:py-1 py-[2px] px-1 lg:px-3">
            <p>Tập tiếp theo</p>
            <MdKeyboardDoubleArrowRight className="lg:text-xl" />
          </li>
          <li onClick={() => setShowFormError(!showFormError)} className="bg-[#25354c] flex items-center gap-1 cursor-pointer  rounded hover:bg-gray-500 lg:py-1  py-[2px] px-1 lg:px-3">
            <MdRunningWithErrors className="lg:text-xl" />
            <p>Báo lỗi</p>
          </li>
        </ul>
        <ul className="flex items-center gap-2 text-white text-[10px] lg:text-sm lg:py-3 py-2 ">
          <li className="flex px-2 py-[2px] rounded-sm  cursor-pointer bg-[#1877f2] items-center gap-1">
            <FaThumbsUp size={13} />
            <p>Thích {"2"}</p>
          </li>
          <li className=" px-2 py-[2px] rounded-sm cursor-pointer  bg-[#1877f2]">
            Chia sẻ
          </li>
          <li className=" text-[#4267b2] rounded-sm cursor-pointer bg-white px-2 py-[2px] flex items-center gap-1">
            <IoBookmark size={15} />
            <p className="font-bold">Lưu vào Facebook</p>
          </li>
        </ul>
        <h1 className="lg:text-base text-sm pt-4  text-red-400 font-bold">
          Thử server VIP1, VIP2 nếu thấy không xem được , giật lag
        </h1>
        <FindFast />
        <ul className="flex gap-2 my-4 text-white justify-center">
          <li className="w-max lg:px-4 text-sm px-3  bg-[#22466b] cursor-pointer rounded-md hover:bg-[#276ba9] py-1 lg:py-2 ">
            VIP1
          </li>
          <li className="w-max lg:px-4 text-sm px-3  bg-[#22466b] cursor-pointer rounded-md hover:bg-[#276ba9] py-1 lg:py-2 ">
            VIP2
          </li>
          <li className="w-max lg:px-4 text-sm px-3  bg-[#22466b] cursor-pointer rounded-md hover:bg-[#276ba9] py-1 lg:py-2 ">
            VIP3
          </li>
          <li className="w-max lg:px-4 text-sm px-  bg-[#22466b] cursor-pointer rounded-md hover:bg-[#276ba9] py-1 lg:py-2 ">
            HX(ADS)
          </li>
        </ul>
        <ListEpisodes />
        <nav className="lg:flex py-2  justify-between">
          <span className="flex items-center my-2 lg:my-0 lg:text-xl gap-1">
            <IoInformationCircleSharp />
            <h3>
              Nhất Thế Chí Tôn Tập {"46"} {"Vietsub"} | HH3D
            </h3>
          </span>
          <div className="  h-max  flex items-center gap-3">
            <span className="flex gap-1 items-end  text-yellow-500 text-xs font-light">
              <FaStar className=" lg:text-[40px] text-2xl" />
              <p className="flex text-gray-200 lg:text-2xl text-base items-end">
                <span>
                  {" "}
                  <b className=" font-light leading-[5px] ">2.46</b>
                </span>
                <span className="font-thin text-xs lg:text-sm">
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
          </div>
        </nav>
        <Showtime />
        <div className="lg:w-[400px] w-full mt-2  h-max m-auto relative">
          <div className="w-full h-full bg-gradient-to-b from-[#07090a]  absolute"></div>
          <img
            className="w-full object-cover h-full "
            src={imgLogoBg.src}
            alt=""
          />
          <span className="flex w-full items-center gap-2 absolute top-0 left-0 p-2 text-white">
            <img src={imgLogoAvt.src} alt="" className="border-2 border-white" />
            <span>
              <h3 className=" cursor-pointer hover:underline text-lg">
                Hoạt Hình Trung Quốc
              </h3>
              <p className="text-sm">18.123 người theo dõi</p>
            </span>
          </span>
          <button className="absolute bottom-2 shadow-md flex items-center gap-1 text-sm py-[2px] text-gray-800 font-medium bg-white w-max px-2 left-2">
            <IoLogoFacebook color="#3a5897" size={20} />
            <p className="font-medium">Theo Dõi Trang</p>
          </button>
          <button className="absolute bottom-2 flex shadow-md items-center gap-1 text-sm py-[2px] text-gray-800 font-medium bg-white w-max px-2 right-2">
            <IoIosShareAlt color="gray" size={20} />
            <p className="font-medium">Chia Sẻ</p>
          </button>
        </div>
        <div className="mt-10">
          {" "}
          <ListComments />
        </div>
      </main>
    </MainLayout>
  );
}
