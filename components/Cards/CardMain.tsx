import Image from "next/image";
import * as React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

export interface ICardMainProps {}

export default function CardMain(props: ICardMainProps) {
  return (
    <div className="w-full group/item cursor-pointer relative h-[250px] lg:h-[280px]  rounded-md overflow-hidden">
      <Image
        className="w-full h-full hover:scale-110 hover:duration-300 translate duration-300 object-cover"
        src={require("@/public/images/img_test/Nhat-The-Doc-Ton-300x449_1.png")}
        alt=""
        priority={true}
      />
      <span className="absolute bg-gradient-to-t from-black  w-full bottom-0 p-2 left-0">
        <span className="pt-10"></span>
        <p className="font-medium text-lg w-full truncate">
            Nhất Thế Chi Tôn{" "}
          </p>
          <p className="font-thin ">Tên tác giả </p>
      </span>
      <FaRegCirclePlay
        size={60}
        className="absolute top-[40%] left-1/2 opacity-50 font-thin hidden hover:opacity-100 group-hover/item:block   -translate-x-1/2 -translate-y-1/2"
      />
      <span className="absolute bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 text-sm font-medium from-red-600 to-orange-500  w-max  p-1 top-0 left-0">
        Tập 46
      </span>
    </div>
  );
}
