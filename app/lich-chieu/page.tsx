"use client";
import ChangePage from "@/components/ChangePage/ChangePage";
import ListShowtime from "@/components/List/ListShowtime";
import MainLayout from "@/layouts/main";
import * as React from "react";

export interface IAppProps { }

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="lg:w-[1140px] py-4 mb-5 rounded-b-lg grid grid-cols-1 gap-10 bg-[#151d25] px-4 h-max m-auto">
        <ListShowtime />
        <ListShowtime />
        <ListShowtime />
        <ListShowtime />
        <ListShowtime />
        <ListShowtime />
        <ListShowtime />
      </main>
    </MainLayout>
  );
}
