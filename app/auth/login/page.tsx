'use client'
import Link from 'next/link';
import * as React from 'react';
import { FaApple, FaFacebook } from 'react-icons/fa6';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { RiGoogleFill } from 'react-icons/ri';
import bgImagaLogin from "@/public/images/bg-login.jpg"
import reCapImg from "@/public/images/logo_48.png"
import LangCard from '@/components/Cards/LangCard';


export interface IAppProps {
}

export default function page(props: IAppProps) {
    const [showPass, setShowPass] = React.useState<boolean>(false)
    return (
        <main className="w-screen relative h-auto  bg-center   text-gray-200  bg-cover" style={{ backgroundImage: `url(${bgImagaLogin.src})` }}>
            <div className="lg:w-max w-[90%] py-10  h-max m-auto">
                <h1 className="text-[40px] text-center  font-extrabold w-full bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 from-red-600 to-orange-500 bg-clip-text text-transparent">
                    {/* <img src="https://picsum.photos/200" alt="" /> */}
                    HoatHinhOnline
                </h1>
                <div className="bg-[#2123249f] flex flex-col gap-5  rounded-lg p-6  lg:p-8">
                    <ul className="flex flex-col text-sm text-white font-semibold gap-2">
                        <li className="flex items-center justify-center cursor-pointer bg-[#2563eb] lg:px-16 rounded-lg p-4 w-full gap-2">
                            <RiGoogleFill size={22} />
                            <p>ĐĂNG NHẬP VỚI GOOGLE/GMAIL</p>
                        </li>
                        <li className="flex items-center justify-center cursor-pointer bg-[#1e40af] p-4 lg:px-16 rounded-lg  w-full gap-2">
                            <FaFacebook size={20} />
                            <p>ĐĂNG NHẬP VỚI FACEBOOK</p></li>
                        <li className="flex items-center justify-center cursor-pointer bg-white  p-4 lg:px-16 text-black rounded-lg  w-full gap-2">
                            <FaApple color="black" size={22} />
                            <p>ĐĂNG NHẬP VỚI APPLE</p></li>

                    </ul>
                    <div className="flex items-center  gap-2 before:bg-gray-400 before:h-[1px]  before:w-full after:w-full after:bg-gray-400 after:h-[1px]">

                        <p className="text-xs my-3 ">HOẶC</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="p-3  px-4 rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">  <input className="outline-none bg-transparent" type="text" name="" id="" placeholder="Tên tài khoản hoặc email" /></div>
                        <div className="p-3 flex justify-between px-4  rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]"><input className="outline-none bg-transparent" type={showPass ? "text" : "password"} name="" id="" placeholder="Mật khẩu của bạn" />
                            {!showPass ? <IoEyeOffOutline size={20} onClick={() => setShowPass(true)} /> : <IoEyeOutline size={20} onClick={() => setShowPass(false)} />}
                        </div>
                    </div>
                    <div className="bg-[#353536] text-white rounded-md px-3 w-max py-2 flex gap-2 items-center">
                        <input className="w-6 h-6 focus:[spin 3s linear infinite]" type="checkbox" name="" id="ismachine" />
                        <label className="text-sm" htmlFor="ismachine">Tôi không phải người máy</label>
                        <label htmlFor="ismachine" className="text-start flex flex-col items-end">
                            <span className="flex items-center flex-col">
                                <img className="w-8" src={reCapImg.src} alt="" />
                                <p className="text-[10px]">reCAPTCHA</p>
                            </span>
                            <p className="text-[8px]">
                                <span className="cursor-pointer hover:underline"> Bảo mật</span>-
                                <span className="cursor-pointer hover:underline"> Điều khoản</span>
                            </p>
                        </label>
                    </div>
                    <div>
                        <button className=" bg-[#c27324] hover:bg-[#9f662d] w-max p-3  text-sm font-bold rounded-lg">TIẾN HÀNH ĐĂNG NHẬP</button>
                        <LangCard />
                    </div>
                    <ul className="flex flex-col gap-3 text-sm">
                        <Link href="/auth/register"><li className="hover:text-[#c27324] cursor-pointer">Đăng ký tài khoản mới</li></Link>
                        <Link href="/auth/login/forget-password">  <li className="hover:text-[#c27324] cursor-pointer">Quên mật khẩu?</li></Link>
                    </ul>
                </div>
            </div>
        </main >
    );
}
