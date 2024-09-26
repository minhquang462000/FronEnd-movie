
import Link from "next/link";
import * as React from "react";

import bgImagaLogin from "@/public/images/bg-login.jpg";
import reCapImg from "@/public/images/logo_48.png";
import ForgetPWForm from "@/components/Forms/ForgetPwForm";

export default function page() {
  return (
    <main
      className="w-full relative min-h-screen  bg-center  text-gray-200   bg-cover"
      style={{ backgroundImage: `url(${bgImagaLogin.src})` }}
    >
      <div className="lg:w-max w-[90%]  py-10  h-max m-auto">
        <h3 className="text-[40px] text-center  font-extrabold w-full bg-gradient-to-r mx-auto lg:m-0 lg:col-span-2 from-red-600 to-orange-500 bg-clip-text text-transparent">
          {/* <img src="https://picsum.photos/200" alt="" /> */}
          HoatHinhOnline
        </h3>
        <ForgetPWForm />
      </div>
    </main>
  );
}
