"use client";
import Banner from "@/components/banner/Banner";
import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import {
  personalCards1,
  items,
  personalServiceItems,
} from "@/constants/main-page/home-page";
import СardsRow from "@/ui/business/СardsRow";
import ServiceCards from "@/ui/main-page/serviceCards/ServiceCards";
import bannerImg from "@/../public/icons/info_banner_faq.svg";
import { useTranslations } from "next-intl";
import CurrencyRate from "@/ui/main-page/currency-rate/CurrencyRate";

export default function Personal() {
  const t = useTranslations("HomePage");

  return (
    <div className="mt-[50px]">
      <Banner items={items} />
      <div className="md:mt-[100px] mt-[80px]">
        <СardsRow cards={personalCards1} translation="personalCards" />
      </div>
      <div className="mt-[100px]">
        <ServiceCards items={personalServiceItems} />
      </div>
      <div>
        <CurrencyRate />
      </div>
      <div className="mt-[100px]">
        <InfoNavigationBanner
          title={t("infoBanner.title")}
          description={t("infoBanner.description")}
          href="/"
          img={bannerImg}
          linkText={t("infoBanner.link")}
        />
      </div>
    </div>
  );
}
