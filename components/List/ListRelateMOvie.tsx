'use client';
import * as React from "react";

export default function ListRelateMovie() {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  return (
    <div className="w-full  h-full">
      <tr
        className={`w-full overflow-clip relative  h-max   flex flex-wrap gap-1 ${
          !showAll && "max-h-[50px] "
        }`}
      >
        <td className="lg:px-3 px-2 font-sans  font-extralight lg:py-[2px] text-xs lg:text-base border-[1px] h-max bg-[#0b0f15] transition-colors delay-700 duration-700 hover:bg-gradient-to-l to-[#070f19] 00 from-[#6d2323] rounded-md cursor-pointer border-gray-800 ">
          Phim liên quan
        </td>

        <div
          className={`w-full   ${
            !showAll && "absolute bottom-0"
          } }  transition-all  duration-700 h-10   bg-gradient-to-t from-[#111921] `}
        ></div>
      </tr>
      <p
        onClick={() => setShowAll(!showAll)}
        className={`  hover:text-[#ff9900] lg:py-2 py-1  text-xs  lg:text-lg bg-[#151d25] h-max w-full px-3 font-thin cursor-pointer`}
      >
        {showAll ? "Thu gọn ..." : "Mở rộng ..."}
      </p>
    </div>
  );
}
