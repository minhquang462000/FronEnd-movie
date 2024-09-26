import * as React from "react";
import CardMain from "../Cards/CardMain";
import Link from "next/link";


interface IListCardMainProps {
  title:String
}
export default function ListCardMain(props: IListCardMainProps) {
  const listPrd = [];
  for (let i = 0; i < 20; i++) {
    listPrd.push(<Link href={"/phim/ten-phim"}><CardMain /></Link>)
  }
  return (
    <section className=" w-full  ">
      <h3 className="text-ld font-bold bg-gradient-to-r  pb-1   from-orange-500 to-red-600 bg-clip-text text-transparent">
        {props.title.toUpperCase()}
      </h3>
      <div className="h-[2px] w-[125px]   bg-gradient-to-r from-orange-500 to-red-600 "></div>
      <div className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {listPrd}
      </div>
    </section>
  );
}
