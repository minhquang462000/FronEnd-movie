import { CardItem } from "@/components/Cards/CardItem";

import * as React from "react";

import ListComments from "@/components/List/ListComments";
import ListEpisodes from "@/components/List/ListEpisodes";
import CardDescription from "@/components/Cards/CardDescription";
import { BiCameraMovie } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";
import FindFast from "@/components/Cards/FindFast";
import MainLayout from "@/layouts/main";

export default function page() {
  return (
    <MainLayout>
      <main className="py-4 mb-5 rounded-b-lg w-screen text-gray-300 h-max bg-[#151d25] lg:w-[1140px] px-5 mx-auto">
        <CardItem />
        <div className="bg-[#0f171e] text-white font-medium flex justify-between my-2 text-sm rounded-md p-3">
          <button className="flex bg-gradient-to-r  from-yellow-500 to-red-600  p-2 px-3 lg:px-4 lg:text-lg rounded-lg w-max items-center gap-2">
            <BiCameraMovie />
            Xem Phim
          </button>
          <button className="flex bg-gradient-to-r  from-red-600 to-yellow-500 p-2 px-3 lg:px-4 lg:text-lg rounded-lg w-max  items-center gap-2">
            <RiUserFollowLine />
            Theo Dõi
          </button>
        </div>
        <FindFast />
        <ListEpisodes />
        <CardDescription />
        <ListComments />
      </main>
    </MainLayout>
  );
}
