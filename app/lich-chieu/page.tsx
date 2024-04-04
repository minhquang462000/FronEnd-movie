"use client";
import ChangePage from "@/components/ChangePage/ChangePage";
import ListShowtime from "@/components/List/ListShowtime";
import MainLayout from "@/layouts/main";
import * as React from "react";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="lg:w-[1140px] py-4 mb-5 rounded-b-lg bg-[#17222c] px-4 h-max m-auto">
        <ListShowtime />
        <ChangePage />
      </main>
    </MainLayout>
  );
}
