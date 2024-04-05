"use client";
import ChangePage from "@/components/ChangePage/ChangePage";
import ListCardMain from "@/components/List/ListCardMain";
import ListFollow from "@/components/List/ListFollow";
import ListHistory from "@/components/List/ListHistory";
import UserRankings from "@/components/List/UserRankings";
import MainLayout from "@/layouts/main";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface IAppProps {}

export default function page(props: IAppProps) {
  const pathName = usePathname();
  const renderByTab = React.useCallback(() => {
    switch (pathName) {
      case "/lich-su":
        return <ListHistory />;
      case "/theo-doi":
        return <ListFollow />;
      default:
        return <ListCardMain />;
    }
  }, [pathName]);
  return (
    <MainLayout>
      <main className="lg:w-[1140px] py-4 mb-5 rounded-b-lg bg-[#151d25] px-4 h-max m-auto">
        {renderByTab()}
        <ChangePage />
      </main>
    </MainLayout>
  );
}
