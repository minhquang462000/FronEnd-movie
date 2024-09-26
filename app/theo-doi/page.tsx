
import ChangePage from "@/components/ChangePage/ChangePage";
import ListFollow from "@/components/List/ListFollow";
import MainLayout from "@/layouts/main";
import * as React from "react";

export interface IAppProps { }

export default function page(props: IAppProps) {
    return (
        <MainLayout>
            <main className="lg:w-[1140px] py-4 mb-5 rounded-b-lg bg-[#151d25] px-4 h-max m-auto">
                <ListFollow />
                <ChangePage />
            </main>
        </MainLayout>
    );
}
