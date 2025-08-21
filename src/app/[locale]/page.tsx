"use client";
import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { mainPCards, newsCards } from "@/constants/main-page/cards";
import MainPCards from "@/ui/main-page/cards/MainPCards";
import NewsCards from "@/ui/main-page/cards/NewsCards";
import CurrencyRate from "@/ui/main-page/currency-rate/CurrencyRate";
import { useTranslations } from "next-intl";
import infoBanner from "@/../public/images/banners/bank_info_banner.svg";

export default function HomePage() {
  const t = useTranslations("");

  return (
    <div className="container">
      <SectionTitle>{t("HomePage.popularProducts")}</SectionTitle>
      <MainPCards cards={mainPCards} />
      <SectionTitle>{t("HomePage.exchangeRate")}</SectionTitle>
      <CurrencyRate />
      <SectionTitle>{t("HomePage.calculateCredit")}</SectionTitle>

      <InfoNavigationBanner
        title={t("HomePage.infoBanner.title")}
        description={t("HomePage.infoBanner.description")}
        href=""
        img={infoBanner}
        linkText={t("HomePage.infoBanner.button")}
      />
      <SectionTitle>{t("HomePage.news")}</SectionTitle>
      <NewsCards cards={newsCards} />
    </div>
  );
}
