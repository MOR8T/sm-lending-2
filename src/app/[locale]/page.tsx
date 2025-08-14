"use client";
import Banner from "@/components/banner/Banner";
import {
  personalCards1,
  items,
  personalServiceItems,
} from "@/constants/main-page/home-page";
import СardsRow from "@/ui/business/СardsRow";
import ServiceCards from "@/ui/main-page/serviceCards/ServiceCards";

export default function HomePage() {
  return (
    <div>
      <Banner items={items} />
      <div className="md:mt-[100px] mt-[80px]">
        <СardsRow cards={personalCards1} translation="personalCards" />
      </div>
      <div className="mt-[100px]">
        <ServiceCards items={personalServiceItems} />
      </div>
    </div>
  );
}
