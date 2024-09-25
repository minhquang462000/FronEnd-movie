'use client';
import Image from "next/image";
import React from "react";
import Showtime from "./Showtime";

export default function CardDescription() {
  const [allDescription, setAllDescription] = React.useState<boolean>(false);
  return (
    <div className="rounded-md overflow-hidden  my-4">
      <Showtime />
      <div
        className={`bg-[#0f171e] rounded-b-lg overflow-hidden relative  mb-4 pt-6 w-full`}
      >
        <h3 className=" font-bold mx-3 bg-gradient-to-r border-b-[1px] border-gray-600 -mb-[2px] from-orange-500 to-red-600 bg-clip-text text-transparent">
          NỘI DUNG PHIM
        </h3>
        <div className="h-[3px] mb-2 mx-3 w-[140px]    bg-gradient-to-r from-orange-500 to-red-600 "></div>
        <h2 className=" px-3 text-sm font-bold lg:text-xl py-1 lg:py-2">
          Xem Phim {"Nhất Thế Chí Tôn"} {"Vietsub"} {2024}:
        </h2>
        <p
          className={`px-3 pt-1 overflow-hidden lg:text-base text-xs ${
            !allDescription
              ? "h-[50px] lg:h-[90px] line-clamp-3"
              : "h-max lg:h-max"
          } `}
        >
          Cuộc phiêu lưu vào thế giới cổ đại , bối cảnh huyền bí có những vị
          thần và sinh vật ảo tưởng. Nhân vật chính phải đối mặt với nhiều khó
          khăn , thách thức mới để đánh bại những thế lực tà ác để bảo vệ thế
          giới. “Nhất Thế Chi Tôn Đồ họa đẹp mắt sẽ đưa khán giả hòa nhập vào
          thế giới ảo diệu đầy mong đợi.
        </p>
        <p
          onClick={() => setAllDescription(!allDescription)}
          className={`  hover:text-[#ff9900] py-2  ${
            allDescription && "mt-4"
          } px-3 font-thin cursor-pointer`}
        >
          {allDescription ? "Thu gọn ..." : "Mở rộng ..."}
        </p>
      </div>
    </div>
  );
}
