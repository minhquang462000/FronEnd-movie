'use client'
import { CardItem } from '@/components/Cards/CardItem';
import Image from 'next/image';
import * as React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { FaRegHandPointLeft } from "react-icons/fa6";
import { FaRegHandPointRight } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { RiUserFollowLine } from 'react-icons/ri';
import calendarImg from '@/public/images/weekly-calendar.png'
import { TbHandClick } from 'react-icons/tb';



export default function page() {
    const [allDescription,setAlldescription] =React.useState<boolean>(false)
    return (
        <main className=' w-screen text-gray-400 h-max lg:w-[1140px] px-3 mx-auto'>
            <CardItem />
            <div className='bg-[#0f171e] flex justify-between my-2 text-sm rounded-md p-3'>
                <button className='flex bg-gradient-to-r  from-yellow-500 to-red-600  p-2 px-3 lg:px-4 lg:text-lg rounded-lg w-max items-center gap-2'>
                    <BiCameraMovie />
                    Xem Phim
                </button>
                <button className='flex bg-gradient-to-r  from-red-600 to-yellow-500 p-2 px-3 lg:px-4 lg:text-lg rounded-lg w-max  items-center gap-2'>
                    <RiUserFollowLine />
                    Theo Dõi
                </button>
            </div>
            <div className='my-8'>
                <span className='flex items-center gap-2'>
                    <FaRegHandPointRight color='orange' />
                    <h2 className=' text-xl '>TÌM TẬP NHANH</h2>
                    <FaRegHandPointLeft color='orange' />
                </span>
                <span className='flex border-2  items-center border-gray-600 py-3 px-2 lg:py-3 rounded-md bg-black w-max'>
                    <input className='outline-none bg-transparent' placeholder='Nhập số tập ...' type="text" />
                    <span><IoMdSearch size={20} /></span>
                </span>
            </div>
            <tr className='bg-[#0f171e] rounded-md grid lg:grid-cols-6 grid-cols-4 mb-4 h-max gap-x-2 gap-y-1 lg:gap-x-3 lg:gap-y-2 p-3'>
                <td className='rounded-md hover:bg-[#ff9900] py-1 lg:py-2 text-center bg-[#2f3338]'>1</td>
            </tr>
            <div className='rounded-md overflow-hidden  my-4'>
                <span className="flex items-center font-semibold p-3 bg-[#22466b] gap-2">
                    <Image src={calendarImg} />
                    <h3>Phim Chiếu 1 Tập Vào Trưa <span className='text-[#ff9900] cursor-pointer'>CHỦ NHẬT</span></h3>
                </span>
                <div className={`bg-[#0f171e] rounded-b-lg overflow-hidden relative  mb-4 pt-6 w-full`}>
                    <h1 className="text-xl font-bold px-3 bg-gradient-to-r  from-orange-500 to-red-600 bg-clip-text text-transparent">NỘI DUNG PHIM</h1>
                    <div className="h-[1.5px] mb-2 px-3 w-[180px] mt-1  bg-gradient-to-r from-orange-500 to-red-600 "></div>
                    <h2 className=' px-3 font-semibold lg:text-xl py-1 lg:py-2'>Xem Phim {"Nhất Thế Chí Tôn"} {"Vietsub"} {2024}:</h2>
                    <p className={`px-3 overflow-hidden ${!allDescription ? 'h-[50px] lg:h-[90px]' : 'h-max lg:h-max'} `}>Cuộc phiêu lưu vào thế giới cổ đại , bối cảnh huyền bí có những vị thần và sinh vật ảo tưởng. Nhân vật chính phải đối mặt với nhiều khó khăn ,
                         thách thức mới để đánh bại những thế lực tà ác để bảo vệ thế giới.
                          “Nhất Thế Chi Tôn Đồ họa đẹp mắt sẽ đưa khán giả hòa nhập vào thế giới ảo diệu đầy mong đợi.</p>
                    <p onClick={() => setAlldescription(!allDescription)} className={`  hover:text-[#ff9900] py-2  ${allDescription && 'mt-4' } px-3 font-thin cursor-pointer` }>{allDescription ? "Thu gọn ..." : "Mở rộng ..."}</p>
                </div>
            </div>
            <button className='flex items-center gap-2 bg-blue-500 my-4 text-white px-8 py-2 m-auto rounded-md'>
            <TbHandClick size={25}/>
            <p>Đăng nhập để bình luận</p>
            </button>
        </main>
    );
}
