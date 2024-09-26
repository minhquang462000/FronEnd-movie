import * as React from "react";
import bgimg from "@/public/images/tong-mon.gif";
import Image from "next/image";
export interface IAppProps {}

export default function UserRankings(props: IAppProps) {
  return (
    <div className="w-full   text-gray-400 mt-4 md:mt-6 lg:mt-10">
      <ul className="text-[10px]  md:text-xs  lg:text-base pb-1 text-center px-2 flex justify-between ">
        <li className="w-[10%]">Hạng</li>
        <li className="w-[55%]">Đạo Hữu</li>
        <li className="w-[20%]">Cấp Bậc</li>
        <li className="w-[15%]">Tu Vi</li>
      </ul>
      <ul className="flex w-full mb-8 flex-col gap-1">
        <li className="text-[10px] border-t-[1px] border-gray-600 lg:text-xl bg-[#38191f] font-bold w-full md:text-xs item-center py-4 text-center px-4 flex justify-between ">
          <div className="w-[10%] m-auto">
            <div className="bg-red-500 lg:w-[30px] lg:h-[30px] h-4 w-4 flex justify-center items-center  lg:ml-4 font-bold text-white rounded-full ">
              1
            </div>
          </div>
          <div className="w-[55%] flex justify-start lg:gap-5 gap-2  items-center ">
            <Image
              className="lg:w-[100px] lg:h-[100px] w-[45px] h-[45px]  rounded-full cursor-pointer"
              src=""
              priority={true}
              alt=""
            />
            <span className="flex flex-col lg:gap-2 ">
              <p className=" ">Nguyễn Minh Quang</p>
              <div
                style={{ backgroundImage: `url(${bgimg.src})`, color: "red" }}
              >
                Ma tộc
              </div>
            </span>
          </div>
          <span className="w-[20%] m-auto ">
            {" "}
            <p>Hỗn Thánh</p>
          </span>
          <span className="w-[15%] text-yellow-500 m-auto">46.200</span>
        </li>
      </ul>
    </div>
  );
}
