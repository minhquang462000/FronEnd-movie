'use client';
import * as React from "react";
import imgBcg from "@/public/images/bxh.png";
import imgBpntt from "@/public/images/bxh-pntt.png";
import imgBdptk from "@/public/images/bxh-dptk.png";
import imgBtghm from "@/public/images/bxh-tghm.png";
import imgBtptk from "@/public/images/bxh-tptk-top.png";
import imgBdldl from "@/public/images/bxh-ht-dldl.png";
import imgBDk from "@/public/images/do-kiep.png";
import Image from "next/image";
import MainLayout from "@/layouts/main";
import UserRankings from "@/components/List/UserRankings";
import ListComments from "@/components/List/ListComments";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="w-screen mb-5 rounded-b-lg  lg:w-[1140px] h-max  flex flex-col p-4 bg-[#151d25]  mx-auto ">
        <section className="w-full">
          <Image src={imgBcg} className="mx-auto cursor-pointer" alt="imgBgc" />
          <div className="w-full p-3 gap-3 md:p-6  flex justify-between   ">
            <Image
              src={imgBpntt}
              className="w-[15%] cursor-pointer"
              alt="imgBpntt"
            />
            <Image
              src={imgBdptk}
              className="w-[15%] cursor-pointer"
              alt="imgBdptk"
            />
            <Image
              src={imgBtghm}
              className="w-[15%] cursor-pointer"
              alt="imgBtghm"
            />
            <Image
              src={imgBtptk}
              className="w-[15%] cursor-pointer"
              alt="imgBtptk"
            />
            <Image
              src={imgBdldl}
              className="w-[15%] cursor-pointer"
              alt="imgBdldl"
            />
          </div>
          <Image
            src={imgBDk}
            className="w-[150px] mx-auto lg:mt-2 md:w-[200px] cursor-pointer lg:w-[300px]"
            alt="imgBgc"
          />
        </section>
        <UserRankings />
        <p className="text-center text-white my-4 text-sm lg:text-lg lg:my-8">
          Tham gia Động Phủ Hoạt Hình Trung Quốc - HoatHinhOnline{" "}
          <span className="text-yellow-400 cursor-pointer font-semibold px-1 underline">
            TẠI ĐÂY
          </span>
        </p>
        <ListComments/>
      </main>
    </MainLayout>
  );
}
