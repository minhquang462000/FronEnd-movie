import Link from "next/link";
import * as React from "react";

import bgImagaLogin from "@/public/images/bg-login.jpg";
import reCapImg from "@/public/images/logo_48.png";
import Image from "next/image";
export interface IForgetPWFormProps {
}

export default function ForgetPWForm (props: IForgetPWFormProps) {
  return (
    <div className="bg-[#2123249f] flex flex-col gap-5  rounded-lg p-6  lg:p-8">
          <p className="lg:w-[320px]">
            Vui lòng nhập chính xác email hoặc tên tài khoản vào khung bên dưới.
            Chúng tôi sẽ gửi email để hướng dẫn bạn đổi mật khẩu mới cho tài
            khoản.
          </p>
          <div className="p-3 lg:w-[320px]  px-4 rounded-lg outline-none border-none ring-offset-2 ring-offset-transparent focus:ring-1 bg-[#353536]">
            <input
              className="outline-none bg-transparent"
              type="text"
              name=""
              id=""
              placeholder="Tên tài khoản hoặc email"
            />
          </div>
          <div className="bg-[#353536] lg:w-[320px] text-white justify-between rounded-md px-3 py-2 flex gap-2 items-center">
            <div className="flex items-center gap-3">
              {" "}
              <input
                className="w-5 h-5 focus:[spin 3s linear infinite]"
                type="checkbox"
                name=""
                id="ismachine"
              />
              <label className="text-sm" htmlFor="ismachine">
                Tôi không phải người máy
              </label>
            </div>
            <label
              htmlFor="ismachine"
              className="text-end justify-end  flex flex-col items-end"
            >
              <span className="flex items-center flex-col">
                <Image priority={true} className="w-8" src={reCapImg} alt="" />
                <p className="text-[10px]">reCAPTCHA</p>
              </span>
            </label>
          </div>
          <button className=" bg-[#c27324] hover:bg-[#9f662d] w-full p-3  text-sm font-bold rounded-lg">
            GỬI YÊU CẦU TẠO MẬT KHẨU MỚI
          </button>
          <ul className="flex flex-col gap-3 text-sm">
            <Link href="/auth/register">
              <li className="hover:text-[#c27324] cursor-pointer">
                Đăng ký tài khoản mới
              </li>
            </Link>
            <Link href="/auth/login">
              <li className="hover:text-[#c27324] cursor-pointer">
                Quay lại form đăng nhập
              </li>
            </Link>
          </ul>
        </div>
  );
}
