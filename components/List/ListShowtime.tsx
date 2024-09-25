import * as React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export interface IAppProps {}

export default function ListShowtime(props: IAppProps) {
  return (
    <main className="w-full">
      <div className="border-b-[1px] lg:px-2 flex justify-between items-center pb-1 -mb-[1.55px]  border-gray-800">
        <h1 className="text-ld font-bold bg-gradient-to-r   from-orange-500 to-red-600 bg-clip-text text-transparent">
          Thứ Hai
        </h1>
        <p className="text-xs flex  items-center gap-1 cursor-pointer hover:text-orange-400 font-thin italic">
          Xem thêm
          <MdArrowForwardIos size={10} />
        </p>
      </div>
      <div className="h-[2px] w-[65px]   bg-gradient-to-r from-orange-500 shadow to-red-600 "></div>
      <ul className="grid grid-cols-1 mt-4 lg:grid-cols-2 lg:gap-x-4 gap-4  lg:gap-y-2 bg-[#0f171e] px-2 lg:px-3 overflow-visible  py-4 rounded">
        <li className="lg:mb-4  bg-[#19242e] lg:ml-6 ml-4 h-[60px] md:h-[70px] border-[1px] border-black   flex items-center  rounded">
          <Image
            className="md:w-[75px] md:h-[75px] w-[60px] h-[60px] -ml-4 lg:-ml-4 border-4 border-gray-400  rounded-full"
            src=""
            alt=""
          />
          <span className="flex flex-col pl-1 w-full gap-2">
            <p className="truncate w-[80%]">Vạn Giới Tiên Trung </p>
            <p className="font-extralight text-sm italic">
              Tập mới nhất <span className="text-yellow-500">Tập 460</span>
            </p>
          </span>
        </li>
      </ul>
    </main>
  );
}
