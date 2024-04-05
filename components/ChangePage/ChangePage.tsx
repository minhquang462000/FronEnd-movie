import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IAppProps {}

export default function ChangePage(props: IAppProps) {
  return (
    <tr className="flex items-center justify-center font-bold text-sm my-8 gap-2">
      <td className="bg-[#396792] hover:bg-[#4c87be]  cursor-pointer h-8 w-12 flex justify-center items-center rounded-md">
        <IoIosArrowBack size={20} />
      </td>
      <td
        className="bg-[#396792] hover:bg-[#4c87be] cursor-pointer
        h-8 w-10 flex justify-center items-center rounded-md"
      >
        1
      </td>
      <td className="bg-[#396792] hover:bg-[#4c87be] cursor-pointer h-8 w-12 flex justify-center items-center rounded-md">
        <IoIosArrowForward size={20} />
      </td>
    </tr>
  );
}
