'use client'
import * as React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight ,MdRunningWithErrors} from "react-icons/md";
import CardError from "@/components/Cards/CardError";
export interface IAppProps {
}

export default function DialogErrorConfirm (props: IAppProps) {
    const [showFormError, setShowFormError] = React.useState<boolean>(false);
  return (
    <div className='w-full'>
        <nav
          className={`fixed top-5  lg:top-10 z-50 left-0 right-0 lg:left-[20%] lg:right-[20%] ${
            !showFormError && "hidden"
          }`}
        >
          {" "}
          <CardError
            showFormError={showFormError}
            setShowFormError={setShowFormError}
          />
        </nav>
        <ul className="flex justify-center items-center text-xs lg:text-sm pt-2  gap-2 lg:gap-3 ">
          <li className="bg-[#25354c] flex items-center gap-1  cursor-pointer rounded hover:bg-gray-500  lg:py-1  py-[2px] px-1 lg:px-3">
            <MdKeyboardDoubleArrowLeft className="lg:text-xl" />
            <p>Tập trước</p>
          </li>
          <li className="bg-[#25354c] flex items-center gap-[2px]  cursor-pointer rounded hover:bg-gray-500  lg:py-1 py-[2px] px-1 lg:px-3">
            <p>Tập tiếp theo</p>
            <MdKeyboardDoubleArrowRight className="lg:text-xl" />
          </li>
          <li
            onClick={() => setShowFormError(!showFormError)}
            className="bg-[#25354c] flex items-center gap-1 cursor-pointer  rounded hover:bg-gray-500 lg:py-1  py-[2px] px-1 lg:px-3"
          >
            <MdRunningWithErrors className="lg:text-xl" />
            <p>Báo lỗi</p>
          </li>
        </ul>
    </div>
  );
}
