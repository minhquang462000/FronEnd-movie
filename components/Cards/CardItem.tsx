import * as React from "react";
import { FaRegCalendarCheck, FaStar } from "react-icons/fa6";

export function CardItem() {
  return (
    <nav className=" grid grid-cols-3 lg:grid-cols-4 bg-[#0f171e] cursor-pointer px-2 items-center text-gray-300 gap-3">
      <div className="col-span-1 w-full md:w-[180px] m-auto md:h-[250px] lg:w-[230px] lg:h-[330px] border-[6px] overflow-hidden border-black h-[150px]">
        <img
          className="w-full h-full object-cover"
          src="https://hoathinh3d.io/wp-content/uploads/2024/02/IMG_0349-300x450.jpeg"
          alt=""
        />
      </div>
      <tr className="flex flex-col col-span-2 lg:col-span-3 py-4 w-full">
        <td className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tên</p>
          <p className=" text-xl  font-bold text-yellow-600  truncate">
            Nhât Thế Chí Tôn
          </p>
        </td>
        <td className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tên Tác Giả</p>
          <p className="  font-thin">Tên Tác Giả</p>
        </td>
        <td className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Thể Loại</p>
          <ul className="  flex flex-wrap lg:text-sm text-[12px] font-semibold gap-1">
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              CN Animation
            </li>
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              HH KungFu
            </li>
            <li className="w-max px-1 text-center bg-[#333940]  py-[6px]  rounded-md">
              Huyền Huyễn
            </li>
          </ul>
        </td>
        <td className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Tập Mới Nhất</p>
          <p className=" text-sm   bg-gradient-to-r  w-max text-white rounded-md  from-[#52839e] px-2 py-[2px] to-blue-500 ">
            Tập 8
          </p>
        </td>
        <td className="py-4 lg:py-8 lg:flex  items-center gap-5 border-b-[1px]  border-gray-600 ">
          <p className="w-[150px] hidden lg:block font-bold">Thông Tin Khác</p>
          <span className="  flex items-center gap-2">
            <FaRegCalendarCheck size={20} />
            <button className="font-light hover:text-[#20495d] text-[#26b9fe]  text-sm">
              2024
            </button>
          </span>
        </td>
        <td className="py-4 lg:py-8  h-max lg:flex items-center gap-5">
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
        </td>
      </tr>
    </nav>
  );
}
