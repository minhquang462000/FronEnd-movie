import { IoIosClose } from "react-icons/io";
import { MdRunningWithErrors } from "react-icons/md";
interface CardErrorProps {
  showFormError: boolean;
  setShowFormError: (value: boolean) => void;
}
export default function CardError(props: CardErrorProps) {
  const { setShowFormError } = props;
  return (
    <div className=" mx-2 md:mx-5 lg:mx-0 lg:w-[800px] h-max m-auto bg-white lg:text-lg text-gray-800 rounded-md flex flex-col">
      <span className="flex justify-between border-b-[1px] border-gray-300 p-2 lg:p-5 items-center text-2xl ">
        <span className="flex  items-center gap-3">
          <MdRunningWithErrors className="lg:text-2xl text-xl" />
          <p className="text-lg lg:text-xl">Báo lỗi</p>
        </span>
        <IoIosClose
          onClick={() => setShowFormError(false)}
          className="text-3xl hover:bg-gray-200 rounded-full cursor-pointer"
        />
      </span>
      <div className="flex my-6 gap-8 flex-col">
        <span className="flex flex-col">
          <label
            className="lg:mx-16 mx-4 font-bold mb-3 text-gray-400 text-md lg:text-lg"
            htmlFor=""
          >
            Email của bạn *
          </label>
          <input
            className="outline-none p-2 focus:border-[#26b9fe]  border-gray-300 mx-8 lg:mx-[80px] border rounded-md"
            type="text"
          />
        </span>
        <span className="flex  flex-col">
          <label
            className="lg:mx-16 font-bold mx-4 mb-3 text-gray-400 text-md lg:text-lg"
            htmlFor=""
          >
            Nội dung *
          </label>
          <textarea className="outline-none focus:border-[#26b9fe]  border-gray-300 p-3 h-[100px] lg:h-[150px] border mx-8 lg:mx-[80px] rounded-md"></textarea>
        </span>
      </div>
      <span className="flex justify-end gap-2 border-t-[1px] border-gray-300 p-2 lg:p-5 items-center text-xl ">
        <button
          onClick={() => setShowFormError(false)}
          className="border border-gray-300 hover:bg-gray-200 lg:px-5 px-3 lg:p-2 p-1 rounded-md"
        >
          Đóng
        </button>
        <button className="border border-red-700 hover:bg-red-600 bg-red-500 text-white lg:px-5 px-3 lg:p-2 p-1 rounded-md">
          Báo lỗi
        </button>
      </span>
    </div>
  );
}
