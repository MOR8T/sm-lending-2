"use client";
import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { mainPCards, newsCards } from "@/constants/main-page/cards";
import MainPCards from "@/ui/main-page/cards/MainPCards";
import NewsCards from "@/ui/main-page/cards/NewsCards";
import CurrencyRate from "@/ui/main-page/currency-rate/CurrencyRate";
import { useTranslations } from "next-intl";
import infoBanner from "@/../public/images/banners/bank_info_banner.svg";
import { homePageBanner } from "@/constants/main-page/home-page";
import BlueBanner from "@/components/banner/BlueBanner";
import CalculateCredit from "@/ui/main-page/calculateCredit/CalculateCredit";

export default function HomePage() {
  const t = useTranslations("");

  return (
    <div className="">
      <BlueBanner items={homePageBanner} />
      <SectionTitle className="container">
        {t("HomePage.popularProducts")}
      </SectionTitle>
      <MainPCards cards={mainPCards} />
      <SectionTitle className="container md:my-[16px] my-[16px]">
        {t("HomePage.exchangeRate")}
      </SectionTitle>
      <CurrencyRate />
      <SectionTitle className="container">
        {t("HomePage.calculateCredit")}
      </SectionTitle>
      <CalculateCredit />

      <InfoNavigationBanner
        title={t("HomePage.infoBanner.title")}
        description={t("HomePage.infoBanner.description")}
        href=""
        img={infoBanner}
        linkText={t("HomePage.infoBanner.button")}
      />
      <SectionTitle className="container">{t("HomePage.news")}</SectionTitle>
      <NewsCards cards={newsCards} />
    </div>
  );
}
