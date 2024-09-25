
import SliderMain from "@/components/slides/SliderMain";

import MainLayout from "@/layouts/main";
import ChangePage from "@/components/ChangePage/ChangePage";
import HomeRenderPage from "@/components/Home/HomeRenderPage";
export default function Home() {
  
  return (
    <MainLayout>
      <main className="w-full mb-5 rounded-b-lg  lg:w-[1140px] h-max  flex flex-col p-4 bg-[#151d25]  mx-auto ">
        <SliderMain />
        <HomeRenderPage />
        <ChangePage />
      </main>
    </MainLayout>
  );
}
