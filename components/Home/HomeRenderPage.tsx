"use client";
import React, { useCallback, useState } from "react";
import ListCardMain from "@/components/List/ListCardMain";

export interface IHomeRenderPageProps { }

export default function HomeRenderPage(props: IHomeRenderPageProps) {
  const [showAllSection, setShowAllSection] = useState(false);
  const [tabIndex, setTadIndex] = useState<number>(0);
  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <ListCardMain title="mới cập nhật" />;
      case 1:
        return <ListCardMain title="thứ hai" />;
      case 2:
        return <ListCardMain title="thứ ba" />;
      case 3:
        return <ListCardMain title="thứ tư" />;
      case 4:
        return <ListCardMain title="thứ năm" />;
      case 5:
        return <ListCardMain title="thứ sáu" />;
      case 6:
        return <ListCardMain title="thứ bảy" />;
      case 7:
        return <ListCardMain title="chủ nhật" />;
      default:
        return null;
    }
  }, [tabIndex]);
  return (
    <div className="w-full">
      <ul
        className={`grid text-center gap-1 py-4 lg:grid-cols-8 w-full lg:text-lg text-xs grid-cols-2 lg:h-full overflow-hidden ${!showAllSection ? "h-[52px]" : "h-full"
          }`}
      >
        <li
          onClick={() => setTadIndex(0)}
          className={`py-2 lg:py-1  bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434]  lg:px-8 text-wrap rounded-md ${tabIndex == 0 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black  from-[#31375a] to-[#00cefc]"
            }`}
        >
          Mới Cập Nhật
        </li>
        <li
          onClick={() => setShowAllSection(!showAllSection)}
          className="py-2 bg-[#343434] lg:leading-6 cursor-pointer  lg:hidden rounded-md"
        >
          Lịch Chiếu
        </li>
        <li
          onClick={() => setTadIndex(1)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 1 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Mon</p>
          <p>Thứ Hai</p>
        </li>
        <li
          onClick={() => setTadIndex(2)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 2 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Tue</p>
          <p>Thứ Ba</p>
        </li>
        <li
          onClick={() => setTadIndex(3)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 3 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Wed</p>
          <p>Thứ Tư</p>
        </li>
        <li
          onClick={() => setTadIndex(4)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 4 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Thu</p>
          <p>Thứ Năm</p>
        </li>
        <li
          onClick={() => setTadIndex(5)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 5 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Fri</p>
          <p>Thứ Sáu</p>
        </li>
        <li
          onClick={() => setTadIndex(6)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 6 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Sat</p>
          <p>Thứ Bảy</p>
        </li>
        <li
          onClick={() => setTadIndex(7)}
          className={`py-2 lg:py-1 bg-[#23232a] lg:leading-6 cursor-pointer hover:bg-[#343434] rounded-md ${tabIndex == 7 &&
            "bg-gradient-to-r lg:shadow-md lg:shadow-black   from-[#31375a] to-[#00cefc]"
            }`}
        >
          <p className="font-bold hidden lg:block">Sun</p>
          <p>Chủ Nhật</p>
        </li>
      </ul>
      {renderByTab()}
    </div>
  );
}
