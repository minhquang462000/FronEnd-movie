import React, { useCallback } from "react";

import CardComment from "../Cards/CardComment";
import { RiArrowDownSFill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";

export default function ListComments() {
  const [filterComments, setFilterComments] = React.useState<number>(0);
  const [showPost, setShowPost] = React.useState<boolean>(false);
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
      <div>
        <div className="flex w-full  gap-3 lg:gap-5">
          <nav className=" lg:w-[10%] mt-2 lg:mt-0  ">
            <div className="w-14 h-14 lg:w-[80px] lg:h-[80px] mx-auto bg-gray-500 border-2 lg:border-4 rounded-full border-white">
              <img
                className=" w-full h-full rounded-full object-cover"
                src="https://hoathinh3d.io/wp-content/uploads/2021/09/nghich-thien-chi-ton-300x450.jpg"
                alt=""
              />
            </div>
          </nav>
          <div className="flex flex-col w-full">
            <textarea
              onClick={() => setShowPost(true)}
              className="outline-none text-sm lg:text-xl px-4 py-2 rounded w-full  min-h-20 bg-[#161616]"
              maxLength={1000}
              placeholder="Tham gia bình luận ..."
              name=""
              id=""
            />
            <div
              className={`flex justify-between h-full gap-2  lg:h-[80px] ${
                !showPost && "hidden"
              }`}
            >
              <p className="text-[#ff0000] font-medium flex items-end text-xs lg:text-base">
                Hãy cẩn thận ngôn từ, mọi hành vi xúc phạm, văng tục sẽ bị cấm
                tài khoản
              </p>
              <button className="bg-[#07b290] my-4 h-max px-4 w-max  hover:shadow-black shadow-md  shadow-cyan-500/50  lg:py-2 lg:px-6 font-medium  hover:drop-shadow-none cursor-pointer text-white py-1 rounded-md ">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
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
