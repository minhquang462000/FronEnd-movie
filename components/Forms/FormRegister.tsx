'use client'
import Link from "next/link";
import * as React from "react";
import { FaApple, FaFacebook } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RiGoogleFill } from "react-icons/ri";
import bgImagaLogin from "@/public/images/bg-login.jpg";
import reCapImg from "@/public/images/logo_48.png";
import Image from "next/image";
export interface IFormRegisterProps {
}

export default function FormRegister(props: IFormRegisterProps) {
    const [showPass, setShowPass] = React.useState<boolean>(false);
    const [showPassReverse, setShowPassReverse] = React.useState<boolean>(false);
    return (
        <div className="lg:w-max w-[90%] py-10  h-max m-auto">
            <h3 className="text-[40px] text-center  font-extrabold w-full bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 from-red-600 to-orange-500 bg-clip-text text-transparent">
                {/* <img src="https://picsum.photos/200" alt="" /> */}
                HoatHinhOnline
            </h3>
            <div className="bg-[#2123249f] flex flex-col gap-5  rounded-lg p-6  lg:p-8">
                <ul className="flex flex-col text-sm text-white font-semibold gap-2">
                    <li className="flex items-center cursor-pointer justify-center bg-[#2563eb] p-4 lg:px-16 rounded-lg  w-full gap-2">
                        <RiGoogleFill size={22} />
                        <p>ĐĂNG KÝ VỚI GOOGLE/GMAIL</p>
                    </li>
                    <li className="flex items-center cursor-pointer justify-center bg-[#1e40af] lg:px-16 rounded-lg p-4 w-full gap-2">
                        <FaFacebook size={20} />
                        <p>ĐĂNG KÝ VỚI FACEBOOK</p>
                    </li>
                    <li className="flex items-center cursor-pointer justify-center bg-white  p-4 lg:px-16 text-black rounded-lg w-full gap-2">
                        <FaApple color="black" size={22} />
                        <p>ĐĂNG KÝ VỚI APPLE</p>
                    </li>
                </ul>
                <div className="flex items-center  gap-2 before:bg-gray-400 before:h-[1px]  before:w-full after:w-full after:bg-gray-400 after:h-[1px]">
                    <p className="text-xs my-3 ">HOẶC</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="p-3  px-4 rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">
                        {" "}
                        <input
                            className="outline-none bg-transparent"
                            type="text"
                            name=""
                            id=""
                            placeholder="Địa chỉ enmail đang sử dụng"
                        />
                    </div>
                    <div className="p-3  rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">
                        {" "}
                        <input
                            className="outline-none bg-transparent"
                            type="text"
                            name=""
                            id=""
                            placeholder="Tên tài khoản / nickname"
                        />
                    </div>
                    <p className="text-xs mb-4">
                        Tối đa 30 ký tự, chỉ chấp nhận a-z,A-Z,0-9,dấu gạch dưới
                    </p>
                    <div className="p-3 flex justify-between px-4  rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">
                        <input
                            className="outline-none bg-transparent"
                            type={showPass ? "text" : "password"}
                            name=""
                            id=""
                            placeholder="Mật khẩu của bạn"
                        />
                        {!showPass ? (
                            <IoEyeOffOutline size={20} onClick={() => setShowPass(true)} />
                        ) : (
                            <IoEyeOutline size={20} onClick={() => setShowPass(false)} />
                        )}
                    </div>
                    <div className="p-3 flex justify-between px-4  rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">
                        <input
                            className="outline-none bg-transparent"
                            type={showPassReverse ? "text" : "password"}
                            name=""
                            id=""
                            placeholder="Nhập lại mật khẩu của bạn"
                        />
                        {!showPassReverse ? (
                            <IoEyeOffOutline
                                size={20}
                                onClick={() => setShowPassReverse(true)}
                            />
                        ) : (
                            <IoEyeOutline
                                size={20}
                                onClick={() => setShowPassReverse(false)}
                            />
                        )}
                    </div>
                </div>
                <div className="bg-[#353536] text-white rounded-md px-3 w-full lg:w-max py-2 flex gap-2 items-center">
                    <input
                        className="w-6 h-6 focus:[spin 3s linear infinite]"
                        type="checkbox"
                        name=""
                        id="ismachine"
                    />
                    <label className="text-sm" htmlFor="ismachine">
                        Tôi không phải người máy
                    </label>
                    <label
                        htmlFor="ismachine"
                        className="text-start flex flex-col items-end"
                    >
                        <span className="flex items-center flex-col">
                            <Image className="w-8" src={reCapImg} priority={true} alt="" />
                            <p className="text-[10px]">reCAPTCHA</p>
                        </span>
                    </label>
                </div>
                <button className=" bg-[#c27324] hover:bg-[#9f662d] w-max p-3  text-sm font-bold rounded-lg">
                    TẠO TÀI KHOẢN MỚI
                </button>
                <ul className="flex flex-col gap-3 text-sm">
                    <li className="text-xs lg:w-[320px] font-bold">
                        Khi tiến hành đăng ký và sử dụng dịch vụ của {"HoathinhOnline"},
                        mặc định bạn đã đồng ý với mọi điều khoản dịch vụ của chúng tôi.
                    </li>
                    <Link href="/auth/login">
                        <li className="hover:text-[#c27324] cursor-pointer">
                            Đi đến trang đăng nhập
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
