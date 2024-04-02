import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

export default function FindFast() {
  return (
    <div className="my-4">
      <span className="flex items-center gap-2">
        <FaRegHandPointRight color="orange" />
        <h2 className=" text-lg lg:text-xl ">TÌM TẬP NHANH</h2>
        <FaRegHandPointLeft color="orange" />
      </span>
      <span className="flex border-2  items-center border-gray-600 py-2 text-sm lg:text-base px-2 lg:py-3 rounded-md bg-black w-max">
        <input
          className="outline-none bg-transparent"
          placeholder="Nhập số tập ..."
          type="text"
        />
        <span>
          <IoMdSearch size={20} />
        </span>
      </span>
    </div>
  );
}
