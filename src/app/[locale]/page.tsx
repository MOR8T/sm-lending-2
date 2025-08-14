"use client";
import Banner from "@/components/banner/Banner";
import { personalCards1, items } from "@/constants/main-page/home-page";
import СardsRow from "@/ui/business/СardsRow";

export default function HomePage() {
  return (
    <div>
      <Banner items={items} />
      <div className="md:mt-[100px] mt-[80px]">
        <СardsRow cards={personalCards1} translation="personalCards" />
      </div>
    </div>
  );
}
