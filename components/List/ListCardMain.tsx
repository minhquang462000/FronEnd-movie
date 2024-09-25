import * as React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChangePage from "../ChangePage/ChangePage";
import CardMain from "../Cards/CardMain";
import Link from "next/link";

export default function ListCardMain() {
  return (
    <section className=" w-full  ">
      <h3 className="text-ld font-bold bg-gradient-to-r  pb-1   from-orange-500 to-red-600 bg-clip-text text-transparent">
        MỚI CẬP NHẬT
      </h3>
      <div className="h-[2px] w-[125px]   bg-gradient-to-r from-orange-500 to-red-600 "></div>
      <div className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
        <Link href={"/phim/ten-phim"}><CardMain /></Link>
      </div>
    </section>
  );
}
