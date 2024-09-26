import Image from "next/image";
import calendarImg from "@/public/images/weekly-calendar.png";
export default function Showtime() {
  return (
    <span className="flex items-center font-semibold p-2 bg-[#22466b] gap-2">
      <Image src={calendarImg} width={25} alt="img" priority={true}/>
      <h3 className="text-sm">
        Phim Chiếu 1 Tập Vào Trưa{" "}
        <span className="text-[#ff9900] cursor-pointer">CHỦ NHẬT</span>
      </h3>
    </span>
  );
}
