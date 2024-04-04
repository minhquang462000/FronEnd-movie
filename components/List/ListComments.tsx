import React, { useCallback } from "react";

import CardComment from "../Cards/CardComment";
import { RiArrowDownSFill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";

export default function ListComments() {
  const [filterComments, setFilterComments] = React.useState<number>(0);
  const renderListComments = useCallback(() => {
    if (filterComments == 0) {
      return (
        <td className="flex flex-col gap-2 ">
          {/* Mới nhất */}
          <CardComment />
        </td>
      );
    } else {
      return (
        <td className="flex flex-col gap-2 ">
          {/* Cũ nhất */}
          <CardComment />
        </td>
      );
    }
  }, [filterComments]);
  return (
    <main>
      <button className="flex items-center gap-2 bg-blue-500 my-4 text-white px-8 py-2 m-auto rounded-md">
        <TbHandClick size={25} />
        <p>Đăng nhập để bình luận</p>
      </button>
      <div className="text-sm w-full px-3 mt-10">
        <div className="flex border-b-2 w-full  lg:border-b-4  border-black flex-col lg:justify-between lg:flex-row pb-1 mb-4 gap-1">
          <span className="font-bold w-full border-[#26feb6] lg:border-b-4 lg:-mb-[8px] lg:px-3 lg:w-max pb-1 border-b-2">
            1.9K BÌNH LUẬN
          </span>
          <div>
            <div className="border-b-2 flex items-center  lg:border-b-4 w-max  border-gray-400 lg:-mb-[8px]  -mb-[5.5px]  ">
              <select
                id="select"
                onChange={(e) => setFilterComments(Number(e.target.value))}
                className="outline-none appearance-none lg:px-3 bg-transparent pb-1"
              >
                <option value={0} className="w-[100px] px-3">
                  Mới nhất
                </option>
                <option value={1} className="w-[100px] px-3">
                  Cũ nhất
                </option>
              </select>
              <RiArrowDownSFill className="pb-1" size={20} />
            </div>
          </div>
        </div>

        {renderListComments()}
      </div>
      <button className="bg-[#07b290] my-4 px-4 hover:shadow-black shadow-md  shadow-cyan-500/50 flex lg:py-2 lg:px-6 font-medium  hover:drop-shadow-none cursor-pointer text-white py-1 rounded-md  m-auto ">
        {" "}
        Tải thêm bình luận
      </button>
    </main>
  );
}
