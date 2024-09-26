import Image from "next/image";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function CardComment() {
  const [allComments, setAllComments] = React.useState<boolean>(false);
  return (
    <div className="lg:flex gap-2">
      <span className="flex gap-2 lg:my-5 lg:flex-col lg:w-[10%] lg:items-center items-end">
        <Image
          className="w-10 h-10 lg:w-16 lg:h-16 bg-gray-500 rounded-full object-cover"
          src=""
          alt=""
          priority={true}
        />
        <p className="font-bold bg-gradient-to-r text-white px-3 w-[100px] lg:w-full py-[2px] truncate text-xs rounded-lg from-orange-500 to-red-600">
          ĐẾ VƯƠNG gfdgfdgf sdsadsdasdsa sfsf
        </p>
      </span>
      <div className="bg-[#151515] rounded-md relative mt-3 lg:w-[90%] p-3">
        <span className="bg-[#151515] w-4 h-4 rotate-45 absolute -top-1 lg:top-8 lg:-left-2" />
        <span className=" flex flex-wrap gap-3">
          <p className="font-semibold lg:text-lg">Nguyễn Minh Quang</p>
          <span className="flex gap-2 text-xs font-light items-center">
            <p>20 giờ trước</p>
            <IoIosTimer size={17} />
          </span>
          <span className="flex flex-wrap">
            <p
              className={`${
                !allComments && "line-clamp-5 lg:line-clamp-3"
              } lg:text-lg `}
            >
              Để các vị đạo hữu mới khỏi thắc mắc thì các bình luận liên quan
              tới phần Tu luyện đều sẽ bị gỡ bỏ. Những bình luận Toxic, chửi
              nhau cũng bị xử lí tương tự như vậy. Chúc các vị đạo hữu gần xa có
              những giây phút xem phim vui vẻ. chửi nhau cũng bị xử lí tương tự
              như vậy. Chúc các vị đạo hữu gần xa có những giây phút xem phim
              vui vẻ. chửi nhau cũng bị xử lí tương tự như vậy. Chúc các vị đạo
              hữu gần xa có những giây phút xem phim vui vẻ.
            </p>
            <span className=" text-[#1f9970] i">
              {!allComments ? (
                <button
                  onClick={() => setAllComments(true)}
                  className="flex gap-1 items-center"
                >
                  {" "}
                  <p>Đọc Tiếp</p>
                  <MdKeyboardDoubleArrowRight />
                </button>
              ) : (
                <button
                  onClick={() => setAllComments(false)}
                  className="flex gap-1 items-center"
                >
                  <p>Thu gọn</p>
                  <MdKeyboardDoubleArrowLeft />
                </button>
              )}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <BiSolidLike size={18} className=" hover:text-gray-800" />
            <p className="text-green-500">46</p>
          </span>
        </span>
      </div>
    </div>
  );
}
